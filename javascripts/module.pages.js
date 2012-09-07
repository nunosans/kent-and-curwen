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

  function slide() {
    var index = $('a').index(this);
    body.css('left', ('-' + (windowWidth * index) + 'px'));
  };

  function resize() {
    sections.width(windowWidth);
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
