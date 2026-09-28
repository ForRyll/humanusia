<!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" type="image/png" href="{{ asset('images/logo.png') }}">
    <title>Humanusia - Simplify HR. Empower Your People.</title>
    @vite(['resources/css/app.css', 'resources/js/app.js'])

    <!-- Google Font: Plus Jakarta Sans -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">

    <style>
        body {
            font-family: 'Plus Jakarta Sans', sans-serif;
        }
    </style>
</head>

<body class="bg-[#F4F5F7] text-black antialiased overflow-x-hidden">
    {{-- NAVBAR --}}
    @include('partials.navbar')
<div id="react-app"></div>
{{-- ==========================================
     HERO SECTION — HUMANUSIA
     ========================================== --}}

<section class="relative min-h-screen bg-[#f4f4f8] overflow-hidden">

    {{-- ==========================================
         BACKGROUND MERAH AREA KANAN
         ========================================== --}}
    <div
        class="absolute z-0
               top-0 right-0
               w-[39%] h-full
               bg-[#B70000]
               rounded-bl-[45px]
               hidden lg:block">
    </div>


    {{-- ==========================================
         MAIN CONTAINER
         ========================================== --}}
    <div
        class="relative z-10
               max-w-[1400px]
               min-h-screen
               mx-auto
               px-6 md:px-12
               flex items-center">

        {{-- ==========================================
             KIRI — TEXT CONTENT
             ========================================== --}}
        <div
            class="relative z-30
                   w-full lg:w-[55%]
                   pt-32 lg:pt-20
                   pb-16 lg:pb-20">

            {{-- MAIN HEADING --}}
            <h1
                class="text-[48px] sm:text-[56px] md:text-[64px] lg:text-[68px]
                       font-extrabold
                       text-black
                       leading-[1.03]
                       tracking-[-2.5px]
                       mb-7
                       max-w-[560px]">

                Simplify HR.<br>
                Empower<br>
                Your People.

            </h1>


            {{-- DESCRIPTION --}}
            <p
                class="text-gray-500
                       text-sm md:text-base
                       leading-[1.55]
                       mb-4
                       max-w-[540px]">

                Humanusia is an integrated HRIS platform designed to help
                businesses manage their people more efficiently, effectively,
                and systematically — from attendance, payroll, leave and
                permissions to employee management, all in one platform.

            </p>


            {{-- SUB DESCRIPTION --}}
            <p
                class="text-gray-500
                       text-xs md:text-sm
                       font-medium
                       mb-8">

                One system for HR. One experience for every employee.

            </p>


            {{-- ==========================================
                 BUTTONS
                 ========================================== --}}
            <div class="flex flex-wrap items-center gap-3">

                {{-- GET STARTED --}}
                <a
                    href="/register"
                    class="inline-flex items-center justify-center
                           px-5 py-3
                           min-w-[105px]
                           rounded-[5px]
                           bg-[#FF4646]
                           hover:bg-[#B70000]
                           text-white
                           text-[11px]
                           font-semibold
                           transition-all
                           duration-300
                           shadow-sm
                           hover:shadow-md">

                    Get Started

                </a>


                {{-- SCHEDULE DEMO --}}
                <a
                    href="/contact"
                    class="inline-flex items-center justify-center
                           px-5 py-3
                           min-w-[105px]
                           rounded-[5px]
                           bg-white
                           hover:bg-gray-50
                           text-gray-900
                           text-[11px]
                           font-semibold
                           transition-all
                           duration-300
                           shadow-sm">

                    Schedule a Demo

                </a>

            </div>

        </div>



{{-- ==========================================
     KANAN — VISUAL AREA (DESKTOP)
     ========================================== --}}
<div class="absolute z-20 hidden lg:block top-0 right-0 w-[50%] h-full">

    <div class="relative w-full h-full">

        {{-- ==========================================
             CARD 1 — KIRI ATAS
             ========================================== --}}
        <div
            class="absolute top-[18%] left-[8%]
                   w-[42%] h-[40%]
                   rounded-[24px]
                   bg-gradient-to-br from-white via-white to-[#b13b49]
                   shadow-lg
                   z-20
                   overflow-visible">

            {{-- FOTO WELCOME 2 --}}
            <img
                src="{{ asset('images/welcome2.png') }}"
                alt="Humanusia Workforce"
                class="absolute
                       w-[125%]
                       max-w-none
                       h-auto
                       left-[-5%]
                       top-[-8%]
                       object-contain
                       opacity-[0.92]
                       drop-shadow-[0_12px_20px_rgba(0,0,0,0.08)]
                       pointer-events-none
                       select-none
                       z-30"
            >
        </div>


        {{-- ==========================================
             CARD 2 — MERAH MUDA KIRI BAWAH
             ========================================== --}}
        <div
            class="absolute top-[60%] left-[1%]
                   w-[50%] h-[21%]
                   rounded-[24px]
                   bg-[#FF4646]
                   shadow-lg
                   overflow-hidden
                   z-20">

            <img
                src="{{ asset('images/welcome3.png') }}"
                alt="Humanusia Analytics"
                class="absolute inset-0
                       w-full h-full
                       object-cover
                       object-center
                       pointer-events-none
                       select-none"
            >
        </div>


        {{-- ==========================================
             CARD 3 — KANAN ATAS
             ========================================== --}}
        <div
            class="absolute top-[24%] left-[53%]
                   w-[43%] h-[40%]
                   rounded-[24px]
                   bg-gradient-to-br from-white via-white to-[#b13b49]
                   shadow-lg
                   z-20
                   overflow-visible">

            {{-- FOTO WELCOME 1 --}}
            <img
                src="{{ asset('images/welcome1.png') }}"
                alt="Humanusia Employee"
                class="absolute
                       w-[94%]
                       max-w-none
                       h-auto
                       right-[6.2%]
                       top-[-12.2%]
                       object-contain
                       drop-shadow-[0_12px_20px_rgba(0,0,0,0.08)]
                       pointer-events-none
                       select-none
                       z-30"
            >
        </div>


        {{-- ==========================================
             CARD 4 — KANAN BAWAH
             ========================================== --}}
        <div
            class="absolute top-[66%] left-[53%]
                   w-[48%] h-[23%]
                   rounded-[24px]
                   bg-white
                   shadow-lg
                   overflow-hidden
                   z-20">

            <img
                src="{{ asset('images/welcome4.png') }}"
                alt="Humanusia Workforce"
                class="absolute inset-0
                       w-full h-full
                       object-cover
                       object-center
                       pointer-events-none
                       select-none"
            >
        </div>

    </div>
</div>


{{-- ==========================================
     MOBILE VISUAL
     ========================================== --}}
<div class="lg:hidden absolute left-0 right-0 bottom-0 h-[330px] overflow-hidden bg-[#B70000]">

    {{-- MOBILE CARD 1 --}}
    <div
        class="absolute top-6 left-[6%]
               w-[40%] h-[150px]
               rounded-[18px]
               bg-gradient-to-br from-white via-white to-[#ffdfe3]
               shadow-lg
               overflow-visible
               z-20">

        <img
            src="{{ asset('images/welcome2.png') }}"
            alt="Humanusia Workforce"
            class="absolute
                   w-[125%]
                   max-w-none
                   h-auto
                   left-[-8%]
                   top-[-15%]
                   object-contain
                   opacity-90
                   pointer-events-none
                   select-none
                   z-30"
        >
    </div>


    {{-- MOBILE CARD 2 --}}
    <div
        class="absolute top-[155px] left-[10%]
               w-[48%] h-[105px]
               rounded-[18px]
               bg-[#FF4646]
               shadow-lg
               overflow-hidden
               z-20">

        <img
            src="{{ asset('images/welcome3.png') }}"
            alt="Humanusia Analytics"
            class="w-full h-full object-cover object-center
                   pointer-events-none select-none"
        >
    </div>


    {{-- MOBILE CARD 3 --}}
    <div
        class="absolute top-10 right-[6%]
               w-[40%] h-[180px]
               rounded-[18px]
               bg-gradient-to-br from-white via-white to-[#ffdfe3]
               shadow-lg
               overflow-visible
               z-20">

        <img
            src="{{ asset('images/welcome1.png') }}"
            alt="Humanusia Employee"
            class="absolute
                   w-[120%]
                   max-w-none
                   h-auto
                   right-[-8%]
                   top-[-5%]
                   object-contain
                   pointer-events-none
                   select-none
                   z-30"
        >
    </div>


    {{-- MOBILE CARD 4 --}}
    <div
        class="absolute top-[205px] right-[6%]
               w-[40%] h-[105px]
               rounded-[18px]
               bg-white
               shadow-lg
               overflow-hidden
               z-20">

        <img
            src="{{ asset('images/welcome4.png') }}"
            alt="Humanusia Workforce"
            class="w-full h-full object-cover object-center
                   pointer-events-none
                   select-none"
        >
    </div>

</div>

    </div>

</section>

        <!-- OUR CLIENTS & PARTNERS -->
    <section class="py-16 bg-white overflow-hidden">

        <!-- HEADER & TITLE -->
        <div class="text-center max-w-7xl mx-auto mb-12 px-6">
            <h4 class="text-3xl md:text-4xl font-semibold text-[#000000] mb-10 font-['Plus Jakarta Sans']">
                Over 10,000+ companies across various industries grow with Humanusia
            </h4>

            {{-- <!-- PARAGRAF DESKRIPSI TAMBAHAN -->
            <p class="text-sm md:text-base text-gray-600 leading-relaxed">
                From growing businesses to established organizations, we collaborate with clients and partners across
                diverse industries. By combining technology, creativity, and strategic thinking, we build solutions that
                address real business needs, create meaningful impact, and drive sustainable growth.
            </p> --}}
        </div>

        <div class="space-y-10">

            <!-- ROW 1 : KE KANAN -->
            <div class="marquee-wrapper">
                <div class="marquee marquee-right">

                    <!-- GROUP 1 -->
                    <div class="marquee-group">
                        <img src="{{ asset('images/bimbelio.jpeg') }}" alt="Bimbelio">
                        <img src="{{ asset('images/humanusia.jpeg') }}" alt="Humanusia">
                        <img src="{{ asset('images/soemitro.jpeg') }}" alt="Soemitro">
                        <img src="{{ asset('images/logo1.png') }}" alt="Logo 1">
                        <img src="{{ asset('images/logo3.jpeg') }}" alt="Logo 3">
                        <img src="{{ asset('images/slameticon.png') }}" alt="Slameticon">
                    </div>

                    <!-- GROUP 2 (DUPLIKAT UNTUK LOOPING) -->
                    <div class="marquee-group">
                        <img src="{{ asset('images/bimbelio.jpeg') }}" alt="Bimbelio">
                        <img src="{{ asset('images/humanusia.jpeg') }}" alt="Humanusia">
                        <img src="{{ asset('images/soemitro.jpeg') }}" alt="Soemitro">
                        <img src="{{ asset('images/logo1.png') }}" alt="Logo 1">
                        <img src="{{ asset('images/logo3.jpeg') }}" alt="Logo 3">
                        <img src="{{ asset('images/slameticon.png') }}" alt="Slameticon">
                    </div>

                    <!-- GROUP 3 (DUPLIKAT UNTUK LOOPING MULUS) -->
                    <div class="marquee-group">
                        <img src="{{ asset('images/bimbelio.jpeg') }}" alt="Bimbelio">
                        <img src="{{ asset('images/humanusia.jpeg') }}" alt="Humanusia">
                        <img src="{{ asset('images/soemitro.jpeg') }}" alt="Soemitro">
                        <img src="{{ asset('images/logo1.png') }}" alt="Logo 1">
                        <img src="{{ asset('images/logo3.jpeg') }}" alt="Logo 3">
                        <img src="{{ asset('images/slameticon.png') }}" alt="Slameticon">
                    </div>

                </div>
            </div>


            <!-- ROW 2 : KE KIRI -->
            <div class="marquee-wrapper">
                <div class="marquee marquee-left">

                    <!-- GROUP 1 -->
                    <div class="marquee-group">
                        <img src="{{ asset('images/slameticon.png') }}" alt="Slameticon">
                        <img src="{{ asset('images/logo3.jpeg') }}" alt="Logo 3">
                        <img src="{{ asset('images/logo1.png') }}" alt="Logo 1">
                        <img src="{{ asset('images/soemitro.jpeg') }}" alt="Soemitro">
                        <img src="{{ asset('images/humanusia.jpeg') }}" alt="Humanusia">
                        <img src="{{ asset('images/bimbelio.jpeg') }}" alt="Bimbelio">
                    </div>

                    <!-- GROUP 2 (DUPLIKAT UNTUK LOOPING) -->
                    <div class="marquee-group">
                        <img src="{{ asset('images/slameticon.png') }}" alt="Slameticon">
                        <img src="{{ asset('images/logo3.jpeg') }}" alt="Logo 3">
                        <img src="{{ asset('images/logo1.png') }}" alt="Logo 1">
                        <img src="{{ asset('images/soemitro.jpeg') }}" alt="Soemitro">
                        <img src="{{ asset('images/humanusia.jpeg') }}" alt="Humanusia">
                        <img src="{{ asset('images/bimbelio.jpeg') }}" alt="Bimbelio">
                    </div>

                    <!-- GROUP 3 (DUPLIKAT UNTUK LOOPING MULUS) -->
                    <div class="marquee-group">
                        <img src="{{ asset('images/slameticon.png') }}" alt="Slameticon">
                        <img src="{{ asset('images/logo3.jpeg') }}" alt="Logo 3">
                        <img src="{{ asset('images/logo1.png') }}" alt="Logo 1">
                        <img src="{{ asset('images/soemitro.jpeg') }}" alt="Soemitro">
                        <img src="{{ asset('images/humanusia.jpeg') }}" alt="Humanusia">
                        <img src="{{ asset('images/bimbelio.jpeg') }}" alt="Bimbelio">
                    </div>

                </div>
            </div>

        </div>
    </section>

    {{--- CSS Our Clients --}}


    <style>
        .marquee-wrapper {
            width: 100%;
            overflow: hidden;
            position: relative;
        }

        .marquee-wrapper::before,
        .marquee-wrapper::after {
            content: "";
            position: absolute;
            top: 0;
            width: 80px;
            height: 100%;
            z-index: 2;
            pointer-events: none;
        }

        .marquee-wrapper::before {
            left: 0;
            background: linear-gradient(to right, white, transparent);
        }

        .marquee-wrapper::after {
            right: 0;
            background: linear-gradient(to left, white, transparent);
        }

        .marquee {
            display: flex;
            width: max-content;
            will-change: transform;
        }

        .marquee-group {
            display: flex;
            align-items: center;
            gap: 80px;
            padding-right: 80px;
            flex-shrink: 0;
        }

        .marquee-group img {
            height: 75px;
            width: auto;
            max-width: 180px;
            object-fit: contain;
            flex-shrink: 0;
            transition: filter 0.3s ease;
        }

        .marquee-right {
            animation: continuousRight 25s linear infinite;
        }

        .marquee-left {
            animation: continuousLeft 25s linear infinite;
        }

        .marquee-wrapper:hover .marquee {
            animation-play-state: paused;
        }

        @keyframes continuousRight {
            0% {
                transform: translateX(calc(-100% / 3));
            }

            100% {
                transform: translateX(0%);
            }
        }

        @keyframes continuousLeft {
            0% {
                transform: translateX(0%);
            }

            100% {
                transform: translateX(calc(-100% / 3));
            }
        }

        @media (prefers-reduced-motion: reduce) {
            html {
                scroll-behavior: auto !important;
            }

            *,
            *::before,
            *::after {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
                scroll-behavior: auto !important;
            }
        }
    </style>

    <!-- ==========================================
         SECTION: PROBLEM & SOLUTION
         ========================================== -->
    <section class="py-16 md:py-24 bg-white">
        <div class="max-w-[1350px] mx-auto px-6 md:px-12">

            <!-- Label Kategori Atas -->
            <div class="flex items-center gap-3 mb-10 md:mb-14">
                <span class="w-1.5 h-6 bg-[#B70000] rounded-full inline-block"></span>
                <h2 class="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
                    Problem & Solution
                </h2>
            </div>

            <!-- Grid 2 Kolom (Gambar & Konten) -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                <!-- KIRI: BOX GAMBAR/ILLUSTRATION -->
                <div class="lg:col-span-6 w-full">
                    <div class="w-full aspect-[4/3] md:aspect-[1/1] max-h-[500px] rounded-3xl overflow-hidden flex items-center justify-center p-6">
                        <img src="{{ asset('images/humanfix.png') }}"
                             alt="Problem and Solution Illustration"
                             class="w-full h-full object-contain"
                             onerror="this.onerror=null; this.parentElement.innerHTML='<div class=\'text-gray-400 font-medium text-sm\'>[ Gambar Problem & Solution ]</div>';">
                    </div>
                </div>

                <!-- KANAN: PROBLEM & SOLUTION TEXT -->
                <div class="lg:col-span-6 space-y-10">

                    <!-- PROBLEM BLOCK -->
                    <div class="space-y-4">
                        <!-- Badge Problem -->
                        <span class="inline-block px-4 py-1.5 rounded-md bg-[#DCE6ED] text-[#2C3E50] text-xs font-semibold tracking-wide">
                            Problem
                        </span>

                        <!-- Judul Problem -->
                        <h3 class="text-3xl md:text-4xl font-extrabold text-black leading-snug tracking-tight">
                            HR Should Focus on<br class="hidden sm:inline">
                            People, Not Paperwork.
                        </h3>

                        <!-- Poin Problem -->
                        <ul class="space-y-3 pt-1 text-gray-600 text-sm md:text-base leading-relaxed">
                            <li class="flex items-start gap-3">
                                <span class="w-2 h-2 rounded-full bg-[#1A365D] mt-2 flex-shrink-0"></span>
                                <span>As businesses grow, managing people becomes increasingly complex. Humanusia helps HR simplify administrative processes and manage essential HR operations through one integrated system.</span>
                            </li>
                            <li class="flex items-start gap-3">
                                <span class="w-2 h-2 rounded-full bg-[#1A365D] mt-2 flex-shrink-0"></span>
                                <span>Less manual work. More time to focus on people.</span>
                            </li>
                        </ul>
                    </div>

                    <!-- SOLUTION BLOCK -->
                    <div class="space-y-3 pt-2">
                        <!-- Badge Solution -->
                        <span class="inline-block px-4 py-1.5 rounded-md bg-[#DCE6ED] text-[#2C3E50] text-xs font-semibold tracking-wide">
                            Solution
                        </span>

                        <!-- Judul Solution -->
                        <h3 class="text-3xl md:text-4xl font-extrabold text-black leading-snug tracking-tight">
                            Everything HR Needs.<br class="hidden sm:inline">
                            One Platform.
                        </h3>
                    </div>

                </div>

            </div>

        </div>
    </section>

<!-- ==========================================
     SECTION: FEATURES
     ========================================== -->
<section id="fitur" class="bg-white">

    <!-- LABEL HEADER SECTION -->
    <div class="max-w-[1400px] mx-auto px-6 md:px-12 pt-16 md:pt-24 pb-10 md:pb-14">
        <div class="flex items-center gap-3">
            <span class="w-1.5 h-6 bg-[#B70000] rounded-full inline-block"></span>

            <h2 class="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
                Features
            </h2>
        </div>
    </div>


    <!-- ==========================================
         1. MANAGE ATTENDANCE
         BACKGROUND: WHITE
         ========================================== -->
    <div class="w-full bg-white">

        <div class="max-w-[1450px] mx-auto px-6 md:px-12
                    py-14 md:py-20 lg:py-24
                    grid grid-cols-1 lg:grid-cols-12
                    gap-10 lg:gap-16
                    items-center">

            <!-- TEXT -->
            <div class="lg:col-span-6">

                <h3 class="text-3xl md:text-4xl lg:text-5xl
                           font-extrabold text-black
                           leading-tight tracking-tight
                           max-w-2xl">

                    1. Manage attendance with greater flexibility.

                </h3>

                <p class="mt-6 text-gray-600
                          text-sm md:text-base
                          leading-relaxed max-w-xl">

                    Humanusia supports different work models, including
                    on-site, remote, and hybrid work.

                </p>

                <ul class="mt-6 space-y-3
                           text-gray-700
                           text-sm md:text-base
                           font-medium">

                    <li class="flex items-center gap-3">
                        <span class="w-2.5 h-2.5 rounded-full
                                     bg-[#0066CC] flex-shrink-0"></span>
                        <span>Location-based attendance</span>
                    </li>

                    <li class="flex items-center gap-3">
                        <span class="w-2.5 h-2.5 rounded-full
                                     bg-[#0066CC] flex-shrink-0"></span>
                        <span>Office & branch location management</span>
                    </li>

                    <li class="flex items-center gap-3">
                        <span class="w-2.5 h-2.5 rounded-full
                                     bg-[#0066CC] flex-shrink-0"></span>
                        <span>Clock in & clock out</span>
                    </li>

                    <li class="flex items-center gap-3">
                        <span class="w-2.5 h-2.5 rounded-full
                                     bg-[#0066CC] flex-shrink-0"></span>
                        <span>Attendance monitoring</span>
                    </li>

                    <li class="flex items-center gap-3">
                        <span class="w-2.5 h-2.5 rounded-full
                                     bg-[#0066CC] flex-shrink-0"></span>
                        <span>Automated attendance records</span>
                    </li>

                </ul>

            </div>


            <!-- IMAGE -->
            <div class="lg:col-span-6 w-full">

                <div class="w-full
                            aspect-[4/3] md:aspect-[5/4]
                            bg-[#B70000]
                            overflow-hidden
                            flex items-center justify-center
                            p-6 md:p-8">

                    <img
                        src="{{ asset('images/humanfix.png') }}"
                        alt="Manage Attendance"
                        class="w-full h-full object-contain"
                        onerror="this.style.display='none';"
                    >

                </div>

            </div>

        </div>

    </div>


    <!-- ==========================================
         2. PAYROLL MANAGEMENT
         BACKGROUND: RED
         ========================================== -->
    <div class="w-full bg-[#B70000] text-white">

        <div class="max-w-[1450px] mx-auto px-6 md:px-12
                    py-14 md:py-20 lg:py-24
                    grid grid-cols-1 lg:grid-cols-12
                    gap-10 lg:gap-16
                    items-center">

            <!-- TEXT -->
            <div class="lg:col-span-6">

                <h3 class="text-3xl md:text-4xl lg:text-5xl
                           font-extrabold text-white
                           leading-tight tracking-tight
                           max-w-2xl">

                    2. Payroll Management

                </h3>

                <p class="mt-6 text-white/90
                          text-sm md:text-base
                          leading-relaxed max-w-xl">

                    Humanusia supports different work models, including
                    on-site, remote, and hybrid work.

                </p>

                <ul class="mt-6 space-y-3
                           text-white/95
                           text-sm md:text-base
                           font-medium">

                    <li class="flex items-center gap-3">
                        <span class="w-2.5 h-2.5 rounded-full
                                     bg-[#FFC107] flex-shrink-0"></span>
                        <span>Location-based attendance</span>
                    </li>

                    <li class="flex items-center gap-3">
                        <span class="w-2.5 h-2.5 rounded-full
                                     bg-[#FFC107] flex-shrink-0"></span>
                        <span>Office & branch location management</span>
                    </li>

                    <li class="flex items-center gap-3">
                        <span class="w-2.5 h-2.5 rounded-full
                                     bg-[#FFC107] flex-shrink-0"></span>
                        <span>Clock in & clock out</span>
                    </li>

                    <li class="flex items-center gap-3">
                        <span class="w-2.5 h-2.5 rounded-full
                                     bg-[#FFC107] flex-shrink-0"></span>
                        <span>Attendance monitoring</span>
                    </li>

                    <li class="flex items-center gap-3">
                        <span class="w-2.5 h-2.5 rounded-full
                                     bg-[#FFC107] flex-shrink-0"></span>
                        <span>Automated attendance records</span>
                    </li>

                </ul>

            </div>


            <!-- IMAGE -->
            <div class="lg:col-span-6 w-full">

                <div class="w-full
                            aspect-[4/3] md:aspect-[5/4]
                            bg-white
                            overflow-hidden
                            flex items-center justify-center
                            p-6 md:p-8">

                    <img
                        src="{{ asset('images/humanfix.png') }}"
                        alt="Payroll Management"
                        class="w-full h-full object-contain"
                        onerror="this.style.display='none';"
                    >

                </div>

            </div>

        </div>

    </div>


    <!-- ==========================================
         3. LEAVE & PERMISSION
         BACKGROUND: BLUE
         ========================================== -->
    <div class="w-full bg-[#004B8D] text-white">

        <div class="max-w-[1450px] mx-auto px-6 md:px-12
                    py-14 md:py-20 lg:py-24
                    grid grid-cols-1 lg:grid-cols-12
                    gap-10 lg:gap-16
                    items-center">

            <!-- TEXT -->
            <div class="lg:col-span-6">

                <h3 class="text-3xl md:text-4xl lg:text-5xl
                           font-extrabold text-white
                           leading-tight tracking-tight
                           max-w-2xl">

                    3. Leave & Permission

                </h3>

                <p class="mt-6 text-white/90
                          text-sm md:text-base
                          leading-relaxed max-w-xl">

                    Humanusia supports different work models, including
                    on-site, remote, and hybrid work.

                </p>

                <ul class="mt-6 space-y-3
                           text-white/95
                           text-sm md:text-base
                           font-medium">

                    <li class="flex items-center gap-3">
                        <span class="w-2.5 h-2.5 rounded-full
                                     bg-[#FF4646] flex-shrink-0"></span>
                        <span>Location-based attendance</span>
                    </li>

                    <li class="flex items-center gap-3">
                        <span class="w-2.5 h-2.5 rounded-full
                                     bg-[#FF4646] flex-shrink-0"></span>
                        <span>Office & branch location management</span>
                    </li>

                    <li class="flex items-center gap-3">
                        <span class="w-2.5 h-2.5 rounded-full
                                     bg-[#FF4646] flex-shrink-0"></span>
                        <span>Clock in & clock out</span>
                    </li>

                    <li class="flex items-center gap-3">
                        <span class="w-2.5 h-2.5 rounded-full
                                     bg-[#FF4646] flex-shrink-0"></span>
                        <span>Attendance monitoring</span>
                    </li>

                    <li class="flex items-center gap-3">
                        <span class="w-2.5 h-2.5 rounded-full
                                     bg-[#FF4646] flex-shrink-0"></span>
                        <span>Automated attendance records</span>
                    </li>

                </ul>

            </div>


            <!-- IMAGE -->
            <div class="lg:col-span-6 w-full">

                <div class="w-full
                            aspect-[4/3] md:aspect-[5/4]
                            bg-white
                            overflow-hidden
                            flex items-center justify-center
                            p-6 md:p-8">

                    <img
                        src="{{ asset('images/humanfix.png') }}"
                        alt="Leave & Permission"
                        class="w-full h-full object-contain"
                        onerror="this.style.display='none';"
                    >

                </div>

            </div>

        </div>

    </div>


    <!-- ==========================================
         4. EMPLOYEE MANAGEMENT
         BACKGROUND: WHITE
         ========================================== -->
    <div class="w-full bg-white">

        <div class="max-w-[1450px] mx-auto px-6 md:px-12
                    py-14 md:py-20 lg:py-24
                    grid grid-cols-1 lg:grid-cols-12
                    gap-10 lg:gap-16
                    items-center">

            <!-- TEXT -->
            <div class="lg:col-span-6">

                <h3 class="text-3xl md:text-4xl lg:text-5xl
                           font-extrabold text-black
                           leading-tight tracking-tight
                           max-w-2xl">

                    4. Employee Management

                </h3>

                <p class="mt-6 text-gray-600
                          text-sm md:text-base
                          leading-relaxed max-w-xl">

                    Humanusia supports different work models, including
                    on-site, remote, and hybrid work.

                </p>

                <ul class="mt-6 space-y-3
                           text-gray-700
                           text-sm md:text-base
                           font-medium">

                    <li class="flex items-center gap-3">
                        <span class="w-2.5 h-2.5 rounded-full
                                     bg-[#0066CC] flex-shrink-0"></span>
                        <span>Location-based attendance</span>
                    </li>

                    <li class="flex items-center gap-3">
                        <span class="w-2.5 h-2.5 rounded-full
                                     bg-[#0066CC] flex-shrink-0"></span>
                        <span>Office & branch location management</span>
                    </li>

                    <li class="flex items-center gap-3">
                        <span class="w-2.5 h-2.5 rounded-full
                                     bg-[#0066CC] flex-shrink-0"></span>
                        <span>Clock in & clock out</span>
                    </li>

                    <li class="flex items-center gap-3">
                        <span class="w-2.5 h-2.5 rounded-full
                                     bg-[#0066CC] flex-shrink-0"></span>
                        <span>Attendance monitoring</span>
                    </li>

                    <li class="flex items-center gap-3">
                        <span class="w-2.5 h-2.5 rounded-full
                                     bg-[#0066CC] flex-shrink-0"></span>
                        <span>Automated attendance records</span>
                    </li>

                </ul>

            </div>


            <!-- IMAGE -->
            <div class="lg:col-span-6 w-full">

                <div class="w-full
                            aspect-[4/3] md:aspect-[5/4]
                            bg-[#B70000]
                            overflow-hidden
                            flex items-center justify-center
                            p-6 md:p-8">

                    <img
                        src="{{ asset('images/humanfix.png') }}"
                        alt="Employee Management"
                        class="w-full h-full object-contain"
                        onerror="this.style.display='none';"
                    >

                </div>

            </div>

        </div>

    </div>

</section>

{{-- =========================================================
     SECTION: ONE SYSTEM
========================================================= --}}

<section id="one-system" class="py-20 md:py-28 bg-white">
    <div class="max-w-[1400px] mx-auto px-6 md:px-12">

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {{-- =================================================
                 KIRI: IMAGE / CARD
            ================================================== --}}
            <div class="w-full">
                <div
                    class="w-full aspect-[4/3] md:aspect-[1.35/1] bg-[#B70000] rounded-2xl overflow-hidden flex items-center justify-center p-8 md:p-10">

                    <img
                        src="{{ asset('images/humanfix.png') }}"
                        alt="Humanusia"
                        class="w-full h-full object-contain"
                    >

                </div>
            </div>


            {{-- =================================================
                 KANAN: CONTENT
            ================================================== --}}
            <div class="max-w-xl">

                {{-- Label --}}
                <div class="inline-flex items-center px-3 py-1.5 mb-5 rounded-md bg-[#DCEAF4]">
                    <span class="text-[11px] md:text-xs font-medium text-[#111827]">
                        One System. Multiple Locations.
                    </span>
                </div>


                {{-- Heading --}}
                <h2
                    class="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-black leading-[1.05] tracking-tight mb-4">
                    Manage Your Workforce<br class="hidden md:block">
                    Wherever They Work.
                </h2>


                {{-- Sub Heading --}}
                <p class="text-base md:text-lg text-gray-800 leading-relaxed mb-5">
                    Not every employee works from the same office.
                </p>


                {{-- Description --}}
                <p class="text-sm md:text-[15px] text-gray-600 leading-[1.55] max-w-lg">
                    Humanusia is designed for organizations with multiple offices,
                    branches, remote teams, and hybrid working environments.
                    HR can create and manage multiple work locations, define
                    attendance points, and monitor employees across different
                    locations — all from one platform.
                </p>

            </div>

        </div>

    </div>
</section>

{{-- =========================================================
     SECTION: ECOSYSTEM
========================================================= --}}

<section id="ecosystem" class="py-20 md:py-28 bg-white">
    <div class="max-w-[1480px] mx-auto px-6 md:px-12">

        {{-- =================================================
             HEADER
        ================================================== --}}
        <div class="text-center max-w-4xl mx-auto mb-10 md:mb-12">

            {{-- Label --}}
            <div class="inline-flex items-center px-4 py-1.5 mb-5 rounded-md bg-[#DCEAF4]">
                <span class="text-[11px] md:text-xs font-medium text-gray-800">
                    Ecosystem
                </span>
            </div>

            {{-- Heading --}}
            <h2
                class="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-black leading-tight tracking-tight mb-4">
                Web for HR. Mobile for Employees
            </h2>

            {{-- Description --}}
            <p class="text-sm md:text-base text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Humanusia is available through a Web Platform and mobile applications
                for iOS and Android, providing an integrated experience for HR,
                management, and employees.
            </p>

        </div>


        {{-- =================================================
             ECOSYSTEM CARDS
        ================================================== --}}
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">


            {{-- =================================================
                 1. HUMANUSIA WEB
            ================================================== --}}
            <div
                class="relative min-h-[430px] md:min-h-[470px] bg-[#C90000] rounded-2xl overflow-hidden text-white">

                {{-- CONTENT --}}
                <div class="relative z-20 w-full h-full p-8 md:p-10 lg:p-11">

                    {{-- Text --}}
                    <div class="relative z-30 w-[52%] md:w-[50%]">

                        <h3
                            class="text-2xl md:text-3xl lg:text-[27px] font-bold leading-tight mb-4">
                            Humanusia Web
                        </h3>

                        <p
                            class="text-sm md:text-[14px] leading-relaxed text-white/95 mb-4 max-w-[250px]">
                            Manage essential HR operations through one centralized dashboard
                        </p>

                        {{-- Features --}}
                        <ul class="space-y-1.5 text-sm md:text-[13px] text-white/95">

                            <li class="flex items-start gap-2">
                                <span class="mt-1.5 w-2 h-2 rounded-full bg-[#FFD21F] flex-shrink-0"></span>
                                <span>Attendance</span>
                            </li>

                            <li class="flex items-start gap-2">
                                <span class="mt-1.5 w-2 h-2 rounded-full bg-[#FFD21F] flex-shrink-0"></span>
                                <span>Leave & permissions</span>
                            </li>

                            <li class="flex items-start gap-2">
                                <span class="mt-1.5 w-2 h-2 rounded-full bg-[#FFD21F] flex-shrink-0"></span>
                                <span>Office & branch locations</span>
                            </li>

                            <li class="flex items-start gap-2">
                                <span class="mt-1.5 w-2 h-2 rounded-full bg-[#FFD21F] flex-shrink-0"></span>
                                <span>HR administration & monitoring</span>
                            </li>

                        </ul>

                    </div>


                    {{-- =================================================
                         WEB IMAGES
                         3 IMAGE OVERLAP
                    ================================================== --}}
                    <div
                        class="absolute right-[-10px] md:right-[0px] bottom-[-5px] md:bottom-[-15px] w-[55%] md:w-[53%] h-[90%]">

                        {{-- Image 1 - belakang --}}
                        <img
                            src="{{ asset('images/ecosystem1.png') }}"
                            alt="Humanusia Web Preview 1"
                            class="absolute w-[72%] h-auto object-contain right-[5%] top-[-10%] rotate-[-8deg] z-10"
                        >

                        {{-- Image 2 - tengah --}}
                        <img
                            src="{{ asset('images/ecosystem2.png') }}"
                            alt="Humanusia Web Preview 2"
                            class="absolute w-[68%] h-auto object-contain right-[12%] top-[14%] rotate-[6deg] z-20"
                        >

                        {{-- Image 3 - depan --}}
                        <img
                            src="{{ asset('images/ecosystem3.png') }}"
                            alt="Humanusia Web Preview 3"
                            class="absolute w-[70%] h-auto object-contain right-[0%] top-[36%] rotate-[1deg] z-30"
                        >

                    </div>

                </div>

            </div>



            {{-- =================================================
                 2. HUMANUSIA MOBILE
            ================================================== --}}
            <div
                class="relative min-h-[430px] md:min-h-[470px] bg-[#C90000] rounded-2xl overflow-hidden text-white">

                {{-- CONTENT --}}
                <div class="relative z-20 w-full h-full p-8 md:p-10 lg:p-11">

                    {{-- Text --}}
                    <div class="relative z-30 w-[52%] md:w-[50%]">

                        <h3
                            class="text-2xl md:text-3xl lg:text-[27px] font-bold leading-tight mb-4">
                            Humanusia<br class="hidden md:block">
                            Mobile
                        </h3>

                        <p
                            class="text-sm md:text-[14px] leading-relaxed text-white/95 mb-4 max-w-[220px]">
                            Employees can access essential HR services directly from their smartphones.
                        </p>

                        {{-- Features --}}
                        <ul class="space-y-1.5 text-sm md:text-[13px] text-white/95">

                            <li class="flex items-start gap-2">
                                <span class="mt-1.5 w-2 h-2 rounded-full bg-[#FFD21F] flex-shrink-0"></span>
                                <span>Clock in / Clock out</span>
                            </li>

                            <li class="flex items-start gap-2">
                                <span class="mt-1.5 w-2 h-2 rounded-full bg-[#FFD21F] flex-shrink-0"></span>
                                <span>Submit leave requests</span>
                            </li>

                            <li class="flex items-start gap-2">
                                <span class="mt-1.5 w-2 h-2 rounded-full bg-[#FFD21F] flex-shrink-0"></span>
                                <span>Submit permission requests</span>
                            </li>

                            <li class="flex items-start gap-2">
                                <span class="mt-1.5 w-2 h-2 rounded-full bg-[#FFD21F] flex-shrink-0"></span>
                                <span>Check attendance</span>
                            </li>

                            <li class="flex items-start gap-2">
                                <span class="mt-1.5 w-2 h-2 rounded-full bg-[#FFD21F] flex-shrink-0"></span>
                                <span>Access employee information</span>
                            </li>

                        </ul>

                    </div>


                    {{-- =================================================
                         MOBILE IMAGES
                         2 IMAGE OVERLAP
                    ================================================== --}}
                    <div
                        class="absolute right-[-5px] md:right-[0px] bottom-0 w-[52%] md:w-[50%] h-[90%]">

                        {{-- Background / Image 4 --}}
                        <div
                            class="absolute right-[16%] top-[1%] w-[65%] h-[90%] bg-[#FF4646] rounded-lg opacity-80 z-10">
                        </div>

                        {{-- Mobile Image 4 --}}
                        <img
                            src="{{ asset('images/ecosystem4.png') }}"
                            alt="Humanusia Mobile Preview 1"
                            class="absolute w-[58%] h-auto object-contain right-[25%] top-[-5%] rotate-[-4deg] z-20"
                        >

                        {{-- Mobile Image 5 --}}
                        <img
                            src="{{ asset('images/ecosystem5.png') }}"
                            alt="Humanusia Mobile Preview 2"
                            class="absolute w-[55%] h-auto object-contain right-[10%] bottom-[3%] rotate-[3deg] z-30"
                        >

                    </div>

                </div>

            </div>

        </div>


        {{-- =================================================
             BOTTOM TEXT
        ================================================== --}}
        <div class="text-center mt-10 md:mt-12">

            <p class="text-base md:text-lg lg:text-xl text-gray-900 font-medium">
                HR manages. Employees engage. Everything stays connected.
            </p>

        </div>

    </div>
</section>

{{-- =========================================================
     SECTION: AS YOUR WORKFORCE
========================================================= --}}
<section class="w-full bg-[#C90000] py-20 md:py-28 lg:py-32 px-6 md:px-10 overflow-hidden">

    <div class="max-w-[1200px] mx-auto">

        {{-- MAIN HEADING --}}
        <div class="max-w-[1100px] mx-auto text-center mb-10 md:mb-14 lg:mb-16">

            <h2
                class="text-white font-extrabold
                       text-3xl sm:text-4xl md:text-5xl lg:text-[52px]
                       leading-[1.08] tracking-tight">
                As your workforce and locations grow,<br class="hidden md:block">
                Humanusia helps your organization maintain<br class="hidden md:block">
                a structured and connected HR system.
            </h2>

        </div>


        {{-- 4 BENEFIT MENU --}}
        <div class="max-w-[1000px] mx-auto space-y-3 md:space-y-4">

            {{-- MENU 1 --}}
            <div
                class="w-full
                       min-h-[72px] md:min-h-[82px] lg:min-h-[90px]
                       bg-white
                       rounded-2xl md:rounded-[18px]
                       flex items-center justify-center
                       px-6 md:px-10
                       shadow-sm">

                <p
                    class="text-black
                           text-base md:text-lg lg:text-[21px]
                           font-medium
                           text-center
                           leading-tight">
                    One centralized source of truth for your workforce.
                </p>

            </div>


            {{-- MENU 2 --}}
            <div
                class="w-full
                       min-h-[72px] md:min-h-[82px] lg:min-h-[90px]
                       bg-white
                       rounded-2xl md:rounded-[18px]
                       flex items-center justify-center
                       px-6 md:px-10
                       shadow-sm">

                <p
                    class="text-black
                           text-base md:text-lg lg:text-[21px]
                           font-medium
                           text-center
                           leading-tight">
                    Built for different work models and locations.
                </p>

            </div>


            {{-- MENU 3 --}}
            <div
                class="w-full
                       min-h-[72px] md:min-h-[82px] lg:min-h-[90px]
                       bg-white
                       rounded-2xl md:rounded-[18px]
                       flex items-center justify-center
                       px-6 md:px-10
                       shadow-sm">

                <p
                    class="text-black
                           text-base md:text-lg lg:text-[21px]
                           font-medium
                           text-center
                           leading-tight">
                    Reduce repetitive administrative work.
                </p>

            </div>


            {{-- MENU 4 --}}
            <div
                class="w-full
                       min-h-[72px] md:min-h-[82px] lg:min-h-[90px]
                       bg-white
                       rounded-2xl md:rounded-[18px]
                       flex items-center justify-center
                       px-6 md:px-10
                       shadow-sm">

                <p
                    class="text-black
                           text-base md:text-lg lg:text-[21px]
                           font-medium
                           text-center
                           leading-tight">
                    Scale alongside your organization.
                </p>

            </div>

        </div>

    </div>

</section>

{{-- =========================================================
     SECTION: FROM HR ADMINISTRATION TO PEOPLE STRATEGY
========================================================= --}}
<section id="people-strategy" class="w-full bg-white">

    {{-- BAGIAN ATAS --}}
    <div class="max-w-[1100px] mx-auto px-6 md:px-10 pt-16 md:pt-20 lg:pt-24 pb-8 md:pb-10">

        {{-- HEADING --}}
        <div class="text-center">

            <h2
                class="text-3xl sm:text-4xl md:text-5xl lg:text-[52px]
                       font-extrabold
                       leading-[1.05]
                       tracking-tight
                       text-black">
                From HR Administration to<br class="hidden sm:block">
                People Strategy.
            </h2>

            {{-- DESCRIPTION --}}
            <p
                class="max-w-[720px] mx-auto
                       mt-4 md:mt-5
                       text-sm md:text-base
                       text-gray-600
                       leading-relaxed">
                Humanusia helps reduce administrative workload, giving HR more time to focus on
                strategic priorities.
            </p>

        </div>


        {{-- CATEGORY BUTTONS --}}
        <div
            class="flex flex-wrap
                   items-center justify-center
                   gap-2 md:gap-3
                   mt-6 md:mt-8">

            {{-- PEOPLE DEVELOPMENT --}}
            <span
                class="inline-flex items-center justify-center
                       px-4 md:px-5
                       py-2 md:py-2.5
                       rounded-md
                       bg-[#D13D3D]
                       text-white
                       text-xs md:text-sm
                       font-medium
                       leading-none">
                People Development
            </span>

            {{-- PERFORMANCE --}}
            <span
                class="inline-flex items-center justify-center
                       px-4 md:px-5
                       py-2 md:py-2.5
                       rounded-md
                       bg-[#D13D3D]
                       text-white
                       text-xs md:text-sm
                       font-medium
                       leading-none">
                Performance
            </span>

            {{-- EMPLOYEE ENGAGEMENT --}}
            <span
                class="inline-flex items-center justify-center
                       px-4 md:px-5
                       py-2 md:py-2.5
                       rounded-md
                       bg-[#D13D3D]
                       text-white
                       text-xs md:text-sm
                       font-medium
                       leading-none">
                Employee Engagement
            </span>

            {{-- ORGANIZATIONAL GROWTH --}}
            <span
                class="inline-flex items-center justify-center
                       px-4 md:px-5
                       py-2 md:py-2.5
                       rounded-md
                       bg-[#D13D3D]
                       text-white
                       text-xs md:text-sm
                       font-medium
                       leading-none">
                Organizational Growth
            </span>

        </div>

    </div>


    {{-- QUOTE / BOTTOM BANNER --}}
    <div
        class="w-full
               bg-[#F8E5E5]
               px-6 md:px-10
               py-7 md:py-9 lg:py-10">

        <div class="max-w-[900px] mx-auto text-center">

            <p
                class="text-base sm:text-lg md:text-xl lg:text-[22px]
                       font-medium
                       leading-relaxed
                       text-gray-900">
                “Because HR is not just about managing data. It's about
                <br class="hidden md:block">
                managing and empowering people”
            </p>

        </div>

    </div>

</section>

{{-- =========================================================
     NEWS SECTION
========================================================= --}}
<section class="py-20 md:py-24 bg-white px-6 md:px-10 lg:px-16 overflow-hidden">

    <div class="max-w-[1380px] mx-auto">

        {{-- ==========================================
             HEADER
        =========================================== --}}
        <div class="mb-7 md:mb-8">

            <div class="flex items-center gap-2">

                <div class="flex items-center gap-3 mb-10 md:mb-14">
                <span class="w-1.5 h-6 bg-[#B70000] rounded-full inline-block"></span>
                <h2 class="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
                   News
                </h2>

            </div>

            </div>

        </div>


        {{-- ==========================================
             NEWS GRID
        =========================================== --}}
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[6px] md:gap-[6px]">


            {{-- ==========================================
                 NEWS CARD 1
            =========================================== --}}
            <a
                href="{{ route('news') }}"
                class="news-card group relative block
                       h-[220px] md:h-[230px]
                       rounded-[5px]
                       overflow-hidden
                       bg-gray-100">

                {{-- IMAGE --}}
                <img
                    src="{{ asset('images/news.png') }}"
                    alt="Memaksimalkan Efisiensi SDM dengan Humanusia"
                    class="absolute inset-0
                           w-full h-full
                           object-cover
                           transition-transform duration-700
                           ease-out
                           group-hover:scale-105">

                {{-- DARK / RED OVERLAY --}}
                <div
                    class="absolute inset-0
                           bg-gradient-to-t
                           from-[#B70000]
                           via-[#B70000]/70
                           to-transparent
                           opacity-[0.92]">
                </div>

                {{-- ARROW --}}
                <span
                    class="absolute top-2 right-2
                           w-[18px] h-[18px]
                           rounded-full
                           bg-[#B70000]
                           text-white
                           flex items-center justify-center
                           text-[10px]
                           z-20
                           transition-transform duration-300
                           group-hover:translate-x-0.5
                           group-hover:-translate-y-0.5">
                    ↗
                </span>

                {{-- CONTENT --}}
                <div
                    class="absolute left-3 right-3 bottom-3
                           text-white z-10">

                    <h3
                        class="text-[11px] md:text-[12px]
                               font-semibold
                               leading-[1.15]
                               line-clamp-2
                               mb-1">
                        Memaksimalkan Efisiensi SDM dengan Humanusia yang Unggul dengan Fi...
                    </h3>

                    <p
                        class="text-[7px] md:text-[8px]
                               leading-[1.35]
                               text-white/85
                               line-clamp-3">
                        Humanusia membantu organisasi mengelola sumber daya manusia
                        secara lebih terstruktur, efisien, dan terintegrasi dalam satu sistem.
                    </p>

                </div>

            </a>


            {{-- ==========================================
                 NEWS CARD 2
            =========================================== --}}
            <a
                href="{{ route('news') }}"
                class="news-card group relative block
                       h-[220px] md:h-[230px]
                       rounded-[5px]
                       overflow-hidden
                       bg-gray-100">

                <img
                    src="{{ asset('images/news.png') }}"
                    alt="Transformasi Digital dalam Manajemen SDM"
                    class="absolute inset-0
                           w-full h-full
                           object-cover
                           transition-transform duration-700
                           ease-out
                           group-hover:scale-105">

                <div
                    class="absolute inset-0
                           bg-gradient-to-t
                           from-[#B70000]
                           via-[#B70000]/70
                           to-transparent
                           opacity-[0.92]">
                </div>

                <span
                    class="absolute top-2 right-2
                           w-[18px] h-[18px]
                           rounded-full
                           bg-[#B70000]
                           text-white
                           flex items-center justify-center
                           text-[10px]
                           z-20
                           transition-transform duration-300
                           group-hover:translate-x-0.5
                           group-hover:-translate-y-0.5">
                    ↗
                </span>

                <div class="absolute left-3 right-3 bottom-3 text-white z-10">

                    <h3
                        class="text-[11px] md:text-[12px]
                               font-semibold leading-[1.15]
                               line-clamp-2 mb-1">
                        Transformasi Digital dalam Manajemen Sumber Daya Manusia
                    </h3>

                    <p
                        class="text-[7px] md:text-[8px]
                               leading-[1.35]
                               text-white/85
                               line-clamp-3">
                        Teknologi digital memberikan cara baru bagi perusahaan
                        untuk meningkatkan pengelolaan karyawan dan proses HR.
                    </p>

                </div>

            </a>


            {{-- ==========================================
                 NEWS CARD 3
            =========================================== --}}
            <a
                href="{{ route('news') }}"
                class="news-card group relative block
                       h-[220px] md:h-[230px]
                       rounded-[5px]
                       overflow-hidden
                       bg-gray-100">

                <img
                    src="{{ asset('images/news.png') }}"
                    alt="Membangun Pengalaman Kerja yang Lebih Baik"
                    class="absolute inset-0
                           w-full h-full
                           object-cover
                           transition-transform duration-700
                           ease-out
                           group-hover:scale-105">

                <div
                    class="absolute inset-0
                           bg-gradient-to-t
                           from-[#B70000]
                           via-[#B70000]/70
                           to-transparent
                           opacity-[0.92]">
                </div>

                <span
                    class="absolute top-2 right-2
                           w-[18px] h-[18px]
                           rounded-full
                           bg-[#B70000]
                           text-white
                           flex items-center justify-center
                           text-[10px]
                           z-20
                           transition-transform duration-300
                           group-hover:translate-x-0.5
                           group-hover:-translate-y-0.5">
                    ↗
                </span>

                <div class="absolute left-3 right-3 bottom-3 text-white z-10">

                    <h3
                        class="text-[11px] md:text-[12px]
                               font-semibold leading-[1.15]
                               line-clamp-2 mb-1">
                        Membangun Pengalaman Kerja yang Lebih Baik dengan HRIS
                    </h3>

                    <p
                        class="text-[7px] md:text-[8px]
                               leading-[1.35]
                               text-white/85
                               line-clamp-3">
                        Sistem HRIS membantu perusahaan menciptakan pengalaman kerja
                        yang lebih praktis bagi HR maupun seluruh karyawan.
                    </p>

                </div>

            </a>


            {{-- ==========================================
                 NEWS CARD 4
            =========================================== --}}
            <a
                href="{{ route('news') }}"
                class="news-card group relative block
                       h-[220px] md:h-[230px]
                       rounded-[5px]
                       overflow-hidden
                       bg-gray-100">

                <img
                    src="{{ asset('images/news.png') }}"
                    alt="Mengelola Karyawan di Berbagai Lokasi"
                    class="absolute inset-0
                           w-full h-full
                           object-cover
                           transition-transform duration-700
                           ease-out
                           group-hover:scale-105">

                <div
                    class="absolute inset-0
                           bg-gradient-to-t
                           from-[#B70000]
                           via-[#B70000]/70
                           to-transparent
                           opacity-[0.92]">
                </div>

                <span
                    class="absolute top-2 right-2
                           w-[18px] h-[18px]
                           rounded-full
                           bg-[#B70000]
                           text-white
                           flex items-center justify-center
                           text-[10px]
                           z-20">
                    ↗
                </span>

                <div class="absolute left-3 right-3 bottom-3 text-white z-10">

                    <h3
                        class="text-[11px] md:text-[12px]
                               font-semibold leading-[1.15]
                               line-clamp-2 mb-1">
                        Mengelola Karyawan di Berbagai Lokasi dengan Satu Sistem
                    </h3>

                    <p
                        class="text-[7px] md:text-[8px]
                               leading-[1.35]
                               text-white/85
                               line-clamp-3">
                        Kelola data, kehadiran, dan kebutuhan karyawan dari berbagai
                        lokasi secara terpusat melalui Humanusia.
                    </p>

                </div>

            </a>


            {{-- ==========================================
                 NEWS CARD 5
            =========================================== --}}
            <a
                href="{{ route('news') }}"
                class="news-card group relative block
                       h-[220px] md:h-[230px]
                       rounded-[5px]
                       overflow-hidden
                       bg-gray-100">

                <img
                    src="{{ asset('images/news.png') }}"
                    alt="Meningkatkan Produktivitas Tim HR"
                    class="absolute inset-0
                           w-full h-full
                           object-cover
                           transition-transform duration-700
                           ease-out
                           group-hover:scale-105">

                <div
                    class="absolute inset-0
                           bg-gradient-to-t
                           from-[#B70000]
                           via-[#B70000]/70
                           to-transparent
                           opacity-[0.92]">
                </div>

                <span
                    class="absolute top-2 right-2
                           w-[18px] h-[18px]
                           rounded-full
                           bg-[#B70000]
                           text-white
                           flex items-center justify-center
                           text-[10px]
                           z-20">
                    ↗
                </span>

                <div class="absolute left-3 right-3 bottom-3 text-white z-10">

                    <h3
                        class="text-[11px] md:text-[12px]
                               font-semibold leading-[1.15]
                               line-clamp-2 mb-1">
                        Meningkatkan Produktivitas Tim HR melalui Teknologi
                    </h3>

                    <p
                        class="text-[7px] md:text-[8px]
                               leading-[1.35]
                               text-white/85
                               line-clamp-3">
                        Otomatisasi proses administratif memungkinkan tim HR
                        berfokus pada pekerjaan yang lebih strategis.
                    </p>

                </div>

            </a>


            {{-- ==========================================
                 NEWS CARD 6
            =========================================== --}}
            <a
                href="{{ route('news') }}"
                class="news-card group relative block
                       h-[220px] md:h-[230px]
                       rounded-[5px]
                       overflow-hidden
                       bg-gray-100">

                <img
                    src="{{ asset('images/news.png') }}"
                    alt="Masa Depan Human Resource Management"
                    class="absolute inset-0
                           w-full h-full
                           object-cover
                           transition-transform duration-700
                           ease-out
                           group-hover:scale-105">

                <div
                    class="absolute inset-0
                           bg-gradient-to-t
                           from-[#B70000]
                           via-[#B70000]/70
                           to-transparent
                           opacity-[0.92]">
                </div>

                <span
                    class="absolute top-2 right-2
                           w-[18px] h-[18px]
                           rounded-full
                           bg-[#B70000]
                           text-white
                           flex items-center justify-center
                           text-[10px]
                           z-20">
                    ↗
                </span>

                <div class="absolute left-3 right-3 bottom-3 text-white z-10">

                    <h3
                        class="text-[11px] md:text-[12px]
                               font-semibold leading-[1.15]
                               line-clamp-2 mb-1">
                        Masa Depan Human Resource Management di Era Digital
                    </h3>

                    <p
                        class="text-[7px] md:text-[8px]
                               leading-[1.35]
                               text-white/85
                               line-clamp-3">
                        Perkembangan teknologi membawa perubahan pada cara organisasi
                        mengelola tenaga kerja dan membangun lingkungan kerja.
                    </p>

                </div>

            </a>

        </div>

    </div>

</section>

{{-- =========================================================
     SECTION: WHAT OUR USERS SAY
========================================================= --}}
<section id="testimonials" class="w-full bg-white py-16 md:py-24 overflow-hidden">

    {{-- =====================================================
         HEADER
    ====================================================== --}}
    <div class="max-w-[1200px] mx-auto px-6 md:px-10 mb-10 md:mb-14">

        <div class="text-center">

            <h2
                class="text-3xl sm:text-4xl md:text-5xl lg:text-[52px]
                       font-extrabold
                       leading-tight
                       tracking-tight
                       text-black">
                What Our Users Say
            </h2>

        </div>

    </div>


    {{-- =====================================================
         TESTIMONIAL MARQUEES
    ====================================================== --}}
    <div class="testimonial-marquee-area space-y-4 md:space-y-6">


        {{-- =================================================
             ROW 1 — BERGERAK KE KIRI
        ================================================== --}}
        <div class="testimonial-marquee-wrapper">

            <div class="testimonial-marquee testimonial-left">

                {{-- GROUP 1 --}}
                <div class="testimonial-group">

                    {{-- CARD 1 --}}
                    <div class="testimonial-card">

                        <p class="testimonial-text">
                            “Sebelumnya kami cukup banyak mengandalkan proses manual untuk absensi,
                            cuti, dan pengelolaan data karyawan. Dengan Humanusia, semuanya jadi
                            lebih terstruktur dalam satu sistem. Tim HR juga lebih mudah memantau
                            kehadiran karyawan, terutama karena kami memiliki beberapa lokasi kerja.”
                        </p>

                        <div class="testimonial-user">

                            <img
                                src="{{ asset('images/harryadin.png') }}"
                                alt="Via"
                                class="testimonial-avatar">

                            <div>
                                <h4 class="testimonial-name">
                                    Via
                                </h4>

                                <p class="testimonial-role">
                                    HR Manager PT Survego
                                </p>
                            </div>

                        </div>

                    </div>


                    {{-- CARD 2 --}}
                    <div class="testimonial-card">

                        <p class="testimonial-text">
                            “Yang paling membantu bagi kami adalah fleksibilitas pengaturan lokasi
                            dan pengelolaan karyawan dari beberapa cabang sekaligus. Kami tidak
                            perlu lagi menggunakan sistem yang berbeda-beda untuk setiap lokasi,
                            sehingga pekerjaan administratif HR jauh lebih efisien.”
                        </p>

                        <div class="testimonial-user">

                            <img
                                src="{{ asset('images/harryadin.png') }}"
                                alt="Zahra"
                                class="testimonial-avatar">

                            <div>
                                <h4 class="testimonial-name">
                                    Zahra
                                </h4>

                                <p class="testimonial-role">
                                    HR & People Operations Filasio
                                </p>
                            </div>

                        </div>

                    </div>


                    {{-- CARD 3 --}}
                    <div class="testimonial-card">

                        <p class="testimonial-text">
                            “Sekarang saya bisa melakukan absensi, mengajukan cuti, dan melihat
                            informasi terkait pekerjaan langsung dari aplikasi. Prosesnya lebih
                            praktis karena tidak perlu lagi menghubungi HR untuk hal-hal administratif
                            yang sederhana.”
                        </p>

                        <div class="testimonial-user">

                            <img
                                src="{{ asset('images/harryadin.png') }}"
                                alt="Angel"
                                class="testimonial-avatar">

                            <div>
                                <h4 class="testimonial-name">
                                    Angel
                                </h4>

                                <p class="testimonial-role">
                                    Employee PT Jalu
                                </p>
                            </div>

                        </div>

                    </div>

                </div>


                {{-- GROUP 2 — DUPLIKAT --}}
                <div class="testimonial-group">

                    {{-- CARD 1 --}}
                    <div class="testimonial-card">

                        <p class="testimonial-text">
                            “Sebelumnya kami cukup banyak mengandalkan proses manual untuk absensi,
                            cuti, dan pengelolaan data karyawan. Dengan Humanusia, semuanya jadi
                            lebih terstruktur dalam satu sistem. Tim HR juga lebih mudah memantau
                            kehadiran karyawan, terutama karena kami memiliki beberapa lokasi kerja.”
                        </p>

                        <div class="testimonial-user">

                            <img
                                src="{{ asset('images/harryadin.png') }}"
                                alt="Via"
                                class="testimonial-avatar">

                            <div>
                                <h4 class="testimonial-name">
                                    Via
                                </h4>

                                <p class="testimonial-role">
                                    HR Manager PT Survego
                                </p>
                            </div>

                        </div>

                    </div>


                    {{-- CARD 2 --}}
                    <div class="testimonial-card">

                        <p class="testimonial-text">
                            “Yang paling membantu bagi kami adalah fleksibilitas pengaturan lokasi
                            dan pengelolaan karyawan dari beberapa cabang sekaligus. Kami tidak
                            perlu lagi menggunakan sistem yang berbeda-beda untuk setiap lokasi,
                            sehingga pekerjaan administratif HR jauh lebih efisien.”
                        </p>

                        <div class="testimonial-user">

                            <img
                                src="{{ asset('images/harryadin.png') }}"
                                alt="Zahra"
                                class="testimonial-avatar">

                            <div>
                                <h4 class="testimonial-name">
                                    Zahra
                                </h4>

                                <p class="testimonial-role">
                                    HR & People Operations Filasio
                                </p>
                            </div>

                        </div>

                    </div>


                    {{-- CARD 3 --}}
                    <div class="testimonial-card">

                        <p class="testimonial-text">
                            “Sekarang saya bisa melakukan absensi, mengajukan cuti, dan melihat
                            informasi terkait pekerjaan langsung dari aplikasi. Prosesnya lebih
                            praktis karena tidak perlu lagi menghubungi HR untuk hal-hal administratif
                            yang sederhana.”
                        </p>

                        <div class="testimonial-user">

                            <img
                                src="{{ asset('images/harryadin.png') }}"
                                alt="Angel"
                                class="testimonial-avatar">

                            <div>
                                <h4 class="testimonial-name">
                                    Angel
                                </h4>

                                <p class="testimonial-role">
                                    Employee PT Jalu
                                </p>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>



        {{-- =================================================
             ROW 2 — BERGERAK KE KANAN
        ================================================== --}}
        <div class="testimonial-marquee-wrapper">

            <div class="testimonial-marquee testimonial-right">

                {{-- GROUP 1 --}}
                <div class="testimonial-group">

                    {{-- CARD 1 --}}
                    <div class="testimonial-card">

                        <p class="testimonial-text">
                            “Sebelumnya kami cukup banyak mengandalkan proses manual untuk absensi,
                            cuti, dan pengelolaan data karyawan. Dengan Humanusia, semuanya jadi
                            lebih terstruktur dalam satu sistem. Tim HR juga lebih mudah memantau
                            kehadiran karyawan, terutama karena kami memiliki beberapa lokasi kerja.”
                        </p>

                        <div class="testimonial-user">

                            <img
                                src="{{ asset('images/harryadin.png') }}"
                                alt="Via"
                                class="testimonial-avatar">

                            <div>
                                <h4 class="testimonial-name">
                                    Via
                                </h4>

                                <p class="testimonial-role">
                                    HR Manager PT Survego
                                </p>
                            </div>

                        </div>

                    </div>


                    {{-- CARD 2 --}}
                    <div class="testimonial-card">

                        <p class="testimonial-text">
                            “Yang paling membantu bagi kami adalah fleksibilitas pengaturan lokasi
                            dan pengelolaan karyawan dari beberapa cabang sekaligus. Kami tidak
                            perlu lagi menggunakan sistem yang berbeda-beda untuk setiap lokasi,
                            sehingga pekerjaan administratif HR jauh lebih efisien.”
                        </p>

                        <div class="testimonial-user">

                            <img
                                src="{{ asset('images/harryadin.png') }}"
                                alt="Zahra"
                                class="testimonial-avatar">

                            <div>
                                <h4 class="testimonial-name">
                                    Zahra
                                </h4>

                                <p class="testimonial-role">
                                    HR & People Operations Filasio
                                </p>
                            </div>

                        </div>

                    </div>


                    {{-- CARD 3 --}}
                    <div class="testimonial-card">

                        <p class="testimonial-text">
                            “Sekarang saya bisa melakukan absensi, mengajukan cuti, dan melihat
                            informasi terkait pekerjaan langsung dari aplikasi. Prosesnya lebih
                            praktis karena tidak perlu lagi menghubungi HR untuk hal-hal administratif
                            yang sederhana.”
                        </p>

                        <div class="testimonial-user">

                            <img
                                src="{{ asset('images/harryadin.png') }}"
                                alt="Angel"
                                class="testimonial-avatar">

                            <div>
                                <h4 class="testimonial-name">
                                    Angel
                                </h4>

                                <p class="testimonial-role">
                                    Employee PT Jalu
                                </p>
                            </div>

                        </div>

                    </div>

                </div>


                {{-- GROUP 2 — DUPLIKAT --}}
                <div class="testimonial-group">

                    {{-- CARD 1 --}}
                    <div class="testimonial-card">

                        <p class="testimonial-text">
                            “Sebelumnya kami cukup banyak mengandalkan proses manual untuk absensi,
                            cuti, dan pengelolaan data karyawan. Dengan Humanusia, semuanya jadi
                            lebih terstruktur dalam satu sistem. Tim HR juga lebih mudah memantau
                            kehadiran karyawan, terutama karena kami memiliki beberapa lokasi kerja.”
                        </p>

                        <div class="testimonial-user">

                            <img
                                src="{{ asset('images/harryadin.png') }}"
                                alt="Via"
                                class="testimonial-avatar">

                            <div>
                                <h4 class="testimonial-name">
                                    Via
                                </h4>

                                <p class="testimonial-role">
                                    HR Manager PT Survego
                                </p>
                            </div>

                        </div>

                    </div>


                    {{-- CARD 2 --}}
                    <div class="testimonial-card">

                        <p class="testimonial-text">
                            “Yang paling membantu bagi kami adalah fleksibilitas pengaturan lokasi
                            dan pengelolaan karyawan dari beberapa cabang sekaligus. Kami tidak
                            perlu lagi menggunakan sistem yang berbeda-beda untuk setiap lokasi,
                            sehingga pekerjaan administratif HR jauh lebih efisien.”
                        </p>

                        <div class="testimonial-user">

                            <img
                                src="{{ asset('images/harryadin.png') }}"
                                alt="Zahra"
                                class="testimonial-avatar">

                            <div>
                                <h4 class="testimonial-name">
                                    Zahra
                                </h4>

                                <p class="testimonial-role">
                                    HR & People Operations Filasio
                                </p>
                            </div>

                        </div>

                    </div>


                    {{-- CARD 3 --}}
                    <div class="testimonial-card">

                        <p class="testimonial-text">
                            “Sekarang saya bisa melakukan absensi, mengajukan cuti, dan melihat
                            informasi terkait pekerjaan langsung dari aplikasi. Prosesnya lebih
                            praktis karena tidak perlu lagi menghubungi HR untuk hal-hal administratif
                            yang sederhana.”
                        </p>

                        <div class="testimonial-user">

                            <img
                                src="{{ asset('images/harryadin.png') }}"
                                alt="Angel"
                                class="testimonial-avatar">

                            <div>
                                <h4 class="testimonial-name">
                                    Angel
                                </h4>

                                <p class="testimonial-role">
                                    Employee PT Jalu
                                </p>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    </div>

</section>


{{-- =========================================================
     TESTIMONIAL MARQUEE STYLE
========================================================= --}}
<style>

    /* =====================================================
       WRAPPER
    ====================================================== */

    .testimonial-marquee-wrapper {
        width: 100%;
        overflow: hidden;
        position: relative;
    }


    /* =====================================================
       FADE KIRI & KANAN
    ====================================================== */

    .testimonial-marquee-wrapper::before,
    .testimonial-marquee-wrapper::after {
        content: "";
        position: absolute;
        top: 0;
        width: 100px;
        height: 100%;
        z-index: 5;
        pointer-events: none;
    }

    .testimonial-marquee-wrapper::before {
        left: 0;
        background: linear-gradient(
            to right,
            white,
            transparent
        );
    }

    .testimonial-marquee-wrapper::after {
        right: 0;
        background: linear-gradient(
            to left,
            white,
            transparent
        );
    }


    /* =====================================================
       MARQUEE
    ====================================================== */

    .testimonial-marquee {
        display: flex;
        width: max-content;
        will-change: transform;
    }


    /* =====================================================
       GROUP
    ====================================================== */

    .testimonial-group {
        display: flex;
        align-items: stretch;
        gap: 14px;
        padding-right: 14px;
        flex-shrink: 0;
    }


    /* =====================================================
       CARD
    ====================================================== */

    .testimonial-card {
        width: 520px;
        min-height: 160px;

        background: #C90000;
        color: white;

        border-radius: 8px;

        padding: 20px 24px;

        display: flex;
        flex-direction: column;
        justify-content: space-between;

        flex-shrink: 0;
    }


    /* =====================================================
       TESTIMONIAL TEXT
    ====================================================== */

    .testimonial-text {
        font-size: 13px;
        line-height: 1.45;
        font-weight: 400;
        margin: 0 0 16px 0;

        display: -webkit-box;
        -webkit-line-clamp: 5;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }


    /* =====================================================
       USER
    ====================================================== */

    .testimonial-user {
        display: flex;
        align-items: center;
        gap: 12px;
    }


    .testimonial-avatar {
        width: 38px;
        height: 38px;

        border-radius: 50%;

        object-fit: cover;

        flex-shrink: 0;

        border: 1px solid rgba(255, 255, 255, 0.4);
    }


    .testimonial-name {
        font-size: 12px;
        line-height: 1.2;
        font-weight: 700;
        margin: 0 0 3px 0;
    }


    .testimonial-role {
        font-size: 9px;
        line-height: 1.2;
        color: rgba(255, 255, 255, 0.7);
        margin: 0;
    }


    /* =====================================================
       ANIMATION
    ====================================================== */

    .testimonial-left {
        animation: testimonialMoveLeft 35s linear infinite;
    }

    .testimonial-right {
        animation: testimonialMoveRight 35s linear infinite;
    }


    @keyframes testimonialMoveLeft {

        0% {
            transform: translateX(0);
        }

        100% {
            transform: translateX(-50%);
        }

    }


    @keyframes testimonialMoveRight {

        0% {
            transform: translateX(-50%);
        }

        100% {
            transform: translateX(0);
        }

    }


    /* =====================================================
       HOVER = PAUSE
    ====================================================== */

    .testimonial-marquee-wrapper:hover .testimonial-marquee {
        animation-play-state: paused;
    }


    /* =====================================================
       TABLET
    ====================================================== */

    @media (max-width: 768px) {

        .testimonial-group {
            gap: 10px;
            padding-right: 10px;
        }

        .testimonial-card {
            width: 390px;
            min-height: 165px;
            padding: 18px 20px;
            border-radius: 8px;
        }

        .testimonial-text {
            font-size: 12px;
            line-height: 1.45;
            -webkit-line-clamp: 4;
        }

        .testimonial-avatar {
            width: 34px;
            height: 34px;
        }

        .testimonial-name {
            font-size: 11px;
        }

        .testimonial-role {
            font-size: 8px;
        }

        .testimonial-marquee-wrapper::before,
        .testimonial-marquee-wrapper::after {
            width: 50px;
        }

        .testimonial-left,
        .testimonial-right {
            animation-duration: 30s;
        }

    }


    /* =====================================================
       MOBILE
    ====================================================== */

    @media (max-width: 480px) {

        .testimonial-card {
            width: 330px;
            min-height: 170px;
            padding: 17px 18px;
        }

        .testimonial-text {
            font-size: 11px;
            line-height: 1.45;
            -webkit-line-clamp: 4;
        }

        .testimonial-group {
            gap: 8px;
            padding-right: 8px;
        }

        .testimonial-left,
        .testimonial-right {
            animation-duration: 28s;
        }

    }


    /* =====================================================
       REDUCED MOTION
    ====================================================== */

    @media (prefers-reduced-motion: reduce) {

        .testimonial-marquee {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
        }

    }

</style>

{{-- =========================================================
     PLAN & PRICING SECTION
========================================================= --}}

<section id="pricing" class="py-20 md:py-28 bg-white overflow-hidden">

    <div class="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-14">

        {{-- HEADER --}}
        <div class="text-center mb-12 md:mb-14">

            <h2 class="text-4xl md:text-5xl lg:text-6xl font-semibold text-black tracking-tight font-['Inter_Tight']">
                Plan & Pricing
            </h2>

            <p class="mt-3 text-lg md:text-xl text-gray-700 font-['Inter_Tight']">
                Select your plan and manage it according to company requirement
            </p>

        </div>


        {{-- PRICING CARDS --}}
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 items-stretch">


            {{-- =================================================
                 1. STARTER
            ================================================== --}}
            <div
                class="pricing-card group bg-white rounded-[24px] border border-gray-100 shadow-[0_5px_20px_rgba(0,0,0,0.08)] overflow-hidden transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.015] hover:shadow-[0_18px_40px_rgba(0,0,0,0.13)]"
            >

                {{-- CARD TOP --}}
                <div class="p-6 md:p-7">

                    {{-- PLAN NAME --}}
                    <h3 class="text-xl md:text-2xl font-semibold text-[#17135C] font-['Inter_Tight']">
                        Starter
                    </h3>

                    {{-- PRICE --}}
                    <div class="flex items-start mt-4">

                        <span class="text-xs md:text-sm text-gray-400 mt-2 mr-1">
                            Rp.
                        </span>

                        <span class="text-5xl md:text-[52px] leading-none font-semibold text-[#17135C] tracking-tight">
                            599K
                        </span>

                        <span class="text-xs md:text-sm text-gray-400 ml-2 mt-2 leading-tight">
                            per<br>
                            monthly
                        </span>

                    </div>


                    {{-- DESCRIPTION --}}
                    <p class="text-sm text-[#66668A] leading-relaxed mt-5 min-h-[72px]">
                        The Starter package is ideal for small businesses or individuals with limited resources.
                    </p>


                    {{-- BUTTON --}}
                    <a
                        href="/register"
                        class="pricing-button mt-5 flex items-center justify-center w-full h-[40px] rounded-[10px] border border-gray-200 bg-white text-[#17135C] text-sm md:text-base font-medium transition-all duration-300 group-hover:bg-[#C90000] group-hover:text-white group-hover:border-[#C90000] group-hover:shadow-[0_5px_15px_rgba(201,0,0,0.25)]"
                    >
                        Get started
                    </a>

                </div>


                {{-- DIVIDER --}}
                <div class="border-t border-gray-200"></div>


                {{-- FEATURES --}}
                <div class="p-6 md:p-7 pt-5">

                    <h4 class="text-sm md:text-base font-semibold text-[#17135C]">
                        Features:
                    </h4>

                    <p class="text-sm text-[#77779A] leading-relaxed mt-2">
                        Access to starter Webflow clonables
                    </p>

                    <div class="flex items-start gap-2.5 mt-4">

                        <span
                            class="w-[14px] h-[14px] mt-[3px] rounded-full bg-[#C90000] flex items-center justify-center flex-shrink-0"
                        >
                            <svg
                                class="w-[9px] h-[9px] text-white"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="3"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M5 12l4 4L19 6"
                                />
                            </svg>
                        </span>

                        <span class="text-sm text-[#66668A] leading-relaxed">
                            For 1-100 employees right now
                        </span>

                    </div>

                </div>

            </div>



            {{-- =================================================
                 2. BASE
            ================================================== --}}
            <div
                class="pricing-card group bg-white rounded-[24px] border border-gray-100 shadow-[0_5px_20px_rgba(0,0,0,0.08)] overflow-hidden transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.015] hover:shadow-[0_18px_40px_rgba(0,0,0,0.13)]"
            >

                {{-- CARD TOP --}}
                <div class="p-6 md:p-7">

                    {{-- PLAN NAME --}}
                    <h3 class="text-xl md:text-2xl font-semibold text-[#17135C] font-['Inter_Tight']">
                        Base
                    </h3>


                    {{-- PRICE --}}
                    <div class="flex items-start mt-4">

                        <span class="text-xs md:text-sm text-gray-400 mt-2 mr-1">
                            Rp.
                        </span>

                        <span class="text-5xl md:text-[52px] leading-none font-semibold text-[#17135C] tracking-tight">
                            999K
                        </span>

                        <span class="text-xs md:text-sm text-gray-400 ml-2 mt-2 leading-tight">
                            per<br>
                            monthly
                        </span>

                    </div>


                    {{-- DESCRIPTION --}}
                    <p class="text-sm text-[#66668A] leading-relaxed mt-5 min-h-[72px]">
                        The Base package helps build a strong foundation for businesses.
                    </p>


                    {{-- BUTTON --}}
                    <a
                        href="/register"
                        class="pricing-button mt-5 flex items-center justify-center w-full h-[40px] rounded-[10px] border border-gray-200 bg-white text-[#17135C] text-sm md:text-base font-medium transition-all duration-300 group-hover:bg-[#C90000] group-hover:text-white group-hover:border-[#C90000] group-hover:shadow-[0_5px_15px_rgba(201,0,0,0.25)]"
                    >
                        Get started
                    </a>

                </div>


                {{-- DIVIDER --}}
                <div class="border-t border-gray-200"></div>


                {{-- FEATURES --}}
                <div class="p-6 md:p-7 pt-5">

                    <h4 class="text-sm md:text-base font-semibold text-[#17135C]">
                        Features:
                    </h4>

                    <p class="text-sm text-[#77779A] leading-relaxed mt-2">
                        Access to starter Webflow clonables
                    </p>

                    <div class="flex items-start gap-2.5 mt-4">

                        <span
                            class="w-[14px] h-[14px] mt-[3px] rounded-full bg-[#C90000] flex items-center justify-center flex-shrink-0"
                        >
                            <svg
                                class="w-[9px] h-[9px] text-white"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="3"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M5 12l4 4L19 6"
                                />
                            </svg>
                        </span>

                        <span class="text-sm text-[#66668A] leading-relaxed">
                            For 101-250 employees right now
                        </span>

                    </div>

                </div>

            </div>



            {{-- =================================================
                 3. PRO
            ================================================== --}}
            <div
                class="pricing-card group bg-white rounded-[24px] border border-gray-100 shadow-[0_5px_20px_rgba(0,0,0,0.08)] overflow-hidden transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.015] hover:shadow-[0_18px_40px_rgba(0,0,0,0.13)]"
            >

                {{-- CARD TOP --}}
                <div class="p-6 md:p-7">

                    {{-- PLAN NAME --}}
                    <h3 class="text-xl md:text-2xl font-semibold text-[#17135C] font-['Inter_Tight']">
                        Pro
                    </h3>


                    {{-- PRICE --}}
                    <div class="flex items-start mt-4">

                        <span class="text-xs md:text-sm text-gray-400 mt-2 mr-1">
                            Rp.
                        </span>

                        <span class="text-5xl md:text-[52px] leading-none font-semibold text-[#17135C] tracking-tight">
                            1.399K
                        </span>

                        <span class="text-xs md:text-sm text-gray-400 ml-2 mt-2 leading-tight">
                            per<br>
                            monthly
                        </span>

                    </div>


                    {{-- DESCRIPTION --}}
                    <p class="text-sm text-[#66668A] leading-relaxed mt-5 min-h-[72px]">
                        The Pro package is a complete set of tools and resources designed to insert goal.
                    </p>


                    {{-- BUTTON --}}
                    <a
                        href="/register"
                        class="pricing-button mt-5 flex items-center justify-center w-full h-[40px] rounded-[10px] border border-gray-200 bg-white text-[#17135C] text-sm md:text-base font-medium transition-all duration-300 group-hover:bg-[#C90000] group-hover:text-white group-hover:border-[#C90000] group-hover:shadow-[0_5px_15px_rgba(201,0,0,0.25)]"
                    >
                        Get started
                    </a>

                </div>


                {{-- DIVIDER --}}
                <div class="border-t border-gray-200"></div>


                {{-- FEATURES --}}
                <div class="p-6 md:p-7 pt-5">

                    <h4 class="text-sm md:text-base font-semibold text-[#17135C]">
                        Features:
                    </h4>

                    <p class="text-sm text-[#77779A] leading-relaxed mt-2">
                        Access to starter Webflow clonables
                    </p>

                    <div class="flex items-start gap-2.5 mt-4">

                        <span
                            class="w-[14px] h-[14px] mt-[3px] rounded-full bg-[#C90000] flex items-center justify-center flex-shrink-0"
                        >
                            <svg
                                class="w-[9px] h-[9px] text-white"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="3"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M5 12l4 4L19 6"
                                />
                            </svg>
                        </span>

                        <span class="text-sm text-[#66668A] leading-relaxed">
                            For 101-250 employees right now
                        </span>

                    </div>

                </div>

            </div>



            {{-- =================================================
                 4. CUSTOM PLAN
            ================================================== --}}
            <div
                class="pricing-card group bg-white rounded-[24px] border border-gray-100 shadow-[0_5px_20px_rgba(0,0,0,0.08)] overflow-hidden transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.015] hover:shadow-[0_18px_40px_rgba(0,0,0,0.13)]"
            >

                {{-- CARD TOP --}}
                <div class="p-6 md:p-7">

                    {{-- PLAN NAME --}}
                    <h3 class="text-xl md:text-2xl font-semibold text-[#17135C] font-['Inter_Tight']">
                        Custom Plan
                    </h3>


                    {{-- PRICE --}}
                    <div class="flex items-start mt-4">

                        <span class="text-xs md:text-sm text-gray-400 mt-2 mr-1">
                            Rp.
                        </span>

                        <span class="text-5xl md:text-[52px] leading-none font-semibold text-[#17135C] tracking-tight">
                            XXX
                        </span>

                        <span class="text-xs md:text-sm text-gray-400 ml-2 mt-2 leading-tight">
                            per<br>
                            monthly
                        </span>

                    </div>


                    {{-- DESCRIPTION --}}
                    <p class="text-sm text-[#66668A] leading-relaxed mt-5 min-h-[72px]">
                        A package for more than 500 employees can be discussed with the Humanusia team.
                    </p>


                    {{-- BUTTON --}}
                    <a
                        href="/contact"
                        class="pricing-button mt-5 flex items-center justify-center w-full h-[40px] rounded-[10px] border border-gray-200 bg-white text-[#17135C] text-sm md:text-base font-medium transition-all duration-300 group-hover:bg-[#C90000] group-hover:text-white group-hover:border-[#C90000] group-hover:shadow-[0_5px_15px_rgba(201,0,0,0.25)]"
                    >
                        Get started
                    </a>

                </div>


                {{-- DIVIDER --}}
                <div class="border-t border-gray-200"></div>


                {{-- FEATURES --}}
                <div class="p-6 md:p-7 pt-5">

                    <h4 class="text-sm md:text-base font-semibold text-[#17135C]">
                        Features:
                    </h4>

                    <p class="text-sm text-[#77779A] leading-relaxed mt-2">
                        Access to starter Webflow clonables
                    </p>

                    <div class="flex items-start gap-2.5 mt-4">

                        <span
                            class="w-[14px] h-[14px] mt-[3px] rounded-full bg-[#C90000] flex items-center justify-center flex-shrink-0"
                        >
                            <svg
                                class="w-[9px] h-[9px] text-white"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="3"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M5 12l4 4L19 6"
                                />
                            </svg>
                        </span>

                        <span class="text-sm text-[#66668A] leading-relaxed">
                            Build your custom feature
                        </span>

                    </div>

                </div>

            </div>

        </div>

    </div>

</section>


{{-- =========================================================
     PRICING HOVER ANIMATION
========================================================= --}}

<style>
    .pricing-card {
        cursor: pointer;
        transform-origin: center;
    }

    .pricing-card .pricing-button {
        position: relative;
        overflow: hidden;
    }

    .pricing-card .pricing-button::before {
        content: "";
        position: absolute;
        inset: 0;
        background: rgba(255, 255, 255, 0.12);
        transform: translateX(-110%);
        transition: transform 0.4s ease;
    }

    .pricing-card:hover .pricing-button::before {
        transform: translateX(110%);
    }

    .pricing-card .pricing-button {
        position: relative;
        z-index: 1;
    }

    .pricing-card .pricing-button::after {
        content: "";
        position: absolute;
        inset: 0;
        z-index: -1;
    }

    @media (max-width: 1023px) {
        .pricing-card:hover {
            transform: translateY(-6px) scale(1.01);
        }
    }

    @media (max-width: 640px) {
        .pricing-card:hover {
            transform: translateY(-4px);
        }
    }
</style>

    <!-- ==========================================
         SECTION: FAQ (ACCORDION SMOOTH ANIMATION)
         ========================================== -->
    <section class="py-16 md:py-24 bg-[#F9EBEB]">
        <div class="max-w-[1000px] mx-auto px-6 md:px-12">

            <!-- JUDUL SECTION -->
            <h2 class="text-3xl md:text-5xl font-extrabold text-black text-center tracking-tight mb-12 md:mb-16">
                FAQ
            </h2>

            <!-- CONTAINER LIST FAQ -->
            <div class="space-y-4">

                <!-- ITEM 1 (LANGSUNG AKTIF / OPEN DEFAULT) -->
                <div class="faq-item active bg-white rounded-2xl md:rounded-3xl shadow-sm border border-gray-100/80 overflow-hidden transition-all duration-300">
                    <button type="button" class="faq-button w-full px-6 md:px-8 py-5 md:py-6 flex items-center justify-between gap-4 text-left font-bold text-gray-900 text-base md:text-lg focus:outline-none cursor-pointer">
                        <span>What is Humanusia?</span>
                        <span class="faq-icon text-xl md:text-2xl font-normal text-gray-500 flex-shrink-0 transition-transform duration-300">—</span>
                    </button>
                    <!-- Wrapper animasi smooth (max-height diatur via JS / style) -->
                    <div class="faq-answer overflow-hidden transition-all duration-500 ease-in-out max-h-[1000px] opacity-100">
                        <div class="px-6 md:px-8 pb-6 text-gray-500 text-xs md:text-sm leading-relaxed space-y-3">
                            <p>
                                HUMANUSIA is an indispensable personnel information system that plays a vital role in ensuring the smooth operation of a company. By integrating personnel, management, and administrative data, HUMANUSIA is designed to facilitate efficient management and easy access to employee information.
                            </p>
                            <p>
                                With HUMANUSIA, companies can organize employee information quickly and easily. From managing personal data to employment history, this app streamlines the search for the information needed for smarter decision-making.
                            </p>
                            <p>
                                Increase your HR team's productivity and effectiveness with HUMANUSIA. Get instant access to powerful features, including automated attendance management and faster processing of leave, business travel, and overtime application forms.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- ITEM 2 -->
                <div class="faq-item bg-white rounded-2xl md:rounded-3xl shadow-sm border border-gray-100/80 overflow-hidden transition-all duration-300">
                    <button type="button" class="faq-button w-full px-6 md:px-8 py-5 md:py-6 flex items-center justify-between gap-4 text-left font-bold text-gray-900 text-base md:text-lg focus:outline-none cursor-pointer">
                        <span>Who should see Humanusia?</span>
                        <span class="faq-icon text-xl md:text-2xl font-normal text-gray-500 flex-shrink-0 transition-transform duration-300">+</span>
                    </button>
                    <div class="faq-answer overflow-hidden transition-all duration-500 ease-in-out max-h-0 opacity-0">
                        <div class="px-6 md:px-8 pb-6 text-gray-500 text-xs md:text-sm leading-relaxed">
                            <p>
                                Humanusia is designed for business owners, HR managers, department heads, and employees. Anyone looking to simplify HR administration, streamline attendance tracking, and manage payroll effortlessly can benefit from Humanusia.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- ITEM 3 -->
                <div class="faq-item bg-white rounded-2xl md:rounded-3xl shadow-sm border border-gray-100/80 overflow-hidden transition-all duration-300">
                    <button type="button" class="faq-button w-full px-6 md:px-8 py-5 md:py-6 flex items-center justify-between gap-4 text-left font-bold text-gray-900 text-base md:text-lg focus:outline-none cursor-pointer">
                        <span>How does Humanusia's presence help the company's development?</span>
                        <span class="faq-icon text-xl md:text-2xl font-normal text-gray-500 flex-shrink-0 transition-transform duration-300">+</span>
                    </button>
                    <div class="faq-answer overflow-hidden transition-all duration-500 ease-in-out max-h-0 opacity-0">
                        <div class="px-6 md:px-8 pb-6 text-gray-500 text-xs md:text-sm leading-relaxed">
                            <p>
                                By automating repetitive administrative tasks like attendance, leave approvals, and payroll calculation, Humanusia reduces human error and frees up valuable time for HR teams to focus on strategic employee growth and company culture.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- ITEM 4 -->
                <div class="faq-item bg-white rounded-2xl md:rounded-3xl shadow-sm border border-gray-100/80 overflow-hidden transition-all duration-300">
                    <button type="button" class="faq-button w-full px-6 md:px-8 py-5 md:py-6 flex items-center justify-between gap-4 text-left font-bold text-gray-900 text-base md:text-lg focus:outline-none cursor-pointer">
                        <span>What if my company wants to subscribe to Humanusia?</span>
                        <span class="faq-icon text-xl md:text-2xl font-normal text-gray-500 flex-shrink-0 transition-transform duration-300">+</span>
                    </button>
                    <div class="faq-answer overflow-hidden transition-all duration-500 ease-in-out max-h-0 opacity-0">
                        <div class="px-6 md:px-8 pb-6 text-gray-500 text-xs md:text-sm leading-relaxed">
                            <p>
                                You can easily sign up through our 14-day free trial button or reach out directly to our sales team via the Schedule a Demo form to get a personalized onboarding experience tailored to your company's scale.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- ITEM 5 -->
                <div class="faq-item bg-white rounded-2xl md:rounded-3xl shadow-sm border border-gray-100/80 overflow-hidden transition-all duration-300">
                    <button type="button" class="faq-button w-full px-6 md:px-8 py-5 md:py-6 flex items-center justify-between gap-4 text-left font-bold text-gray-900 text-base md:text-lg focus:outline-none cursor-pointer">
                        <span>What are the best feature recommendations from Humanusia?</span>
                        <span class="faq-icon text-xl md:text-2xl font-normal text-gray-500 flex-shrink-0 transition-transform duration-300">+</span>
                    </button>
                    <div class="faq-answer overflow-hidden transition-all duration-500 ease-in-out max-h-0 opacity-0">
                        <div class="px-6 md:px-8 pb-6 text-gray-500 text-xs md:text-sm leading-relaxed">
                            <p>
                                Our top-rated features include Real-Time Location Attendance, Automated Payroll Processing with tax and BPJS calculation, and Instant Leave & Permission Management system.
                            </p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </section>

    {{-- SCRIPT ACCORDION SMOOTH ANIMATION --}}
    <script>
        document.addEventListener('DOMContentLoaded', function () {
            const faqItems = document.querySelectorAll('.faq-item');

            faqItems.forEach(item => {
                const button = item.querySelector('.faq-button');
                const answer = item.querySelector('.faq-answer');
                const icon = item.querySelector('.faq-icon');

                button.addEventListener('click', function () {
                    const isOpen = item.classList.contains('active');

                    // Tutup semua item yang sedang terbuka
                    faqItems.forEach(otherItem => {
                        otherItem.classList.remove('active');
                        const otherAnswer = otherItem.querySelector('.faq-answer');
                        const otherIcon = otherItem.querySelector('.faq-icon');

                        otherAnswer.style.maxHeight = '0px';
                        otherAnswer.classList.add('opacity-0');
                        otherIcon.textContent = '+';
                    });

                    // Buka item yang diklik (jika sebelumnya tertutup)
                    if (!isOpen) {
                        item.classList.add('active');
                        answer.style.maxHeight = answer.scrollHeight + "px";
                        answer.classList.remove('opacity-0');
                        icon.textContent = '—';
                    }
                });
            });
        });
    </script>

    {{-- =========================================================
     READY TO TRANSFORM SECTION
========================================================= --}}

<section id="ready-transform" class="relative bg-white py-20 md:py-28 overflow-hidden">

    <div class="max-w-[1400px] mx-auto px-6 md:px-10">

        {{-- =================================================
             IMAGE AREA
        ================================================== --}}
        <div class="relative mx-auto w-full max-w-[1250px]">

            {{-- IMAGE FRAME --}}
            <div class="relative overflow-hidden rounded-[22px] md:rounded-[28px]">

                {{-- OUTER SOFT SHADOW / BORDER --}}
                <div class="absolute inset-0 rounded-[22px] md:rounded-[28px] border-[10px] md:border-[12px] border-[#f4f4f4] pointer-events-none z-20"></div>

                {{-- WEBSITE IMAGE --}}
                <img
                    src="{{ asset('images/ready.png') }}"
                    alt="Humanusia HR Platform"
                    class="relative z-0 block w-full h-auto object-cover rounded-[16px] md:rounded-[18px]"
                >

                {{-- =================================================
                     WHITE BLUR / FADE EFFECT
                     Membuat efek putih lembut seperti pada Figma
                ================================================== --}}
                <div
                    class="absolute z-10 left-0 right-0 bottom-0 h-[150px] md:h-[190px] pointer-events-none"
                    style="
                        background:
                            linear-gradient(
                                to bottom,
                                rgba(255,255,255,0) 0%,
                                rgba(255,255,255,0.10) 20%,
                                rgba(255,255,255,0.55) 55%,
                                rgba(255,255,255,0.92) 82%,
                                rgba(255,255,255,1) 100%
                            );
                        backdrop-filter: blur(1px);
                        -webkit-backdrop-filter: blur(1px);
                    "
                ></div>

            </div>


            {{-- =================================================
                 HUMANUSIA LOGO
                 Posisi di tengah bawah gambar
            ================================================== --}}
            <div
                class="absolute z-30 left-1/2 -translate-x-1/2 bottom-[-30px] md:bottom-[-42px]"
            >

                <img
                    src="{{ asset('images/humanrem.png') }}"
                    alt="Humanusia"
                    class="w-[150px] md:w-[190px] lg:w-[220px] h-auto object-contain drop-shadow-[0_3px_5px_rgba(0,0,0,0.08)]"
                >

            </div>

        </div>


        {{-- =================================================
             TEXT CONTENT
        ================================================== --}}
        <div class="relative z-20 text-center mt-[70px] md:mt-[85px]">

            {{-- MAIN HEADING --}}
            <h2
                class="max-w-[760px] mx-auto text-4xl md:text-5xl lg:text-[56px] font-extrabold text-black leading-[1.05] tracking-tight font-['Inter_Tight']"
            >
                Ready to Transform HR
                <br class="hidden md:block">
                Management in Your Company?
            </h2>


            {{-- DESCRIPTION --}}
            <p
                class="max-w-[650px] mx-auto mt-5 md:mt-6 text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed font-['Inter_Tight']"
            >
                Join other companies that have switched to a more practical
                <br class="hidden md:block">
                and structured approach.
            </p>


            {{-- CTA BUTTON --}}
            <div class="mt-8 md:mt-9 flex justify-center">

                <a
                    href="/register"
                    class="inline-flex items-center justify-center min-w-[130px] md:min-w-[145px] h-[48px] md:h-[52px] px-7 md:px-9 rounded-full bg-[#C90000] hover:bg-[#A80000] text-white text-sm md:text-base font-semibold shadow-[0_8px_18px_rgba(201,0,0,0.25)] hover:shadow-[0_10px_25px_rgba(201,0,0,0.35)] hover:-translate-y-0.5 transition-all duration-300"
                >
                    Get Started
                </a>

            </div>

        </div>

    </div>

</section>

    {{-- FOOTER --}}
    @include('partials.footer')

</body>

</html>
