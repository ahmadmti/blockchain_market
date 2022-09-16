<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\LoginRequest;



class UserController extends Controller
{
    public function login(LoginRequest $request)
    {
        $validated = $request->validated();
        $data['token'] = User::token();
        $user = User::whereEmail($request['email'])->whereHash(Hash::check('plain-text',$request['password']))->first();
        $user->update($data);
        return new UserResource($user);
    }
}
