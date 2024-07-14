<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class DashboardController extends Controller
{
    public function dashboard()
    {
        $api_key = 'fc61a92078afe99601d338d5';
        $crypto_api_key = 'CG-2D6RHzYncHYWTaFDgdBTJXVR';

        $dollar = Http::get('https://v6.exchangerate-api.com/v6/'. $api_key .'/pair/USD/PLN');
        $euro = Http::get('https://v6.exchangerate-api.com/v6/'. $api_key .'/pair/EUR/PLN');
        $pound = Http::get('https://v6.exchangerate-api.com/v6/'. $api_key .'/pair/GBP/PLN');
        $canadian_dollar = Http::get('https://v6.exchangerate-api.com/v6/'. $api_key .'/pair/CAD/PLN');

        $trending_coins = Http::get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=pln&order=price_change_percentage_24h&per_page=4')->json();


        return view('dashboard', ['dollar' => $dollar, 'euro' => $euro, 'pound' => $pound, 'canadian_dollar' => $canadian_dollar, 'trending_coins' => $trending_coins]);   
    }
}
