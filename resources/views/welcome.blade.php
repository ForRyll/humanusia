<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" type="image/png" href="{{ asset('images/logo.png') }}">
    <title>Humanusia - Simplify HR. Empower Your People.</title>

    @vite(['resources/css/app.css', 'resources/js/app.tsx'])

    <!-- Google Font: Plus Jakarta Sans -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
</head>
<body class="bg-[#F4F5F7] text-black antialiased overflow-x-hidden">

    {{-- NAVBAR BLADE --}}
    @include('partials.navbar')

    {{-- WADAH TEMPAT REACT RENDER SELURUH SECTION --}}
    <div id="react-app"></div>

    {{-- FOOTER BLADE --}}
    @include('partials.footer')

</body>
</html>
