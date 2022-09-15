<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Web3LoginController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Auth;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

    // MetaMash UserAuth Routes
    Route::controller(Web3LoginController::class)->group(function(){
        Route::get('/web3-login-message', 'message');
        Route::post('/web3-login-verify','varify');
        Route::post('/logout','logout');
    });

    // Admin Login
    Route::post('login' , [UserController::class , 'login']);