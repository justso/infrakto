var QueryLoader = {
    /*
     * QueryLoader      Preload your site before displaying it!
     * Author:          Gaya Kessler
     * Date:            23-09-09
     * URL:             http://www.gayadesign.com
     * Version:         1.0
     *
     * A simple jQuery powered preloader to load every image on the page and in the CSS
     * before displaying the page to the user.
     */
    overlay: "",
    loadBar: "",
    preloader: "",
    items: [],
    doneStatus: 0,
    doneNow: 0,
    selectorPreload: "body",
    ieLoadFixTime: 280000,
    ieTimeout: "",
    init: function () {
        if (navigator.userAgent.match(/MSIE (\d+(?:\.\d+)+(?:b\d*)?)/) == "MSIE 6.0,6.0") {
            //break if IE6
            return false;
        }
        if (QueryLoader.selectorPreload == "body") {
            QueryLoader.spawnLoader();
            QueryLoader.getImages(QueryLoader.selectorPreload);
            QueryLoader.createPreloading();
        } else {
            $(document).ready(function () {
                QueryLoader.spawnLoader();
                QueryLoader.getImages(QueryLoader.selectorPreload);
                QueryLoader.createPreloading();
            });
        }
        //help IE drown if it is trying to die :)
        QueryLoader.ieTimeout = setTimeout(function () {
            QueryLoader.ieLoadFix();
        }, QueryLoader.ieLoadFixTime);
        return true;
    },
    ieLoadFix: function () {
        var ie = navigator.userAgent.match(/MSIE (\d+(?:\.\d+)+(?:b\d*)?)/);
        if (ie[0].match("MSIE")) {
            while ((100 / QueryLoader.doneStatus) * QueryLoader.doneNow < 100) {
                QueryLoader.imgCallback();
            }
        }
    },
    imgCallback: function () {
        QueryLoader.doneNow++;
        QueryLoader.animateLoader();
    },
    getImages: function (selector) {
        $(selector).find("*:not(script)").each(function () {
            var url = "";
            if ($(this).css("background-image") != "none") {
                url = $(this).css("background-image");
            } else if (typeof($(this).attr("src")) != "undefined" && $(this).prop("tagName").toLowerCase() == "img") {
                url = $(this).attr("src");
            }
            url = url.replace("url(\"", "");
            url = url.replace("url(", "");
            url = url.replace("\")", "");
            url = url.replace(")", "");
            if (url.length > 0) {
                QueryLoader.items.push(url);
            }
        });
    },
    createPreloading: function () {
        QueryLoader.preloader = $("<div></div>").appendTo(QueryLoader.selectorPreload);
        $(QueryLoader.preloader).css({
            height: "0px",
            width: "0px",
            overflow: "hidden"
        });
        var i, imgLoad, length = QueryLoader.items.length;
        QueryLoader.doneStatus = length;
        for (i = 0; i < length; i++) {
            imgLoad = $("<img></img>");
            $(imgLoad)
            .attr("src", QueryLoader.items[i])
            .unbind("load")
            .bind("load", QueryLoader.imgCallback).appendTo($(QueryLoader.preloader));
        }
    },
    spawnLoader: function () {
        var height, width, position, left, top;

        if (QueryLoader.selectorPreload == "body") {
            height = $(window).height();
            width = $(window).width();
            position = "fixed";
        } else {
            height = $(QueryLoader.selectorPreload).outerHeight();
            width = $(QueryLoader.selectorPreload).outerWidth();
            position = "absolute";
        }
        left = $(QueryLoader.selectorPreload).offset()['left'];
        top = $(QueryLoader.selectorPreload).offset()['top'];
        QueryLoader.overlay = $("<div></div>").appendTo($(QueryLoader.selectorPreload));
        $(QueryLoader.overlay).addClass("QOverlay");
        $(QueryLoader.overlay).css({
            position: position,
            top: top,
            left: left,
            width: width + "px",
            height: height + "px"
        });
        QueryLoader.loadBar = $("<div></div>").appendTo($(QueryLoader.overlay));
        $(QueryLoader.loadBar).addClass("QLoader");
        $(QueryLoader.loadBar).css({
            position: "relative",
            top: "50%",
            width: "0%"
        });
        QueryLoader.loadAmt = $("<div>0%</div>").appendTo($(QueryLoader.overlay));
        $(QueryLoader.loadAmt).addClass("QAmt");
        $(QueryLoader.loadAmt).css({
            position: "relative",
            top: "50%",
            left: "50%"
        });
    },
    animateLoader: function () {
        var perc = (100 / QueryLoader.doneStatus) * QueryLoader.doneNow;
        if (perc > 99) {
            $(QueryLoader.loadAmt).html("100%");
            $(QueryLoader.loadBar).stop().animate({
                width: perc + "%"
            }, 500, "linear", function () {
                QueryLoader.doneLoad();
            });
        } else {
            $(QueryLoader.loadBar).stop().animate({
                width: perc + "%"
            }, 500, "linear", function () {});
            $(QueryLoader.loadAmt).html(Math.floor(perc) + "%");
        }
    },
    doneLoad: function () {
        //prevent IE from calling the fix
        clearTimeout(QueryLoader.ieTimeout);
        //The end animation, adjust to your likings
        $(QueryLoader.loadAmt).hide();
        $(QueryLoader.loadBar).hide();
        $(QueryLoader.overlay).fadeOut(800);
        $(QueryLoader.preloader).remove();
    }
};
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
