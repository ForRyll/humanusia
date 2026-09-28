<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>News - Humanusia</title>

    {{-- FAVICON --}}
    <link
        rel="icon"
        type="image/png"
        href="{{ asset('images/humanusia.png') }}">

    <link
        rel="shortcut icon"
        type="image/png"
        href="{{ asset('images/humanusia.png') }}">

    <link
        rel="apple-touch-icon"
        href="{{ asset('images/humanusia.png') }}">


    {{-- VITE --}}
    @vite(['resources/css/app.css', 'resources/js/app.js'])


    {{-- FONT --}}
    <link rel="preconnect" href="https://fonts.googleapis.com">

    <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossorigin>

    <link
        href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700;800&display=swap"
        rel="stylesheet">


    <style>

        body {
            font-family: 'Inter Tight', sans-serif;
        }

        .news-detail-content p {
            text-align: justify;
            text-justify: inter-word;
        }

    </style>

</head>


<body class="bg-white text-gray-900">


    {{-- ==========================================
         NAVBAR
    =========================================== --}}
    @include('partials.navbar')


    {{-- ==========================================
         SPACING NAVBAR
    =========================================== --}}
    <div class="pt-24 md:pt-28"></div>


    {{-- ==========================================
         NEWS DETAIL
    =========================================== --}}
    <main>

        <section
            class="bg-white
                   px-6 md:px-10 lg:px-16
                   py-12 md:py-20">


            <div class="max-w-[1100px] mx-auto">


                {{-- ==========================================
                     BACK BUTTON
                =========================================== --}}
                <div class="mb-10 md:mb-14">

                    <a
                        href="{{ url('/') }}"
                        class="inline-flex items-center gap-2
                               text-[12px] md:text-[13px]
                               font-medium
                               text-gray-500
                               hover:text-[#B70000]
                               transition-colors duration-300">

                        <span class="text-lg leading-none">
                            ←
                        </span>

                        <span>
                            Back to Home
                        </span>

                    </a>

                </div>


                {{-- ==========================================
                     HEADER
                =========================================== --}}
                <div
                    class="max-w-[900px]
                           mx-auto
                           mb-12 md:mb-16">


                    {{-- LABEL --}}
                    <div class="mb-5">

                        <span
                            class="text-[13px] md:text-[14px]
                                   font-semibold
                                   text-[#B70000]
                                   tracking-wide">

                            Humanusia News

                        </span>

                    </div>


                    {{-- TITLE --}}
                    <h1
                        class="text-[30px]
                               sm:text-[36px]
                               md:text-[48px]
                               lg:text-[56px]
                               font-semibold
                               text-gray-900
                               leading-[1.08]
                               tracking-tight">

                        Memaksimalkan Efisiensi SDM
                        dengan Humanusia yang Unggul

                    </h1>


                    {{-- DESCRIPTION --}}
                    <p
                        class="mt-7
                               text-[14px] md:text-[16px]
                               text-gray-500
                               leading-relaxed
                               max-w-[850px]">

                        Humanusia membantu perusahaan mengelola sumber daya
                        manusia secara lebih praktis, terstruktur, dan terintegrasi
                        melalui satu sistem HRIS.

                    </p>


                    {{-- META --}}
                    <div
                        class="flex flex-wrap
                               items-center
                               gap-x-6 gap-y-2
                               mt-7
                               text-[11px] md:text-[12px]
                               text-gray-400">

                        <span>
                            12 September 2026
                        </span>

                        <span class="hidden sm:inline">
                            •
                        </span>

                        <span>
                            Humanusia
                        </span>

                    </div>

                </div>


                {{-- ==========================================
                     HERO IMAGE
                =========================================== --}}
                <div
                    class="w-full
                           aspect-[16/7]
                           md:aspect-[16/6]
                           overflow-hidden
                           bg-gray-100
                           mb-12 md:mb-16
                           rounded-[8px]">

                    <img
                        src="{{ asset('images/news.png') }}"
                        alt="Memaksimalkan Efisiensi SDM dengan Humanusia"
                        class="w-full h-full object-cover">

                </div>


                {{-- ==========================================
                     ARTICLE CONTENT
                =========================================== --}}
                <article
                    class="max-w-[900px]
                           mx-auto
                           news-detail-content">


                    {{-- INTRODUCTION --}}
                    <p
                        class="text-[15px]
                               md:text-[17px]
                               text-gray-700
                               leading-[1.9]
                               mb-7">

                        Pengelolaan sumber daya manusia menjadi salah satu
                        bagian penting dalam menjaga keberlangsungan dan
                        perkembangan sebuah organisasi. Seiring dengan semakin
                        kompleksnya kebutuhan perusahaan, proses administrasi
                        HR yang dilakukan secara manual dapat membutuhkan waktu
                        dan tenaga yang tidak sedikit.

                    </p>


                    {{-- PARAGRAPH 2 --}}
                    <p
                        class="text-[14px]
                               md:text-[16px]
                               text-gray-600
                               leading-[1.9]
                               mb-7">

                        Humanusia hadir sebagai platform HRIS yang membantu
                        perusahaan mengelola berbagai kebutuhan sumber daya
                        manusia dalam satu sistem. Mulai dari pengelolaan
                        kehadiran, payroll, cuti, izin, hingga informasi
                        karyawan dapat dikelola secara lebih terstruktur.

                    </p>


                    {{-- SUBHEADING --}}
                    <h2
                        class="text-[22px]
                               md:text-[28px]
                               font-semibold
                               text-gray-900
                               leading-tight
                               mt-12
                               mb-6">

                        Pengelolaan HR dalam Satu Platform

                    </h2>


                    {{-- PARAGRAPH 3 --}}
                    <p
                        class="text-[14px]
                               md:text-[16px]
                               text-gray-600
                               leading-[1.9]
                               mb-7">

                        Salah satu tantangan dalam pengelolaan HR adalah
                        banyaknya proses yang harus dilakukan secara bersamaan.
                        Data kehadiran, informasi karyawan, izin, dan berbagai
                        kebutuhan administratif lainnya membutuhkan sistem yang
                        dapat membantu HR bekerja secara lebih terorganisir.

                    </p>


                    {{-- PARAGRAPH 4 --}}
                    <p
                        class="text-[14px]
                               md:text-[16px]
                               text-gray-600
                               leading-[1.9]
                               mb-7">

                        Dengan pendekatan terintegrasi, Humanusia membantu
                        menyatukan berbagai kebutuhan tersebut ke dalam satu
                        platform. Hal ini memungkinkan HR untuk mengakses
                        informasi yang dibutuhkan dengan lebih mudah tanpa
                        harus berpindah dari satu sistem ke sistem lainnya.

                    </p>


                    {{-- SUBHEADING --}}
                    <h2
                        class="text-[22px]
                               md:text-[28px]
                               font-semibold
                               text-gray-900
                               leading-tight
                               mt-12
                               mb-6">

                        Membantu HR Bekerja Lebih Efisien

                    </h2>


                    {{-- PARAGRAPH 5 --}}
                    <p
                        class="text-[14px]
                               md:text-[16px]
                               text-gray-600
                               leading-[1.9]
                               mb-7">

                        Digitalisasi proses HR juga memberikan kesempatan bagi
                        tim HR untuk mengurangi pekerjaan administratif yang
                        berulang. Dengan informasi yang tersimpan dalam satu
                        sistem, proses pengelolaan data karyawan dapat dilakukan
                        dengan lebih praktis dan terstruktur.

                    </p>


                    {{-- PARAGRAPH 6 --}}
                    <p
                        class="text-[14px]
                               md:text-[16px]
                               text-gray-600
                               leading-[1.9]
                               mb-7">

                        Pada akhirnya, teknologi HR bukan hanya mengenai
                        otomatisasi pekerjaan administratif. Sistem yang tepat
                        juga dapat membantu perusahaan membangun pengalaman
                        kerja yang lebih baik bagi HR maupun karyawan.

                    </p>


                    {{-- SUBHEADING --}}
                    <h2
                        class="text-[22px]
                               md:text-[28px]
                               font-semibold
                               text-gray-900
                               leading-tight
                               mt-12
                               mb-6">

                        Membangun Sistem HR yang Terhubung

                    </h2>


                    {{-- PARAGRAPH 7 --}}
                    <p
                        class="text-[14px]
                               md:text-[16px]
                               text-gray-600
                               leading-[1.9]
                               mb-7">

                        Ketika kebutuhan organisasi semakin berkembang,
                        perusahaan membutuhkan sistem yang mampu mengikuti
                        perubahan tersebut. Pengelolaan HR yang terintegrasi
                        dapat membantu perusahaan menjaga informasi tetap
                        terhubung dan mudah diakses oleh pihak yang
                        membutuhkan.

                    </p>


                    {{-- CLOSING --}}
                    <div
                        class="border-t
                               border-gray-200
                               mt-12 md:mt-16
                               pt-8">

                        <p
                            class="text-[13px]
                                   md:text-[14px]
                                   text-gray-500
                                   leading-relaxed
                                   text-justify">

                            Humanusia dirancang untuk membantu perusahaan
                            membangun pengelolaan sumber daya manusia yang
                            lebih praktis, terstruktur, dan terhubung.
                            Dengan satu sistem, kebutuhan HR dapat dikelola
                            secara lebih sederhana sehingga perusahaan dapat
                            lebih fokus pada perkembangan organisasi dan
                            orang-orang di dalamnya.

                        </p>

                    </div>

                </article>

            </div>

        </section>

    </main>


    {{-- ==========================================
         FOOTER
    =========================================== --}}
    @include('partials.footer')


</body>

</html>
