document.querySelector('.user button').addEventListener('click', function () {
    const sidePanel = document.getElementById('sidePanel');
    sidePanel.classList.toggle('active');
});

document.querySelector('.back-btn').addEventListener('click', function () {
    const sidePanel = document.getElementById('sidePanel');
    sidePanel.classList.remove('active');
});
