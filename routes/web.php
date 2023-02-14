<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\CommandController;

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

Route::inertia('/', 'home')->name('home');

Route::get('/login', [AuthController::class, 'login'])->name('login');
Route::get('/login/callback', [AuthController::class, 'callback'])->name('login.callback');

Route::middleware('auth')->group(function () {
    Route::inertia('/dashboard', 'dashboard')->name('dashboard');
    Route::resource('/users', UserController::class)->only(['index', 'show']);
    Route::resource('/dashboard', DashboardController::class)->only(['index']);
    Route::resource('/commands', CommandController::class)->only(['update']);
    Route::get('/logout', [AuthController::class, 'logout'])->name('logout');
});