<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>@yield('title')</title>

    <link rel="stylesheet" type="text/css" href="{{ vite_asset('resources/scss/main.scss') }}">
</head>
<body>

@yield('content')

<script src="{{ vite_asset('resources/ts/index.ts') }}"></script>
</body>
</html>
