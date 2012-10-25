(function ($) {
    var ready, $document, $win;
    //  scrollPlax global PRIVATE STATICS
    function gStat() {
        if (ready) {
            return;
        }
        $document = glob.doc;
        $win = glob.win;
    }
    $.scrollPlax = function (box, options) {
        //  instance PRIVATE STATICS
        options = options || {};
        gStat();
        var $box
        ,   bkgrMode = false
        ,   boxWidth
        ,   docWidth
        ,   loopCount = 0
        ,   startPos = 0
        ,   plaxRoom
        ,   tinyMode = false
        ,   windowWidth
        ,   oldMoveIt = null
        ;
        options.staticSpeed = options.staticSpeed || false;
        options.scrollLimit = typeof(options.scrollLimit) !== 'undefined' ? options.scrollLimit : false;
        options.loopIt = options.loopIt || false;
        options.revDir = options.revDir || false;
        init(box);
        /**
         *  init
         *  sets up the plax and associated events
         *
         *  @param box {obj/string}
         *  if string append image as bkgr, otherwise define as jQuery object
         *  @return {void}
         */
        function init(box) {
            if (typeof(box) === 'string') {
                $box = appendBkgr(box);
            } else {
                $box = $(box);
                $box.css('position', 'fixed');
                startPos = parseInt($box.css('left'), 10);
            }
            defineSizes();
            // attach bkgr to opposite end to maximize scrolling room?
            if (bkgrMode) {   // if in bkgr mode
                if (options.revDir) { // and revDir
                    startPos += - 1 * plaxRoom;
                    $box.css('left', startPos);
                }
            }
            // attach scroll and resize events
            $win.scroll(function () {
                ani();
            });
            $win.resize(function () {
                defineSizes();
            });
        }
        /**
         *  appendBkgr
         *  appends an image to the page as a stretched bkgr
         *
         *  @param url {string} url for image
         *  @return {object} for options
         */
        function appendBkgr(url) {
            var $obj, bgCss;
            bgCss = {
                display: 'block',
                top: 0,
                left: 0,
                width: options.bgWidth,
                height: options.bgHeight,
                zIndex: 0
            };
            if (options.bgRepeat) {
                $obj = options.appendInFront ? $('<div>').appendTo('body') : $('<div>').prependTo('body');
                bgCss.bkgrRepeat = 'repeat';
                bgCss.bkgrImage = 'url("' + url + '")';
            } else {
                $obj = options.appendInFront ? $('<img>').appendTo('body') : $('<img>').prependTo('body');
                $obj.attr('src', url);
            }
            $obj.css(bgCss);
            bkgrMode = true;
            return $obj;
        }
        /**
         *  defineSizes
         *  set various constants used by the app
         *  - must be set on page load and on screen resize
         *
         *  @return {void}
         */
        function defineSizes() {
            $('body').css({
                width: window.innerWidth + 'px',
                height: window.innerHeight + 'px',
            });
            boxWidth = $box.width();
            windowWidth = $win.width();
            docWidth = $document.width();
            plaxRoom = (options.plaxWidth || boxWidth) - windowWidth;
            // is object is smaller than window size
            if (plaxRoom < 0) {
                if (options.staticSpeed) {
                    plaxRoom = windowWidth - boxWidth;
                } else {
                    plaxRoom = options.revDir ? windowWidth - startPos - boxWidth : startPos;
                }
                tinyMode = true;
            }
            if (options.loopIt) {
                loopCount = parseInt(($document.scrollTop() / (tinyMode ? windowWidth : boxWidth)), 10);
            }
            ani();
        }
        /**
         *  ani
         *  performs the animation of the object
         *
         *  @return {void}
         */
        function ani() {
            var theCss = {}
            ,   moveIt
            ;
            moveIt = calculateMove(true);
            theCss.left = moveIt;
            $box.queue([]); // dont let multiple animations queue up

            if (!$.browser.msie && (Math.abs(oldMoveIt - moveIt) > 10)) {
                $box.animate(theCss, 30); // animate big jumps in good browsers
            } else {
                $box.css(theCss);
            }
            oldMoveIt = moveIt;
        }
        /**
         *  calculateMove
         *  determines amount to move whether vertically or horizontally
         *
         *  @return {number} move amount
         */
        function calculateMove() {
            var boxSize = boxWidth
            ,   docSize = docWidth
            ,   loopCount2 = loopCount
            ,   offset = $win.scrlit()
            ,   plaxRoom2 = plaxRoom
            ,   startPos2 = startPos
            ,   tinyMode2 = tinyMode
            ,   windowSize = windowWidth
            ,   move, offsetPercent, opts
            ;
            opts = {
                revDir: options.revDir,
                staticSpeed: options.staticSpeed,
                loopIt: options.loopIt,
                scrollLimit: options.scrollLimit
            };
            if (opts.staticSpeed) {
                move = offset * opts.staticSpeed;   // get move amount - static speed
                move -= (plaxRoom2 * loopCount2);   // account for # of loops
            } else {
                offsetPercent = offset / (docSize - windowSize); // get move amount - auto speed
                move = offsetPercent * plaxRoom2;   // percentage of page scrolled
            }
            if (!opts.revDir) {
                move *= - 1; // reverse direction
            }
            // incorporate starting position
            move += startPos2;
            // if static speed set, make sure move is within bounds
            if (opts.staticSpeed) {
                move = checkMove(move, opts, plaxRoom2, tinyMode2);
            }
            /*
                if in tinyMode and looping,
                add difference of window height and box height,
                since the box needs to be conceptualized as that much taller
                (otherwise it would loop in place rather than over the screen)
             */
            if (tinyMode2 && opts.staticSpeed && opts.loopIt) {
                move += (windowSize - boxSize);
            }
            return move | 0;
        }
        /**
         *  checkMove
         *  ensure that move amount does not exceed established bounds
         *
         *  @param move {number} pixels?
         *  @param opts {object} ad-hoc configf from calc
         *  @param plaxRoom {number} pixels?
         *  @param tinyMode {boolean} ?
         *  @return {number} move amount
         */
        function checkMove(move, opts, plaxRoom, tinyMode) {
            var loopCountChange;
            // if overflow limited
            if (!opts.loopIt) {
                if (opts.scrollLimit) {
                    if (tinyMode) {
                        if (move < 0) {
                            move = 0;
                        }
                        if (move > plaxRoom) {
                            move = plaxRoom;
                        }
                    } else {
                        if (move > 0) {
                            move = 0;
                        }
                        if (-1 * move > plaxRoom) {
                            move = -1 * plaxRoom;
                        }
                    }
                }
            } else { // if overflow loops
                while (move < plaxRoom) {
                    move += plaxRoom;
                    loopCountChange = (opts.revDir ? - 1 : 1);
                    loopCount += loopCountChange;
                }
                while (move > (opts.revDir ? - 1 : 0)) {
                    move -= plaxRoom;
                    loopCountChange = (opts.revDir ? - 1 : 1);
                    loopCount -= loopCountChange;
                }
            }
            return move;
        }
    };
    $.fn.scrollPlax = function (options) {
        this.each(function () {
            $.scrollPlax(this, options);
        });
        return this;
    };
}(jQuery));
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
