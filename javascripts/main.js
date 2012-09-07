// Copyright 2012 Savant. All Rights Reserved.

/**
 * @fileoverview Kent & Curwen main website scripts.
 * @author nuno@savantstudio.co.uk (Nuno Coelho Santos).
 */

$(document).ready(function() {

  // Add class ready to the body.
  $('body').addClass('ready');

  // Call modules.
  cover('div.cover');
  panels('div.section');

  // Apply auto-scroller to the nav.
  // $('#nav').localScroll({
  //   lock: true,
  //   target: 'html'
  // });

});
