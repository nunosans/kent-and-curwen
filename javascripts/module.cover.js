// Copyright 2012 Savant. All Rights Reserved.

/**
 * @fileoverview Kent & Curwen cover image scripts.
 * @author nuno@savantstudio.co.uk (Nuno Coelho Santos).
 */

function cover(element) {

  el = $(element);

  // Define this object's elements.
  var image = el.find('img');
  var container = el;

  function resize() {

    // Define variables.
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();
    var windowRatio = windowHeight / windowWidth;

    var imageWidth = image.width();
    var imageHeight = image.height();
    var imageRatio = imageHeight / imageWidth;

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

  // Call functions.
  resize();

  // Call functions on window resize.
  $(window).resize(function() {
    resize();
  });

}
