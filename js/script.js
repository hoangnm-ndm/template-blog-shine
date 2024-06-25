jQuery(document).ready(function(){
"use strict";

/* =============== Ajax Contact Form ===================== */
$('#contactform').submit(function(){
    var action = $(this).attr('action');
    $("#message").slideUp(750,function() {
    $('#message').hide();
        $('#submit')
        .after('<img src="images/ajax-loader.gif" class="loader" />')
        .attr('disabled','disabled');
    $.post(action, {
        name: $('#name').val(),
        email: $('#email').val(),
        comments: $('#comments').val(),
        verify: $('#verify').val()
    },
        function(data){
            document.getElementById('message').innerHTML = data;
            $('#message').slideDown('slow');
            $('#contactform img.loader').fadeOut('slow',function(){$(this).remove()});
            $('#submit').removeAttr('disabled');
            if(data.indexOf('success') != null) $('#contactform').slideUp('slow');

        }
    );
    });
    return false;
});


/*=================== Responsive Menu ===================*/  
$(".responsive-menu > span.open-menu").on('click',function(){
    $(this).parent().find(".menu-links").toggleClass("slide");
    $("body").toggleClass("move");
    $(".responsive-menu .menu-links > ul li.menu-item-has-children ul").slideUp();    
});
$(".responsive-menu .menu-links > ul li.menu-item-has-children > a").click(function(){
    $(this).next("ul").slideToggle();
    return false;
});
$("html").on('click',function(){
    $(".responsive-header .menu-links").removeClass("slide");
    $("body").removeClass("move");
});
$(".responsive-menu > span.open-menu,.responsive-menu .menu-links > ul li.menu-item-has-children a").on('click',function(e){
    e.stopPropagation();
});


/*=================== STICKY HEADER ===================*/ 
var header_height = $("header.stick").innerHeight();
$(".theme-layout").css({
    "margin-top": header_height
});
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 70) {
        $(".stick").addClass("sticky");
    }
    else{
        $(".stick").removeClass("sticky");
    }
}); 




/*=================== Fixed and Sticky Header ===================*/  
$('.sticky-header').on("click",function() {
    var header_height = $("header").innerHeight();
    $(".theme-layout").css({
        "margin-top": header_height
    });
    $('header').addClass("stick sticky");
    $('.header-pos a').removeClass('applied');
    $(this).addClass('applied');
    return false;
});
$('.fixed-header').on("click",function() {
    $(".theme-layout").css({
        "margin-top": 0
    });
    $('header').removeClass("stick sticky");
    $('.header-pos a').removeClass('applied');
    $(this).addClass('applied');
    return false;
});

/*=================== Wide & Boxed Layout ===================*/  
$('.boxed').on("click",function() {
    $('.theme-layout').addClass("boxed");
    $('body').css('background-image', 'url(images/pattern9.png)');
    $('.layout a').removeClass('applied');
    $(this).addClass('applied');
    return false;
});
$('.wide').on("click",function() {
    $('.theme-layout').removeClass("boxed");
    $('body').css('background-image', 'none');
    $('.layout a').removeClass('applied');
    $(this).addClass('applied');
    return false;
});


$('.patterns a').on("click",function(){
    $('.theme-layout').addClass("boxed");
    $('.patterns a').removeClass("applied");
    $('.boxed').addClass('applied');
    $('.wide').removeClass('applied');
    $(this).addClass("applied");
    return false;
});

$('.bg1').on('click', function() {
    $('.theme-layout').addClass("boxed");
    $('body').css('background-image', 'url(images/pattern1.png)');
})
$('.bg2').on('click', function() {
    $('body').css('background-image', 'url(images/pattern2.png)');
})
$('.bg3').on('click', function() {
    $('body').css('background-image', 'url(images/pattern3.png)');
})
$('.bg4').on('click', function() {
    $('body').css('background-image', 'url(images/pattern4.png)');
})
$('.bg5').on('click', function() {
    $('body').css('background-image', 'url(images/pattern5.png)');
});


$('.sidepanel > span').on('click', function() {
    $(this).parent().toggleClass("show");
});


$('#cp4').colorpicker().on('changeColor', function(ev){
 jQuery.ajax({
  url: "http://tietheme.com/templates/shineblog/css/color/color.css",
  dataType: "text",
  success: function(cssText) {
   jQuery("<style></style>").appendTo("head").html(cssText.replace(/#e23a3e/g,ev.color.toHex()));
  }
 });
});


});







