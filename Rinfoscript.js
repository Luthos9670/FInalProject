function openPopup(popupId) {
    document.getElementById('overlay').classList.add('show'); // Show overlay
    const popup = document.getElementById(popupId);
    popup.classList.add("open-popup"); // Show popup
}

function closePopup(popupId) {
    const popup = document.getElementById(popupId);
    popup.classList.remove("open-popup"); // Hide popup
    document.getElementById('overlay').classList.remove('show'); // Hide overlay
}

function closeAllPopups() {
    document.querySelectorAll('.popup').forEach(popup => {
        popup.classList.remove('open-popup'); // Hide all popups
    });
    document.getElementById('overlay').classList.remove('show'); // Hide overlay
}
