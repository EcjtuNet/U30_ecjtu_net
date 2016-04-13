<?php
/**
*functions and definitions
**/

/**
*COMMENT STYLE
**/

//remove notes after comment
add_filter('comment_form_defaults', 'remove_comment_styling_prompt');
function remove_comment_styling_prompt($defaults) {
    $defaults['comment_notes_after'] = '';
    return $defaults;
}
//change anonymous style
add_filter('comment_form_defaults','anonymous_form_style');
function anonymous_form_style($defaults){
    $defaults['author']='';
    $defaults['email']='';
    $defaults['url']='';
    return $defaults;
}
?>
