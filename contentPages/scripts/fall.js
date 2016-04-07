$(document).ready(function() {
	// Start Function fall
	falls('content', 'box');

	var data = [
					{
						'url': '../1.jpg',
						'title': '第一篇文章',
						'name': '点点',
						'time': '2014.9.1',
						'scan': '12',
						'comment':'1'
					},
					{
						'url': '../2.jpg',
						'title': '第一篇文章',
						'name': '点点',
						'time': '2014.9.1',
						'scan': '12',
						'comment':'1'
					},
					{
						'url': '../3.jpg',
						'title': '第一篇文章',
						'name': '点点',
						'time': '2014.9.1',
						'scan': '12',
						'comment':'1'
					},
					{
						'url': '../4.jpg',
						'title': '第一篇文章',
						'name': '点点',
						'time': '2014.9.1',
						'scan': '12',
						'comment':'1'
					},
					{
						'url': '../1.jpg',
						'title': '第一篇文章',
						'name': '点点',
						'time': '2014.9.1',
						'scan': '12',
						'comment':'1'
					},
			   ]

	window.onscroll = function() {
		if (getCheck()) {
			var content = $('#content');
			for (i in data) {
				// Create box
				var box = document.createElement('a');
				box.className = 'box';
				box.style.background = 'url(' + data[i].url + ')';
				content.appendChild(box);

				// Create intro
				var intro = document.createElement('div');
				intro.className = 'intro';
				box.appendChild(intro);

				// Create title
				var title = document.createElement('h2');
				title.className = 'title';
				title.innerHTML = data[i].title;
				intro.appendChild(title);

				// Create write-info
				var writeInfo = document.createElement('p');
				writeInfo.className = 'write-info';
				box.appendChild(write-info);

				// Create name
				var name = document.createElement('span');
				name.className = 'name';
				name.innerHTML = data[i].name;
				writeInfo.appendChild(name);

				// Create time
				var time = document.createElement('span');
				time.className = 'time';
				time.innerHTML = data[i].time;
				writeInfo.appendChild(time);

				// Create social-info
				var socialInfo = document.createElement('div');
				socialInfo.className = 'social-info';
				intro.appendChild(social-info);

				// Create scan
				var scan = document.createElement('p');
				scan.className = 'scan';
				scan.innerHTML = '浏览：' + data[i].scan;
				social-info.appendChild(scan);

				// Create comment
				var comment = document.createElement('p');
				comment.className = 'comment';
				comment.innerHTML = '评论：' + data[i].comment;
				social-info.appendChild(comment);
			};
		};
	};

	/**
	* 瀑布流主函数
	* @param  wrap	[Str] 外层元素的ID
	* @param  box 	[Str] 每一个box的类名
	*/
	function falls(wrap,box){
		//	1.获得外层以及每一个box
		var wrap = document.getElementById(wrap);
		var boxs  = getClass(wrap,box);
		//	2.获得屏幕可显示的列数
		var boxW = boxs[0].offsetWidth;
		var colsNum = Math.floor(document.documentElement.clientWidth/boxW);
		wrap.style.width = boxW*colsNum+'px';//为外层赋值宽度
		//	3.循环出所有的box并按照瀑布流排列
		var everyH = [];//定义一个数组存储每一列的高度
		for (var i = 0; i < boxs.length; i++) {
			if(i<colsNum){
				everyH[i] = boxs[i].offsetHeight;
			}else{
				var minH = Math.min.apply(null,everyH);//获得最小的列的高度
				var minIndex = getIndex(minH,everyH); //获得最小列的索引
				getStyle(boxs[i],minH,boxs[minIndex].offsetLeft,i);
				everyH[minIndex] += boxs[i].offsetHeight;//更新最小列的高度
			}
		}
	}
	/**
	* 获取类元素
	* @param  warp		[Obj] 外层
	* @param  className	[Str] 类名
	*/
	function getClass(wrap,className){
		var obj = wrap.getElementsByTagName('*');
		var arr = [];
		for(var i=0;i<obj.length;i++){
			if(obj[i].className == className){
				arr.push(obj[i]);
			}
		}
		return arr;
	}
	/**
	* 获取最小列的索引
	* @param  minH	 [Num] 最小高度
	* @param  everyH [Arr] 所有列高度的数组
	*/
	function getIndex(minH,everyH){
		for(index in everyH){
			if (everyH[index] == minH ) return index;
		}
	}
	/**
	* 数据请求检验
	*/
	function getCheck(){
		var documentH = document.documentElement.clientHeight;
		var scrollH = document.documentElement.scrollTop || document.body.scrollTop;
		return documentH+scrollH>=getLastH() ?true:false;
	}
	/**
	* 获得最后一个box所在列的高度
	*/
	function getLastH(){
		var wrap = document.getElementById('wrap');
		var boxs = getClass(wrap,'box');
		return boxs[boxs.length-1].offsetTop+boxs[boxs.length-1].offsetHeight;
	}
	/**
	* 设置加载样式
	* @param  box 	[obj] 设置的Box
	* @param  top 	[Num] box的top值
	* @param  left 	[Num] box的left值
	* @param  index [Num] box的第几个
	*/
	var getStartNum = 0;//设置请求加载的条数的位置
	function getStyle(box,top,left,index){
	    if (getStartNum>=index) return;
	    $(box).css({
	        "opacity":"0"
	    });
	    $(box).stop().animate({
	        "opacity":"1"
	    },999);
	    getStartNum = index;//更新请求数据的条数位置
	}
});