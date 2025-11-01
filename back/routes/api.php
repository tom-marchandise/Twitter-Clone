<?php

use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;


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

/*Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});*/


Route::post('/signup', [UserController::class, 'signup']);
Route::post('/login', [UserController::class, 'signin']);
Route::get('/predHtag/{element}', [\App\Http\Controllers\ControllerDisplayTweets::class, 'getPredHtag']);
Route::post('/postLike', [\App\Http\Controllers\ControllerPostTweet::class, 'postLike']);
Route::post('/postTweet', [\App\Http\Controllers\ControllerPostTweet::class, 'postTweet']);
Route::post('/Follow', [\App\Http\Controllers\ControllerFollow::class, 'Follow']);
Route::get('/getTweets/{id}', [\App\Http\Controllers\ControllerDisplayTweets::class, 'getTweets']);
Route::post('/postCom{id}', [\App\Http\Controllers\ControllerPostTweet::class, 'postCom']);
Route::get('/getComs{id}', [\App\Http\Controllers\ControllerDisplayTweets::class, 'getComs']);
Route::get('/getTweetId{id}', [\App\Http\Controllers\ControllerDisplayTweets::class, 'getTweetId']);
Route::post('/changeprofileimg{id}', [\App\Http\Controllers\UserController::class, 'setProfile']);
Route::get('/getUser/{username}', [UserController::class, 'getUser']);
Route::get('/getHashtagTweets/{hashtag}', [\App\Http\Controllers\ControllerDisplayTweets::class, 'getHashtagTweets']);
Route::post('/getUsers', [\App\Http\Controllers\UserController::class, 'getUsers']);

