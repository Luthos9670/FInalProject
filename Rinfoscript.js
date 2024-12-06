function openPopup(popupId) {
    document.getElementById('overlay').classList.add('show');
    const popup = document.getElementById(popupId);
    popup.classList.add("open-popup");
}

function closePopup(popupId) {
    const popup = document.getElementById(popupId);
    popup.classList.remove("open-popup");
    document.getElementById('overlay').classList.remove('show');
}

function closeAllPopups() {
    document.querySelectorAll('.popup').forEach(popup => {
        popup.classList.remove('open-popup');
    });
    document.getElementById('overlay').classList.remove('show');
}
