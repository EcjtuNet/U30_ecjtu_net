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


	var page = 1;
	var banner_ul = $(".banner-img");
	setInterval(exchange, 3000);
	function exchange () {

		// 检测page的值，使当前的page与selected的小圆点一致
		function btnSel () {
			$('.banner-btn a').eq(page-1).addClass('selected')
										 .siblings().removeClass('selected');
		}
		/*if (!banner_ul.is(':animated')) {
			if (page == 1) {
				banner_ul.animate({left: -1366px;}, fast);
				page = img_count;
				btnSel();
			} else {
				banner_ul.animate({left: banner_w}, fast);
			};
		}*/
		if (!banner_ul.is(':animated')) {
			if (page != img_count) {
				banner_ul.animate({left: -1366px}, slow);
				page++;
			} else {
				banner_ul.animate({left: (img_count-1)*1366px}, slow)
			};
		} else{};

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