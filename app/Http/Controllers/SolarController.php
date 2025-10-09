<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SolarController extends Controller
{
    //
    public function index(){
        return view('welcome');
    }
    public function about(){
        return view('about');
    }
    public function saleForHome(){
        return view('solar_for_home');
    }
    public function saleForBusiness(){
        return view('solar_for_business');
    }
    public function contactUs(){
        return view('contact_us');
    }
}