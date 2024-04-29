<?php

use App\Events\chat;
use App\Models\User;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/




Route::get('sockets/serve', function () {
    Artisan::call('websockets:serve');
    return "<h1>run</h1>";
});

Route::get('/{any}', function () {
    return view('welcome');
})->where('any', '.*');



