/* ----
2DO
 ---- */
/* ----
FIX
 ---- */
var glob = {
    doc: $(document),
    win: $(window),
    all: $('html'),
    bod: $('body'),
    dir: null,
    _str: '',
    snap: function () {
        glob.doc.scrlit(1);
    },
    yelp: function () {
        $('*').click(function(e){
            e.stopPropagation();
//            console.log(e,this);
            glob.doc.scrlit(e.pageX - 555);
        });
    },
    init: function () {
        chargeSmooth();
        initToggles();
        window.setTimeout(glob.snap, 999);
        glob.yelp();
    },
};

$.fn.cssback = function (nm1) {
    this.css('background-position', '0 ' + (999 - nm1 | 0) + 'px');
};
$.fn.csstop = function (nm1) {
    this.css('left', (nm1 | 0) + 'px');
};
$.fn.plaxStat = function (nm1, nm2) {
    return this.scrollPlax({
        staticSpeed: nm1,
        reverseDirection: nm2,
    });
};
$.fn.scrlit = function (x) {
    if (x) {
        return this['scrollLeft'](x);
    } else {
        return this['scrollLeft']();
    }
};

function makeRocketGoNow() {
    var pix = glob.doc.scrlit()
    ,   inc = 100
    ;
    tmr = null;
    inv = function () {
        if (pix > 11000) {
            clearInterval(tmr);
        } else {
            glob.doc.scrlit(pix += inc);
        }
    };
    setInterval(inv, 100 / inc);
}

function chargeSmooth() {

    // HANDLERS
    glob.all.bind('smooth', function () {
        glob.all.toggleClass('smooth');
    });
    glob.all.bind('cocked', function () {
        glob.all.toggleClass('cocked');
    });
    glob.all.bind('birdsi', function () {
        glob.all.toggleClass('birdsi');
    });

}

function initToggles(){
    var div = $('.vport')
    ,   fad = $('#fandy')
    ,   bt1 = $('#fandyTog')
    ,   bt2 = $('#momenTog')
    ,   bt3 = $('#birdsTog')
    ;
    bt1.attr('checked', false).click(function(){
        var tog = $(this).attr('checked');
        fad.get(0).disabled = !tog;
    });
    bt2.attr('checked', false).click(function(){
        glob.all.trigger('smooth');
    });
    bt3.attr('checked', false).click(function(){
        glob.all.trigger('birdsi');
    });

    div.attr('style','display:block!important');
    fad.get(0).disabled = true;
}
glob.init();

/* ----  ---- */
