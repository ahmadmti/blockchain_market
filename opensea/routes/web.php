<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Web3LoginController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});


// User Auth Routes
Route::get('/web3' , [Web3LoginController::class , 'message']);
Route::get('/web3-login-verify' , [Web3LoginController::class , 'varify']);



