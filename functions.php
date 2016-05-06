<?php
/**
*functions and definitions
**/

/**
*comment style
**/

//remove notes after comment
add_filter('comment_form_defaults', 'remove_comment_styling_prompt');
function remove_comment_styling_prompt($defaults) {
    $defaults['comment_notes_after'] = '';
    return $defaults;
}
/**
//change anonymous style
add_filter('comment_form_defaults','anonymous_form_style');
function anonymous_form_style($defaults){
    $defaults['author']='';
    $defaults['email']='';
    $defaults['url']='';
    return $defaults;
}
**/

/**
*pagination
**/
/*
function pagination($query_string){   
    global $posts_per_page, $paged;   
    $my_query = new WP_Query($query_string ."&posts_per_page=-1");   
    $total_posts = $my_query->post_count;   
    if(empty($paged))
        $paged = 1;   
    $prev = $paged - 1;   
    $next = $paged + 1;   
    $range = 2;
    $showitems = ($range * 2)+1;   
    $pages = ceil($total_posts/$posts_per_page);   
    if(1 != $pages){   
        echo "<div class='pagination'>";   
        echo ($paged > 2 && $paged+$range+1 > $pages && $showitems < $pages) ? "<a href='".get_pagenum_link(1)."'>First Page</a>":"";   
        echo ($paged > 1 && $showitems < $pages)?"<a href='".get_pagenum_link($prev)."'>Last Page</a>":"";   
  
    for ($i=1; $i <= $pages; $i++){   
        if (1 != $pages &&( !($i >= $paged+$range+1 || $i <= $paged-$range-1) || $pages <= $showitems )){   
            echo ($paged == $i)? "<span class='current'>".$i."</span>":"<a href='".get_pagenum_link($i)."' class='inactive' >".$i."</a>";   
            }   
    }   
  
echo ($paged < $pages && $showitems < $pages) ? "<a href='".get_pagenum_link($next)."'>下一页</a>" :"";   
echo ($paged < $pages-1 &&  $paged+$range-1 < $pages && $showitems < $pages) ? "<a href='".get_pagenum_link($pages)."'>最后</a>":"";   
echo "</div>\n";   
}   
} 
*/
function my_post_queries( $query ) {
  // do not alter the query on wp-admin pages and only alter it if it's the main query
  if (!is_admin() && $query->is_main_query()){

    // alter the query for the home and category pages 

    if(is_home()){
      $query->set('posts_per_page', 5);
    }

    if(is_category()){
      $query->set('posts_per_page', 5);
    }

  }
}
add_action( 'pre_get_posts', 'my_post_queries' ); 
?>

