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
  if ($(window).height() > ($(window).width() * 0.7)) {
    body.addClass('portrait');
  } else {
    body.addClass('landscape');
  };

  // Apply parallax effect.
  if (body.hasClass('desktop')) {
    body.stellar({
      hideDistantElements: false,
      verticalOffset: 0,
      parallaxBackgrounds: false
    });
  };

  // Scroll to top.
  $('#nav span.current').click(function() {
    body.animate({scrollTop : 0}, 1200);
  });

  // Calculate the size of news header images.
  function resizeArticlesCover() {
    body.find('div.article div.images > img').each(function() {
      var width = $(this).siblings('.col').eq(0).outerWidth(true);
      $(this).width(width * 3 - 4);
    });
  };

  if (body.hasClass('news') && body.hasClass('desktop')) {
    resizeArticlesCover();
  };

  $('#nav').hover(
    function() {
      $(this).addClass('hover');
    },
    function() {
      $(this).removeClass('hover');
    }
  );

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
    if ($(window).height() > ($(window).width() * 0.71)) {
      body.addClass('portrait');
      body.removeClass('landscape');
    } else {
      body.addClass('landscape');
      body.removeClass('portrait');
    };

    if (body.hasClass('news') && body.hasClass('desktop')) {
      resizeArticlesCover();
    };
  });

  $(window).scroll(function(){
    if ($(window).scrollTop() <= 50) {
      $('#nav').addClass('top');
    } else {
      $('#nav').removeClass('top');
    };
  })

});
