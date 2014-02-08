$('.loginbox').hide();
$('.signupbox').hide();
$('.gray').hide();
$('.adminbox').hide();


$(".Admin").click(function(){
    $(".gray").show();
});

$(".Admin").click(function(){
    $(".adminbox").show();
});

$(".cancelA").click(function(){
    $(".adminbox").hide();
});

$(".cancelA").click(function(){
    $(".gray").hide();
});


$(".signup").click(function(){
    $(".gray").show();
});
$("#signup").click(function(){
    $(".gray").show();
});

$(".login").click(function(){
    $(".loginbox").show();
});
$(".signup").click(function(){
    $(".signupbox").show();
});
$(".signup").click(function(){
    $(".loginbox").hide();
});
$("#SignUp").click(function(){
    $(".signupbox").show();
});
$("#SignUp").click(function(){
    $(".gray").show();
});
$(".cancel").click(function(){
    $(".loginbox").hide();
});
$(".cancelS").click(function(){
    $(".signupbox").hide();
});

$(".cancelS").click(function(){
    $(".gray").hide();
});

$(".cancel").css('cursor', 'pointer');
$(".signup").css('cursor', 'pointer');
$(".cancelS").css('cursor', 'pointer');
$(".addDelete").css('cursor', 'pointer');
$(".cancelA").css('cursor', 'pointer');
$(".Admin").css('cursor', 'pointer');
