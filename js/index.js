/**
 * 
 * @gaofeng
 * @date    2018-08-15 16:08:35
 * @version $Id$	
 */
$(function(){

	$('.hiSlider3').hiSlider({
    isFlexible: true,
    isSupportTouch: true,
    titleAttr: function(curIdx){
    	var $tex = $("#newText").html($('img', this).attr('alt'));
        return $('img', this).attr('alt');
    	}
	});

});