// Copyright 2012 Savant. All Rights Reserved.

/**
 * @fileoverview Script to define the suitable imagery resolution.
 * @author nuno@savantstudio.co.uk (Nuno Coelho Santos).
 */

function resolute() {

  var $images = $('img');
  var width = $(window).width();
  var res;
  var size;

  // Determine if it is a high or low resolution screen.
  if (window.devicePixelRatio === 1) {
    console.log('Detected a low resolution screen.');
    res = 'lo-res';
  } else {
    console.log('Detected a high resolution screen.');
    res = 'hi-res';
  }

  // Determine if it is a large, medium or small screen.
  if (width > 1500) {
    console.log('Detected a large-sized screen.');
    size = 'large';
  } else if (width > 720) {
    console.log('Detected a medium-sized screen.');
    size = 'medium';
  } else {
    console.log('Detected a small-sized screen.');
    size = 'small';
  }


  $images.each(function() {
      var src = $(this).attr('src').substring(22);
      $(this).attr('src', ('/images/' + size + '/' + res + '/' + src));
      return;
  });

  // small/lo-res/  (maximum image width:  720px)
  // small/hi-res/  (maximum image width: 1440px)
  // medium/lo-res/ (maximum image width: 1440px)
  // medium/hi-res/ (maximum image width: 2880px)
  // large/lo-res/  (maximum image width: 2880px)
  // large/hi-res/  (maximum image width: 5760px)

}


