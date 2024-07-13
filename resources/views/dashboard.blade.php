@extends('layouts.app') @section('title', 'Pulpit') @section('content')
<div class="bg-[#FAFAFA] w-full h-full p-6">
    <div class="flex flex-wrap gap-6">
        <div class="flex flex-col gap-5 bg-white p-4 rounded-lg w-64 shadow-sm">
            <div class="flex justify-between items-center w-full">
                <div class="flex flex-col gap-1">
                    <h4 class="text-sm text-slate-400 font-normal">Złoto</h4>
                    <h2 class="text-black text-lg font-medium">9507,27 zł</h2>
                </div>
                <div
                    class="w-12 h-12 bg-yellow-300 flex justify-center items-center rounded-full"
                >
                    <i class="fa-solid fa-ring text-white text-xl"></i>
                </div>
            </div>
            <p class="text-sm text-slate-400">
                <span class="text-green-500"
                    ><i class="fa-solid fa-arrow-trend-up"></i> +14,98%
                </span>
                <span class="text-xs"> / miesiąc</span>
            </p>
        </div>
        <div class="flex flex-col gap-5 bg-white p-4 rounded-xl w-64 shadow-sm">
            <div class="flex justify-between items-center w-full">
                <div class="flex flex-col gap-1">
                    <h4 class="text-sm text-slate-400 font-normal">Srebro</h4>
                    <h2 class="text-black text-lg font-medium">18201,83 zł</h2>
                </div>
                <div
                    class="w-12 h-12 bg-blue-500 flex justify-center items-center rounded-full"
                >
                    <i class="fa-solid fa-coins text-white text-xl"></i>
                </div>
            </div>
            <p class="text-sm text-slate-400">
                <span class="text-green-500"
                    ><i class="fa-solid fa-arrow-trend-up"></i> +21,37%
                </span>
                <span class="text-xs"> / miesiąc</span>
            </p>
        </div>
        <div class="flex flex-col gap-5 bg-white p-4 rounded-xl w-64 shadow-sm">
            <div class="flex justify-between items-center w-full">
                <div class="flex flex-col gap-1">
                    <h4 class="text-sm text-slate-400 font-normal">
                        Kryptowaluty
                    </h4>
                    <h2 class="text-black text-lg font-medium">189,56 zł</h2>
                </div>
                <div
                    class="w-12 h-12 bg-purple-500 flex justify-center items-center rounded-full"
                >
                    <i class="fa-brands fa-bitcoin text-white text-2xl"></i>
                </div>
            </div>
            <p class="text-sm text-slate-400">
                <span class="text-red-500"
                    ><i class="fa-solid fa-arrow-trend-down"></i> -17,88%
                </span>
                <span class="text-xs"> / miesiąc</span>
            </p>
        </div>
        <div class="flex flex-col gap-5 bg-white p-4 rounded-xl w-64 shadow-sm">
            <div class="flex justify-between items-center w-full">
                <div class="flex flex-col gap-1">
                    <h4 class="text-base text-slate-400 font-normal">
                        Oszczędności
                    </h4>
                    <h2 class="text-black text-lg font-medium">5000,00 zł</h2>
                </div>
                <div
                    class="w-12 h-12 bg-green-500 flex justify-center items-center rounded-full"
                >
                    <i class="fa-solid fa-piggy-bank text-white text-xl"></i>
                </div>
            </div>
            <p class="text-sm text-slate-400">
                <span class="text-green-500"
                    ><i class="fa-solid fa-arrow-trend-up"></i> +25,00%
                </span>
                <span class="text-xs"> / miesiąc</span>
            </p>
        </div>
    </div>
</div>
@endsection
