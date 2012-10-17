/**
 * Function to generate cover artwork animation.
 */
function cover(element) {

  console.log('Initialized "cover".');

  el = $(element);

  // Define this object's elements.
  var body = $('body');
  var container = el;
  var images = el.find('img');

  // Define variables.
  var imagesWidth = images.width();
  var imagesHeight = images.height();
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
  images.css({
    'left': 0,
    'position': 'absolute',
    'top': 0
  });

  function resize() {

    console.log('Initialized "cover.resize".');

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

    console.log('Initialized "cover.swap".');

    var first = el.find('img:first-child');
    console.log(first);

    first.addClass('active');

    setInterval(function() {

      console.log('swapping images');

      var active = el.find('img.active');
      console.log(active);
      var next = active.next();
      console.log(next);

      if (!active.next().length) {
        console.log('loop');
        next = first;
      };

      // Deactivate current active image.
      active.removeClass('active');

      // Make the next image active.
      next.addClass('active');

      console.log('done');

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
