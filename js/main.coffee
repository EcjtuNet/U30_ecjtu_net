###
 * U30 
 * http://U30.ecjtu.net
 * 
 * 日新技术中心U30团队博客
 * 
 * @author          Venshy at EcjtuNet
 * @version         0.1
 * @last-time       2014.7.21
 *
###
$(document).ready ->
    meny = Meny.create
        menuElement: document.querySelector( '.meny' )
        contentsElement: document.querySelector( '.contents' )
        position: Meny.getQuery().p || 'left'
        height: 200
        width: 260
        threshold: 40
        mouse: true
        touch: true
    if Meny.getQuery().u && Meny.getQuery().u.match( /^http/gi ) 
        contents = document.querySelector( '.contents' );
        contents.style.padding = '0px';
        contents.innerHTML = '<div class="cover"></div><iframe src="'+ Meny.getQuery().u +'" style="width: 100%; height: 100%; border: 0; position: absolute;"></iframe>';
    $('#logo').fadeIn 300
    $('#picin').fadeIn 300
    $('#nav li').mouseover -> $(this).fadeTo 300, 0.60
    $('#nav li').mouseout -> $(this).stop(true).fadeTo 300, 1
    console.log '随时欢迎加入我们 wtbhk@live.cn'
    