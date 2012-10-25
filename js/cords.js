$(function () {
    var $document = glob.doc
    ,   $window = glob.win
    ,   wide_vport = $window.width()
    ,   high_vport = $window.height()
    ,   scroll_pos = $window.scrlit()
    ,   ALL_PACKS = '.s4_pack_NW, .s4_pack_NE, .s4_pack_SW, .s4_pack_SE'
    ,   DRIVES = '.hero-drive, .hero-drive2'
    ;
/* ----  ---- */
    $('.grit-sm').plaxStat(0.90);
    $('.grit-lg').plaxStat(1.1);

    $('.s1_obj-1').plaxStat(0.70);
    $('.s1_obj-2').plaxStat(0.65);
    $('.s1_obj-3').plaxStat(0.70);
    $('.s1_obj-4').plaxStat(0.70);
    $('.s1_obj-5').plaxStat(0.68);

    $('.s2').plaxStat(1.2);
    $('.s2_obj-1').plaxStat(0.88);
    $('.s2_obj-2').plaxStat(0.80);

    $('.s3').plaxStat(1.2);
    $('.s3_spawn-c').plaxStat(0.40);
    $('.s3_emit-c').plaxStat(0.40);
    $('.s3_spawn-b').plaxStat(0.45);
    $('.s3_emit-b').plaxStat(0.45);
    $('.s3_spawn-a').plaxStat(0.35);
    $('.s3_emit-a').plaxStat(0.35);
    $('.s3_spec-a').plaxStat(0.60);
    $('.s3_spec-b').plaxStat(0.50);
    $('.s3_spec-c').plaxStat(0.40);

    $('.s4').plaxStat(1.2);
    $('.s4_obj-1').plaxStat(0.88);
    $('.s4_obj-2').plaxStat(0.75);
    $('.s4_pack_NW').plaxStat(0.75);
    $('.s4_pack_NE').plaxStat(0.75);
    $('.s4_pack_SW').plaxStat(0.75, 1);
    $('.s4_pack_SE').plaxStat(0.75, 1);
    $('.chrome').plaxStat(0.70);

    $('.s5').plaxStat(1.2);
    $('.s5_obj-1').plaxStat(0.70);
    $('.s5_obj-2-a').plaxStat(0.90);
    $('.s5_obj-2-b').plaxStat(0.75);
    $('.s5_obj-2-c').plaxStat(0.80);
    $('.s5_probe-1').plaxStat(0.90);
    $('.s5_probe-2').plaxStat(0.70, 1);
    $('.s5_probe-2_stay').plaxStat(0.70);

    $('.s6').plaxStat(1.2);

    $('.s7_fill-1').plaxStat(0.25);
    $('.s7_fill-2').plaxStat(0.20);
    $('.s7_fill-3').plaxStat(0.30);
    $('.s7_obj-1').plaxStat(0.25);
    $('.s7_obj-2').plaxStat(0.23);
    $('.s7_fill-0').plaxStat(0.60);

    // SCROLL IN REAL TIME

    $document.scroll(function () {
        scroll_pos = $window.scrlit()
        ;
        $('.vport .log').html(
            'screen: ' + (wide_vport + 'x' + high_vport)
            + '<br>' +
            'scroll: ' + scroll_pos
        );
/*
    ---- FORE ----
*/
        if (scroll_pos <= 10819) {
            $(DRIVES).show();
            $('.hero-main').css({
                'position': 'fixed',
                'left': '333px',
                'top': '',
            });
        } else {
            $(DRIVES).hide();
            $('.hero-main').css({
                'position': 'absolute',
                'top': '820px',
                'left': '10971px',
            });
        }
        if (scroll_pos > 330 && scroll_pos <= 10819) {
            $(DRIVES).show();
        } else {
            $(DRIVES).hide();
        }
        if (scroll_pos <= 330) {
//            $('.hero-packed').hide();
        }
/*
    ---- STAGE 1-2 ----
*/
        if (scroll_pos <= 10907 && scroll_pos >= 10646) {
            $('.s0_door-2').css('top', - 10 - (scroll_pos * 1.5 - 17322));
            $('.s0_door-1').css('top', 10 + (scroll_pos * 1.5 - 15850));
        }
        if (scroll_pos <= 10646) {
            $('.s0_door-2').css('top', '1343px');
            $('.s0_door-1').css('top', '129px');
        }
        if (scroll_pos <= 10831) {
            $('.s1_obj-1').cssback(- 10 - (+(scroll_pos * 1.5 - 16420)));
            $('.s1_obj-2').cssback(- 10 + (+(scroll_pos * 1.5 - 14700)));
            $('.s1_obj-3').cssback(- 10 + (+(scroll_pos * 1.4 - 12800)));
            $('.s1_obj-4').cssback(- 10 + (+(scroll_pos * 1.5 - 14000)));
            $('.s1_obj-5').cssback(- 10 - (+(scroll_pos * 1.5 - 15700)));
        }
        posOp('.s1_obj-1', 10831, 0.1);
        posOp('.s1_obj-2', 10831, 0.1);
        posOp('.s1_obj-3', 10115, 0.1);
        posOp('.s1_obj-4', 10350, 0.1);
        posOp('.s1_obj-5', 10350, 0.1);
/*
    ---- STAGE 3 ----
*/
        if (scroll_pos <= 7690 && scroll_pos >= 7370) {
            $('.s3_spawn-c').cssback(- 10 + (+(scroll_pos * 1.5 - 9790)));
            $('.s3_emit-c').hide(1);
        }
        if (scroll_pos <= 7370) {
            $('.s3_spawn-c').cssback(1265.5);
            $('.s3_emit-c').show(300);
        }

        if (scroll_pos <= 7690 && scroll_pos >= 7160) {
            $('.s3_spawn-b').cssback(2300 - (scroll_pos * 1.5 - 8900));
            $('.s3_emit-b').hide(1);
        }
        if (scroll_pos <= 7160) {
            $('.s3_spawn-b').cssback(460);
            $('.s3_emit-b').show(300);
        }

        posOp('.s3_spawn-a', 7655, 0.000001);
        if (scroll_pos <= 7690 && scroll_pos >= 7300) {
            $('.s3_spawn-a').cssback(2300 - (scroll_pos * 1.5 - 9045));
            $('.s3_emit-a').hide(1);
        }
        if (scroll_pos <= 7300) {
            $('.s3_spawn-a').cssback(381.5);
            $('.s3_emit-a').show(300);
        }
        if (scroll_pos > 7404) {
            $('.s3_emit-c, .s3_emit-b, .s3_emit-a').hide();
        }
/*
    ---- STAGE 4 ----
*/
        posOp(ALL_PACKS, 5635, 0.000001);
        if (scroll_pos <= 5635 && scroll_pos >= 5169) {
            $('.s4_pack_NW').cssback(2300 - (scroll_pos * 1.5 - 6100));
            $('.s4_pack_NE').cssback(2300 + (scroll_pos * 1.5 - 9280));
            $('.s4_pack_SW').cssback(2300 - (scroll_pos * 1.5 - 6100));
            $('.s4_pack_SE').cssback(2300 + (scroll_pos * 1.5 - 9280));
        }
        if (scroll_pos <= 5169) {
            $('.s4_pack_NW').cssback(646.5);
            $('.s4_pack_NE').cssback(775.5);
            $('.s4_pack_SW').cssback(646.5);
            $('.s4_pack_SE').cssback(775.5);
        }
        if (scroll_pos <= 5152) {
            $('.hero-main').hide();
            $('.hero-packed').show();
            $(ALL_PACKS).hide();
        }
        if (scroll_pos > 5152) {
            $('.hero-main').show();
            $('.hero-packed').hide();
            $(ALL_PACKS).show();
        }
        if (scroll_pos > 330 && scroll_pos <= 5152) {
            $('.hero-packed').show();
        }
/*
    ---- STAGE 5 ----
*/
        if (scroll_pos <= 4722) {
            $('.s5_obj-2-a').cssback(2300 - (scroll_pos * 0.35 - 350));
            $('.s5_obj-2-b').cssback(2300 - (scroll_pos * 0.3 - 97));
            $('.s5_obj-2-c').cssback(2300 - (scroll_pos * 0.4 - 550));
        }
        posOp('.s5_probe-1, .s5_probe-2', 3822, 0.000001);
        if (scroll_pos <= 3822 && scroll_pos >= 3617) {
            $('.s5_probe-1').cssback(2300 + (scroll_pos * 1.5 - 7300));
        }
        if (scroll_pos <= 3617) {
            $('.s5_probe-1').cssback(425.5);
        }
        if (scroll_pos <= 3826 && scroll_pos >= 3604) {
            $('.s5_probe-2').cssback(2300 - (scroll_pos * 1.5 - 4250));
        }
        if (scroll_pos <= 3604) {
            $('.s5_probe-2').hide().cssback(1143);
            $('.s5_probe-2_stay').show();
        } else {
            $('.s5_probe-2').show();
            $('.s5_probe-2_stay').hide();
        }
/*
    ---- STAGE 6 ----
*/
        if (scroll_pos <= 2750) {
            $('.s6_obj-1_mask .flct').show();
            $('.s6_obj-1_mask .flct').csstop(2300 + (scroll_pos * 1.5 - 6200));
        }
        if (scroll_pos > 2750) {
            $('.s6_obj-1_mask .flct').hide();
        }
        if (scroll_pos <= 1750) {
            $('.s6_obj-2_mask .flct').csstop(2300 + (scroll_pos * 1.5 - 4350));
        }
        if (scroll_pos <= 2506) {
            $('.s6_obj-3_mask .flct').csstop(2300 + (scroll_pos * 1.5 - 5500));
        }
        if (scroll_pos <= 2035) {
            $('.s6_obj-4_mask .flct').show().csstop(2300 + (scroll_pos * 1.5 - 5080));
        }
        if (scroll_pos > 2035) {
            $('.s6_obj-4_mask .flct').hide();
        }
    });
/*
    ---- HELP ----
*/
    function posOp(sel, num, fact){
        opSet(sel, (scroll_pos <= num), (fact - (scroll_pos - num) / 10), 0);
    }
    function opSet(sel, tof, op1, op2){
        $(sel).css('opacity', tof ? (op1|0)/10 : op2);
    }
});
/* ----  ---- */

