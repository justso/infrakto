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
        $.scrollTo({
            top: 0,
            left: 0
        }, 88000);
    });
    /*------------ STAGE 1 ------------*/
    $('.cloud_1').scrollPlax({
        staticSpeed: 0.70,
    });
    $('.cloud_2').scrollPlax({
        staticSpeed: 0.65,
    });
    $('.cloud_4').scrollPlax({
        staticSpeed: 0.70,
    });
    $('.cloud_5').scrollPlax({
        staticSpeed: 0.68,
    });
    $('.cloud_3').scrollPlax({
        staticSpeed: 0.70,
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
    $('.satellite_1').scrollPlax({
        staticSpeed: 0.40,
    });
    $('.rays_1').scrollPlax({
        staticSpeed: 0.40,
    });
    $('.satellite_2').scrollPlax({
        staticSpeed: 0.45,
    });
    $('.rays_2').scrollPlax({
        staticSpeed: 0.45,
    });
    $('.satellite_3').scrollPlax({
        staticSpeed: 0.35,
    });
    $('.rays_3').scrollPlax({
        staticSpeed: 0.35,
    });
    $('.stars_stage_3_a').scrollPlax({
        staticSpeed: 0.60,
    });
    $('.stars_stage_3_b').scrollPlax({
        staticSpeed: 0.50,
    });
    $('.stars_stage_3_c').scrollPlax({
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
    $('.twitter01').scrollPlax({
        staticSpeed: 0.90,
    });
    $('.twitter02').scrollPlax({
        staticSpeed: 0.75,
    });
    $('.twitter03').scrollPlax({
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
    $('.plat_7_stars_1').scrollPlax({
        staticSpeed: 0.25,
    });
    $('.plat_7_stars_2').scrollPlax({
        staticSpeed: 0.20,
    });
    $('.plat_7_stars_3').scrollPlax({
        staticSpeed: 0.30,
    });
    $('.plat_7_facebook').scrollPlax({
        staticSpeed: 0.25,
    });
    $('.plat_7_twitter').scrollPlax({
        staticSpeed: 0.23,
    });
    $('.plat_7_facebook').scrollPlax({
        staticSpeed: 0.25,
    });
    $('.plat_7_stars').scrollPlax({
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
            $('.navbar_back').css('top', '478px');
        }
        if (scroll_pos <= 7564) {        // 02
            $('.navbar_back').css('top', '446px');
        }
        if (scroll_pos <= 6996) {        // 03
            $('.navbar_back').css('top', '416px');
        }
        if (scroll_pos <= 6426) {        // 04
            $('.navbar_back').css('top', '384px');
        }
        if (scroll_pos <= 5626) {        // 05
            $('.navbar_back').css('top', '354px');
        }
        if (scroll_pos <= 5040) {        // 06
            $('.navbar_back').css('top', '323px');
        }
        if (scroll_pos <= 4176) {        // 07
            $('.navbar_back').css('top', '291px');
        }
        if (scroll_pos <= 3622) {        // 08
            $('.navbar_back').css('top', '261px');
        }
        if (scroll_pos <= 2955) {        // 09
            $('.navbar_back').css('top', '230px');
        }
        if (scroll_pos <= 2300) {        // 10
            $('.navbar_back').css('top', '199px');
        }
        if (scroll_pos <= 1405) {        // 11
            $('.navbar_back').css('top', '168px');
        }
        if (scroll_pos <= 250) {        // 12
            $('.navbar_back').css('top', '137px');
        }
        /*----------- SHIP ------------*/
        if (scroll_pos <= 10819) {
            $('.ship_fire').show();
            $('.ship').css({
                'position': 'fixed',
                'top': '142px',
                'background-position': '843px 0'
            });
        } else {
            $('.ship_fire').hide();
            $('.ship').css({
                'position': 'absolute',
                'top': '10971px',
                'background-position': '843px 0'
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
        posOp('.cloud_1', 10831, 0.1);
        if (scroll_pos <= 10831) {
            $('.cloud_1').css('background-position', - 10 - (+(scroll_pos * 1.5 - 16420)) + 'px', '-100px');
            $('.cloud_2').css('background-position', - 10 + (+(scroll_pos * 1.5 - 14700)) + 'px', '-100px');
            $('.cloud_3').css('background-position', - 10 + (+(scroll_pos * 1.4 - 12800)) + 'px', '-100px');
            $('.cloud_4').css('background-position', - 10 + (+(scroll_pos * 1.5 - 14000)) + 'px', '-100px');
            $('.cloud_5').css('background-position', - 10 - (+(scroll_pos * 1.5 - 15700)) + 'px', '-100px');
        }
        posOp('.cloud_2', 10831, 0.1);
        posOp('.cloud_3', 10115, 0.1);
        posOp('.cloud_4', 10350, 0.1);
        posOp('.cloud_5', 10350, 0.1);
        /*------------ STAGE 2 ------------*/
        /*---------*/
        /*------------ STAGE 3 ------------*/
        if (scroll_pos <= 7690 && scroll_pos >= 7370) {
            $('.satellite_1').css('background-position', - 10 + (+(scroll_pos * 1.5 - 9790)) + 'px', '-100px');
            $('.rays_1').hide(1);
        }
        if (scroll_pos <= 7370) {
            $('.satellite_1').css('background-position', '1265.5px');
            $('.rays_1').show(300);
        }
        /*---------*/
        if (scroll_pos <= 7690 && scroll_pos >= 7160) {
            $('.satellite_2').css('background-position', 2300 - (scroll_pos * 1.5 - 8900) + 'px', '100px');
            $('.rays_2').hide(1);
        }
        if (scroll_pos <= 7160) {
            $('.satellite_2').css('background-position', '460px');
            $('.rays_2').show(300);
        }
        /*---------*/
        posOp('.satellite_3', 7655, 0.000001);
        if (scroll_pos <= 7690 && scroll_pos >= 7300) {
            $('.satellite_3').css('background-position', 2300 - (scroll_pos * 1.5 - 9045) + 'px', '100px');
            $('.rays_3').hide(1);
        }
        if (scroll_pos <= 7300) {
            $('.satellite_3').css('background-position', '381.5px');
            $('.rays_3').show(300);
        }
        if (scroll_pos > 7404) {
            $('.rays_1, .rays_2, .rays_3').hide();
        }
        /*------------ STAGE 4 ------------*/
        posOp(ALL_PACKS, 5635, 0.000001);
        if (scroll_pos <= 5635 && scroll_pos >= 5169) {
            $('.ship_pack_upper_left').css('background-position', 2300 - (scroll_pos * 1.5 - 6100) + 'px', '100px');
            $('.ship_pack_upper_right').css('background-position', 2300 + (scroll_pos * 1.5 - 9280) + 'px', '100px');
            $('.ship_pack_bottom_left').css('background-position', 2300 - (scroll_pos * 1.5 - 6100) + 'px', '100px');
            $('.ship_pack_bottom_right').css('background-position', 2300 + (scroll_pos * 1.5 - 9280) + 'px', '100px');
        }
        if (scroll_pos <= 5169) {
            $('.ship_pack_upper_left').css('background-position', '646.5px', '100px');
            $('.ship_pack_upper_right').css('background-position', '775.5px', '100px');
            $('.ship_pack_bottom_left').css('background-position', '646.5px', '100px');
            $('.ship_pack_bottom_right').css('background-position', '775.5px', '100px');
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
            $('.twitter01').css('background-position', 2300 - (scroll_pos * 0.35 - 350) + 'px', '100px');
            $('.twitter02').css('background-position', 2300 - (scroll_pos * 0.3 - 97) + 'px', '100px');
            $('.twitter03').css('background-position', 2300 - (scroll_pos * 0.4 - 550) + 'px', '100px');
        }
        /*---------*/
        posOp('.probe-r, .probe-l', 3822, 0.000001);
        if (scroll_pos <= 3822 && scroll_pos >= 3617) {
            $('.probe-r').css('background-position', 2300 + (scroll_pos * 1.5 - 7300) + 'px', '100px');
        }
        if (scroll_pos <= 3617) {
            $('.probe-r').css('background-position', '425.5px', '100px');
        }
        if (scroll_pos <= 3826 && scroll_pos >= 3604) {
            $('.probe-l').css('background-position', 2300 - (scroll_pos * 1.5 - 4250) + 'px', '100px');
        }
        if (scroll_pos <= 3604) {
            $('.probe-l').hide().css('background-position', '1143px', '100px');
            $('.probe-l_2').show();
        } else {
            $('.probe-l').show();
            $('.probe-l_2').hide();
        }
        //*------------ STAGE 6 ------------*/
        if (scroll_pos <= 2750) {
            $('.ship-sm_mirror_1').show();
            $('.ship-sm_mirror_1').css('top', 2300 + (scroll_pos * 1.5 - 6200) + 'px');
        }
        if (scroll_pos > 2750) {
            $('.ship-sm_mirror_1').hide();
        }
        if (scroll_pos <= 1750) {
            $('.ship-lg_mirror_2').css('top', 2300 + (scroll_pos * 1.5 - 4350) + 'px');
        }
        if (scroll_pos <= 2506) {
            $('.ship-sm_mirror_3').css('top', 2300 + (scroll_pos * 1.5 - 5500) + 'px');
        }
        if (scroll_pos <= 2035) {
            $('.ship-lg_mirror_4').show().css('top', 2300 + (scroll_pos * 1.5 - 5080) + 'px');
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
/*--------------------*/
