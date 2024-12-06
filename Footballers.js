const flipContainers = document.querySelectorAll('.flip-container');

flipContainers.forEach(container => {
    container.addEventListener('click', () => {
        const imageBox = container.querySelector('.image-box');
        imageBox.classList.toggle('flipped');
    });
});
