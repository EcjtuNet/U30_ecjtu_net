<?php
/**
*Template for Comments
**/
?>
<div>
    <div>
        <?php if(post_password_required()): ?>
            <p>请登陆先！ </p>
        <?php return;
            endif;?>
    </div>

    <div>
        <?php if(have_comments()): ?>
        <ol>
            <?php
                wp_list_comments(array(
                    'style'=> 'ol',
                    'avatar_size'=> 34,
                ));
            ?>
        </ol>
    </div>

    <div>
        <?php if(! comments_open()): ?>
        <p> 暂时不开放评论功能 </p>
        <?php endif; ?>
        <?php endif; ?>
    
        <?php if(is_user_logged_in()){
            comment_form();
        }else{
            echo "<p>登陆后才能评论啊！</p>";
        } 
        ?>
    </div>
</div>
