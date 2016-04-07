<?php
/* EcjtuNet u30 theme */ 
?>
<!DOCTYPE HTML>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
    <title>U30-Index</title>
    <link rel="stylesheet" href="<?php echo get_template_directory_uri();?>/css/index-style.css" />
<link href="http://fonts.googleapis.com/css?family=Open+Sans%3A300italic%2C400italic%2C600italic%2C300%2C400%2C600&subset=latin%2Clatin-ext&ver=3.9.6" rel="stylesheet" />
</head>
<body>
    <div id="container">
	<?php while(have_posts()):the_post();?>
            <ul>
                <li><a href="<?php the_permalink();?>">
			<?php the_title(); ?></a>
			<?php the_content('More'); ?>
		</li>
            </ul>
	<?php endwhile; ?>
    </div>
    <header id="header">
    	<div id="header-bar">
    		<h1><a href=""></a></h1>
    		<nav id="nav">
    			<ul>
    				<li><a id="ed" href="http://u30.ecjtu.net/archives/category/design"></a></li>
    				<li><a id="wc" href="http://u30.ecjtu.net/archives/category/ued"></a></li>
    				<li><a id="om" href="http://u30.ecjtu.net/archives/category/dod"></a></li>
    			</ul>
    		</nav>
    	</div>
    </header>
    <header id="header-fix">
        <div id="header-fix-bar">
            <h1><a href=""></a></h1>
            <nav id="nav-fix">
                <ul>
                    <li><a id="ed-fix" href=""></a></li>
                    <li><a id="wc-fix" href=""></a></li>
                    <li><a id="om-fix" href=""></a></li>
                </ul>
            </nav>
        </div>
    </header>
    <footer id="footer">
        <p id="link"><a href="">关于我们</a>|<a href="">网站地图</a>|<a href="">人才招聘</a>|<a href="">日新维基</a></p>
        <p class="copyright">华东交通大学团委、学工处 [<a href="">版权所有 交大日新</a>] 赣ICP备05003322号 日新工作室 维护</p>
        <p class="copyright">Copyright 2001-2014 By [<a href="">ecjtu.net</a>].All Rights Reserved</p>
    </footer>
</body>
</html>
