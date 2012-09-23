// Copyright 2012 Savant. All Rights Reserved.

/**
 * @fileoverview Kent & Curwen .
 * @author nuno@savantstudio.co.uk (Nuno Coelho Santos).
 */

function pages(element) {

  el = $(element);

  var body = $('body');
  var sections = $('.section');
  var screens = $('.parallax > *');
  var navigation = $('#nav');
  var navigationItems = navigation.find('span');
  var windowWidth = $(window).width();
  var windowHeight = $(window).height();
  var location = 'http://kentandcurwen.dev/';
  var currentSection = window.location.search.split('#')[1];

  function slide() {

    console.log('Initializing "slide".');

    // Declare variables.
    var sectionName = $(this).attr('rel');
    var section = $('#' + sectionName);
    var index = $('span').index(this);

    // If this is not the current section.
    if (!$(this).hasClass('active')){
      console.log('Moving to different section.');

      // Remove the active class from the other items and add it to this one.
      navigationItems.removeClass('active');
      $(this).addClass('active');

      // Slide to the right position.
      body.animate({
        'left': ('-' + (windowWidth * index) + 'px')
        },
      400,
      function() {
        // Update the url.
        if (currentSection !== 'undefined') {
          window.location.replace(location + '#' + sectionName);
        };
      }
      );

      // Update nav
      updateNav(section);

    } else {

      // Scroll to the top.
      section.animate({scrollTop : 0}, 1200);
      console.log('Scrolling to the top of this section.');
    };

  };

  function updateNav(element) {

    if (element instanceof jQuery === false) {
      element = $(this);
    };

    if( element.scrollTop() > 50 ) {
      navigation.removeClass('top');
      navigation.addClass('hidden');
    } else {
      navigation.addClass('top');
      navigation.removeClass('hidden');
    }
  };

  function resize() {

    // Recalculate variables.
    windowWidth = $(window).width();
    windowHeight = $(window).height();
    bodyWidth = windowWidth * sections.length;

    // Apply variables.
    sections.width(windowWidth);
    sections.height(windowHeight);
    body.width(bodyWidth);

  };

  // Call functions.
  sections.scroll(updateNav);
  navigationItems.click(slide);
  resize();

  // Call functions on window resize.
  $(window).resize(function() {
    resize();
  });

}
