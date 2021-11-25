$(document).ready(function () {
    $('.manu>li>a').click(function (e) { 
        e.preventDefault();
        $(this).parent().siblings().find('ul').slideUp();
        $(this).parent().find('ul').slideToggle();
        $(this).parent().children('a').toggleClass('active');
        $(this).parent().siblings().find('a').removeClass('active');
    });
    $('.top a').click(function (e) { 
        e.preventDefault();
        $('html, body').animate({scrollTop:0},1000);
    });    
});

