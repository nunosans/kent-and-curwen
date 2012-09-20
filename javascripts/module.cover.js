// Copyright 2012 Savant. All Rights Reserved.

/**
 * @fileoverview Script to generate a cover image.
 * @author nuno@savantstudio.co.uk (Nuno Coelho Santos).
 */

function cover(element) {

  // console.log('Initialized "cover"');

  el = $(element);

  // Define this object's elements.
  var body = $('body');
  var container = el;
  var images = el.find('img');
  // console.log('body: ');
  // console.log(body);
  // console.log('container: ');
  // console.log(container);
  // console.log('images: ');
  // console.log(images);

  // Define variables.
  var imagesWidth = images.width();
  var imagesHeight = images.height();
  var imagesRatio = imagesHeight / imagesWidth;
  // console.log('imagesWidth: ' + imagesWidth);
  // console.log('imagesHeight: ' + imagesHeight);
  // console.log('imagesRatio: ' + imagesRatio);

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
  images.css({
    'left': 0,
    'position': 'absolute',
    'top': 0
  });

  function resize() {

    // console.log('Initialized "cover.resize"');

    // Redefine variables.
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();
    var windowRatio = windowHeight / windowWidth;
    // console.log('windowWidth: ' + windowWidth);
    // console.log('windowHeight: ' + windowHeight);
    // console.log('windowRatio: ' + windowRatio);

    if (windowRatio > imagesRatio) {

      // console.log('Reizing to maximum height...');

      // Bleed on right and left.
      images.height(windowHeight);
      images.width('auto');

      container.width(windowWidth);
      container.height('100%');

      images.css('top', 0);
      images.css('left', - (images.width() - windowWidth) / 2);

    } else {

      // console.log('Reizing to maximum width...');

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

    // console.log('Initialized "cover.swap"');

    var first = el.find('img:first-child');
    // console.log('first: ');
    // console.log(first);
    first.addClass('active');

    setInterval(function() {

      // console.log('Swapping images...');

      var active = el.find('img.active');
      var next = active.next();
      // console.log('active: ');
      // console.log(active);

      if (!active.next().length) {
        // console.log('Restarting...');
        next = first;
      };

      // console.log('next: ');
      // console.log(next);

      // console.log('Updating classes...')

      // Deactivate current active image.
      active.removeClass('active');

      // Make the next image active.
      next.addClass('active');

    },
    7000);

  };

  // Call functions.
  resize();
  swap();

  // Trigger resize also on window resize.
  $(window).resize(function() {
    resize();
  });

}
