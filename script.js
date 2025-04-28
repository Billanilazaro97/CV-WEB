document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



window.addEventListener('load', function() {
    document.getElementById('loader').style.display = 'none';
});


function toggleMore() {
    var moreInfo = document.getElementById("moreInfo");
    var btn = document.getElementById("btnMore");
    
    if (moreInfo.style.display === "none") {
        moreInfo.style.display = "block";
        btn.innerHTML = "Ver menos";
    } else {
        moreInfo.style.display = "none";
        btn.innerHTML = "Ver más";
    }
}


window.addEventListener('scroll', function() {
    var elements = document.querySelectorAll('.fade-in');
    
    elements.forEach(function(element) {
        var position = element.getBoundingClientRect();
        if (position.top >= 0 && position.bottom <= window.innerHeight) {
            element.classList.add('visible');
        }
    });
});



// Efecto dinámico en el nombre
const myName = document.getElementById("myname");

myName.addEventListener("mouseenter", function() {
    myName.style.color = "#0077ff";
});

myName.addEventListener("mouseleave", function() {
    myName.style.color = ""; // Vuelve al color original del CSS
});


