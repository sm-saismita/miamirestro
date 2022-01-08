$(document).ready(function() {

  $(".rslides").responsiveSlides();

  $("#secret").hide();

  $("#button1").click(function() {
      $("#secret").show();
  });


  $("p").css("font-size", "23px");

  $("footer").html("<p>Come over here for an extra tip!</p>");

  $("footer").mouseover(function() {
      $("footer p").html("Spread butter on two pieces of toast and heat in the oven to enjoy with your eggs! ");
  });

  $("footer").mouseleave(function() {
      $("footer p").html("Bon Apetit!");
  });

  // Default call for corausal
  var slideIndex = 0;
  showSlides();

  function showSlides() {
      var i;
      var slides = $(".mySlides");
      var dots = $(".dot");
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {
          slideIndex = 1
      }
      slides[slideIndex - 1].style.display = "block";

      setTimeout(showSlides, 2000);
  }

  // While scroll down, navigation bar should be fixed and changing the background color
  $(window).scroll(function() {
      scroll_pos = $(this).scrollTop();
      if (scroll_pos > 100) {
          $('.wrapper').toggleClass('scrolled', scroll_pos > 100);
          $(".nav-bar").css('background-color', '#000');
      } else {
          $(".nav-bar").css('background-color', 'transparent');
      }
  });

  // On click of Home nav
  $("#nav-home").click(function() {
      $('.navbar-nav li.active').removeClass('active');
      $('.navbar-nav li.home').addClass('active');

      $("html, body").animate({
          scrollTop: 0
      }, 1000);
      return false;
  });

  // On click of restaurant nav
  $("#nav-resturant").click(function() {
      $('html, body').animate({
          scrollTop: eval($('#resturant').offset().top - 70)
      }, 1000);
  });

  // On click of nightclub nav
  $("#nav-nightclub").click(function() {
      debugger;
      $('html, body').animate({
          scrollTop: $('#nightclub').offset().top
      }, 1000);
  });

  // On click of hotel nav
  $("#nav-hotel1").click(function() {
      $('html, body').animate({
          scrollTop: eval($('#hotel').offset().top - 70)
      }, 1000);
  });

  $("#nav-hotel2").click(function() {
      $('html, body').animate({
          scrollTop: eval($('#hotel').offset().top - 70)
      }, 1000);
  });

  // On click of contactus nav
  $("#nav-contactus").click(function() {
      $('html, body').animate({
          scrollTop: eval($('#contactus').offset().top - 100)
      }, 1000);
  });

  $('.navbar-nav').on('click', 'li', function() {
      $('.navbar-nav li.active').removeClass('active');
      console.log($(this));
      $(this).addClass('active');
  });

  $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
          $('#scroll').fadeIn();
      } else {
          $('#scroll').fadeOut();
      }
  });

  // Scroll to top
  $('#scroll').click(function() {
      $("html, body").animate({
          scrollTop: 0
      }, 600);
      return false;
  });

});