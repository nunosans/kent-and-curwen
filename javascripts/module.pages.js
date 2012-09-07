// Copyright 2012 Savant. All Rights Reserved.

/**
 * @fileoverview Kent & Curwen .
 * @author nuno@savantstudio.co.uk (Nuno Coelho Santos).
 */

function pages(element) {

  el = $(element);

  var body = $('body');
  var sections = $('.section');
  var navigation = $('#nav');
  var navigationItems = navigation.find('a');
  var windowWidth = $(window).width();
  var windowHeight = $(window).height();

  function slide() {

    // event.preventDefault();

    var index = $('a').index(this);
    console.log('Moving to section ' + index);

    body.animate({
      'left': ('-' + (windowWidth * index) + 'px')
    },
    440,
    'swing'
    );

    window.location.hash = $(this).attr('rel');


  };

  function resize() {
    windowWidth = $(window).width();
    windowHeight = $(window).height();
    sections.width(windowWidth);
    sections.height(windowHeight)
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
