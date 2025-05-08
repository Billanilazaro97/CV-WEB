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




const myName = document.getElementById("myname");

myName.addEventListener("mouseenter", function() {
    myName.style.color = "#0077ff";
});

myName.addEventListener("mouseleave", function() {
    myName.style.color = ""; 
});


// Modo Oscuro y Observer se inicializan al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
  // 1. Modo Oscuro
  const darkModeToggle = document.getElementById('darkModeToggle');
  if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
  }
  darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const currentMode = document.body.classList.contains('dark-mode') ? 'enabled' : 'disabled';
    localStorage.setItem('darkMode', currentMode);
  });

  //  Animación Fade In
  const fadeElements = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  fadeElements.forEach(el => observer.observe(el));
});

// Función para mostrar/ocultar más información
function toggleMore() {
  const moreInfo = document.getElementById('moreInfo');
  const btnMore = document.getElementById('btnMore');
  
  if (moreInfo.style.display === 'none' || moreInfo.style.display === '') {
    moreInfo.style.display = 'block';
    btnMore.textContent = 'Ver menos';
  } else {
    moreInfo.style.display = 'none';
    btnMore.textContent = 'Ver más';
  }
}


window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  loader.style.display = 'none';
});