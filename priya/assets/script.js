 // --- MOBILE NAV TOGGLE ---
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');

        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.querySelector('i').classList.toggle('fa-bars');
            hamburger.querySelector('i').classList.toggle('fa-xmark');
        });

        // Close nav menu when clicking a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.querySelector('i').classList.add('fa-bars');
                hamburger.querySelector('i').classList.remove('fa-xmark');
            });
        });

        // --- DYNAMIC NAV LINK HIGHLIGHTING ON SCROLL ---
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');

        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (pageYOffset >= (sectionTop - 120)) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(current)) {
                    link.classList.add('active');
                }
            });
        });

        // --- MENU ISOTOPE-LIKE FILTERING ---
        const tabBtns = document.querySelectorAll('.tab-btn');
        const menuItems = document.querySelectorAll('.menu-item');

        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Change active state class
                tabBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filterValue = btn.getAttribute('data-filter');

                menuItems.forEach(item => {
                    if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                        item.style.display = 'block';
                        // Small timeout to allow transition opacity
                        setTimeout(() => item.style.opacity = '1', 10);
                    } else {
                        item.style.opacity = '0';
                        item.style.display = 'none';
                    }
                });
            });
        });

        // --- RESERVATION MODAL TOGGLE ---
        const modal = document.getElementById('reservation-modal');
        const openModalBtn = document.querySelector('.open-reserve-btn');
        const closeModalBtn = document.querySelector('.close-modal');

        openModalBtn.addEventListener('click', () => modal.classList.add('active'));
        closeModalBtn.addEventListener('click', () => modal.classList.remove('active'));
        
        // Close modal if clicking outside content block
        window.addEventListener('click', (e) => {
            if (e.target === modal) modal.classList.remove('active');
        });

        // --- FORM SUBMISSION SIMULATION ---
        const handleFormSubmit = (e) => {
            e.preventDefault();
            alert('Thank you! Your booking request has been received. We will send a confirmation text shortly.');
            e.target.reset();
            modal.classList.remove('active');
        };

        document.getElementById('main-reservation-form').addEventListener('submit', handleFormSubmit);
        document.getElementById('modal-reservation-form').addEventListener('submit', handleFormSubmit);