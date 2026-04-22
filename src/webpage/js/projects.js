const squareColors = ['#ffcc33', 'aqua', '#ff66aa'];
const defaultColor = 'lime';

document.querySelectorAll('.project-card a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.href;
        const card = link.closest('.project-card');
        const index = [...card.parentElement.children].indexOf(card);
        const color = squareColors[index] ?? defaultColor;

        const square = document.querySelector('.rotating-square');
        const rect = card.getBoundingClientRect();
        square.style.left = rect.left + rect.width / 2 + 'px';
        square.style.top = rect.top + rect.height / 2 + 'px';
        square.style.setProperty('--square-color', color);

        document.getElementById('loading-overlay').classList.add('active');
        setTimeout(() => {
            window.location.href = href;
        }, 2000);
    });
});
