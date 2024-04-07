
//navbar fixed top scroll white
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

//submitting contact form
function submitForm() {
    //retrieving data
    var namef = document.getElementById("firstName").value;
    var namel = document.getElementById("lastName").value;
    var emailaddress = document.getElementById("emailadd").value;
    var phone_num = document.getElementById("phone").value;
    var message = document.getElementById("message").value;


    //storing data in local storage
    var first_name = localStorage.setItem("namef", namef);
    var last_name = localStorage.setItem("namel", namel);
    var email_add = localStorage.setItem("emailaddress", emailaddress);
    var phone_number = localStorage.setItem("phone_num", phone_num);
    var msg = localStorage.setItem("message", message);

    //confirmation message
    alert("Thank you for filling out the form! Please expect a response within 2-3 days :)")
}

function changeFontSize(fontSize) {
    // all text elements selected on the page
    var textElements = document.querySelectorAll('.hero_title, .accordion-body, p, .hero_title, .hero_desc, .nav-link, .navbar-brand, h3, .form-label, .about-paragraph, .contact-header, .contact-subheader, .contact-text, .btn, .experience-header');
    
    // Loop through each text element and set its font size
    textElements.forEach(function(element) {
        element.style.fontSize = fontSize;
    });
}


