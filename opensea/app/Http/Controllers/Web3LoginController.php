<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use kornrunner\Keccak;
use Elliptic\EC;
use Session ;
use App\Models\User;
use Illuminate\Support\Facades\Auth;


class Web3LoginController extends Controller
{

       public function message(Request $request): string
    {
        $nonce = Str::random();
        $message = "Sign this message to confirm you own this wallet address. This action will not cost any gas fees.\n\nNonce: " . $nonce;

        // Session::put('sign_message', $message);
        return $message;
    }

    public function varify(Request $request): string
    {
        $sign = $request['session'];
        $result = $this->verifySignature($sign , $request['signature'], $request['address']);
        // If $result is true, perform additional logic like logging the user in, or by creating an account if one doesn't exist based on the Ethereum address
        $data['hash'] = $request['address'];
        $data['token'] = User::token();
        $user = User::updateOrCreate(['hash' => $request['address']]  , $data ); 
        Auth::login($user);
        return $user ;
    }

    protected function verifySignature(string $message, string $signature, string $address): bool
    {
        $hash = Keccak::hash(sprintf("\x19Ethereum Signed Message:\n%s%s", strlen($message), $message), 256);
        $sign = [
            'r' => substr($signature, 2, 64),
            's' => substr($signature, 66, 64),
        ];
        $recid = ord(hex2bin(substr($signature, 130, 2))) - 27;

        if ($recid != ($recid & 1)) {
            return false;
        }

        $pubkey = (new EC('secp256k1'))->recoverPubKey($hash, $sign, $recid);
        $derived_address = '0x' . substr(Keccak::hash(substr(hex2bin($pubkey->encode('hex')), 1), 256), 24);

        return (Str::lower($address) === $derived_address);
    }
    
    public function logout(Request $request)
    {
        $data['token'] = NULL ;
        $user = User::whereHash($request['hash'])->first()->update($data);
        Auth::logout();
        return response()->json(['status' => 'success' , 'message' => 'user logout']);
    }
}
