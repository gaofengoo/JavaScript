$(function() {
    $("ul li span").mouseover(function() {
        $(this).parent().animate({ height: 340 }, 500);
        $(this).parent().siblings().animate({ height: 40 }, 500);
    })
})