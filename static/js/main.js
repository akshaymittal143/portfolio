// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
        const expanded = hamburger.getAttribute('aria-expanded') === 'true';
        hamburger.setAttribute('aria-expanded', (!expanded).toString());
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu) navMenu.classList.remove('active');
        if (hamburger) {
            hamburger.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
        }
    });
});

// Close mobile menu on Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        if (hamburger) {
            hamburger.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
            hamburger.focus();
        }
    }
});

// Smooth scrolling for in-page anchor links (only intercept when target exists)
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (!href || href === '#' || href.length < 2) return;
        const target = document.querySelector(href);
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Navbar background on scroll
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
    }
    
    lastScroll = currentScroll;
});

// Footer year
document.querySelectorAll('.year').forEach(el => {
    el.textContent = new Date().getFullYear().toString();
});

/** Convert raw YouTube iframes (e.g. videos.html) into poster + click-to-load embed */
function upgradeYouTubeIframesToPosters() {
    document.querySelectorAll('.video-container > iframe').forEach((iframe) => {
        const src = iframe.getAttribute('src') || '';
        if (!src.includes('youtube.com/embed') && !src.includes('youtube-nocookie.com/embed')) return;
        const m = src.match(/\/embed\/([^?&/]+)/);
        if (!m) return;
        const id = m[1];
        const title = iframe.getAttribute('title') || 'YouTube video';
        const wrap = iframe.parentElement;
        if (!wrap || !wrap.classList.contains('video-container')) return;

        wrap.classList.add('video-container--youtube');
        wrap.dataset.youtubeId = id;
        wrap.dataset.youtubeTitle = title;
        wrap.removeAttribute('data-loaded');

        const safeTitle = title
            .replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/</g, '&lt;');

        wrap.innerHTML =
            '<button type="button" class="youtube-poster" aria-label="Load and play video: ' +
            safeTitle +
            '">' +
            '<img class="youtube-poster-img" src="https://i.ytimg.com/vi/' +
            id +
            '/hqdefault.jpg" alt="" width="1280" height="720" loading="lazy" decoding="async">' +
            '<span class="youtube-poster-overlay" aria-hidden="true">' +
            '<span class="youtube-poster-play-icon"></span>' +
            '<span class="youtube-poster-label">Play video</span>' +
            '</span></button>';
    });
}

// YouTube: delegated click (index.html posters + upgraded videos.html)
document.addEventListener('click', (e) => {
    const btn = e.target.closest('.video-container--youtube .youtube-poster');
    if (!btn) return;
    const wrap = btn.closest('.video-container--youtube');
    if (!wrap || wrap.getAttribute('data-loaded') === '1') return;
    const id = wrap.dataset.youtubeId;
    const title = wrap.dataset.youtubeTitle || 'YouTube video';
    if (!id) return;
    wrap.setAttribute('data-loaded', '1');
    const safeTitle = title.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
    wrap.innerHTML =
        '<iframe src="https://www.youtube-nocookie.com/embed/' +
        id +
        '?rel=0&autoplay=1" title="' +
        safeTitle +
        '" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen referrerpolicy="strict-origin-when-cross-origin" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe>';
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
document.addEventListener('DOMContentLoaded', () => {
    upgradeYouTubeIframesToPosters();

    const cards = document.querySelectorAll('.award-card, .publication-card, .book-card, .speaking-card, .skill-category, .repo-card, .experience-card, .project-card, .video-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// Active navigation link highlighting
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});
