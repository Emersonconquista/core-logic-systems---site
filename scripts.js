const zoomText = document.getElementById('zoomText');
const subtext = document.getElementById('subtext');
const heroCta = document.getElementById('heroCta');
const cursor = document.getElementById('cursor');

if (window.innerWidth > 1024) {
    document.addEventListener('mousemove', e => {
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    });
}

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    let scaleValue = 1 + (scrollY / 150);
    if (scaleValue > 12) scaleValue = 12;
    zoomText.style.transform = `scale(${scaleValue})`;
    zoomText.style.opacity = 1 - (scrollY / 1000);
    
    if (scrollY > 120) {
        subtext.classList.add('visible');
        heroCta.classList.add('visible');
    }

    document.querySelectorAll('.reveal').forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 50) el.classList.add('active');
    });
});

function toggleFaq(el) {
    const answer = el.querySelector('.faq-answer');
    const span = el.querySelector('span');
    const isOpen = answer.style.display === 'block';
    document.querySelectorAll('.faq-answer').forEach(a => a.style.display = 'none');
    document.querySelectorAll('.faq-question span').forEach(s => s.innerText = '+');
    if (!isOpen) {
        answer.style.display = 'block';
        span.innerText = '-';
    }
}