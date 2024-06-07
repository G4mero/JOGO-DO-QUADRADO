document.addEventListener('DOMContentLoaded', () => {
    let score = 0;
    const scoreElement = document.getElementById('score');
    const target = document.getElementById('target');
    const gameArea = document.getElementById('game-area');

    target.addEventListener('click', () => {
        score++;
        scoreElement.textContent = score;
        moveTarget();
    });

    function moveTarget() {
        const gameAreaRect = gameArea.getBoundingClientRect();
        const maxX = gameAreaRect.width - target.clientWidth;
        const maxY = gameAreaRect.height - target.clientHeight;
        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        target.style.left = `${randomX}px`;
        target.style.top = `${randomY}px`;
    }

    moveTarget();
});
