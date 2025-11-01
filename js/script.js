const profilePic = document.querySelector('.profile-pic');
const sections = document.querySelectorAll('section, footer');

profilePic.addEventListener('mouseenter', () => {
    sections.forEach(sec => sec.classList.add('move-down'));
});

profilePic.addEventListener('mouseleave', () => {
    sections.forEach(sec => sec.classList.remove('move-down'));
});

// download

const express = require('express');
const path = require('path');
const app = express();

app.get('/assets/curriculo.pdf', (req, res) => {
    const file = path.join(__dirname, 'public/assets/curriculo.pdf'); 
    res.download(file, 'Matheus-Leite-Rodrigues-CV.pdf'); 
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});


const marquees = document.querySelectorAll('.marquee');

marquees.forEach(marquee => {
    const content = marquee.querySelector('.marquee-content');
    let speed = 1; // pixels por frame
    let pos = 0;

    function animate() {
        pos -= speed;
        if (Math.abs(pos) >= content.scrollWidth / 2) pos = 0; // volta quando metade do conteúdo passa
        content.style.transform = `translateX(${pos}px)`;
        requestAnimationFrame(animate);
    }

    animate();
});
