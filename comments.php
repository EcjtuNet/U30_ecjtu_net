<?php
/**
*Template for Comments
**/
?>
<div id="u30-comment">
    <div>
        <?php if(post_password_required()): ?>
            <p><a href='http://u30.ecjtu.net/login'>请登陆先！</a> </p>
        <?php return;
            endif;?>
    </div>

    <div>
        <?php if(have_comments()): ?>
        <ol>
            <?php
                wp_list_comments(array(
                    'style'=> 'ol',
                    'avatar_size'=> 60,
                ));
            ?>
        </ol>
        <?php endif; ?>
    </div>

    <div>
        <?php if(! comments_open()): ?>
        <p class="error"> 暂时不开放评论功能 </p>
        <?php endif; ?>
    
        <?php if(is_user_logged_in()){
            comment_form();
        } else {
            echo "<p class='error'><a href=".wp_login_url(get_permalink()).">登陆评论</a></p>";
        } 
        ?>
    </div>
</div>
