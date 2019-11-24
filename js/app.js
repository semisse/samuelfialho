$(document).foundation();

window.addEventListener("beforeunload", function () {
  document.body.classList.add("animate-out");
});

$(document).ready(function() {

  if(window.location.pathname == '/') {

    var scroll = new SmoothScroll('a[href*="#"]');

  }

  $(".overlay-content").hide();
  $(".contactos").hide();
  $(".redes-sociais").hide();

  $("#burger").click(function(){

    $("#nav").width("100%");

    setTimeout(function(){
      $(".overlay-content").fadeIn(300).delay(100);
      $(".contactos").fadeIn(300).delay(200);
      $(".redes-sociais").fadeIn(300);

    }, 200);

  });

  $("#close").click(function(){

    $("#nav").width("0%");

    $(".overlay-content").fadeOut(300);
    $(".contactos").fadeOut(300);
    $(".redes-sociais").fadeOut(300);

  });

});

// scrollreveal
window.sr = ScrollReveal();
sr.reveal('.castelo-de-leiria .castelo');
sr.reveal('.cibv .imagens');
sr.reveal('.northspot03', {
  delay: 300
});
sr.reveal('.northspot02', {
  delay: 600
});
sr.reveal('.northspot01', {
  delay: 1200
});
sr.reveal('.cmnazare .imagens');


// parallax
window.addEventListener("DOMContentLoaded", scrollLoop, false);

var aplicacao = document.querySelector(".aplicacao");
var cartuxo = document.querySelector(".cartuxo");
var atlantico01 = document.querySelector(".atlantico01");
var atlantico02 = document.querySelector(".atlantico02");
var atlantico03 = document.querySelector(".atlantico03");
var space_tras = document.querySelector(".space-tras");
var space_meio = document.querySelector(".space-meio");
var space_frente = document.querySelector(".space-frente");

var yScrollPosition;

function scrollLoop(e) {
  yScrollPosition = window.scrollY;

  if(window.location.pathname == '/') {

    setTranslate(0, yScrollPosition * -.064, aplicacao);

  }

  if(window.location.pathname == '/work.html') {
    if (Foundation.MediaQuery.is('small only')) {
      setTranslate(0, yScrollPosition * -.064, aplicacao);
    } else{

      setTranslate(0, yScrollPosition * -.1, aplicacao);
      setTranslate(0, yScrollPosition * -.17, cartuxo);
      setTranslate(0, yScrollPosition * -.02, atlantico01);
      setTranslate(0, yScrollPosition * -.07, atlantico02);
      setTranslate(0, yScrollPosition * -.25, atlantico03);
      setTranslate(0, yScrollPosition * -.02, space_tras);
      setTranslate(0, yScrollPosition * -.07, space_meio);
      setTranslate(0, yScrollPosition * -.25, space_frente);


    }

  }


  requestAnimationFrame(scrollLoop);
}

function setTranslate(xPos, yPos, el) {
  el.style.transform = "translate3d(" + xPos + ", " + yPos + "px, 0";
}
