(function ($) {
    $.scrollPlax = function (box, options) {
        options = options || {};
        var isIE6 = ($.browser.msie && $.browser.version < 7 ? true : false)
        ,   $document = $(document)
        ,   $window = $(window)
        ,   $box
        ,   backgroundMode = false
        ,   boxHeight
        ,   boxWidth
        ,   docHeight
        ,   docWidth
        ,   windowHeight
        ,   windowWidth
        ,   parallaxRoom
        ,   parallaxRoomX
        ,   maxIE6Move = 0
        ,   loopCount = 0
        ,   startingPos = 0
        ,   tooSmallMode = false
        ,   oldMoveIt = null
        ,   maxIE6MoveX = 0
        ,   loopCountX = 0
        ,   startingPosX = 0
        ,   tooSmallModeX = false
        ,   oldMoveItX = null
        ;
        // vertical options
        options.enableVertical = typeof(options.enableVertical) !== 'undefined' ? options.enableVertical : true;
        if (options.enableVertical) {
            options.staticSpeed = options.staticSpeed || false;
            options.staticScrollLimit = typeof(options.staticScrollLimit) !== 'undefined' ? options.staticScrollLimit : false;
            options.loopIt = options.loopIt || false;
            options.reverseDirection = options.reverseDirection || false;
        }
        // horizontal options
        options.enableHorizontal = options.enableHorizontal || false;
        if (options.enableHorizontal) {
            options.staticSpeedX = options.staticSpeedX || false;
            options.staticScrollLimitX = typeof(options.staticScrollLimitX) !== 'undefined' ? options.staticScrollLimitX : true;
            options.loopItX = options.loopItX || false;
            options.reverseDirectionX = options.reverseDirectionX || false;
        }
        // IE6 options
        options.disableIE6 = options.disableIE6 || false; // disables in IE6 altogether
        // disables IE6 animation, however background will still append
        options.disableIE6Anim = typeof(options.disableIE6Anim) !== 'undefined' ? options.disableIE6Anim : true;
        // layout options
        options.bgWidth = options.bgWidth || (options.enableHorizontal ? '150%' : '100%');
        options.bgHeight = options.bgHeight || '150%';
        options.bgRepeat = options.bgRepeat || false;
        options.appendInFront = options.appendInFront || false;
        options.parallaxHeight = options.parallaxHeight || false;
        options.parallaxWidth = options.parallaxWidth || false;
        if (options.disableIE6 && isIE6) {
            return;
        }
        init(box);
        // init( obj/string box )   :  sets up the parallax and associated events

        function init(box) {
            // if string append image as background, otherwise define as jQuery object
            if (typeof(box) === 'string') {
                $box = appendBackground(box);
            } else {
                $box = $(box);
                $box.css('position', isIE6 ? 'absolute' : 'fixed');
                if (options.enableVertical) {
                    startingPos = parseInt($box.css('top'), 10);
                }
                if (options.enableHorizontal) {
                    startingPosX = parseInt($box.css('left'), 10);
                }
            }
            if (options.disableIE6Anim && isIE6) {
                return false;
            }
            defineSizes();
            // if in background mode, and reverseDirection, then attch the background to the opposite end to maximize scrolling room
            if (backgroundMode) {
                if (options.reverseDirection && options.enableVertical) {
                    startingPos += - 1 * parallaxRoom;
                    $box.css('top', startingPos);
                }
                if (options.reverseDirectionX && options.enableHorizontal) {
                    startingPosX += - 1 * parallaxRoomX;
                    $box.css('left', startingPosX);
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
            bgCss.position = isIE6 ? 'absolute' : 'fixed';
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
            // define vertical vars
            if (options.enableVertical) {
                boxHeight = $box.height();
                windowHeight = $window.height();
                docHeight = $document.height();
                parallaxRoom = (options.parallaxHeight || boxHeight) - windowHeight;
                // if parallax object is smaller than window size
                if (parallaxRoom < 0) {
                    if (options.staticSpeed) {
                        parallaxRoom = windowHeight - boxHeight;
                    } else {
                        parallaxRoom = options.reverseDirection ? windowHeight - startingPos - boxHeight : startingPos;
                    }
                    tooSmallMode = true;
                }
                if (isIE6 && !maxIE6Move) {
                    maxIE6Move = -1 * (docHeight - boxHeight);
                }
                if (options.loopIt) {
                    loopCount = parseInt(($document.scrollTop() / (tooSmallMode ? windowHeight : boxHeight)), 10);
                }
            }
            // define horizontal vars
            if (options.enableHorizontal) {
                boxWidth = $box.width();
                windowWidth = $window.width();
                docWidth = $document.width();
                parallaxRoomX = (options.parallaxWidth || boxWidth) - windowWidth;
                // if parallax object is smaller than window size
                if (parallaxRoomX < 0) {
                    parallaxRoomX = options.staticSpeedX ? (windowWidth - boxWidth)
                    : (options.reverseDirectionX ? (windowWidth - startingPosX - boxWidth)
                        : startingPosX);
                    tooSmallModeX = true;
                }
                if (isIE6 && !maxIE6MoveX) {
                    maxIE6MoveX = -1 * (docWidth - boxWidth);
                }
                if (options.loopItX) {
                    loopCountX = parseInt(($document.scrollLeft() / (tooSmallModeX ? windowWidth : boxWidth)), 10);
                }
            }
            // make any changes
            ani();
        }
        // ani()  :  performs the animation of the object
        function ani() {
            // dont let multiple animations queue up
            $box.queue([]);
            var theCss = {}, moveIt, moveItX;
            // vertical
            if (options.enableVertical) {
                moveIt = calculateMove(true);
                theCss.top = moveIt;
            }
            // horizontal
            if (options.enableHorizontal) {
                moveItX = calculateMove(false);
                theCss.left = moveItX;
            }
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

        function calculateMove(vertical) {
            // establish variables, this is basically a switch between vertical and horizontal modes
            var offset
            ,   docSize
            ,   windowSize
            ,   boxSize
            ,   loopCount2
            ,   startingPos2
            ,   parallaxRoom2
            ,   tooSmallMode2
            ,   maxIE6Move2
            ,   opts
            ,   move
            ,   offsetPercent
            ;
            if (vertical) {
                offset = $document.scrollTop();
                docSize = docHeight;
                windowSize = windowHeight;
                boxSize = boxHeight;
                parallaxRoom2 = parallaxRoom;
                loopCount2 = loopCount;
                startingPos2 = startingPos;
                parallaxRoom2 = parallaxRoom;
                tooSmallMode2 = tooSmallMode;
                maxIE6Move2 = maxIE6Move;
                opts = {
                    reverseDirection: options.reverseDirection,
                    staticSpeed: options.staticSpeed,
                    loopIt: options.loopIt,
                    staticScrollLimit: options.staticScrollLimit
                };
            } else {
                offset = $document.scrollLeft();
                docSize = docWidth;
                windowSize = windowWidth;
                boxSize = boxWidth;
                loopCount2 = loopCountX;
                startingPos2 = startingPosX;
                parallaxRoom2 = parallaxRoomX;
                tooSmallMode2 = tooSmallModeX;
                maxIE6Move2 = maxIE6MoveX;
                opts = {
                    reverseDirection: options.reverseDirectionX,
                    staticSpeed: options.staticSpeedX,
                    loopIt: options.loopItX,
                    staticScrollLimit: options.staticScrollLimitX
                };
            }
            if (opts.staticSpeed) {
                /*** get move amount - static speed ***/
                move = offset * opts.staticSpeed;
                // account for number of loops
                move -= parallaxRoom2 * (loopCount2);
            } else {
                /*** get move amount - auto speed ***/
                // determine percentage of page that has been scrolled down
                offsetPercent = offset / (docSize - windowSize);
                move = offsetPercent * parallaxRoom2;
            }
            // reverse direction
            if (!opts.reverseDirection) {
                move *= - 1;
            }
            // incorporate starting position
            move += startingPos2;
            // if static speed set, make sure move is within bounds
            if (opts.staticSpeed) {
                move = checkMove(move, vertical, opts, parallaxRoom2, tooSmallMode2);
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
            return move;
        }
        // checkMove( int moveIt )  :  checks to ensure that move amount does not exceed established bounds
        function checkMove(move, vertical, opts, parallaxRoom, tooSmallMode) {
            var loopCountChange;
            // if overflow limited
            if (!opts.loopIt) {
                if (opts.staticScrollLimit) {
                    if (tooSmallMode) {
                        if (move < 0) {
                            move = 0;
                        }
                        if (move > parallaxRoom) {
                            move = parallaxRoom;
                        }
                    } else {
                        if (move > 0) {
                            move = 0;
                        }
                        if (-1 * move > parallaxRoom) {
                            move = -1 * parallaxRoom;
                        }
                    }
                }
            } else {
                // if overflow loops
                while (move < parallaxRoom) {
                    move += parallaxRoom;
                    loopCountChange = (opts.reverseDirection ? - 1 : 1);
                    if (vertical) {
                        loopCount += loopCountChange;
                    } else {
                        loopCountX += loopCountChange;
                    }
                }
                while (move > (opts.reverseDirection ? - 1 : 0)) {
                    move -= parallaxRoom;
                    loopCountChange = (opts.reverseDirection ? - 1 : 1);
                    if (vertical) {
                        loopCount -= loopCountChange;
                    } else {
                        loopCountX -= loopCountChange;
                    }
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
