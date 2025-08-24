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
          const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const icon = mobileMenu.querySelector('i');
                icon.classList.add('fa-bars');
                icon.classList.remove('fa-times');
            });
        });
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = target.offsetTop - headerHeight;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
         window.addEventListener('scroll', () => {
            const header = document.querySelector('.header');
            const scrollY = window.scrollY;
            
            if (scrollY > 100) {
                header.style.background = 'rgba(255, 255, 255, 0.98)';
                header.style.backdropFilter = 'blur(20px)';
                header.style.boxShadow = '0 5px 30px rgba(139, 69, 19, 0.1)';
            } else {
                header.style.background = 'rgba(255, 255, 255, 0.95)';
                header.style.backdropFilter = 'blur(20px)';
                header.style.boxShadow = 'none';
            }
            
            // Parallax effect for hero
            const hero = document.querySelector('.hero');
            if (hero) {
                const parallaxElements = hero.querySelectorAll('.parallax');
                parallaxElements.forEach(element => {
                    const speed = 0.5;
                    element.style.transform = `translateY(${scrollY * speed}px)`;
                });
            }
        });

           const allProductCards = document.querySelectorAll('.product-card');
        allProductCards.forEach(card => {
            card.addEventListener('mouseenter', (e) => {
                card.style.boxShadow = '0 25px 50px rgba(139, 69, 19, 0.3)';
                
                // 3D tilt effect
                card.addEventListener('mousemove', handleCardTilt);
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.boxShadow = '0 15px 35px rgba(139, 69, 19, 0.1)';
                card.style.transform = 'translateY(0) rotateX(0) rotateY(0)';
                card.removeEventListener('mousemove', handleCardTilt);
            });
        });
          function handleCardTilt(e) {
            const card = e.currentTarget;
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `translateY(-15px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        }
 window.addEventListener('load', () => {
            const loading = document.getElementById('loading');
            setTimeout(() => {
                loading.classList.add('hidden');
                // Initialize scroll animations after loading
                initScrollAnimations();
            }, 1500);
        }); 
           function initScrollAnimations() {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate');
                        
                        // Stagger animation for product cards
                        if (entry.target.classList.contains('product-card')) {
                            const cards = document.querySelectorAll('.product-card');
                            cards.forEach((card, index) => {
                                setTimeout(() => {
                                    card.classList.add('animate');
                                }, index * 150);
                            });
                        }
                    }
                });
            }, observerOptions);

            // Observe elements for animation
            document.querySelectorAll('.animate-on-scroll').forEach(el => {
                observer.observe(el);
            });
        }

         document.querySelectorAll('.order-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Get product details
                const productCard = e.target.closest('.product-card');
                const productName = productCard.querySelector('h3').textContent;
                const productPrice = productCard.querySelector('.price').textContent;
                const productDesc = productCard.querySelector('p').textContent.substring(0, 50) + '...';
                
                // Visual feedback - button loading state
                const originalText = btn.textContent;
                btn.textContent = 'Opening WhatsApp...';
                btn.style.opacity = '0.7';
                btn.disabled = true;
                
                // Create detailed WhatsApp message
                const message = encodeURIComponent(
                    `🍰 *Order from MashaAllah Sweets & Bakers* 🍰\n\n` +
                    `📦 *Product:* ${productName}\n` +
                    `💰 *Price:* ${productPrice}\n` +
                    `📝 *Description:* ${productDesc}\n\n` +
                    `📍 *Delivery to:* [Please specify your address]\n` +
                    `📞 *Contact:* [Your phone number]\n\n` +
                    `Hello! I would like to place an order for the above item. Please let me know the availability and total cost including delivery charges.`
                );
                
                // Open WhatsApp with enhanced error handling
                try {
                    const whatsappURL = `https://wa.me/9205726403093?text=${message}`;
                    window.open(whatsappURL, '_blank');
                    
                    // Show success feedback
                    setTimeout(() => {
                        btn.textContent = '✓ Sent to WhatsApp';
                        btn.style.background = 'linear-gradient(135deg, #28a745 0%, #20c997 100%)';
                    }, 500);
                    
                    // Reset button after 3 seconds
                    setTimeout(() => {
                        btn.textContent = originalText;
                        btn.style.opacity = '1';
                        btn.style.background = 'var(--gradient-primary)';
                        btn.disabled = false;
                    }, 3000);
                    
                } catch (error) {
                    console.error('Error opening WhatsApp:', error);
                    
                    // Show error feedback
                    btn.textContent = '❌ Error occurred';
                    btn.style.background = 'linear-gradient(135deg, #dc3545 0%, #c82333 100%)';
                    
                    // Reset button after 3 seconds
                    setTimeout(() => {
                        btn.textContent = originalText;
                        btn.style.opacity = '1';
                        btn.style.background = 'var(--gradient-primary)';
                        btn.disabled = false;
                    }, 3000);
                    
                    // Fallback: Copy phone number to clipboard
                    navigator.clipboard.writeText('057-2640393').then(() => {
                        alert('WhatsApp failed to open. Phone number (057-2640393) copied to clipboard!');
                    }).catch(() => {
                        alert('WhatsApp failed to open. Please call us at: 057-2640393');
                    });
                }
            });
        });
 document.addEventListener('DOMContentLoaded', () => {
            const phoneNumbers = document.querySelectorAll('.contact-item p');
            phoneNumbers.forEach(p => {
                if (p.textContent.includes('057')) {
                    p.style.cursor = 'pointer';
                    p.style.color = 'var(--secondary-brown)';
                    p.addEventListener('click', () => {
                        window.location.href = 'tel:05726403093';
                    });
                }
            });
        });

          function openWhatsApp() {
            const message = encodeURIComponent("Hello! I'm interested in your bakery products. Could you please share more details?");
            window.open(`https://wa.me/9205726403093?text=${message}`, '_blank');
        }

        // Add click event to WhatsApp icon
        document.addEventListener('DOMContentLoaded', () => {
            const whatsappIcon = document.querySelector('.fab.fa-whatsapp');
            if (whatsappIcon) {
                whatsappIcon.parentElement.addEventListener('click', (e) => {
                    e.preventDefault();
                    openWhatsApp();
                });
            }
        });