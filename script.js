document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.navbar');

    window.onscroll = function() {
        var top = window.scrollY;
        if (top >= 100) {
            header.classList.add('navbarwhite');
        } else {
            header.classList.remove('navbarwhite');
        }
    }
});
