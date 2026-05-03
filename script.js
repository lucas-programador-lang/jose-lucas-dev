lucide.createIcons();

// Revelação de seções ao scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
    });
}, { threshold: 0.1 });

document.querySelectorAll('.section-reveal').forEach(el => observer.observe(el));

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const item = button.parentElement;
        item.classList.toggle('active');
    });
});

// Parallax sutil no blob de fundo
document.addEventListener('mousemove', (e) => {
    const blob = document.querySelector('.blob-glow');
    if(blob) {
        // Suavizei a divisão para o movimento ser mais sutil e elegante
        const x = (window.innerWidth - e.pageX * 2) / 100;
        const y = (window.innerHeight - e.pageY * 2) / 100;
        blob.style.transform = `translate(${x}px, ${y}px)`;
    }
});
