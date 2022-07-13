const sr = ScrollReveal({
  origin: 'top',
  distance: '50px',
  duration: 2000,
  reset: false
});

ScrollReveal().reveal('.container_image', { delay: 100 });

var type = new Typed('#typed',{
  stringsElement: '#typed-strings',
  typeSpeed:30
})