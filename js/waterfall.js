$(window).on('load', function() {
	waterfall('content', 'box');
	var dataInt = {
		'img': [{'src': '1.jpg'}, {'src': '2.jpg'}, {'src': '3.jpg'}],
		'title': ['第一篇文章', '第二篇文章', '第三篇文章'],
		'name': ['点点', '小黑', '皂哲'],
		'time': ['2014.1.1', '2014.8.8', '2014.10.10'],
		'scan': ['22', '11', '99'],
		'comment': ['1', '2', '3']
	}
	window.onscroll = function () {
		if (checkScroll()) {
			var oParent = document.getElementById('content');// 父级对象
			for (var i = 0; i < dataInt.img.length; i++) {
				// Create box
				var box = document.createElement('div');
				box.className = 'box';
				oParent.appendChild(box);

				// Create boxIn
				var boxIn = document.createElement('a');
				boxIn.className = 'boxIn';
				boxIn.href = "";
				box.appendChild(boxIn);

				// Create img
				var img = document.createElement('img');
				img.src = './images/' + dataInt.img[i].src;
				boxIn.appendChild(img);

				// Create intro
				var intro = document.createElement('div');
				intro.className = 'intro';
				boxIn.appendChild(intro);

				// Create title
				var title = document.createElement('h2');
				title.className = 'title';
				title.innerHTML = dataInt.title[i];
				intro.appendChild(title);

				// Create write-info
				var writeInfo = document.createElement('p');
				writeInfo.className = 'write-info';
				intro.appendChild(writeInfo);

				// Create name
				var name = document.createElement('span');
				name.className = 'name';
				name.innerHTML = dataInt.name[i];
				writeInfo.appendChild(name);

				// Create time
				var time = document.createElement('span');
				time.className = 'time';
				time.innerHTML = dataInt.time[i];
				writeInfo.appendChild(time);

				// Create social-info
				var socialInfo = document.createElement('div');
				socialInfo.className = 'social-info';
				intro.appendChild(socialInfo);

				// Create scan
				var scan = document.createElement('p');
				scan.className = 'scan';
				scan.innerHTML = '浏览：' + dataInt.scan[i];
				socialInfo.appendChild(scan);

				// Create comment
				var comment = document.createElement('p');
				comment.className = 'comment';
				comment.innerHTML = '评论：' + dataInt.comment[i];
				socialInfo.appendChild(comment);
			}
			waterfall('content', 'box');
		};
	}
});
// 瀑布流主函数
function waterfall (parent, box) {
	var content = $('#content'),
		box = $('.box');
	var boxW = $('.box').width();
		// console.log(boxW)
	var cols = Math.floor( content.width() / boxW);
		rows = 1;
		// console.log(cols);
	var boxH = box.height();
	box.each(function(index, val) {
		if (index % cols == 0) {
			rows ++;
		};
	});
}
// 检测加载条件
function checkScroll () {
	var content = $('#content'),
		box = $('.box');
	var boxW = $('.box').width(),
		boxH = $('.box').height();
	var bannerH = $('.banner').height(),
		headerH = $('#header').height();
	var cols = Math.floor( content.width() / boxW );
		// console.log(cols);
	var docH = $(document).height();
		// console.log(docH)
	// var boxTop = headerH + bannerH + boxH * Math.floor(  box.length / cols );// box列高
		// console.log(box);
		// console.log(boxTop);
	var scrollTop = $(document).scrollTop();// 滚动高度
		// console.log(scrollTop);
	var windowH = $(window).height();// 页面高度
		// console.log(windowH);
	console.log(scrollTop + windowH)
	return ( docH - scrollTop - windowH == 0 ) ? true : false;
}
