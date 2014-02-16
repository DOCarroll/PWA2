$('.loginbox').hide();
$('.signupbox').hide();
$('.gray').hide();
$('.adminbox').hide();

//Sounds Initialization
$(document).ready(function(){

    $.ionSound({
        sounds: [
            "beer_can_opening"
        ],
        path: "sounds/",
        multiPlay: true,
        volume: "1.0"
    });
    $("#b01").on("click", function(){
        $.ionSound.play("beer_can_opening");
    });
});

//Toaster Plugin
toastr.warning('Make sure to sign up for our Newsletter to receive exclusive offers!');

//Animated Forms
$("input.label_better").label_better({
    position: "left", // This will let you define the position where the label will appear when the user clicked on the input fields. Acceptable options are "top", "bottom", "left" and "right". Default value is "top".
    animationTime: 500, // This will let you control the animation speed when the label appear. This option accepts value in milliseconds. The default value is 500.
    easing: "ease-in-out", // This option will let you define the CSS easing you would like to see animating the label. The option accepts all default CSS easing such as "linear", "ease" etc. Another extra option is you can use is "bounce". The default value is "ease-in-out".
    offset: 20, // You can add more spacing between the input and the label. This option accepts value in pixels (without the unit). The default value is 20.
    hidePlaceholderOnFocus: true // The default placeholder text will hide on focus
});

//Display Admin Box
$(".Admin").click(function(){
    $(".adminbox").show();
    $(".gray").show();
});

//Hide Box on Cancel
$(".cancelA").click(function(){
    $(".gray").hide();
    $(".adminbox").hide();
});


$(".signup").click(function(){
    $(".gray").show();
    $(".signupbox").show();
    $(".loginbox").hide();
});
$("#signup").click(function(){
    $(".gray").show();
});

$(".login").click(function(){
    $(".loginbox").show();
});

$("#SignUp").click(function(){
    $(".signupbox").show();
    $(".gray").show();
});

$(".cancel").click(function(){
    $(".loginbox").hide();
});
$(".cancelS").click(function(){
    $(".signupbox").hide();
    $(".gray").hide();
});


$(".cancel").css('cursor', 'pointer');
$(".signup").css('cursor', 'pointer');
$(".cancelS").css('cursor', 'pointer');
$(".addDelete").css('cursor', 'pointer');
$(".cancelA").css('cursor', 'pointer');
$(".Admin").css('cursor', 'pointer');
