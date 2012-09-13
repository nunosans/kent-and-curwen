// Copyright 2012 Savant. All Rights Reserved.

/**
 * @fileoverview Script to generate a cover image.
 * @author nuno@savantstudio.co.uk (Nuno Coelho Santos).
 */

function cover(element) {

  $el = $(element);

  // Define this object's elements.
  var body = $('body');
  var container = $el;
  var $images = $el.find('img');

  // Define variables.
  var imagesWidth = $images.width();
  var imagesHeight = $images.height();
  var imagesRatio = imagesHeight / imagesWidth;

  // Required styles.
  body.css({
    'margin': 0,
    'overflow': 'hidden'
  });
  container.css({
    'left': 0,
    'overflow': 'hidden',
    'position': 'absolute',
    'top': 0
  });
  $images.css({
    'left': 0,
    'position': 'absolute',
    'top': 0
  });

  function resize() {

    // Redefine variables.
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();
    var windowRatio = windowHeight / windowWidth;

    if (windowRatio > imagesRatio) {

      // Bleed on right and left.
      $images.height(windowHeight);
      $images.width($images.height() / imagesRatio);

      container.width(windowWidth);
      container.height('100%');

      $images.css('top', 0);
      $images.css('left', - ($images.width() - windowWidth) / 2);

    } else {

      // Bleed on top and bottom.
      $images.width(windowWidth);
      $images.height($images.width() * imagesRatio);

      container.height(windowHeight);
      container.width('100%');

      $images.css('left', 0);
      $images.css('top', - ($images.height() - windowHeight) / 2);

    }

  };

  function play() {

    var $first = $el.find('img:first-child');
    $first.addClass('active');

    setInterval(function() {

      var $active = $el.find('img.active');
      var $next = $active.next();

      if (!$active.next().length) {
        // alert('no next');
        $next = $first;
      };

      // Deactivate current active image.
      $active.removeClass('active');

      // Make the next image active.
      $next.addClass('active');

    },
    7000);

  };

  $(document).ready(function() {
    resize();
    play();
  });

  // Trigger resize also on window resize.
  $(window).resize(function() {
    resize();
  });

}
