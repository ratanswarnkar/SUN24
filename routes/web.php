<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SolarController;



Route::get('/', [SolarController::class, 'index']);
Route::get('/about', [SolarController::class, 'about']);
Route::get('/solar_for_home', [SolarController::class, 'saleForHome']);
Route::get('solar_for_business', [SolarController::class, 'saleForBusiness']);
Route::get('/contact_us', [SolarController::class, 'contactUs']);
Route::get('/products', [SolarController::class, 'products']);



