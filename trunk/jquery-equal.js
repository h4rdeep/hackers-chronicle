/*-----------------------------------------------
Theme Name: Daily Times
Designer : Hardeep Singh
Created: Feb, 2014
Theme URI: http://hackerschronicle.com
Author: Hardeep Singh
Author URI: http://hackerschronicle.com
----------------------------------------------- */
(function($){$.fn.equalHeights=function(minHeight,maxHeight){tallest=(minHeight)?minHeight:0;this.each(function(){if($(this).height()>tallest){tallest=$(this).height();}});if((maxHeight)&&tallest>maxHeight)tallest=maxHeight;return this.each(function(){$(this).height(tallest).css("overflow","auto");});}})(jQuery);