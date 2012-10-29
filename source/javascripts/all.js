//= require_tree .

/**
 * Initialize functions after DOM is ready.
 */
$(document).ready(function() {

  // console.log('Document ready.');

  // Call modules.
  pages('div.section');

  dropdowns('body.stores > ul');

  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
    $('body').addClass('mobile');
  } else {
    $('body').addClass('desktop');
  };

  $('body.news').stickySectionHeaders({
    stickyClass: 'sticky',
    headlineSelector: '.text'
  });

  $('body.desktop .parallax').stellar({
    hideDistantElements: false,
    verticalOffset: 0
  });

  $('#nav a.active').click(function() {
    $('.section').animate({scrollTop : 0}, 1200);
  })

  $(window).load(function() {

    // console.log('Document loaded.');

    // Add class ready to the body.
    $('body').addClass('ready');
    // $('#header').fadeIn(400);

    // Call the cover module if this is the landing page.
    if ($('body').hasClass('cover')) {
      cover('.cover');
      // $('#nav').fadeIn(4000);
    } else {
      $('.spinner').fadeOut(600, function() {
        $(this).children().hide()
      });
    };

  });

});
