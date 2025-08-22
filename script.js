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
  categoryItems.forEach(item => {
            item.addEventListener('click', () => {
                const category = item.dataset.category;
                
                // Update active category
                categoryItems.forEach(cat => cat.classList.remove('active'));
                item.classList.add('active');
                
                // Filter products
                filterProducts(category);
                
                // Update filter display
                updateFilterDisplay(category, item.querySelector('h4').textContent);
                
                // Close side menu
                closeSideMenu();
                
                // Scroll to products section
                document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
            });
        });
         function filterProducts(category) {
            productCards.forEach(card => {
                if (category === 'all' || card.dataset.category === category) {
                    card.style.display = 'block';
                    card.classList.add('animate');
                } else {
                    card.style.display = 'none';
                }
            });
            
            // Trigger re-layout animation
            setTimeout(() => {
                productCards.forEach((card, index) => {
                    if (card.style.display !== 'none') {
                        card.style.animationDelay = `${index * 0.1}s`;
                    }
                });
            }, 100);
        }

         function updateFilterDisplay(category, categoryName) {
            if (category === 'all') {
                categoryFilter.classList.remove('active');
            } else {
                categoryFilter.classList.add('active');
                filterTitleText.textContent = categoryName;
            }
        }

        // Clear filter
        clearFilterBtn.addEventListener('click', () => {
            // Reset all categories
            categoryItems.forEach(cat => cat.classList.remove('active'));
            categoryItems[0].classList.add('active'); // Activate "All Products"
            
            // Show all products
            filterProducts('all');
            
            // Hide filter display
            categoryFilter.classList.remove('active');
        });