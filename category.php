<?php
/* EcjtuNet u30 category-templates */ 
?>
<!DOCTYPE HTML>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
    <title>U30-Index</title>
    <link rel="stylesheet" href="<?php echo get_template_directory_uri();?>/css/index-style.min.css" />
</head>
<body>
    <div id="container">
        <?php
            $category = get_the_category();
            echo "<div class='banner banner-" . $category[0]->cat_name . "'></div>";
        ?>
        <ul>
    	<?php while(have_posts()):the_post();?>
                
            <li>
                <div class="index-title">
                    <a href="<?php the_permalink();?>"><?php the_title();?></a>
                </div>
                <article class="markdown-body"><?php the_content();?></article>
                <div class="info">
                    <span class="author"><?php the_author(); ?></span>
                    <span class="time"><?php the_time( $d ); ?></span>
                </div>
    		    </br>
    		</li>
                
    	<?php endwhile; ?>
        </ul>
    </div>
    <?php get_header() ?>
    <?php get_footer() ?>
