<!doctype html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    @vite('resources/css/app.css')
    @viteReactRefresh
    @vite(['resources/sass/app.scss', 'resources/js/app.js'])
    <link rel="icon" type="image/x-icon" href="/images/logo.png">

    <link rel="stylesheet" href="{{ asset('css/style.css')}}">
    <link rel="stylesheet" href="{{ asset('css/index.css')}}">

    <link rel="stylesheet" href="https://unpkg.com/animate.css@4.1.1/animate.css" />
    <link rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&amp;display=swap"
      data-tag="font" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Kanit">
    <title>Chatify</title>

    <style>
        * {
            box-sizing: border-box;
        }
    </style>
    <link rel="stylesheet" href="{{ asset('css/all.main.css') }}">
</head>

<body>


    <div id="root"></div>


</body>

</html>
