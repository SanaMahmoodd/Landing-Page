document.addEventListener('DOMContentLoaded', () => {
    const navList = document.getElementById('navList');
    const sections = document.querySelectorAll('section');
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    // Build Navigation
    sections.forEach((section) => {
        const navItem = document.createElement('li');
        const link = document.createElement('a');
        link.textContent = section.dataset.nav;
        link.href = `#${section.id}`;
        navItem.appendChild(link);
        navList.appendChild(navItem);
    });

    // Scroll Behavior
    navList.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target.tagName === 'A') {
            const targetSection = document.querySelector(e.target.getAttribute('href'));
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });

    // Active State
    document.addEventListener('scroll', () => {
        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            const link = navList.querySelector(`a[href="#${section.id}"]`);
            if (rect.top >= 0 && rect.top <= 300) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });

        // Show Scroll to Top Button
        if (window.scrollY > 300) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    // Scroll to Top
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const exploreBtn = document.getElementById('exploreBtn');
    const joinCommunityBtn = document.getElementById('joinCommunityBtn');
    const contactForm = document.querySelector('.contact-form');

    //"Explore Now"
    exploreBtn.addEventListener('click', () => {
        alert('Welcome to the NFT Marketplace! Explore our gallery below.');
        const gallerySection = document.getElementById('section1');
        gallerySection.scrollIntoView({ behavior: 'smooth' });
    });

    //"Join Now"
    joinCommunityBtn.addEventListener('click', () => {
        alert('Thank you for your interest! Join our community on Discord.');
        window.open('https://discord.com', '_blank');
    });

    // (Submit Button)
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Thank you for contacting us! We will get back to you soon.');
        contactForm.reset();
    });
});