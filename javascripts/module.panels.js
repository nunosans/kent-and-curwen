// Copyright 2012 Savant. All Rights Reserved.

/**
 * @fileoverview Kent & Curwen cover image scripts.
 * @author nuno@savantstudio.co.uk (Nuno Coelho Santos).
 */

function panels(element) {

  el = $(element);

  var sections = el;
  var html = $('html');
  var body = $('body');

  resize();

  function resize() {
    var windowHeight = $(window).height();
    var windowWidth = $(window).width();

    sections.height(windowHeight);
    sections.width(windowWidth);

    html.width(windowWidth);
    body.width(windowWidth * sections.length);
  }

  // Trigger resize also on window resize.
  $(window).resize(function() {
    resize();
  });

}
