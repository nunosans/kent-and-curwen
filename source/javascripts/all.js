/**
 * Function to generate cover artwork animation.
 */
function cover(element) {

  el = $(element);

  // Define this object's elements.
  var body = $('body');
  var container = el;
  var images = el.find('img');

  // Define variables.
  var imagesWidth = images.width();
  var imagesHeight = images.height();
  var imagesRatio = imagesHeight / imagesWidth;

  function resize() {

    // Redefine variables.
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();
    var windowRatio = windowHeight / windowWidth;

    if (windowRatio > imagesRatio) {

      // Bleed on right and left.
      images.height(windowHeight);
      images.width('auto');

      container.width(windowWidth);
      container.height('100%');

      images.css('top', 0);
      images.css('left', - (images.width() - windowWidth) / 2);

    } else {

      // Bleed on top and bottom.
      images.width(windowWidth);
      images.height('auto');

      container.height(windowHeight);
      container.width('100%');

      images.css('left', 0);
      images.css('top', - (images.height() - windowHeight) / 2);

    }

  };

  function swap() {

    var first = el.find('img:first-child');
    var speed = 3750;
    var interval = 7000;

    first.addClass('active').fadeIn(speed);

    setInterval(function() {

      var active = el.find('img.active');
      var next = active.next();

      if (!active.next().length) {
        next = first;
      };

      // Deactivate current active image.
      active.removeClass('active').fadeOut(speed);

      // Make the next image active.
      next.addClass('active').fadeIn(speed);

    },
    interval);

  };

  // Call functions.
  resize();
  swap();

  // Trigger resize also on window resize.
  $(window).resize(function() {
    resize();
  });

}

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

  // If the screen is in portrait, add class portrait.
  if ($(window).height() > ($(window).width() * 0.7)) {
    body.addClass('portrait');
  } else {
    body.addClass('landscape');
  };

  // Calculate correct height of the body.
  body.height($(window).height());

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

  function expandableMenus() {
    body.find('.expandable-menus').find('h3, h4').each(function() {
      var menu = $(this).siblings('ul');
      menu.hide();
      $(this).click(function() {
        menu.slideToggle('slow');
      });
    })
  };

  if (body.hasClass('stores')) {
    expandableMenus();
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
    if (body.hasClass('desktop')) {
      if ($(window).scrollTop() <= 50) {
        $('#nav').addClass('top');
      } else {
        $('#nav').removeClass('top');
      };
    }
  })

});
