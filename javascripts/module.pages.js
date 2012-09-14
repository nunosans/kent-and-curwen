// Copyright 2012 Savant. All Rights Reserved.

/**
 * @fileoverview Kent & Curwen .
 * @author nuno@savantstudio.co.uk (Nuno Coelho Santos).
 */

function pages(element) {

  el = $(element);

  var body = $('body');
  var sections = $('.section');
  var screens = $('.section > *');
  var navigation = $('#nav');
  var navigationItems = navigation.find('span');
  var windowWidth = $(window).width();
  var windowHeight = $(window).height();
  var location = 'http://kentandcurwen.dev/';

  function slide() {

    // Declare variables.
    var sectionName = $(this).attr('rel');
    var section = $('#' + sectionName);
    var index = $('span').index(this);

    // If this is not the current section.
    if (!$(this).hasClass('active')){

      // Remove the active class from the other items and add it to this one.
      navigationItems.removeClass('active');
      $(this).addClass('active');

      // Slide to the right position.
      body.animate({
        'left': ('-' + (windowWidth * index) + 'px')
        },
      800,
      // Update the url.
      function() {
        window.location.replace(location + '#' + sectionName);
      }
      );
    } else {
      // Scroll to the top.
      section.animate({scrollTop : 0}, 400);
    };

  };

  function resize() {
    windowWidth = $(window).width();
    windowHeight = $(window).height();
    sections.width(windowWidth);
    sections.height(windowHeight);
    body.width(windowWidth * sections.length);
  };

  // Call functions.
  navigationItems.click(slide);
  resize();

  // Call functions on window resize.
  $(window).resize(function() {
    resize();
  });

}
