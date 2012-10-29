//= require_tree .

/**
 * Initialize functions after DOM is ready.
 */
$(document).ready(function() {

  // Add mobile or desktop class.
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
    $('body').addClass('mobile');
  } else {
    $('body').addClass('desktop');
  };

  // Calculate correct height of the body.
  $('body').height($(window).height());

  // Call modules.
  dropdowns('body.stores > ul');

  $('body.news').stickySectionHeaders({
    stickyClass: 'sticky',
    headlineSelector: '.text'
  });

  $('body.desktop').stellar({
    hideDistantElements: false,
    verticalOffset: 0
  });

  $('#nav a.current').click(function() {
    $('body').animate({scrollTop : 0}, 1200);
  });



  $(window).load(function() {

    // Add class ready to the body.
    $('body').addClass('ready');

    // Call the cover module if this is the landing page.
    if ($('body').hasClass('cover')) {
      cover('.cover');
    } else {
      $('.spinner').children().hide().end().fadeOut(600);
    };

  });

  $(window).resize(function() {
    $('body').height($(window).height());
  });

});
