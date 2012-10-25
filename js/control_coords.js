/*---------*/
$(function () {
    var $window = $(window)
    ,   wide_vport = $window.width()
    ,   high_vport = $window.height()
    ,   vport = wide_vport + 'x' + high_vport
    ,   scroll_pos = $window.scrollTop()
    ,   ALL_PACKS = '.ship_pack_upper_left, .ship_pack_upper_right, .ship_pack_bottom_left, .ship_pack_bottom_right'
    ,   min, max
    ;
    $('.scroll_pos').html('Scroll: ' + scroll_pos);
    $('.vport').html('Resolution view-port: ' + vport);
    $.scrollTo({
        top: 12000,
        left: 0
    }, 10);
    $('.stars-sm').scrollPlax({
        staticSpeed: 0.90,
    });
    $('.stars-lg').scrollPlax({
        staticSpeed: 1.1,
    });
    /*------- NAV ------*/
    $('.step-12').click(function () {
        $.scrollTo({
            top: 0,
            left: 0
        }, 1000);
    });
    $('.step-11').click(function () {
        $.scrollTo({
            top: 1405,
            left: 0
        }, 1000);
    });
    $('.step-10').click(function () {
        $.scrollTo({
            top: 2300,
            left: 0
        }, 1000);
    });
    $('.step-09').click(function () {
        $.scrollTo({
            top: 2955,
            left: 0
        }, 1000);
    });
    $('.step-08').click(function () {
        $.scrollTo({
            top: 3622,
            left: 0
        }, 1000);
    });
    $('.step-07').click(function () {
        $.scrollTo({
            top: 4176,
            left: 0
        }, 1000);
    });
    $('.step-06').click(function () {
        $.scrollTo({
            top: 5040,
            left: 0
        }, 1000);
    });
    $('.step-05').click(function () {
        $.scrollTo({
            top: 5282,
            left: 0
        }, 1000);
    });
    $('.step-04').click(function () {
        $.scrollTo({
            top: 6426,
            left: 0
        }, 1000);
    });
    $('.step-03').click(function () {
        $.scrollTo({
            top: 6996,
            left: 0
        }, 1000);
    });
    $('.step-02').click(function () {
        $.scrollTo({
            top: 7255,
            left: 0
        }, 1000);
    });
    $('.step-01').click(function () {
        $.scrollTo({
            top: 12147,
            left: 0
        }, 1000);
    });
    $('.launcher').click(function () {
        var B = $('body');
        B.removeClass('smooth');
        $.scrollTo({
            top: 0,
            left: 0
        }, 50000, function () {
            B.addClass('smooth');
        });
    });
    $('.ship, .ship-packed').click(function () {
        $('body').toggleClass('smooth');
    });
    /*------------ STAGE 1 ------------*/
    $('.cloud-1').scrollPlax({
        staticSpeed: 0.70,
    });
    $('.cloud-2').scrollPlax({
        staticSpeed: 0.65,
    });
    $('.cloud-3').scrollPlax({
        staticSpeed: 0.70,
    });
    $('.cloud-4').scrollPlax({
        staticSpeed: 0.70,
    });
    $('.cloud-5').scrollPlax({
        staticSpeed: 0.68,
    });
    /*------------ STAGE 2 ------------*/
    $('.banner_2').scrollPlax({
        staticSpeed: 1.2,
    });
    $('.wiki_img').scrollPlax({
        staticSpeed: 0.88,
    });
    $('.myspace').scrollPlax({
        staticSpeed: 0.80,
    });
    /*------------ STAGE 3 ------------*/
    $('.banner_3').scrollPlax({
        staticSpeed: 1.2,
    });
    $('.satellite-c').scrollPlax({
        staticSpeed: 0.40,
    });
    $('.ray-c').scrollPlax({
        staticSpeed: 0.40,
    });
    $('.satellite-b').scrollPlax({
        staticSpeed: 0.45,
    });
    $('.ray-b').scrollPlax({
        staticSpeed: 0.45,
    });
    $('.satellite-a').scrollPlax({
        staticSpeed: 0.35,
    });
    $('.ray-a').scrollPlax({
        staticSpeed: 0.35,
    });
    $('.s3_stars-3_a').scrollPlax({
        staticSpeed: 0.60,
    });
    $('.s3_stars-3_b').scrollPlax({
        staticSpeed: 0.50,
    });
    $('.s3_stars-3_c').scrollPlax({
        staticSpeed: 0.40,
    });
    /*------------ STAGE 4 ------------*/
    $('.banner_4').scrollPlax({
        staticSpeed: 1.2,
    });
    $('.gmail').scrollPlax({
        staticSpeed: 0.88,
    });
    $('.youtube').scrollPlax({
        staticSpeed: 0.75,
    });
    $('.ship_pack_upper_left').scrollPlax({
        staticSpeed: 0.75,
    });
    $('.ship_pack_upper_right').scrollPlax({
        staticSpeed: 0.75,
    });
    $('.ship_pack_bottom_left').scrollPlax({
        staticSpeed: 0.75,
        reverseDirection: 1,
    });
    $('.ship_pack_bottom_right').scrollPlax({
        staticSpeed: 0.75,
        reverseDirection: 1,
    });
    $('.chrome').scrollPlax({
        staticSpeed: 0.70,
    });
    /*------------ STAGE 5 ------------*/
    $('.banner_5').scrollPlax({
        staticSpeed: 1.2,
    });
    $('.facebook').scrollPlax({
        staticSpeed: 0.70,
    });
    $('.twitter-a').scrollPlax({
        staticSpeed: 0.90,
    });
    $('.twitter-b').scrollPlax({
        staticSpeed: 0.75,
    });
    $('.twitter-c').scrollPlax({
        staticSpeed: 0.80,
    });
    $('.probe-r').scrollPlax({
        staticSpeed: 0.90,
    });
    $('.probe-l').scrollPlax({
        staticSpeed: 0.70,
        reverseDirection: 1,
    });
    $('.probe-l_2').scrollPlax({
        staticSpeed: 0.70,
    });
    /*------------ STAGE 6 ------------*/
    $('.banner_6').scrollPlax({
        staticSpeed: 1.2,
    });
    /*------------ STAGE 7 ------------*/
    $('.s7_stars-1').scrollPlax({
        staticSpeed: 0.25,
    });
    $('.s7_stars-2').scrollPlax({
        staticSpeed: 0.20,
    });
    $('.s7_stars-3').scrollPlax({
        staticSpeed: 0.30,
    });
    $('.s7_moon-1').scrollPlax({
        staticSpeed: 0.25,
    });
    $('.s7_moon-2').scrollPlax({
        staticSpeed: 0.23,
    });
    $('.s7_stars').scrollPlax({
        staticSpeed: 0.60,
    });
    // COVER THE SCROLL IN REAL TIME
    $(document).scroll(function () {
        var $window = $(window),
        scroll_pos = $window.scrollTop(),
        scroll_pos_2 = -10 + (+(scroll_pos * 1.5 - 2390));
        $('.scroll_pos').html('Scroll: ' + scroll_pos);
        $('.scroll_pos_2').html('Test Formulas: ' + scroll_pos_2);
        /*-----------NAVBAR------------*/
        if (scroll_pos <= 12147) {        // 01
            $('.navbar_back').csstop(478);
        }
        if (scroll_pos <= 7564) {        // 02
            $('.navbar_back').csstop(446);
        }
        if (scroll_pos <= 6996) {        // 03
            $('.navbar_back').csstop(416);
        }
        if (scroll_pos <= 6426) {        // 04
            $('.navbar_back').csstop(384);
        }
        if (scroll_pos <= 5626) {        // 05
            $('.navbar_back').csstop(354);
        }
        if (scroll_pos <= 5040) {        // 06
            $('.navbar_back').csstop(323);
        }
        if (scroll_pos <= 4176) {        // 07
            $('.navbar_back').csstop(291);
        }
        if (scroll_pos <= 3622) {        // 08
            $('.navbar_back').csstop(261);
        }
        if (scroll_pos <= 2955) {        // 09
            $('.navbar_back').csstop(230);
        }
        if (scroll_pos <= 2300) {        // 10
            $('.navbar_back').csstop(199);
        }
        if (scroll_pos <= 1405) {        // 11
            $('.navbar_back').csstop(168);
        }
        if (scroll_pos <= 250) {        // 12
            $('.navbar_back').csstop(137);
        }
        /*----------- SHIP ------------*/
        if (scroll_pos <= 10819) {
            $('.ship_fire').show();
            $('.ship').css({
                'background-position': '860px 0',
                'position': 'fixed',
                'top': '142px',
            });
        } else {
            $('.ship_fire').hide();
            $('.ship').css({
                'background-position': '860px 0',
                'position': 'absolute',
                'top': '10971px',
            });
        }
        if (scroll_pos > 630 && scroll_pos <= 10819) {
            $('.ship_fire').show();
        } else {
            $('.ship_fire').hide();
        }
        /*------------ STAGE 1 ------------*/
        if (scroll_pos <= 10907 && scroll_pos >= 10646) {
            $('.baydoor-right').css('left', - 10 - (scroll_pos * 1.5 - 17322));
            $('.baydoor-left').css('left', 10 + (scroll_pos * 1.5 - 15850));
        }
        if (scroll_pos <= 10646) {
            $('.baydoor-right').css('left', '1343px');
            $('.baydoor-left').css('left', '129px');
        }
        if (scroll_pos <= 10831) {
            $('.cloud-1').cssback(- 10 - (+(scroll_pos * 1.5 - 16420)));
            $('.cloud-2').cssback(- 10 + (+(scroll_pos * 1.5 - 14700)));
            $('.cloud-3').cssback(- 10 + (+(scroll_pos * 1.4 - 12800)));
            $('.cloud-4').cssback(- 10 + (+(scroll_pos * 1.5 - 14000)));
            $('.cloud-5').cssback(- 10 - (+(scroll_pos * 1.5 - 15700)));
        }
        posOp('.cloud-1', 10831, 0.1);
        posOp('.cloud-2', 10831, 0.1);
        posOp('.cloud-3', 10115, 0.1);
        posOp('.cloud-4', 10350, 0.1);
        posOp('.cloud-5', 10350, 0.1);
        /*------------ STAGE 2 ------------*/
        /*---------*/
        /*------------ STAGE 3 ------------*/
        if (scroll_pos <= 7690 && scroll_pos >= 7370) {
            $('.satellite-c').cssback(- 10 + (+(scroll_pos * 1.5 - 9790)));
            $('.ray-c').hide(1);
        }
        if (scroll_pos <= 7370) {
            $('.satellite-c').cssback(1265.5);
            $('.ray-c').show(300);
        }
        /*---------*/
        if (scroll_pos <= 7690 && scroll_pos >= 7160) {
            $('.satellite-b').cssback(2300 - (scroll_pos * 1.5 - 8900));
            $('.ray-b').hide(1);
        }
        if (scroll_pos <= 7160) {
            $('.satellite-b').cssback(460);
            $('.ray-b').show(300);
        }
        /*---------*/
        posOp('.satellite-a', 7655, 0.000001);
        if (scroll_pos <= 7690 && scroll_pos >= 7300) {
            $('.satellite-a').cssback(2300 - (scroll_pos * 1.5 - 9045));
            $('.ray-a').hide(1);
        }
        if (scroll_pos <= 7300) {
            $('.satellite-a').cssback(381.5);
            $('.ray-a').show(300);
        }
        if (scroll_pos > 7404) {
            $('.ray-c, .ray-b, .ray-a').hide();
        }
        /*------------ STAGE 4 ------------*/
        posOp(ALL_PACKS, 5635, 0.000001);
        if (scroll_pos <= 5635 && scroll_pos >= 5169) {
            $('.ship_pack_upper_left').cssback(2300 - (scroll_pos * 1.5 - 6100));
            $('.ship_pack_upper_right').cssback(2300 + (scroll_pos * 1.5 - 9280));
            $('.ship_pack_bottom_left').cssback(2300 - (scroll_pos * 1.5 - 6100));
            $('.ship_pack_bottom_right').cssback(2300 + (scroll_pos * 1.5 - 9280));
        }
        if (scroll_pos <= 5169) {
            $('.ship_pack_upper_left').cssback(646.5);
            $('.ship_pack_upper_right').cssback(775.5);
            $('.ship_pack_bottom_left').cssback(646.5);
            $('.ship_pack_bottom_right').cssback(775.5);
        }
        if (scroll_pos <= 5152) {
            $('.ship').hide();
            $('.ship-packed').show();
            $(ALL_PACKS).hide();
        }
        if (scroll_pos > 5152) {
            $('.ship').show();
            $('.ship-packed').hide();
            $(ALL_PACKS).show();
        }
        if (scroll_pos <= 630) {
            $('.ship-packed').hide();
        }
        if (scroll_pos > 630 && scroll_pos <= 5152) {
            $('.ship-packed').show();
        }
        /*------------ STAGE 5 ------------*/
        if (scroll_pos <= 4722) {
            $('.twitter-a').cssback(2300 - (scroll_pos * 0.35 - 350));
            $('.twitter-b').cssback(2300 - (scroll_pos * 0.3 - 97));
            $('.twitter-c').cssback(2300 - (scroll_pos * 0.4 - 550));
        }
        /*---------*/
        posOp('.probe-r, .probe-l', 3822, 0.000001);
        if (scroll_pos <= 3822 && scroll_pos >= 3617) {
            $('.probe-r').cssback(2300 + (scroll_pos * 1.5 - 7300));
        }
        if (scroll_pos <= 3617) {
            $('.probe-r').cssback(425.5);
        }
        if (scroll_pos <= 3826 && scroll_pos >= 3604) {
            $('.probe-l').cssback(2300 - (scroll_pos * 1.5 - 4250));
        }
        if (scroll_pos <= 3604) {
            $('.probe-l').hide().cssback(1143);
            $('.probe-l_2').show();
        } else {
            $('.probe-l').show();
            $('.probe-l_2').hide();
        }
        //*------------ STAGE 6 ------------*/
        if (scroll_pos <= 2750) {
            $('.ship-sm_mirror_1').show();
            $('.ship-sm_mirror_1').csstop(2300 + (scroll_pos * 1.5 - 6200));
        }
        if (scroll_pos > 2750) {
            $('.ship-sm_mirror_1').hide();
        }
        if (scroll_pos <= 1750) {
            $('.ship-lg_mirror_2').csstop(2300 + (scroll_pos * 1.5 - 4350));
        }
        if (scroll_pos <= 2506) {
            $('.ship-sm_mirror_3').csstop(2300 + (scroll_pos * 1.5 - 5500));
        }
        if (scroll_pos <= 2035) {
            $('.ship-lg_mirror_4').show().csstop(2300 + (scroll_pos * 1.5 - 5080));
        }
        if (scroll_pos > 2035) {
            $('.ship-lg_mirror_4').hide();
        }
        /*------------ STAGEed ------------*/
        function posOp(sel, num, fact){
            opSet(sel, (scroll_pos <= num), (fact - (scroll_pos - num) / 100), 0);
        }
        function opSet(sel, tof, op1, op2){
            $(sel).css('opacity', tof ? op1 : op2);
        }
    });
});
    $.fn.cssback = function(nm1){
        this.css('background-position', (nm1|0) + 'px');
    };
    $.fn.csstop = function(nm1){
        this.css('top', (nm1|0) + 'px');
    };
/*--------------------*/
