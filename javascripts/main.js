// Copyright 2012 Savant. All Rights Reserved.

/**
 * @fileoverview Kent & Curwen main website scripts.
 * @author nuno@savantstudio.co.uk (Nuno Coelho Santos).
 */

/**
 * Function to generate the horizontal multi-page layout.
 */
function pages(element) {

  el = $(element);

  var body = $('body');
  var sections = $('.section');
  var screens = $('.parallax > *');
  var navigation = $('#nav');
  var navigationItems = navigation.find('span');
  var windowWidth = $(window).width();
  var windowHeight = $(window).height();
  // var location = 'http://kentandcurwen.dev/';
  // var location = 'http://kentandcurwen.co.uk/';
  var location = 'http://test.kentandcurwen.co.uk/';
  var currentSection = window.location.search.split('#')[1];

  function slide() {

    // Declare variables.
    var sectionName = $(this).attr('rel');
    var section = $('#' + sectionName);
    var index = $('span').index(this);
    var newsArticle = $('#news .article.sticky div.text');

    // If this is not the current section.
    if (!$(this).hasClass('active')){


      // Remove the active class from the other items and add it to this one.
      navigationItems.removeClass('active');
      $(this).addClass('active');

      // Slide to the right position.
      body.animate({
        'left': ('-' + (windowWidth * index) + 'px')
        },
      400
      // function() {
        // Update the url.
        // if (currentSection !== 'undefined') {
          // window.location.replace(location + '#' + sectionName);
        // };
      // }
      );
      newsArticle.animate({
        'left': ( -(windowWidth * (index - 3)) + 'px')
        },
      400
      );

      // Update nav
      updateNav(section);

    } else {

      // Scroll to the top.
      section.animate({scrollTop : 0}, 1200);

    };

  };

  function updateNav(element) {

    if (element instanceof jQuery === false) {
      element = $(this);
    };

    var sectionName = element.attr('id');

    if( element.scrollTop() > 50 ) {
      navigation.removeClass('top');
      navigation.addClass('hidden');
    } else {
      if (sectionName === 'news') {
        navigation.removeClass('top');
      } else {
        navigation.addClass('top');
      }
      navigation.removeClass('hidden');
    }
  };

  function resize() {

    // Recalculate variables.
    windowWidth = $(window).width();
    windowHeight = $(window).height();
    // bodyWidth = windowWidth * sections.length;

    // Apply variables.
    sections.width(windowWidth);
    sections.height(windowHeight);
    // body.width(bodyWidth);

  };

  // Call functions.
  sections.scroll(updateNav);
  navigationItems.click(slide);
  resize();

  // Call functions on window resize.
  $(window).resize(function() {
    resize();
  });

}

/**
 * Function to generate cover artwork animation.
 */
function cover(element) {

  console.log('Initialized "cover".');

  el = $(element);

  // Define this object's elements.
  var body = $('body');
  var container = el;
  var images = el.find('img');

  // Define variables.
  var imagesWidth = images.width();
  var imagesHeight = images.height();
  var imagesRatio = imagesHeight / imagesWidth;

  // Required styles.
  body.css({
    'margin': 0,
    'overflow': 'hidden'
  });
  container.css({
    'left': 0,
    'overflow': 'hidden',
    'position': 'absolute',
    'top': 0
  });
  images.css({
    'left': 0,
    'position': 'absolute',
    'top': 0
  });

  function resize() {

    console.log('Initialized "cover.resize".');

    // Redefine variables.
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();
    var windowRatio = windowHeight / windowWidth;

    if (windowRatio > imagesRatio) {

      // Bleed on right and left.
      images.height(windowHeight);
      images.width('auto');

      container.width(windowWidth);
      container.height('100%');

      images.css('top', 0);
      images.css('left', - (images.width() - windowWidth) / 2);

    } else {

      // Bleed on top and bottom.
      images.width(windowWidth);
      images.height('auto');

      container.height(windowHeight);
      container.width('100%');

      images.css('left', 0);
      images.css('top', - (images.height() - windowHeight) / 2);

    }

  };

  function swap() {

    console.log('Initialized "cover.swap".');

    var first = el.find('img:first-child');
    console.log(first);

    first.addClass('active');

    setInterval(function() {

      console.log('swapping images');

      var active = el.find('img.active');
      console.log(active);
      var next = active.next();
      console.log(next);

      if (!active.next().length) {
        console.log('loop');
        next = first;
      };

      // Deactivate current active image.
      active.removeClass('active');

      // Make the next image active.
      next.addClass('active');

      console.log('done');

    },
    7000);

  };

  // Call functions.
  resize();
  swap();

  // Trigger resize also on window resize.
  $(window).resize(function() {
    resize();
  });

}

/**
 * Initialize functions when DOM is ready.
 */
function dropdowns(element) {

  el = $(element);
  var mainSection = el.find('h3');
  // var subSection = el.find('h4');

  function init() {
    // subSection.each(function() {
    //   var parent = $(this).parent('li');
    //   var parentHeight = $(this).parent('li').height();
    //   parent.height(parentHeight).addClass('closed');
    // });
    mainSection.each(function() {
      var parent = $(this).parent('li');
      var parentHeight = $(this).parent('li').height();
      parent.height(parentHeight).addClass('closed');
    });
  };

  function set() {
    var parent = $(this).parent('li');
    parent.toggleClass('closed');

  };

  // Call functions.
  init();
  mainSection.click(set);
  // subSection.click(set);

};

/**
 * Initialize functions when DOM is ready.
 */
$(document).ready(function() {

  console.log('Document ready.');

  // Call modules.
  pages('.section');

  dropdowns('#stores > ul');

  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
    $('body').addClass('mobile');
  } else {
    $('body').addClass('desktop');
  };

  $('body.desktop').stickySectionHeaders({
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

    console.log('Document loaded.');

    // Add class ready to the body.
    $('body').addClass('ready');
    $('.spinner').fadeOut(600).children().hide();

    cover('#home .cover');

  });

});
