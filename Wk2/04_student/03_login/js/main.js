$("loginButton").click(function(){
    $(this).addClass("active");
    $(this).find("loginBox").show().animate({opacity: 1}, 400);
},function() {
    $(this).find("ul").hide().animate({opacity:0}, 200);
    $(this).removeClass("active");

});