 let currentSlide = 0;
        const slides = document.querySelectorAll('.slide');
        const dots = document.querySelectorAll('.slider-dot');
        

function showSlide(n) {
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            
            if (n >= slides.length) currentSlide = 0;
            if (n < 0) currentSlide = slides.length - 1;
            
            slides[currentSlide].classList.add('active');
            dots[currentSlide].classList.add('active');
        }
         function nextSlide() {
            currentSlide++;
            showSlide(currentSlide);
        }
        
        // Auto slide every 5 seconds
        setInterval(nextSlide, 5000);
        
        // Dot navigation
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentSlide = index;
                showSlide(currentSlide);
            });
        });
          const mobileMenu = document.getElementById('mobile-menu');
        const navMenu = document.getElementById('nav-menu');
        const sideMenu = document.getElementById('side-menu');
        const menuOverlay = document.getElementById('menu-overlay');
        const closeMenu = document.getElementById('close-menu');

          mobileMenu.addEventListener('click', () => {
            sideMenu.classList.toggle('active');
            menuOverlay.classList.toggle('active');
            document.body.style.overflow = sideMenu.classList.contains('active') ? 'hidden' : 'auto';
        });
          function closeSideMenu() {
            sideMenu.classList.remove('active');
            menuOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        closeMenu.addEventListener('click', closeSideMenu);
        menuOverlay.addEventListener('click', closeSideMenu);

                const categoryItems = document.querySelectorAll('.category-item');
        const productCards = document.querySelectorAll('.product-card');
        const categoryFilter = document.getElementById('category-filter');
        const filterTitleText = document.getElementById('filter-title-text');
        const clearFilterBtn = document.getElementById('clear-filter');
