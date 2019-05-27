$(function(){
    $('.nav_ul li').click(function(){
        $(this).addClass('active')
        $(this).siblings().removeClass('active')
    })

    $('.slider_btn').click(function(){
        showSlider()
    })

    $('.mask').click(function(){
        hideSlider()
    })

    function showSlider(){
        $('.mask').fadeIn()
        $('.slider').css('left',0)
    }

    function hideSlider(){
        $('.mask').fadeOut()
        $('.slider').css('left',-300)
    }

    // $(window).scroll(function(){
    //     if($(window).scrollTop()<100){
    //         $('.top').css('display','block')
    //     }
    //     else{
    //         $('.top').css('display','none')
    //     }
    // })


    $('.top').click(function(){

        $('body,html').animate({scrollTop:0},300)
    })

    $(window).scroll(function(){
        if($(window).scrollTop()>100){
            $('.top').css('display','block')
        }
        else{
            $('.top').css('display','none')
        }
    })

})