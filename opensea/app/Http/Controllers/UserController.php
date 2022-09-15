<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Illuminate\Support\Facades\Auth;



class UserController extends Controller
{
    public function login(Request $request)
    {
        $user = User::whereEmail($request['email'])->whereHash(Hash::check('plain-text','password'))->first();
        Auth::login($user);
        return new UserResource($user);
    }
}
