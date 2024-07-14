@extends('layouts.app') @section('title', 'Pulpit') @section('content')
<div
    class="max-w-screen-2xl w-full h-full px-6 pb-6 flex flex-col items-start gap-6 rounded-lg"
>
    <div class="bg-white h-fit rounded-lg w-full p-6 shadow-sm">
        <div class="flex flex-col gap-1 mb-4">
            <h4 class="text-sm text-slate-400 font-normal">Suma inwestycji</h4>
            <h2 class="text-black text-lg font-medium">
                28817,94 zł
                <span class="inline ml-2 text-xs text-green-500"
                    ><i class="fa-solid fa-arrow-trend-up"></i> -17,88%
                </span>
            </h2>
        </div>

        <canvas class="w-full" width="4" height="1" id="main-chart"></canvas>
    </div>

    <div class="flex flex-wrap gap-6 w-full">
        <div
            class="flex flex-col gap-5 bg-white p-6 rounded-lg basis-full md:basis-[calc(50%-1.25rem)] lg:basis-[calc(25%-1.15rem)] shadow-sm"
        >
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
        <div
            class="flex flex-col gap-5 bg-white p-6 rounded-xl basis-full md:basis-[calc(50%-1.25rem)] lg:basis-[calc(25%-1.15rem)] shadow-sm"
        >
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
        <div
            class="flex flex-col gap-5 bg-white p-6 rounded-xl basis-full md:basis-[calc(50%-1.25rem)] lg:basis-[calc(25%-1.15rem)] shadow-sm"
        >
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
        <div
            class="flex flex-col gap-5 bg-white p-6 rounded-xl basis-full md:basis-[calc(50%-1.25rem)] lg:basis-[calc(25%-1.15rem)] shadow-sm"
        >
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

    <div class="flex w-full flex-wrap gap-6">
        <div
            class="flex basis-full md:basis-[calc(33%-1.2rem)] flex-col gap-5 bg-white p-6 rounded-lg w-full shadow-sm"
        >
            <div class="flex justify-between items-center">
                <h2 class="text-black text-lg font-medium">
                    Trendujące kryptowaluty
                </h2>
                <select
                    class="border-none bg-gray-100 rounded-lg"
                    name=""
                    id=""
                >
                    <option value="day">Dzień</option>
                    <option value="week">Tydzień</option>
                    <option value="month">Miesiąc</option>
                    <option value="year">Rok</option>
                </select>
            </div>
            <div class="flex flex-col gap-8">
                @foreach($trending_coins as $coin)
                <div class="flex items-center gap-4">
                    <img
                        src="{{ $coin['image'] }}"
                        class="w-12 h-12 rounded-full"
                        alt=""
                    />
                    <div class="flex flex-col">
                        <h2 class="text-black text-lg font-medium">
                            {{ $coin["name"] }}
                        </h2>
                        <h4
                            class="text-sm text-slate-400 font-normal uppercase"
                        >
                            {{ $coin["symbol"] }}
                        </h4>
                    </div>
                    <div class="flex flex-col items-end ml-auto">
                        <h2 class="text-black text-base font-medium">
                            {{ $coin["current_price"] }} zł
                        </h2>
                        @if($coin['price_change_percentage_24h'] > 0)
                        <h4 class="text-sm text-green-500 font-normal">
                            <i class="fa-solid fa-arrow-trend-up"></i>
                            {{ $coin["price_change_percentage_24h"] }}%
                        </h4>
                        @else
                        <h4 class="text-sm text-red-500 font-normal">
                            <i class="fa-solid fa-arrow-trend-down"></i>
                            {{ $coin["price_change_percentage_24h"] }}%
                        </h4>
                        @endif
                    </div>
                </div>
                @endforeach
            </div>
        </div>
        <div
            class="flex basis-full md:basis-[calc(33%-1.2rem)] flex-col gap-5 bg-white p-6 rounded-lg w-full shadow-sm"
        >
            <div class="">
                <h2 class="text-black text-lg text-left font-medium mb-4">
                    Dywersyfikacja
                </h2>
                <div class="h-72 flex justify-center items-center">
                    <canvas id="pie-chart"></canvas>
                </div>
            </div>
        </div>
        <div
            class="flex basis-full md:basis-[calc(33%-1.2rem)] flex-col gap-5 bg-white p-6 rounded-lg w-full shadow-sm"
        >
            <div class="flex justify-between items-center">
                <h2 class="text-black text-lg font-medium">Kursy walut</h2>
                <select
                    class="border-none bg-gray-100 rounded-lg"
                    name=""
                    id=""
                >
                    <option value="day">Dzień</option>
                    <option value="week">Tydzień</option>
                    <option value="month">Miesiąc</option>
                    <option value="year">Rok</option>
                </select>
            </div>
            <div class="flex flex-col gap-8">
                <div class="flex items-center gap-4">
                    <img
                        src="{{ asset('img/usa.png') }}"
                        class="w-12 h-12"
                        alt=""
                    />
                    <div class="flex flex-col">
                        <h2 class="text-black text-lg font-medium">
                            Dolar amerykański
                        </h2>
                        <h4 class="text-sm text-slate-400 font-normal">USD</h4>
                    </div>
                    <div class="flex flex-col items-end ml-auto">
                        <h2 class="text-black text-base font-medium">
                            {{ $dollar["conversion_rate"] }} zł
                        </h2>
                        <h4 class="text-sm text-red-500 font-normal">
                            <i class="fa-solid fa-arrow-trend-down"></i> -0,40%
                        </h4>
                    </div>
                </div>
                <div class="flex items-center gap-4">
                    <img
                        src="{{ asset('img/euro.png') }}"
                        class="w-12 h-12"
                        alt=""
                    />
                    <div class="flex flex-col">
                        <h2 class="text-black text-lg font-medium">Euro</h2>
                        <h4 class="text-sm text-slate-400 font-normal">EUR</h4>
                    </div>
                    <div class="flex flex-col items-end ml-auto">
                        <h2 class="text-black text-base font-medium">
                            {{ $euro["conversion_rate"] }} zł
                        </h2>
                        <h4 class="text-sm text-red-500 font-normal">
                            <i class="fa-solid fa-arrow-trend-down"></i> -0,04%
                        </h4>
                    </div>
                </div>
                <div class="flex items-center gap-4">
                    <img
                        src="{{ asset('img/canada.png') }}"
                        class="w-12 h-12"
                        alt=""
                    />
                    <div class="flex flex-col">
                        <h2 class="text-black text-lg font-medium">
                            Dolar kanadyjski
                        </h2>
                        <h4 class="text-sm text-slate-400 font-normal">CAD</h4>
                    </div>
                    <div class="flex flex-col items-end ml-auto">
                        <h2 class="text-black text-base font-medium">
                            {{ $canadian_dollar["conversion_rate"] }} zł
                        </h2>
                        <h4 class="text-sm text-red-500 font-normal">
                            <i class="fa-solid fa-arrow-trend-down"></i> -0,28%
                        </h4>
                    </div>
                </div>
                <div class="flex items-center gap-4">
                    <img
                        src="{{ asset('img/uk.png') }}"
                        class="w-12 h-12"
                        alt=""
                    />
                    <div class="flex flex-col">
                        <h2 class="text-black text-lg font-medium">
                            Funt szterling
                        </h2>
                        <h4 class="text-sm text-slate-400 font-normal">GBP</h4>
                    </div>
                    <div class="flex flex-col items-end ml-auto">
                        <h2 class="text-black text-base font-medium">
                            {{ $pound["conversion_rate"] }} zł
                        </h2>
                        <h4 class="text-sm text-green-500 font-normal">
                            <i class="fa-solid fa-arrow-trend-up"></i> +0,15%
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection @section('scripts')
<script>
    const ctx = document.getElementById("main-chart");
    const pieChart = document.getElementById("pie-chart");
    new Chart(pieChart, {
        type: "pie",
        data: {
            labels: ["Złoto", "Srebro", "Kryptowaluty", "Oszczędności"],
            datasets: [
                {
                    label: "Dywersyfikacja",
                    data: [9507.27, 18201.83, 189.56, 5000.0],
                    backgroundColor: [
                        "#FDE046",
                        "#4299E1",
                        "#9F7AEA",
                        "#48BB78",
                    ],
                },
            ],
        },
        options: {
            plugins: {
                legend: {
                    position: "bottom",
                    labels: {
                        usePointStyle: true,
                    },
                },
            },
        },
    });
    new Chart(ctx, {
        type: "line",
        data: {
            labels: [
                "1 Lip",
                "5 Lip",
                "10 Lip",
                "15 Lip",
                "20 Lip",
                "25 Lip",
                "30 Lip",
            ],
            datasets: [
                {
                    label: "Złoto",
                    data: [
                        23500.0, 24000.0, 24500.0, 25420.31, 26000, 27812.21,
                        28817.94,
                    ],
                    borderWidth: 1,
                    borderColor: "#FDE046",
                    backgroundColor: "#FDE046",
                },
            ],
        },
        options: {
            plugins: {
                legend: {
                    display: false,
                },
            },
        },
    });
</script>
@endsection
