<?php
/* EcjtuNet u30 content-templates */ 
?>
<!DOCTYPE HTML>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
    <title>U30-Index</title>
    <link rel="stylesheet" href="<?php echo get_template_directory_uri();?>/css/index-style.min.css" />
    <link rel="stylesheet" href="<?php echo get_template_directory_uri();?>/css/theme-my-login.min.css">
</head>
<body>
    <div id="container">
        <div id="login-box">
        <?php while(have_posts()):the_post();?>
            <div class="index-title">
                <a href="<?php the_permalink();?>"><?php the_title();?></a>
            </div>
            </br>
            <?php the_content();?>         
        <?php endwhile; ?>
        </div>
    </div>
    <?php get_header() ?>
    <?php get_footer() ?>
