window.onload = function () {
	waterfall('content', 'box');
	// 模拟数据
	var dataInt = {
		'img': [{'src': '1.jpg'}, {'src': '2.jpg'}, {'src': '3.jpg'}],
		'title': [{'title': '第一篇文章'}, {'title': '第二篇文章'}, {'title': '第三篇文章'}],
		'name': [{'name': '点点'}, {'name': '小黑'}, {'name': '皂哲'}],
		'time': [{'time': '2014.9.1'}, {'time': '2014.10.2'}, {'time': '2014.11.3'}],
		'scan': [{'scan': '13'}, {'scan': '24'}, {'scan': '99'}],
		'comment': [{'comment': '12'}, {'comment': '5'}, {'comment': '1'}]
	}
	// 点击加载
	// var more = document.getElementById('more');
	window.onscroll = function () {
		if (checkScrollSide()) {
			var oParent = document.getElementById('content');// 父级对象
			console.log(dataInt.img.length)
			for (var i = 0; i < dataInt.img.length; i++) {
				// Create box
				var box = document.createElement('div');
				box.className = 'box';
				oParent.appendChild(box);

				// Create boxIn
				var boxIn = document.createElement('a');
				boxIn.className = 'boxIn';
				box.appendChild(boxIn);

				// Create intro
				var intro = document.createElement('div');
				intro.className = 'intro';
				boxIn.appendChild(intro);

				// Create img
				var img = document.createElement('img');
				img.src = './images/' + dataInt.img[i].src;
				boxIn.appendChild(img);

				// Create title
				var title = document.createElement('h2');
				title.className = 'title';
				title.innerHTML = dataInt.title[i].title;
				intro.appendChild(title);

				// Create write-info
				var writeInfo = document.createElement('p');
				writeInfo.className = 'write-info';
				intro.appendChild(writeInfo);

				// Create name
				var name = document.createElement('span');
				name.className = 'name';
				name.innerHTML = dataInt.name[i].name;
				writeInfo.appendChild(name);

				// Create time
				var time = document.createElement('span');
				time.className = 'time';
				time.innerHTML = dataInt.time[i].time;
				writeInfo.appendChild(time);

				// Create social-info
				var socialInfo = document.createElement('div');
				socialInfo.className = 'social-info';
				intro.appendChild(socialInfo);

				// Create scan
				var scan = document.createElement('p');
				scan.className = 'scan';
				scan.innerHTML = '浏览：' + dataInt.scan[i].scan;
				socialInfo.appendChild(scan);

				// Create comment
				var comment = document.createElement('p');
				comment.className = 'comment';
				comment.innerHTML = '评论：' + dataInt.comment[i].comment;
				socialInfo.appendChild(comment);
			}
			waterfall('content', 'box');
		};
	}
}
// 瀑布流主体函数
function waterfall (parent, box) {
	// 获取父元素
	var oParent = document.getElementById(parent);
	// 存储box元素数组
	var	oBoxs = getClassObj(oParent, box);
	// 获取box元素宽度
	var	oBoxW = oBoxs[0].offsetWidth;
	// 计算一行内列数
	var	cols = Math.floor(oParent.offsetWidth/oBoxW);

	oParent.style.cssText = 'width:' + oBoxW*cols + 'px;margin:0 auto;';
	// 创建数组保存当前列高
	var hArr = [];
	for (var i = 0; i < oBoxs.length; i++) {
		if (i < cols) {
			hArr.push(oBoxs[i].offsetHeight);
			// console.log(hArr[i]);
		} else {
			var minH = Math.min.apply(null, hArr);// 计算当前列最小高度
			var minIndex = getMinhIndex(hArr, minH);// 获取最小高度块的索引
			oBoxs[i].style.position = 'absolute';
			oBoxs[i].style.top = minH + 'px';
			oBoxs[i].style.left = oBoxW * minIndex + 'px';
			// oBoxs[i].style.left = oBoxs[minIndex].offsetLeft + 'px';
			hArr[minIndex] += oBoxs[i].offsetHeight;// 更新当前列高
		}
	};
	console.log(hArr);
}
// 通过className获取元素
function getClassObj (parent, className) {
	//获取 父级的所有子集
    var obj = parent.getElementsByTagName('*');
    //创建一个数组 用于收集子元素
    var pinS = [];
    //遍历子元素、判断类别、压入数组
    for (var i = 0; i < obj.length; i++) {
        if (obj[i].className == className){
            pinS.push(obj[i]);
        }
    };
    return pinS;
}
// 获取最小高度块的高度
function getMinhIndex (arr, minH) {
	for (var i in arr) {
		if (arr[i] == minH) {
			return i;
		}
	}
}
// 检测加载条件
function checkScrollSide () {
	var oParent = document.getElementById('content');
	var oBoxs = getClassObj(oParent, 'box');
	var lastBoxH = oBoxs[oBoxs.length-1].offsetTop + Math.floor(oBoxs[oBoxs.length-1].offsetHeight/2);
	// console.log(lastBoxH)
	var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
	// console.log(scrollTop)
	var height = document.documentElement.clientHeight;
	// console.log(height)
	return (lastBoxH < scrollTop + height) ? true : false;
}