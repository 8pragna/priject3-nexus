// scripts.js
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = '#3498db';
    });

    link.addEventListener('mouseout', () => {
        link.style.color = '#fff';
    });
});
