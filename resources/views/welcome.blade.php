<!doctype html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    @vite('resources/css/app.css')
    @viteReactRefresh
    @vite(['resources/sass/app.scss', 'resources/js/app.js'])

    <style>
        * {
            box-sizing: border-box;
        }
    </style>

    <link rel="stylesheet" href="{{ asset("css/all.main.css")}}">
</head>

<body>



    <div id="root"></div>


</body>

</html>
