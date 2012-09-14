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

  function slide() {

    var index = $('span').index(this);

    body.animate({
      'left': ('-' + (windowWidth * index) + 'px')
    },
    440
    );


  };

  function resize() {
    windowWidth = $(window).width();
    windowHeight = $(window).height();
    sections.width(windowWidth);
    sections.height(windowHeight);
    screens.height(windowHeight)
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
