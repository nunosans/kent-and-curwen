// Copyright 2012 Savant. All Rights Reserved.

/**
 * @fileoverview Kent & Curwen main website scripts.
 * @author nuno@savantstudio.co.uk (Nuno Coelho Santos).
 */

resolute();

$(document).ready(function() {

  // Call modules.
  cover('.cover');
  pages('.section');

  $('.section').stellar({
    scrollProperty: 'transform',
    // positionProperty: 'transform',
    hideDistantElements: false,
    verticalOffset: 0
  });

  $(window).load(function() {
    // Add class ready to the body.
    $('body').addClass('ready');
  });

});
