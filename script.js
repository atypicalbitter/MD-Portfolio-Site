function toggleMenu () {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

window.onload = function() {
    var nametitleElement = document.querySelector('.nametitle');
    nametitleElement.classList.add('typing-animation'); // Corrected the variable name
    nametitleElement.addEventListener('animationend', function() {
        nametitleElement.style.borderRight = 'none'; // Corrected the variable name
    });
};
