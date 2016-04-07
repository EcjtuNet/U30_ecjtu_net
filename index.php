<?php
<<<<<<< HEAD
/* EcjtuNet u30 category-templates */ 
?>
<!DOCTYPE HTML>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
    <title>U30-Index</title>
    <link rel="stylesheet" href="<?php echo get_template_directory_uri();?>/css/index-style.css" />
<link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Open+Sans%3A300italic%2C400italic%2C600italic%2C300%2C400%2C600&subset=latin%2Clatin-ext&ver=3.9.6" />
</head>
<body>
    <div id="container">
	<?php while(have_posts()):the_post();?>
            <ul>
                <li><a href="<?php the_permalink();?>">
			<?php the_title();?></a>
			<?php the_content();?>
		</br>
		</li>
            </ul>
	<?php endwhile; ?>
    </div>
    <header id="header">
    	<div id="header-bar">
    		<h1><a href="http://u30.ecjtu.net"></a></h1>
    		<nav id="nav">
    			<ul>
    				<li><a id="ed" href="http://u30.ecjtu.net/archives/category/design"></a></li>
    				<li><a id="wc" href="http://u30.ecjtu.net/archives/category/ued"></a></li>
    				<li><a id="om" href="http://u30.ecjtu.net/archives/category/dod"></a></li>
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
=======
/* EcjtuNet u30 theme */
?>
<!DOCTYPE HTML>
<html lang="en-US">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
    <title>U30</title>
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/style.min.css" />
    <link rel="icon" href="<?php echo get_template_directory_uri(); ?>/images/icon.png" />
</head>
<body>
    <div class="meny">
        <h2>EcjtuNet U30</h2>
        <ul>
        	<li><a href="http://u30.ecjtu.net" target="_blank">Home</a></li>
            <li><a href="http://www.ecjtu.net" target="_blank">EcjtuNet</a></li>
            <li><a href="http://post.ecjtu.net" target="_blank">Post</a></li>
            <li><a href="http://swzl.ecjtu.net" target="_blank">Swzl</a></li>
            <li><a href="http://u.ecjtu.net" target="_blank">UCloud</a></li>
            <li><a href="http://pic.ecjtu.net" target="_blank">Picture</a></li>
        </ul>
    </div>
    <div class="meny-arrow"></div>
    <div class="contents">
        <div id="content">
            <div class="main">
                <div class="main-wrap">
                    <div id="logo">日新U30</div>
                    <div id="picin" class="shake shake-hard">
                        <div id="year">2014</div>
                        <div id="theme">该干嘛干嘛，没有css真作死</div>
                    </div>
                    <div id="nav"> 
                        <ul>
                            <li class="item-1"><a href="http://u30.ecjtu.net/wp-content/themes/EcjtuNet/contentPages/ed.html">体验设计</a></li>
                            <li class="item-2"><a href="http://u30.ecjtu.net/wp-content/themes/EcjtuNet/contentPages/wc.html">网站建设</a></li>
                            <li class="item-3"><a href="http://u30.ecjtu.net/wp-content/themes/EcjtuNet/contentPages/om.html">安全运维</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div id="footer">
            <div>
                <p>
                    <span id="copyright">CopyRight 2001-2014 By [ecjtu.net] .All Rights Reserved</span>
                    <a id="about" href="http://www.ecjtu.net/about">关于我们</a>
                    <a id="hr" href="http://hr.ecjtu.net">加入我们</a>
                </p>
            </div>
        </div>
    
    </div>
    <script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/jquery-1.11.0.min.js"></script>
    <script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/meny.js"></script>
    <script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/main.js"></script>
</body>
</html>
>>>>>>> 3675b29fdea093e168c89e8b3cdfce3747e0feee
