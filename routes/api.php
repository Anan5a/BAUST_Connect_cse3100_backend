<?php

use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Shared\AddressController;
use App\Http\Controllers\Shared\DepartmentController;
use App\Http\Controllers\Student\StudentController;
use Illuminate\Support\Facades\Route;

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

Route::get('/csrf',function (){
    return \Illuminate\Support\Facades\Response::json(['csrf'=>csrf_token()]);
});

Route::resource('address', AddressController::class);
Route::resource('department', DepartmentController::class);
Route::resource('student', StudentController::class);
Route::resource('admin', AdminController::class);
Route::post('student/login', 'App\Http\Controllers\Student\StudentController@login');
Route::post('student/logout', 'App\Http\Controllers\Student\StudentController@logout');


