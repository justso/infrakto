(function($){
    $.scrollPlax = function (box, options) {
        options = options || {};
        var $box
        ,   $document = glob.doc
        ,   $window = glob.win
        ,   backgroundMode = false
        ,   boxHeight
        ,   boxWidth
        ,   docHeight
        ,   docWidth
        ,   isIE6 = ($.browser.msie && $.browser.version < 7 ? true : false)
        ,   loopCount = 0
        ,   loopCountX = 0
        ,   maxIE6Move = 0
        ,   maxIE6MoveX = 0
        ,   oldMoveIt = null
        ,   oldMoveItX = null
        ,   plaxRoom
        ,   plaxRoomX
        ,   startingPos = 0
        ,   startingPosX = 0
        ,   tooSmallMode = false
        ,   tooSmallModeX = false
        ,   windowHeight
        ,   windowWidth
        ;
        options.staticSpeed = options.staticSpeed || false;
        options.staticScrollLimit = typeof(options.staticScrollLimit) !== 'undefined' ? options.staticScrollLimit : false;
        options.loopIt = options.loopIt || false;
        options.reverseDirection = options.reverseDirection || false;
        init(box);
        // init( obj/string box )   :  sets up the plax and associated events

        function init(box) {
            // if string append image as background, otherwise define as jQuery object
            if (typeof(box) === 'string') {
                $box = appendBackground(box);
            } else {
                $box = $(box);
                $box.css('position', isIE6 ? 'absolute' : 'fixed');
                startingPos = parseInt($box.css('left'), 10);
            }
            if (options.disableIE6Anim && isIE6) {
                return false;
            }
            defineSizes();
            // if in background mode, and reverseDirection, then attch the background to the opposite end to maximize scrolling room
            if (backgroundMode) {
                if (options.reverseDirection) {
                    startingPos += - 1 * plaxRoom;
                    $box.css('left', startingPos);
                }
            }
            // attach scroll and resize events
            $window.scroll(function () {
                ani();
            });
            $window.resize(function () {
                defineSizes();
            });
        }
        // appendBackground( string theSrc )  :   appends an image to the page as a stretched background

        function appendBackground(theSrc) {
            var $obj
            ,   bgCss = {
                display: 'block',
                top: 0,
                left: 0,
                width: options.bgWidth,
                height: options.bgHeight,
                zIndex: 0
            };
            if (options.bgRepeat) {
                $obj = options.appendInFront ? $('<div></div>').appendTo($('body')) : $('<div></div>').prependTo($('body'));
                bgCss.backgroundRepeat = 'repeat';
                bgCss.backgroundImage = 'url("' + theSrc + '")';
            } else {
                $obj = options.appendInFront ? $('<img>').appendTo($('body')) : $('<img>').prependTo($('body'));
                $obj.attr('src', theSrc);
            }
            $obj.css(bgCss);
            backgroundMode = true;
            return $obj;
        }
        // defineSizes()  :  sets up various constants used by the app - must be set on page load and on screen resize
        function defineSizes() {
            $('body').css({
                width: window.innerWidth + 'px',
                height: window.innerHeight + 'px',
            });
            boxWidth = $box.width();
            windowWidth = $window.width();
            docWidth = $document.width();
            plaxRoom = (options.plaxWidth || boxWidth) - windowWidth;
            // if plax object is smaller than window size
            if (plaxRoom < 0) {
                if (options.staticSpeed) {
                    plaxRoom = windowWidth - boxWidth;
                } else {
                    plaxRoom = options.reverseDirection ? windowWidth - startingPos - boxWidth : startingPos;
                }
                tooSmallMode = true;
            }
            if (isIE6 && !maxIE6Move) {
                maxIE6Move = -1 * (docWidth - boxWidth);
            }
            if (options.loopIt) {
                loopCount = parseInt(($document.scrollTop() / (tooSmallMode ? windowWidth : boxWidth)), 10);
            }
            // make any changes
            ani();
        }
        // ani()  :  performs the animation of the object
        function ani() {
            // dont let multiple animations queue up
            $box.queue([]);
            var theCss = {}, moveIt, moveItX;
            moveIt = calculateMove(true);
            theCss.left = moveIt;
            // if large move animate in FF, safari and opera for smoother transition
            if (!$.browser.msie && (Math.abs(oldMoveIt - moveIt) > 100 || Math.abs(oldMoveItX - moveItX) > 100)) {
                $box.animate(theCss, 30);
            } else {
                $box.css(theCss);
            }
            oldMoveIt = moveIt;
            oldMoveItX = moveItX;
        }
        // calculateMove( boolean vertical ) : determines amount to move whether vertically or horizontally
        function calculateMove() {
            // establish variables, this is basically a switch between vertical and horizontal modes
            var boxSize
            ,   docSize
            ,   loopCount2
            ,   maxIE6Move2
            ,   move
            ,   offset
            ,   offsetPercent
            ,   opts
            ,   plaxRoom2
            ,   startingPos2
            ,   tooSmallMode2
            ,   windowSize
            ;
            boxSize = boxWidth;
            docSize = docWidth;
            loopCount2 = loopCount;
            maxIE6Move2 = maxIE6Move;
            offset = $window.scrlit();
            plaxRoom2 = plaxRoom;
            startingPos2 = startingPos;
            tooSmallMode2 = tooSmallMode;
            windowSize = windowWidth;
            opts = {
                reverseDirection: options.reverseDirection,
                staticSpeed: options.staticSpeed,
                loopIt: options.loopIt,
                staticScrollLimit: options.staticScrollLimit
            };
            if (opts.staticSpeed) {
                /*** get move amount - static speed ***/
                move = offset * opts.staticSpeed;
                // account for number of loops
                move -= plaxRoom2 * (loopCount2);
            } else {
                /*** get move amount - auto speed ***/
                // determine percentage of page that has been scrolled down
                offsetPercent = offset / (docSize - windowSize);
                move = offsetPercent * plaxRoom2;
            }
            // reverse direction
            if (!opts.reverseDirection) {
                move *= - 1;
            }
            // incorporate starting position
            move += startingPos2;
            // if static speed set, make sure move is within bounds
            if (opts.staticSpeed) {
                move = checkMove(move, opts, plaxRoom2, tooSmallMode2);
            }
            // if in tooSmallMode and looping, add difference of window height and box height,
            // since the box needs to be conceptualized as that much taller
            // (otherwise it would loop in place rather than over the screen)
            if (tooSmallMode2 && opts.staticSpeed && opts.loopIt) {
                move += windowSize - boxSize;
            }
            if (isIE6) {
                // IE6 fix for fixed positioning
                move += offset;
                move = Math.max(parseInt(move, 10), parseInt(maxIE6Move2, 10));
            }
            return move|0;
        }
        // checkMove( int moveIt )  :  checks to ensure that move amount does not exceed established bounds
        function checkMove(move, opts, plaxRoom, tooSmallMode) {
            var loopCountChange;
            // if overflow limited
            if (!opts.loopIt) {
                if (opts.staticScrollLimit) {
                    if (tooSmallMode) {
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
            } else {
                // if overflow loops
                while (move < plaxRoom) {
                    move += plaxRoom;
                    loopCountChange = (opts.reverseDirection ? - 1 : 1);
                    loopCount += loopCountChange;
                }
                while (move > (opts.reverseDirection ? - 1 : 0)) {
                    move -= plaxRoom;
                    loopCountChange = (opts.reverseDirection ? - 1 : 1);
                    loopCount -= loopCountChange;
                }
            }
            return move;
        }
    };
    $.fn.scrollPlax = function (options) {
        this.each(function () {
            var tmp = new $.scrollPlax(this, options);
        });
        return this;
    };
}(jQuery));
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
