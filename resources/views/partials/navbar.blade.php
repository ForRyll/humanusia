<nav class="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md border-b border-gray-100/80 transition-all duration-300">
    <div class="max-w-[1350px] mx-auto px-6 md:px-10">
        <div class="flex items-center justify-between h-20">

            {{-- LOGO HUMANUSIA --}}
            <a href="/" class="flex items-center gap-3 group">
                <img
                    src="{{ asset('images/humanrem.png') }}"
                    alt="Humanusia Logo"
                    class="h-8 md:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                >
            </a>

            {{-- MENU DESKTOP (Tampil di Layar Laptop / md:flex) --}}
            <div class="hidden md:flex items-center gap-8">
                <a href="/" class="text-sm font-medium text-gray-700 hover:text-[#c8232c] transition-colors">Beranda</a>
                <a href="#fitur" class="text-sm font-medium text-gray-700 hover:text-[#c8232c] transition-colors">Fitur</a>
                <a href="#harga" class="text-sm font-medium text-gray-700 hover:text-[#c8232c] transition-colors">Harga</a>
                <a href="/blog" class="text-sm font-medium text-gray-700 hover:text-[#c8232c] transition-colors">Blog</a>
                <a href="/about" class="text-sm font-medium text-gray-700 hover:text-[#c8232c] transition-colors">Tentang Kami</a>
            </div>

            {{-- TOMBOL AKSAN (LOG IN & GET STARTED) & HAMBURGER MOBILE --}}
            <div class="flex items-center gap-4">

                {{-- Log In --}}
                <a href="/login" class="text-sm font-semibold text-gray-800 hover:text-[#c8232c] transition-colors px-2 py-1">
                    Log in
                </a>

                {{-- Get Started Button --}}
                <a href="/register" class="px-5 py-2.5 rounded-xl bg-white border border-gray-200 text-[#c8232c] text-sm font-bold shadow-sm hover:shadow-md hover:border-[#c8232c] hover:bg-gray-50 transition-all duration-300">
                    Get Started
                </a>

                {{-- TOMBOL HAMBURGER (Hanya muncul di Mobile / Layar HP) --}}
                <button id="mobile-menu-button" type="button" class="md:hidden p-2 rounded-lg text-gray-600 hover:text-[#c8232c] hover:bg-gray-100 focus:outline-none transition-colors" aria-label="Toggle Menu">
                    <svg id="hamburger-icon" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                    <svg id="close-icon" class="w-6 h-6 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>

            </div>

        </div>
    </div>

    {{-- MENU MOBILE DROPDOWN (Tampil saat tombol Hamburger di-klik) --}}
    <div id="mobile-menu" class="hidden md:hidden bg-white/95 backdrop-blur-md border-b border-gray-100 px-6 pt-3 pb-6 space-y-3 transition-all duration-300">
        <a href="/" class="block px-3 py-2 rounded-lg text-base font-medium text-gray-700 hover:text-[#c8232c] hover:bg-gray-50 transition-colors">Beranda</a>
        <a href="#fitur" class="block px-3 py-2 rounded-lg text-base font-medium text-gray-700 hover:text-[#c8232c] hover:bg-gray-50 transition-colors">Fitur</a>
        <a href="#harga" class="block px-3 py-2 rounded-lg text-base font-medium text-gray-700 hover:text-[#c8232c] hover:bg-gray-50 transition-colors">Harga</a>
        <a href="/blog" class="block px-3 py-2 rounded-lg text-base font-medium text-gray-700 hover:text-[#c8232c] hover:bg-gray-50 transition-colors">Blog</a>
        <a href="/about" class="block px-3 py-2 rounded-lg text-base font-medium text-gray-700 hover:text-[#c8232c] hover:bg-gray-50 transition-colors">Tentang Kami</a>
    </div>
</nav>

{{-- SCRIPT INTERAKTIF HAMBURGER MENU --}}
<script>
    document.addEventListener('DOMContentLoaded', function () {
        const menuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        const hamburgerIcon = document.getElementById('hamburger-icon');
        const closeIcon = document.getElementById('close-icon');

        if (menuButton && mobileMenu) {
            menuButton.addEventListener('click', function () {
                mobileMenu.classList.toggle('hidden');
                hamburgerIcon.classList.toggle('hidden');
                closeIcon.classList.toggle('hidden');
            });
        }
    });
</script>
