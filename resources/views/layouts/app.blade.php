<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <!-- Metatags -->
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="csrf-token" content="{{ csrf_token() }}" />

        <!-- CSS -->
        @vite('resources/css/app.css')
    </head>
    <body>
        @include('partials.header') @yield('content')
        @include('partials.footer')
    </body>
</html>
