;(function(a){a.fn.stickySectionHeaders=function(b){var c=a.extend({stickyClass:"sticky",headlineSelector:"strong"},b);return a(this).each(function(){var d=a(this);a(this).find("#news").bind("scroll.sticky",function(f){a(this).find("> div").each(function(){var j=a(this),i=j.position().top,g=j.outerHeight(),e=j.find(c.headlineSelector),h=e.outerHeight();if(i<0){j.addClass(c.stickyClass);e.css({top:(g+i<h)?(h-(i+g))*-1:"",})}else{j.removeClass(c.stickyClass)}})})})}})(jQuery);
