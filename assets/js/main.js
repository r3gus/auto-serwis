const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
const navLinks = document.querySelectorAll('.nav-link');

if(menuToggle) {
    menuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
    });

    document.addEventListener('click', (e) => {
        if (!menuToggle.contains(e.target) && !mainNav.contains(e.target) && mainNav.classList.contains('active')) {
            mainNav.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });
}

const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', function() {
        const answer = this.nextElementSibling;
        const icon = this.querySelector('.indicator');
        const isOpen = answer.style.maxHeight;

        document.querySelectorAll('.faq-answer').forEach(el => el.style.maxHeight = null);
        document.querySelectorAll('.indicator').forEach(el => el.innerHTML = '&#43;');

        if (!isOpen) {
            answer.style.maxHeight = answer.scrollHeight + "px";
            icon.innerHTML = '&#8722;';
        }
    });
});

const sections = document.querySelectorAll('section');

const activeLinkObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${entry.target.id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}, {
    rootMargin: '-80px 0px -60% 0px',
    threshold: 0
});

sections.forEach(section => activeLinkObserver.observe(section));

const animatedElements = document.querySelectorAll('.scroll-reveal');

const appearObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
});

animatedElements.forEach(el => appearObserver.observe(el));

let isDecoded = false;

function decodeContactData() {
    if (isDecoded) return;
    isDecoded = true;
    
    const elements = document.querySelectorAll('.protected-data');
    elements.forEach(el => {
        try {
            const type = atob(el.getAttribute('data-t')); 
            const rawValue = atob(el.getAttribute('data-v')); 
            const formatAttr = el.getAttribute('data-f');
            const displayValue = formatAttr ? atob(formatAttr) : rawValue;
            
            el.innerHTML = `<a href="${type}:${rawValue}" style="transition: opacity 0.3s; opacity: 1;">${displayValue}</a>`;
        } catch (e) {}
    });
    
    ['mousemove', 'touchstart', 'scroll', 'keydown'].forEach(evt => {
        window.removeEventListener(evt, decodeContactData);
    });
}

['mousemove', 'touchstart', 'scroll', 'keydown'].forEach(evt => {
    window.addEventListener(evt, decodeContactData);
});

const cookieBanner = document.getElementById('cookieBanner');
const acceptCookiesBtn = document.getElementById('acceptCookies');

if (cookieBanner && acceptCookiesBtn) {
    if (!localStorage.getItem('cookiesAccepted')) {
        cookieBanner.classList.add('show');
    }

    acceptCookiesBtn.addEventListener('click', () => {
        localStorage.setItem('cookiesAccepted', 'true');
        cookieBanner.classList.remove('show');
    });
}