'use strict';
/*globals $:false */

$('#panel-nav .item-1').click(function(e) {
	e.preventDefault();
	$('#panel-nav .item-1').removeClass('selected');
	$('#panel-nav .item-1').removeClass('active');
	if ($(this).is('.list') === true) {
		$(this).addClass('active');
	} else {
		$(this).addClass('selected');
	}
});
