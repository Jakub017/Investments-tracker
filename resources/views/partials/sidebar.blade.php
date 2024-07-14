<div class="w-64 min-w-64 shadow-sm bg-white">
    <div class="flex flex-col gap-2 items-start justify-center w-full h-fit">
        <h1 class="text-2xl font-sans p-6 px-8">Logo</h1>
        <a
            href="{{ route('dashboard') }}"
            class="text-base p-4 px-8 w-full text-yellow-950 font-medium relative"
            ><i class="fa-solid fa-house text-yellow-300 text-base mr-2"></i>
            Pulpit
            <span
                class="after:content-[''] after:absolute after:w-1 after:h-3/4 after:bg-yellow-300 after:rounded-xl after:top-1/2 after:translate-y-[-50%] after:right-0"
            ></span
        ></a>
        <a
            href="{{ route('dashboard') }}"
            class="text-base p-4 px-8 w-full text-gray-400 font-medium relative"
            ><i class="fa-solid fa-ring text-gray-400 text-base mr-2"></i>
            Złoto
            <span
                class="after:content-[''] after:hidden after:absolute after:w-1 after:h-3/4 after:bg-yellow-300 after:top-1/2 after:translate-y-[-50%] after:right-0"
            ></span
        ></a>
        <a
            href="{{ route('dashboard') }}"
            class="text-base p-4 px-8 w-full text-gray-400 font-medium relative"
            ><i class="fa-solid fa-coins text-gray-400 text-base mr-2"></i>
            Srebro
            <span
                class="after:content-[''] after:hidden after:absolute after:w-1 after:h-3/4 after:bg-yellow-300 after:top-1/2 after:translate-y-[-50%] after:right-0"
            ></span
        ></a>
        <a
            href="{{ route('dashboard') }}"
            class="text-base p-4 px-8 w-full text-gray-400 font-medium relative"
            ><i class="fa-brands fa-bitcoin text-gray-400 text-base mr-2"></i>
            Kryptowaluty
            <span
                class="after:content-[''] after:hidden after:absolute after:w-1 after:h-3/4 after:bg-yellow-300 after:top-1/2 after:translate-y-[-50%] after:right-0"
            ></span
        ></a>
        <a
            href="{{ route('dashboard') }}"
            class="text-base p-4 px-8 w-full text-gray-400 font-medium relative"
            ><i class="fa-solid fa-piggy-bank text-gray-400 text-base mr-2"></i>
            Oszczędności
            <span
                class="after:content-[''] after:hidden after:absolute after:w-1 after:h-3/4 after:bg-yellow-300 after:top-1/2 after:translate-y-[-50%] after:right-0"
            ></span
        ></a>
        <a
            href="{{ route('dashboard') }}"
            class="text-base p-4 px-8 w-full text-gray-400 font-medium relative"
            ><i class="fa-solid fa-money-bill-wave text-gray-400 text-base mr-2""></i>
            Gotówka
            <span
                class="after:content-[''] after:hidden after:absolute after:w-1 after:h-3/4 after:bg-yellow-300 after:top-1/2 after:translate-y-[-50%] after:right-0"
            ></span
        ></a>
        <div class="bg-slate-50 rounded-md p-3 pt-12 w-10/12 mx-auto mt-12 mb-6 flex flex-col justify-center items-center relative">
            <img src="{{ asset('img/premium.png') }}" class="w-9/12 absolute top-[-37%] left-1/2 translate-x-[-50%]">
            <p class="text-sm font-normal text-slate-500 text-center mb-4">Odblokuj zaawansowane narzędzia i monitoruj swoje inwestycje lepiej!</p>
            <a href="#" class="bg-white text-sm text-black rounded-md p-2 font-semibold block w-fit border-gray-200 border-2">Odblokuj premium</a>
        </div>
    </div>
</div>
