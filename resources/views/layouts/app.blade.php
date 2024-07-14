<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <!-- Metatags -->
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="csrf-token" content="{{ csrf_token() }}" />
        <title>@yield('title')</title>

        <!-- Google Fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
        />

        <!-- Chart.js -->
        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

        <!-- Font Awesome -->
        <script
            src="https://kit.fontawesome.com/80916011c5.js"
            crossorigin="anonymous"
        ></script>

        <!-- CSS -->
        @vite('resources/css/app.css')
    </head>
    <body>
        <div class="w-full flex min-h-screen bg-[#FAFAFA]">
            @include('partials.sidebar')
            <div class="flex flex-col justify-start items-start w-full h-full">
                @include('partials.header') @yield('content') @yield('scripts')
            </div>
        </div>
    </body>
</html>
