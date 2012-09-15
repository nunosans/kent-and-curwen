// Copyright 2012 Savant. All Rights Reserved.

/**
 * @fileoverview Kent & Curwen .
 * @author nuno@savantstudio.co.uk (Nuno Coelho Santos).
 */

function pages(element) {

  // console.log('Initialized "pages"');

  el = $(element);
  // console.log('el:');
  // console.log(el);

  var body = $('body');
  var sections = $('.section');
  var screens = $('.section > *');
  var navigation = $('#nav');
  var navigationItems = navigation.find('span');
  var windowWidth = $(window).width();
  var windowHeight = $(window).height();
  var location = 'http://kentandcurwen.dev/';
  var currentSection = window.location.search.split('#')[1];

  // console.log('body:');
  // console.log(body);
  // console.log('sections:');
  // console.log(sections);
  // console.log('screens:');
  // console.log(screens);
  // console.log('navigation:');
  // console.log(navigation);
  // console.log('navigationItems:');
  // console.log(navigationItems);
  // console.log('windowWidth: ' + windowWidth);
  // console.log('windowHeight: ' + windowHeight);
  // console.log('location: ' + location);
  // console.log('currentSection: ' + currentSection);

  function slide() {

    // console.log('Initialized "pages.slide"');

    // Declare variables.
    var sectionName = $(this).attr('rel');
    var section = $('#' + sectionName);
    var index = $('span').index(this);

    // console.log('sectionName: ' + sectionName);
    // console.log('section: ' + section);
    // console.log('index: ' + index);

    // If this is not the current section.
    if (!$(this).hasClass('active')){

      // console.log('Switching section.');
      // console.log('Clicked item: ' + $(this));

      // Remove the active class from the other items and add it to this one.
      // console.log('Updating active nav item.')
      navigationItems.removeClass('active');
      $(this).addClass('active');

      // Slide to the right position.
      // console.log('Animating body.');
      body.animate({
        'left': ('-' + (windowWidth * index) + 'px')
        },
      400,
      // Update the url.
      function() {
        // console.log('Rewriting url with ' + location + '#' + sectionName);
        window.location.replace(location + '#' + sectionName);
      }
      );
    } else {

      // console.log('Scrolling page to the top.');

      // Scroll to the top.
      section.animate({scrollTop : 0}, 1200);
    };

  };

  function resize() {

    // console.log('Initialized "pages.resize"')

    // Recalculate variables.
    windowWidth = $(window).width();
    windowHeight = $(window).height();
    bodyWidth = windowWidth * sections.length;
    // console.log('windowWidth: ' + windowWidth);
    // console.log('windowHeight: ' + windowHeight);
    // console.log('bodyWidth: ' + bodyWidth);

    // Apply variables.
    sections.width(windowWidth);
    sections.height(windowHeight);
    body.width(bodyWidth);

  };

  // Call functions.
  navigationItems.click(slide);
  resize();

  // Call functions on window resize.
  $(window).resize(function() {
    resize();
  });

}
