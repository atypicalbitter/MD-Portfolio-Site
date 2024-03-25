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
window.addEventListener('load', function() {
    var sectionText = document.querySelector('.section-text-p1');
    var nameTitle = document.querySelector('.nametitle');
    
    sectionText.classList.add('fade-in');
    nameTitle.classList.add('fade-in');
});



window.addEventListener('scroll', function() {
    var aboutSection = document.getElementById('about');
    var skillsSection = document.getElementById('skills');
    var projectsSection = document.getElementById('projects');
    
    
    var sections = [aboutSection, skillsSection, projectsSection];
    
    sections.forEach(function(section) {
        var title = section.querySelector('.title');
        var sectionPosition = section.getBoundingClientRect().top;
        var windowHeight = window.innerHeight;

        if (sectionPosition < windowHeight / 1.5) { // Adjust the threshold as needed
            title.classList.add('fade-in');
        }
    });
});



