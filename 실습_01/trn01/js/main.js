$(function () {
    $('.top_banner i').on('click', function () {
        $('.top_banner').slideUp();
    })

    $('.main_slider').on('init relnit afterChange', function (e, s, c) {
        console.log(e, s, c);
        var TG = $('.slick-current');
        TG.addClass('xxx').siblings().removeClass('xxx');
        $('.num').text((c ? c + 1 : 1) + '/' + s.slideCount);
    });

    $('.main_slider').slick({
        // arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        dots: true,
    });

    $('#bgndVideo').YTPlayer();

    $('.utb_movie .left').on('click', function () {
        $('#bgndVideo').YTPPause();
    });

    $('.utb_movie .right').on('click', function () {
        $('#bgndVideo').YTPPlay();
    });

    $('.customer_tab .tab_menu>li').on('click', function () {
        var idx = $(this).index(); //0, 1, 2
        $(this).addClass('on').siblings().removeClass('on');
        $('.customer_tab .tab_content>div')
            .eq(idx).addClass('on')
            .siblings()
            .removeClass('on');


    })

    $('#flink').on('change', function () {
        var lik = $(this).val();
        if (lik) window.open(lik);
    })

    $('.popup button').on('click', function () {
        $(this).parent().hide();
    })

})


