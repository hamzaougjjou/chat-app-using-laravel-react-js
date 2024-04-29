<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ChatController;
use App\Http\Controllers\FriendsController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Broadcast::routes(['middleware' => ['auth:sanctum']]);



//auth urls
Route::controller(AuthController::class)->group(function () {
    Route::post('login', 'login');
    Route::post('register', 'register');
    Route::group(
        ['middleware' => 'auth:api'],
        function () {
            Route::post('logout', 'logout');
            Route::post('login/refresh', 'refresh');
            Route::get('profile/info', 'profileInfo');
            Route::put('login/last/update', 'setLastLogin');
            Route::put('profile/password/change', 'changePassword');
        }
    );
});


Route::controller(UserController::class)->group(function () {
    Route::get('users', 'index');
});

Route::controller(FriendsController::class)->group(function () {
    Route::get('/friends', 'index');
    Route::post('/friends/request/send', 'sendRequest');
    Route::delete('/friends/{id}/request/delete', 'destroy');
    Route::put('/friends/{id}/request/accept', 'acceptRequest');
});

Route::controller(MessageController::class)->group(function () {
    Route::get('/messages/{user_id}', 'index');
    Route::post('/messages/{reciever_id}/send', 'store');
});

Route::controller(ChatController::class)->group(function () {
    Route::get('/conversations', 'index');
});


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
