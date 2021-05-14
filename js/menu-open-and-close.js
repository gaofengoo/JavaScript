$(function() {
    $("#btn").click(function() {
        if ($(this).attr("src") == "images/1.jpg") {
            $(".right").animate({
                width: "-=300px",
                opacity: "1",
                left: "300px"
            }, "slow");
            $(".left").animate({
                left: "0"
            }, "slow", "swing");
        } else {
            $(".right").animate({
                width: "+=300px",
                opacity: "1",
                left: "0"
            }, "slow");
            $(".left").animate({
                left: "-300px"
            }, "slow", "swing");
        }
        $(this).attr("src") == "images/1.jpg" ? $("#btn").attr({ src: "images/2.jpg", alt: "关闭侧边栏" }) : $("#btn").attr({ src: "images/1.jpg", alt: "关闭侧边栏" });

    });
});