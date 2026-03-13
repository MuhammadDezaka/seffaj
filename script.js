// Initialize AOS Library for Animations
AOS.init({
    once: true,
    offset: 100,
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links li a');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
navItems.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 15px rgba(0,0,0,0.05)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// Slideshow Image Fading Logic
document.addEventListener("DOMContentLoaded", function() {
    // Mencari semua container slideshow
    const slideshows = document.querySelectorAll('.slideshow-wrapper');
    const showMoreBtns = document.querySelectorAll('.show-more-btn');
    showMoreBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Mengambil elemen <ul> (task-list) tepat di atas tombol
            const taskList = this.previousElementSibling;
            
            // Toggle (tambah/hapus) class 'collapsed'
            taskList.classList.toggle('collapsed');
            
            // Mengubah teks dan ikon panah
            if (taskList.classList.contains('collapsed')) {
                this.innerHTML = 'Show More <i class="fa-solid fa-chevron-down"></i>';
            } else {
                this.innerHTML = 'Show Less <i class="fa-solid fa-chevron-up"></i>';
            }
        });
    });
    slideshows.forEach(wrapper => {
        const slides = wrapper.querySelectorAll('.slide');
        let currentSlide = 0;
        
        // Cek jika ada lebih dari 1 gambar di dalam container
        if(slides.length > 1) {
            // Jalankan fungsi setiap 3 detik (3000ms)
            setInterval(() => {
                // Hapus kelas active dari slide saat ini
                slides[currentSlide].classList.remove('active');
                
                // Pindah ke slide berikutnya (atau kembali ke slide 0 jika sudah di akhir)
                currentSlide = (currentSlide + 1) % slides.length;
                
                // Tambahkan kelas active ke slide yang baru
                slides[currentSlide].classList.add('active');
            }, 3000); // Waktu tampil 3 detik per gambar
        }
    });
});