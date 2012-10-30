//= require_tree .

/**
 * Initialize functions after DOM is ready.
 */
$(document).ready(function() {

  // Declare variables.
  var body = $('body');

  // Add mobile or desktop class.
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
    body.addClass('mobile');
  } else {
    body.addClass('desktop');
  };

  // Calculate correct height of the body.
  body.height($(window).height());

  // If the screen is in portrait, add class portrait.
  if (body.height() > (body.width() * 0.71)) {
    body.addClass('portrait');
  };

  // Call modules.
  dropdowns('body.stores > ul');

  // Apply sticky section headers.
  if (body.hasClass('news')) {
    body.stickySectionHeaders({
      stickyClass: 'sticky',
      headlineSelector: '.text'
    });
  };

  // Apply parallax effect.
  if (body.hasClass('desktop')) {
    body.stellar({
      // positionProperty: 'transform',
      hideDistantElements: false,
      verticalOffset: 0,
      parallaxBackgrounds: false
    });
  };

  // Scroll to top.
  $('#nav a.current').click(function() {
    body.animate({scrollTop : 0}, 1200);
  });

  $(window).load(function() {

    // Add class ready to the body.
    body.addClass('ready');

    // Call the cover module if this is the landing page.
    if (body.hasClass('cover')) {
      cover('.cover');
    } else {
      $('.spinner').children().hide().end().fadeOut(600);
    };

  });

  $(window).resize(function() {

    // Re-apply the correct height of the body.
    body.height($(window).height());

    // Check if the screen is now in portrait.
    if (body.height() > (body.width() * 0.71)) {
      body.addClass('portrait');
    } else {
      body.removeClass('portrait');
    }
  });

  $(window).scroll(function(){
    if (body.scrollTop() <= 50) {
      $('#nav').addClass('top');
    } else {
      $('#nav').removeClass('top');
    };
  })

});
