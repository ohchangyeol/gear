$(document).ready(function () {
    // Selector.
    var $start = $('#start');
    var $win = $(window),
        $winH= $win.height();
    var $watchCircle = $('.watch-circle');
    var posY,
        limit = $('.gear-introduction-box').offset().top, 
        scale = 0, 
        opacity = 1, 
        maxScale = 3.0,
        limit2;

    var $wideOffset = $('.wide-st').offset().top, 
        $wideH = $('.wide').height(), 
        $simplicity =$('.simplicity'),
        $WacthLimit = $simplicity.offset().top-$wideH,
        $movieMax = 47;

    var $showOffset = $('.showing').offset().top;
    var $finaleBtn = $('.finale-btn button'),
        $finaleBtnViewBox = $('.finale-btn-view-box'),
        $finale = $('.finale');

    var $dyTopBtns = $('.dy-top-btns');
    var $dyBtns = $('.dy-btns');
    var $dyLineImg = $('.dy-ct-line').find('img');
    var $dyBonImg = $('.dy-ct-bon').find('img');

    var $onePageSection = $('.gear-introduction-box'),
        $topTitle=$('.top-title'),
        $topEx=$('.top-ex'),
        $introductionBottom=$('.introduction-bottom'),
        $wacthItems= $introductionBottom.find('li');

    var $showing = $('.showing'),
        $dailyTitle =$(".daily-title"),
        $dailyCustomBox = $('.daily-custom-box');
    
    var $wideSt =$('.wide-st'),
        $wideitemBox = $wideSt.find('.wide'),
        $wideitems = $wideitemBox.find('div');

    var $simTitle = $('.sim-title'),
        $simEx = $('.sim-ex'),
        $simImg = $('.sim-img');

    var $stress = $(".stress"); 
        $stRightImg = $stress.find('.st-right-img'),
        $stTitle = $stress.find('.st-title'),
        $stEx = $stress.find('.st-ex'),
        $stBottom = $stress.find('.st-bottom');

    var $ftnImg = $(".ftn-img"),
        $ftnBox1 = $('#ftn-box1'),
        $ftnBox2 = $('#ftn-box2'),
        $ftnBox3 = $('#ftn-box3');

    var $app = $('.app'),
        $appChildren = $app.children();
    var $finale = $(".finale");

    var $appSlideList = $(".app-slide-list");
    var $prev = $('button.prev'),
        $next = $('button.next');
    //value
    var _y = 30;
    var _x = 100;
    var _max = 0;

    // boolean
    var _isin1 = false;
    var _isin2 = false;
    var _isin3 = false;
    var _isin4 = false;
    var _isin5 = false;
    var _isin6 = false;
    var _isin7 = false;
    var _isin8 = false;
    var _isin9 = false;
    var _isin10 = false;
    var _isin11 = false;
    var _isin12 = false;
    var _isin13 = false;

    
    // gsap 
    
    // Initialize.
    var init = function() {
        reset();
        addEvent();
    };

    // Reset.
    var reset = function() {
        $win.on('resize',mainCircleSize).trigger('resize');
        _max = $appSlideList.children().length;
        gsapSeting();
        SlideSeting();
    };

    // Event Bind.
    var addEvent = function() {
        intro();

        $win.on('scroll', scrollEevntFtn).trigger('scroll');
        $finaleBtn.on('click', finaleButton);

        $dyTopBtns.on('click',changeColor);
        $dyBtns.on('click',changeColor);

        $prev.on('click', slideNext);
        $next.on('click', slidePrev);
    };
    // Run.
    init();
    

    function slideNext(){
        $appSlideList.prepend($appSlideList.children()[_max-1])
        SlideSeting();
    }
    function slidePrev(){
        $appSlideList.append($appSlideList.children()[0])
        SlideSeting();
    }
    function SlideSeting(){
        $($appSlideList.children()).removeClass();
        for (let i = 0; i <= _max-1; i++) {
            var el =$($appSlideList.children()[i]);
            el.addClass("pos"+i)
        }
        $($appSlideList.children()[2]).addClass('on');
    }



    // function
    function scrollEevntFtn() {
        watchEvent();
        watchDisplay();
        onePage();
    }
    function intro() {
        $start.addClass('intro');
        setTimeout(function(){$start.remove();},4000);
    }
    function mainCircleSize(){
        var _circleW = $watchCircle.width();
        $watchCircle.height(_circleW);
    }
    function watchEvent() {
        posY = $win.scrollTop();
        if(posY >= 0 && posY < limit) {
            // x : y = a : b
            // scale : maxScale = posY : limit
            // scale = posY * maxScale / limit;
            scale = posY * maxScale / limit + 1;
            $('.watchFlex').css({'transform': 'scale('+scale+') '});
        }else{
            if(posY < 0) {
                scale = 1.0;
            }
            if(posY >= limit){
                scale = 4.0;
            }
            $('.watchFlex').css({transform: 'scale('+scale+') '});
        }
        limit2 = limit - $(window).height() / 1.5;
        if(posY >= 0 && posY < limit2) {
            opacity =(posY * 1 / limit2);
            $('.watch .watch-circle').css({'opacity': opacity});
            $('.watchFlex').show();
        }else{
            if(posY < 0) {
                opacity = 1.0
            }
            if(posY >= limit2){
                opacity = 0.0;
            }
            $('.watch .watch-circle').css({'opacity': opacity});
            $('.watchFlex').hide();
        }
    }
    function watchDisplay() {
        posY = $win.scrollTop();
        if(posY >= $wideOffset+$wideH && posY < $WacthLimit) {
            var posYset = posY-($wideOffset+$wideH),
                $wacthLmH = $('.wide-st').height() -($wideH*2) ;
            var _Num = posYset * $movieMax / $wacthLmH+1;
                _Num = Math.floor(_Num);
            $('.wide-scroll-img img').attr('src', './img2/movie-change/galaxy-watch-active2-wide-display-sequence-bt-'+_Num+'.webp')
        }
    }
    function finaleButton() {
        if($finaleBtnViewBox.hasClass('open')){
            $finaleBtnViewBox.removeClass('open');
            gsap.to ($finaleBtnViewBox,{"height": 0});
            setTimeout(function () {
                gsap.to ($finaleBtnViewBox,{"width": 0});
                
            },500)
        }else{
            $finaleBtnViewBox.addClass('open');
            gsap.to ($finaleBtnViewBox,{"width":"1400px"});
            setTimeout(function () {
                gsap.to ($finaleBtnViewBox,{"height": "3012px"});
            },500)
        }
    }
    function changeColor(e){
        var el = $(e.currentTarget);
        if(el.hasClass('dy-btns')){
            if(!el.hasClass('selected')){
                $dyBtns.removeClass('selected');
                el.addClass('selected');
                $dyLineImg.attr('src', "./img2/Custom/galaxy-watch-active-mix-match-"+el.index()+".png");
            }
        }
        if(el.hasClass('dy-top-btns')){
            if(!el.hasClass('selected')){
                $dyTopBtns.removeClass('selected');
                el.addClass('selected');
                $dyBonImg.attr('src', "./img2/Custom/galaxy-watch-active-mix-match-breath-"+el.index()+".png");
            }
        }
    }
    function gsapSeting(){
        gsap.set($topTitle,{opacity : 0, y : _y});
        gsap.set($topEx,{opacity : 0,y : _y});
        gsap.set($introductionBottom,{opacity : 0});
        gsap.set($wacthItems.eq(0),{ x : '10%'});
        gsap.set($wacthItems.eq(1),{ x : '5%'});
        gsap.set($wacthItems.eq(3),{ x : '-5%'});
        gsap.set($wacthItems.eq(4),{ x : '-10%'});
        gsap.set($dailyTitle,{opacity: 0});
        gsap.set($dailyCustomBox,{ opacity: 0});
        gsap.set($wideitems.eq(0),{opacity: 0});
        gsap.set($wideitems.eq(1),{opacity: 0});
        gsap.set($wideitems.eq(2),{opacity: 0});
        gsap.set ( $simTitle , { opacity: 0, y: _y })
        gsap.set ( $simEx , { opacity: 0, y: _y })
        gsap.set ( $stRightImg , { opacity: 0,x: _x });
        gsap.set ( $stTitle , { opacity: 0});
        gsap.set ( $stEx , { opacity: 0});
        gsap.set ( $stBottom , { opacity: 0});
        gsap.set ( $ftnImg , { y: '100%'});
        $.each($appChildren , function(index){
            gsap.set ( $appChildren.eq(index) , { opacity: 0});
        })
    }
    function onePage(){
        posY = $win.scrollTop();
        if(posY > $onePageSection.offset().top - $winH / 2&& posY < $showing.offset().top + ($winH / 5 * 4) ){
            if(!_isin1){
                var tl = gsap.timeline();
                tl.to($topTitle,{opacity : 1,y : 0, duration: 0.5},)
                  .to($topEx,{opacity : 1,y : 0,duration: 0.5})
                  .to($introductionBottom,{opacity : 1,duration: 0.5});
                tl.addLabel('one');
                tl.to($wacthItems.eq(0),{ x : '90%',duration: 0.5}, 'one-=0.5')
                  .to($wacthItems.eq(1),{ x : '35%',duration: 0.5}, 'one-=0.5')
                  .to($wacthItems.eq(3),{ x : '-35%',duration: 0.5}, 'one-=0.5')
                  .to($wacthItems.eq(4),{ x : '-90%',duration: 0.5}, 'one-=0.5')
                }
                _isin1 = true;
        }
        if(posY >= $showing.offset().top + ($winH / 5 * 4) && posY < $wideSt.offset().top + $winH ){
            if(!_isin2){
                var tl = gsap.timeline();
                tl.to($('.daily-sticky'),{ backgroundColor:"#fff",})
                  .to($dailyTitle,{ opacity: 1 , duration: 0.5})
                  .to($dailyCustomBox,{ opacity: 1 ,duration: 0.5});
            }
            _isin2 = true;
        }
        if(posY >= $wideSt.offset().top + $winH && posY < $simplicity.offset().top - ($winH / 2 )){
            if(!_isin3){
                var tl = gsap.timeline();
                tl.to($wideitems.eq(0),{ opacity: 1 , duration: 0.5})
                  .to($wideitems.eq(1),{ opacity: 1 ,duration: 0.5})
                  .to($wideitems.eq(2),{ opacity: 1 ,duration: 0.5})
            }
            _isin3 = true;
            if(posY >= $wideSt.offset().top +( $winH * 2 ) +( $winH / 3 ) ){
                gsap.to($('.simplicity-left'),{x:"-200px", duration : 0.5 })
                gsap.to($('.simplicity-right'),{x:"200px", duration : 0.5 })
                // console.log('ddd');
            }
        }
        if( posY >= $simplicity.offset().top - ($winH / 2 )&& posY < $stress.offset().top - ($winH / 2 )){

            if(posY >= $simTitle.offset().top -( $winH / 2 )&& !_isin4 ){
                _isin4 = true;
                gsap.to ( $simTitle , { opacity: 1 , duration : 0.5 , y : 0})
            }
            else if(posY >= $simEx.offset().top -( $winH / 2 ) && !_isin5 ){
                _isin5 = true;
                gsap.to ( $simEx , { opacity: 1 , duration : 0.5 , y : 0})
            }
            else if(posY >= $simImg.offset().top-($winH / 3 ) && !_isin6 ){
                _isin6 = true;
                var $simImgChildren = $simImg.children();
                $.each($simImgChildren , function(index){
                    var $el = $simImg.find('img').eq(index);
                    if ($el.hasClass('hide')){
                        setTimeout(function(){
                            $el.removeClass('hide');
                        }, 250 * index)
                    }
                })
            }
        }
        if(posY >= $stress.offset().top - ($winH / 2 ) && posY < $ftnBox1.offset().top - $winH / 2 ){
            if(posY >= $stRightImg.offset().top - ($winH / 2 )&& !_isin7){
                gsap.to($stRightImg , {opacity : 1 ,duration : 2 , x : 0})
                _isin7 = true;
            }
            if(posY >= $stTitle.offset().top - ($winH / 2) && !_isin8){
                gsap.to($stTitle , {opacity : 1 ,duration : 1})
                _isin8 = true;
            }
            if(posY >= $stEx.offset().top - ($winH / 2) && !_isin9){
                var tl = gsap.timeline();
                tl.to($stEx , {opacity : 1 ,duration : 1})
                  .to($stBottom ,{opacity : 1 ,duration : 1})
                _isin9 = true;
                }
        }
        if(posY >= $ftnBox1.offset().top - $winH / 2 && posY < $ftnBox2.offset().top - $winH / 2){
            var tl = gsap.timeline();
            tl.to($ftnBox1.find('img').eq(1),{opacity : 0 , duration : 0.5})
              .to($ftnBox1.find('.ftn-text-box'),{color : '#fff', duration : 0.5, delay: -2})
              .to($ftnBox1.find('.ftn-img'),{y : '0%', duration : 0.5});
        }
        if(posY >= $ftnBox2.offset().top - $winH / 2 && posY < $ftnBox3.offset().top - $winH / 2){
            var tl = gsap.timeline();
            tl.to($ftnBox2.find('img').eq(1),{opacity : 0 , duration : 0.5})
              .to($ftnBox2.find('.ftn-text-box'),{color : '#fff', duration : 0.5 , delay: -2})
              .to($ftnBox2.find('.ftn-img'),{y : '0%', duration : 0.5});
        }
        if(posY >= $ftnBox3.offset().top - $winH / 2 && posY < $app.offset().top - $winH / 2){
            var tl = gsap.timeline();
            tl.to($ftnBox3.find('img').eq(1),{opacity : 0 , duration : 0.5})
              .to($ftnBox3.find('.ftn-text-box'),{color : '#fff', duration : 0.5 , delay: -2});
        }
        if(posY >= $app.offset().top - $winH / 2 && posY < $finale.offset().top + $winH ){
            if(posY >= $appChildren.eq(0).offset().top - $winH / 2 && !_isin10){
                gsap.to($appChildren.eq(0), {opacity:1,duration:1})
                _isin10 = true;
            }
            if(posY >= $appChildren.eq(1).offset().top - $winH / 2 && !_isin11){
                gsap.to($appChildren.eq(1), {opacity:1,duration:1})
                _isin11 = true;
            }
            if(posY >= $appChildren.eq(2).offset().top - $winH / 2 && !_isin12){
                gsap.to($appChildren.eq(2), {opacity:1,duration:1})
                _isin12 = true;
            }
            if(posY >= $appChildren.eq(3).offset().top - $winH / 4 * 3 && !_isin13){
                gsap.to($appChildren.eq(3), {opacity:1,duration:1})
                _isin13 = true;
            }
        }
    }
});// ready(function(){})