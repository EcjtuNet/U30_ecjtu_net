<?php
/**
*Template for Comments
**/
?>
<div>
    <div>
        <?php if(post_password_required()): ?>
            <p><a href='http://u30.ecjtu.net/register'>请登陆先！</a> </p>
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
        <p> 暂时不开放评论功能 </p>
        <?php endif; ?>
    
        <?php if(is_user_logged_in()){
            comment_form();
        } else {
            echo "<p><a href='http://u30.ecjtu.net/register'>登陆</a>后才能评论啊！</p>";
        } 
        ?>
    </div>
</div>
