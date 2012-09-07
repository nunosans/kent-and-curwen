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

  function resize() {
    var windowHeight = $(window).height();
    var windowWidth = $(window).width();

    sections.width(windowWidth);

    html.width(windowWidth);
    body.width(windowWidth * sections.length);
  };
  resize();

  // Trigger resize also on window resize.
  $(window).resize(function() {
    resize();
  });

}
