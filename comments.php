<?php
/**
*Template for Comments
**/
?>
<div>
    <div>
        <?php if(post_password_required()): ?>
            <p>Please Login in </p>
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
        <p> Comments are closed </p>
        <?php endif; ?>
        <?php endif; ?>
    
        <?php comment_form(); ?>
    </div>
</div>
