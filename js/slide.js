$(document).ready(function() {
	var img = $('.banner').find('li'),
		img_count = $('.banner').find('li').length;
		banner_w = $('.banner').width();

	// console.log(banner_w);
	// 根据图片数量动态添加小圆点
	var addBtn = "<li><a class='selected' href=''></a></li>";
	for (var i = 1; i < img_count; ++i) {
		addBtn += "<li><a href=''></a></li>";
	}
	$(".banner-btn").append(addBtn);


	// 自动切换图片
	var page = 1;
	setInterval(exchange, 5000);
	function exchange () {
		var banner_ul = $('.banner-img');
		var backLeft = (img_count)*1366 +'px';
		// 检测page的值，使当前的page与selected的小圆点一致
		function btnSel () {
			$('.banner-btn a').eq(page-1).parents().find('a').removeClass('selected');
			$('.banner-btn a').eq(page-1).addClass('selected');
		}
		// console.log(page);
		// console.log(img_count);
		if (page%img_count != 0) {
			banner_ul.animate({left: '-=' + '1366px'}, 'slow');
			page++;
			btnSel();
		} else {
			banner_ul.animate({left: '0px'}, 'slow');
			page = 1;
			btnSel();
		};
	}

	// 小圆点点击切换
	(function btnChange () {
		var btn = $('.banner li').children('a');
		// console.log(btn);
		btn.click(function(event) {
			event.preventDefault();
			$(this).parents().find('a').removeClass('selected');
			$(this).addClass('selected');
		});
	})();


});