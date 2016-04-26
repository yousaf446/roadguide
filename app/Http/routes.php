<?php

/*
|--------------------------------------------------------------------------
| Routes File
|--------------------------------------------------------------------------
|
| Here is where you will register all of the routes in an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/



// Backend Route


Route::get('zameenScrape/{type}', 'zameenController@getContent');

// FrontEnd Route

Route::get('/search', function () {
    return view('index');
});

Route::post('place/add', 'PlaceController@addPlace');
Route::get('area', 'AreaController@getAreaCity');
Route::put('area/update', 'AreaController@updateArea');
Route::get('area/fix', 'AreaController@fixArea');

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| This route group applies the "web" middleware group to every route
| it contains. The "web" middleware group is defined in your HTTP
| kernel and includes session state, CSRF protection, and more.
|
*/

Route::group(['middleware' => ['web']], function () {
    //
});
