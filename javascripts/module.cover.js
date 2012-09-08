// Copyright 2012 Savant. All Rights Reserved.

/**
 * @fileoverview Script to generate a cover image.
 * @author nuno@savantstudio.co.uk (Nuno Coelho Santos).
 */

function cover(element) {

  el = $(element);

  // Define this object's elements.
  var body = $('body');
  var container = el;
  var image = el.find('img');

  // Define variables.
  var imageWidth = image.width();
  var imageHeight = image.height();
  var imageRatio = imageHeight / imageWidth;

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
  image.css({
    'left': 0,
    'position': 'absolute',
    'top': 0
  });

  function resize() {

    // Redefine variables.
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();
    var windowRatio = windowHeight / windowWidth;

    if (windowRatio > imageRatio) {

      // Bleed on right and left.
      image.height(windowHeight);
      image.width(image.height() / imageRatio);

      container.width(windowWidth);
      container.height('100%');

      image.css('top', 0);
      image.css('left', - (image.width() - windowWidth) / 2);

    } else {

      // Bleed on top and bottom.
      image.width(windowWidth);
      image.height(image.width() * imageRatio);

      container.height(windowHeight);
      container.width('100%');

      image.css('left', 0);
      image.css('top', - (image.height() - windowHeight) / 2);

    }

  };
  resize();

  // Trigger resize also on window resize.
  $(window).resize(function() {
    resize();
  });

}
