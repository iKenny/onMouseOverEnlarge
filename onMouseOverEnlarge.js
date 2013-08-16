/* onMouseOverEnlarge.js */	
/* 
 *	Author: 	iKenny @ 2013
 *	Version: 	1.0
 *	Library:	jQuery 1.8 is required for this plugin.
 *  Intro:		You shall select the object to be enlarge when mouse over by jQuery selector
 *				Content [i.e. get by $.html()] will be show up by a div on it.
 *	Usage: 		A. By init
 *					1. Run init with jQuery Selector and className, default Class Name is "onMouseOverEnlarge".
 *					2. Bind the Function with bind method. (you may unbind it through unbind.)
 *				B. Direct Use
 *					1. Call onMouseOverEnlarge.onEnlarge with single Object selector.
 *	
 */	
(function($){
	$.fn.onMouseOverEnlarge= function(options) {  
		var defaultOption = {'cssClass':'onMouseOverEnlarge'};
		var settings = $.extend( {},defaultOption, options);
		return this.each(function(){
			$(this).mouseenter(function(){
				var o = $(this);
				var left = parseInt(o.position().left),
					top = parseInt(o.position().top),
					h = parseInt(o.outerHeight()),
					w = parseInt(o.outerWidth()),
					win = parseInt($(window).width()),
				div = $("<div class='"+settings.cssClass+"'>"+o.html()+"</div>");
				div.appendTo(o).css({"top":top,"height":h,"min-width":w,"position":'absolute'});
				((left+w+20)>win)?div.css({"right":0}):div.css({"left":left});
				//onMouseOverEnlarge.onMouseOver(o);
			});
			$(this).mouseleave(function(){
				$("."+settings.cssClass).remove();
			});
		});
	}
})(jQuery);