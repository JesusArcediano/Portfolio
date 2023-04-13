const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const botonFormulario = document.querySelector('.main_contact_form-form-button');
const pruebas = document.querySelector('.prueba');
const formulario = document.querySelector('.main_contact_form-form');
const toggleButton = document.querySelector(".toggle-button");
const mobileNav = document.querySelector(".mobile-nav");
const mobileNavClose = document.querySelector(".mobile-nav_close");
const mobileNavLink = document.querySelectorAll(".mobile-nav_link");



botonFormulario.addEventListener('click', function(e) {
    e.preventDefault();
    modal.classList.add("open");
    backdrop.style.display = 'block';
    setTimeout(function(){
      backdrop.classList.add("open");
    }, 10);
    setTimeout(function(){
      modal.classList.remove("open");
      backdrop.classList.remove("open");
      setTimeout(function(){
        formulario.submit();
      }, 10);
    }, 3000);
});



backdrop.addEventListener("click", function() {
  mobileNav.classList.remove("open");
  closeModal();
});

mobileNavClose.addEventListener("click", function() {
  mobileNav.classList.remove("open");
  closeModal();
});

for (let i = 0; i < mobileNavLink.length; i++) {
  mobileNavLink[i].addEventListener("click", function() {
    mobileNav.classList.remove("open");
    closeModal();
  }); 

}


function closeModal() {
  if (modal) {
    modal.classList.remove("open");
  }
  backdrop.classList.remove("open");
  setTimeout(function(){
    backdrop.style.display = 'none';
  }, 200);
}


toggleButton.addEventListener("click", function() {
  mobileNav.classList.add("open");
  backdrop.style.display = 'block';
  setTimeout(function(){
    backdrop.classList.add("open");
  }, 10);
});





// Lazy Images
const imgTarget = document.querySelectorAll('img[data-src]');

const loadImg = function(entries, observer){
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function(){
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0.9,
  rootMargin: '-20px'
});

imgTarget.forEach(function(img){
    imgObserver.observe(img);
});

























// const botonDePrueba = document.querySelector('.botonPrueba');
// const backdrop = document.querySelector(".capa");

// botonDePrueba.addEventListener('click', function(){
//   console.log('boton pulsado');
//   backdrop.classList.add('backdrop');
//   backdrop.classList.add('open');
// })