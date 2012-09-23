// Copyright 2012 Savant. All Rights Reserved.

/**
 * @fileoverview Kent & Curwen main website scripts.
 * @author nuno@savantstudio.co.uk (Nuno Coelho Santos).
 */

$(document).ready(function() {

  // Rewrite the appropriate images path.
  resolute();

  $(window).load(function() {
    // Add class ready to the body.
    $('body').addClass('ready');

    // Call modules.
    cover('#home .cover');
    pages('.section');
    dropdowns('#stores > ul');

    $('body').stickySectionHeaders({
      stickyClass: 'sticky',
      headlineSelector: '.text'
    });

    $('.section').stellar({
      hideDistantElements: false,
      verticalOffset: 0
    });

  });

});
