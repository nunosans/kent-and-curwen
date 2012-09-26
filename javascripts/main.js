// Copyright 2012 Savant. All Rights Reserved.

/**
 * @fileoverview Kent & Curwen main website scripts.
 * @author nuno@savantstudio.co.uk (Nuno Coelho Santos).
 */


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
    first.addClass('active');

    setInterval(function() {

      var active = el.find('img.active');
      var next = active.next();

      if (!active.next().length) {
        next = first;
      };

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

/**
 * Initialize functions when DOM is ready.
 */
function dropdowns(element) {

  el = $(element);
  var mainSection = el.find('h3');
  // var subSection = el.find('h4');

  function init() {
    // subSection.each(function() {
    //   var parent = $(this).parent('li');
    //   var parentHeight = $(this).parent('li').height();
    //   parent.height(parentHeight).addClass('closed');
    // });
    mainSection.each(function() {
      var parent = $(this).parent('li');
      var parentHeight = $(this).parent('li').height();
      parent.height(parentHeight).addClass('closed');
    });
  };

  function set() {
    var parent = $(this).parent('li');
    parent.toggleClass('closed');

  };

  // Call functions.
  init();
  mainSection.click(set);
  // subSection.click(set);

};

/**
 * Initialize functions when DOM is ready.
 */
$(document).ready(function() {

  // Rewrite the appropriate images path.
  // resolute();

  $(window).load(function() {
    // Add class ready to the body.
    $('body').addClass('ready');

    // Call modules.
    cover('#home .cover');
    dropdowns('#stores > ul');

    $('body').stickySectionHeaders({
      stickyClass: 'sticky',
      headlineSelector: '.text'
    });

    $('.parallax').stellar({
      hideDistantElements: false,
      verticalOffset: 0
    });

  });

});
