$(document).ready(function() {

	// setInterval(f, 1000);
	// function f () {
	// 	console.log(scrollY);
	// }
	var header = $('#header'),
		headerFix = $('#header-fix');
	var h = $('#header').height() + $('.banner').height();
	setInterval(nav, 10);
	function nav () {
		if (scrollY > h) {
			header.hide();
			headerFix.show();
		}
		if (scrollY < h) {
			header.show();
			headerFix.hide();
		};
	}
});