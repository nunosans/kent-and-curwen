/**
 * Dropdowns function.
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
