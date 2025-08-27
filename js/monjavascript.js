// Wait for DOM and ensure GSAP/TweenMax is loaded
$(document).ready(function() {
    
    // Existing GSAP animations and interactions
    $("#menu p").mouseover(function(){
        TweenMax.staggerTo(".box",0.5,{width:"25px",height:"25px",backgroundColor:"transparent"})
    })
    $("#menu p").mouseout(function(){
        TweenMax.staggerTo(".box",0.5,{width:"20px",height:"20px",backgroundColor:"#E5FF4F"})
    })
    $("a").mouseover(function(){
        TweenMax.staggerTo(".box",0.5,{width:"25px",height:"25px",backgroundColor:"transparent"})
    })
    $("a").mouseout(function(){
        TweenMax.staggerTo(".box",0.5,{width:"20px",height:"20px",backgroundColor:"#E5FF4F"})
    })

    TweenMax.staggerTo(".depart",0.2,{opacity:1,delay:0.25,x:"+20px"},0.1);

    $("body").mousedown(function(){
        $(".box").addClass("clicked");
    });
    $("body").mouseup(function(){
        $(".box").removeClass("clicked");
    });

    // Background movement with mouse
    var lFollowX = 0,
        lFollowY = 0,
        x = 0,
        y = 0,
        friction = 1 / 30;

    function moveBackground() {
        x += (lFollowX - x) * friction;
        y += (lFollowY - y) * friction;
        
        translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.02)';

        $('.images').css({
            '-webkit-transform': translate,
            '-moz-transform': translate,
            'transform': translate
        });

        window.requestAnimationFrame(moveBackground);
    }

    $(window).on('mousemove click', function(e) {
        var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
        var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
        lFollowX = (20 * lMouseX) / 100;
        lFollowY = (10 * lMouseY) / 100;
    });

    moveBackground();

    // Existing carousel navigation (if elements exist)
    if (typeof crochet1 !== 'undefined' && typeof crochet2 !== 'undefined') {
        var tabchange = ["1","2","3","4","5"];
        var indice = 0;
        var indicee = 0;
        
        if (typeof change !== 'undefined') {
            change.innerHTML = tabchange[0];
        }
        if (typeof grandbloc !== 'undefined') {
            grandbloc.style.top = "0%";
        }

        crochet1.onclick = function () {
            indicee += 100;
            if (indicee > 0){
                indicee = -400;
            }
            
            indice--;
            if (indice < 0 ) {
                indice = tabchange.length - 1;
            }
            
            if (typeof grandbloc !== 'undefined') {
                TweenMax.to(grandbloc,1,{top:indicee + "%",ease:Expo.easeOut});
            }
            if (typeof change !== 'undefined') {
                change.innerHTML = tabchange[indice];
            }
        }

        crochet2.onclick = function () {
            indicee -= 100;
            if (indicee < -400){
                indicee = 0;
            }
            
            indice++;
            if (indice > tabchange.length - 1 ) {
                indice = 0;
            }
            
            if (typeof grandbloc !== 'undefined') {
                TweenMax.to(grandbloc,1,{top:indicee + "%",ease:Expo.easeOut});
            }
            if (typeof change !== 'undefined') {
                change.innerHTML = tabchange[indice];
            }
        }

        crochet1.onmouseover = function () {
            TweenMax.to(crochet1,0.2,{scale:1.2});
            TweenMax.staggerTo(".box",0.5,{width:"25px",height:"25px",backgroundColor:"transparent"});
        }
        crochet1.onmouseout = function () {
            TweenMax.to(crochet1,0.2,{scale:1});
            TweenMax.staggerTo(".box",0.5,{width:"20px",height:"20px",backgroundColor:"#FFE7CA"});
        }
        crochet2.onmouseover = function () {
            TweenMax.to(crochet2,0.2,{scale:1.2});
            TweenMax.staggerTo(".box",0.5,{width:"25px",height:"25px",backgroundColor:"transparent"});
        }
        crochet2.onmouseout = function () {
            TweenMax.to(crochet2,0.2,{scale:1});
            TweenMax.staggerTo(".box",0.5,{width:"20px",height:"20px",backgroundColor:"#FFE7CA"});
        }
    }

    // Box following mouse cursor
    var $box = $('.box');
    function moveBox(e) {
        $box.each(function(index, val) {
            TweenLite.to($(this), 0.05, { 
                css: { left: e.pageX, top: e.pageY},
                delay: 0 + (index/750)
            });
        });
    }
    $(window).on('mousemove', moveBox);

    $box.each(function(index, val) {
        index = index + 1;
        TweenMax.set($(this), {
            autoAlpha: 1 - (0.0333 * index),
            delay: 0
        });
    });
    
    TweenMax.set($('.text:nth-child(30)'), {
        autoAlpha: 1.5,
        delay: 0
    });

    // Button navigation functions
    function verspage1() {
        if (typeof bt1 !== 'undefined') TweenMax.to(bt1,0.4,{color:"#E5FF4F"});
        if (typeof bt2 !== 'undefined') TweenMax.to(bt2,0.4,{color:"white"});
        if (typeof bt3 !== 'undefined') TweenMax.to(bt3,0.4,{color:"white"});
        if (typeof bt4 !== 'undefined') TweenMax.to(bt4,0.4,{color:"white"});
        if (typeof bt5 !== 'undefined') TweenMax.to(bt5,0.4,{color:"white"});
        if (typeof bt6 !== 'undefined') TweenMax.to(bt6,0.4,{color:"white"});
    }
    function verspage2() {
        if (typeof bt2 !== 'undefined') TweenMax.to(bt2,0.4,{color:"#E5FF4F"});
        if (typeof bt1 !== 'undefined') TweenMax.to(bt1,0.4,{color:"white"});
        if (typeof bt3 !== 'undefined') TweenMax.to(bt3,0.4,{color:"white"});
        if (typeof bt4 !== 'undefined') TweenMax.to(bt4,0.4,{color:"white"});
        if (typeof bt5 !== 'undefined') TweenMax.to(bt5,0.4,{color:"white"});
        if (typeof bt6 !== 'undefined') TweenMax.to(bt6,0.4,{color:"white"});
    }
    function verspage3() {
        if (typeof bt3 !== 'undefined') TweenMax.to(bt3,0.4,{color:"#E5FF4F"});
        if (typeof bt2 !== 'undefined') TweenMax.to(bt2,0.4,{color:"white"});
        if (typeof bt1 !== 'undefined') TweenMax.to(bt1,0.4,{color:"white"});
        if (typeof bt4 !== 'undefined') TweenMax.to(bt4,0.4,{color:"white"});
        if (typeof bt5 !== 'undefined') TweenMax.to(bt5,0.4,{color:"white"});
        if (typeof bt6 !== 'undefined') TweenMax.to(bt6,0.4,{color:"white"});
    }
    function verspage4() {
        if (typeof bt4 !== 'undefined') TweenMax.to(bt4,0.4,{color:"#E5FF4F"});
        if (typeof bt2 !== 'undefined') TweenMax.to(bt2,0.4,{color:"white"});
        if (typeof bt3 !== 'undefined') TweenMax.to(bt3,0.4,{color:"white"});
        if (typeof bt1 !== 'undefined') TweenMax.to(bt1,0.4,{color:"white"});
        if (typeof bt5 !== 'undefined') TweenMax.to(bt5,0.4,{color:"white"});
        if (typeof bt6 !== 'undefined') TweenMax.to(bt6,0.4,{color:"white"});
    }
    function verspage5() {
        if (typeof bt5 !== 'undefined') TweenMax.to(bt5,0.4,{color:"#E5FF4F"});
        if (typeof bt2 !== 'undefined') TweenMax.to(bt2,0.4,{color:"white"});
        if (typeof bt3 !== 'undefined') TweenMax.to(bt3,0.4,{color:"white"});
        if (typeof bt4 !== 'undefined') TweenMax.to(bt4,0.4,{color:"white"});
        if (typeof bt1 !== 'undefined') TweenMax.to(bt1,0.4,{color:"white"});
        if (typeof bt6 !== 'undefined') TweenMax.to(bt6,0.4,{color:"white"});
    }
    function verspage6() {
        if (typeof bt6 !== 'undefined') TweenMax.to(bt6,0.4,{color:"#E5FF4F"});
        if (typeof bt2 !== 'undefined') TweenMax.to(bt2,0.4,{color:"white"});
        if (typeof bt3 !== 'undefined') TweenMax.to(bt3,0.4,{color:"white"});
        if (typeof bt4 !== 'undefined') TweenMax.to(bt4,0.4,{color:"white"});
        if (typeof bt5 !== 'undefined') TweenMax.to(bt5,0.4,{color:"white"});
        if (typeof bt1 !== 'undefined') TweenMax.to(bt1,0.4,{color:"white"});
    }

    // Button click handlers (with safety checks)
    if (typeof bt1 !== 'undefined') {
        bt1.style.color = "#E5FF4F";
        bt1.onclick = verspage1;
    }
    if (typeof bt2 !== 'undefined') bt2.onclick = verspage2;
    if (typeof bt3 !== 'undefined') bt3.onclick = verspage3;
    if (typeof bt4 !== 'undefined') bt4.onclick = verspage4;
    if (typeof bt5 !== 'undefined') bt5.onclick = verspage5;
    if (typeof bt6 !== 'undefined') bt6.onclick = verspage6;

    // Content hover effects
    if (typeof content1 !== 'undefined') {
        content1.onmouseover = function () {
            if (typeof img1 !== 'undefined') TweenMax.to(img1,1,{opacity:1,scale:1.1,ease:Expo.easeOut});
        }
        content1.onmouseout = function () {
            if (typeof img1 !== 'undefined') TweenMax.to(img1,1,{opacity:0.5,scale:1,ease:Expo.easeOut});
        }
    }
    if (typeof content2 !== 'undefined') {
        content2.onmouseover = function () {
            if (typeof img2 !== 'undefined') TweenMax.to(img2,1,{opacity:1,scale:1.1,ease:Expo.easeOut});
        }
        content2.onmouseout = function () {
            if (typeof img2 !== 'undefined') TweenMax.to(img2,1,{opacity:0.5,scale:1,ease:Expo.easeOut});
        }
    }
    if (typeof content3 !== 'undefined') {
        content3.onmouseover = function () {
            if (typeof img3 !== 'undefined') TweenMax.to(img3,1,{opacity:1,scale:1.1,ease:Expo.easeOut});
        }
        content3.onmouseout = function () {
            if (typeof img3 !== 'undefined') TweenMax.to(img3,1,{opacity:0.5,scale:1,ease:Expo.easeOut});
        }
    }
    if (typeof content4 !== 'undefined') {
        content4.onmouseover = function () {
            if (typeof img4 !== 'undefined') TweenMax.to(img4,1,{opacity:1,scale:1.1,ease:Expo.easeOut});
        }
        content4.onmouseout = function () {
            if (typeof img4 !== 'undefined') TweenMax.to(img4,1,{opacity:0.5,scale:1,ease:Expo.easeOut});
        }
    }
    if (typeof content5 !== 'undefined') {
        content5.onmouseover = function () {
            if (typeof img5 !== 'undefined') TweenMax.to(img5,1,{opacity:1,scale:1.1,ease:Expo.easeOut});
        }
        content5.onmouseout = function () {
            if (typeof img5 !== 'undefined') TweenMax.to(img5,1,{opacity:0.5,scale:1,ease:Expo.easeOut});
        }
    }

    // NEW CAROUSEL FUNCTIONALITY - Using GSAP instead of CSS transitions
    class GSAPCarousel {
        constructor() {
            this.currentSlide = 0;
            this.slides = $('.bloctxtImage').toArray();
            this.totalSlides = this.slides.length;
            this.indicators = $('.indicator-dot').toArray();
            this.prevBtn = $('#prevBtn')[0];
            this.nextBtn = $('#nextBtn')[0];
            this.carouselContainer = $('.carousel-container')[0];
            this.autoSlideInterval = null;
            this.autoSlideDelay = 4000;
            this.isAnimating = false;
            
            if (this.slides.length > 0) {
                this.init();
            }
        }
        
        //Page 3

        init() {
            // Initialize all slides as hidden except first
            this.slides.forEach((slide, index) => {
                if (index === 0) {
                    TweenMax.set(slide, {opacity: 1, visibility: 'visible'});
                    $(slide).addClass('active');
                } else {
                    TweenMax.set(slide, {opacity: 0, visibility: 'hidden'});
                    $(slide).removeClass('active');
                }
            });
            
            // Initialize all indicator dots as visible
            this.indicators.forEach((indicator, index) => {
                TweenMax.set(indicator, {
                    opacity: 1,
                    visibility: 'visible',
                    display: 'block',
                    backgroundColor: index === 0 ? "rgba(255,255,255,0.9)" : "rgba(255, 255, 255, 0.4)",
                    borderColor: "rgba(255,255,255,0.5)",
                    scale: index === 0 ? 1.2 : 1
                });
                if (index === 0) {
                    $(indicator).addClass('active');
                }
            });
            
            this.addEventListeners();
            this.startAutoSlide();
        }
        
        addEventListeners() {
            // Navigation buttons
            if (this.prevBtn) {
                $(this.prevBtn).on('click', () => {
                    if (!this.isAnimating) {
                        this.prevSlide();
                        // Trigger box animation
                        TweenMax.staggerTo(".box",0.5,{width:"25px",height:"25px",backgroundColor:"transparent"});
                        setTimeout(() => {
                            TweenMax.staggerTo(".box",0.5,{width:"20px",height:"20px",backgroundColor:"#E5FF4F"});
                        }, 500);
                    }
                });
                
                $(this.prevBtn).hover(
                    () => TweenMax.to(this.prevBtn, 0.2, {scale: 1.1, backgroundColor: "rgba(255,255,255,0.9)"}),
                    () => TweenMax.to(this.prevBtn, 0.2, {scale: 1, backgroundColor: "rgba(255, 255, 255, 0.30)"})
                );
            }
            
            if (this.nextBtn) {
                $(this.nextBtn).on('click', () => {
                    if (!this.isAnimating) {
                        this.nextSlide();
                        // Trigger box animation
                        TweenMax.staggerTo(".box",0.5,{width:"25px",height:"25px",backgroundColor:"transparent"});
                        setTimeout(() => {
                            TweenMax.staggerTo(".box",0.5,{width:"20px",height:"20px",backgroundColor:"#E5FF4F"});
                        }, 500);
                    }
                });
                
                $(this.nextBtn).hover(
                    () => TweenMax.to(this.nextBtn, 0.2, {scale: 1.1, backgroundColor: "rgba(255,255,255,0.9)"}),
                    () => TweenMax.to(this.nextBtn, 0.2, {scale: 1, backgroundColor: "rgba(255, 255, 255, 0.30)"})
                );
            }
            
            // Indicator dots
            this.indicators.forEach((indicator, index) => {
                $(indicator).on('click', () => {
                    if (!this.isAnimating && index !== this.currentSlide) {
                        this.goToSlide(index);
                        // Trigger box animation on indicator click
                        TweenMax.staggerTo(".box",0.5,{width:"25px",height:"25px",backgroundColor:"transparent"});
                        setTimeout(() => {
                            TweenMax.staggerTo(".box",0.5,{width:"20px",height:"20px",backgroundColor:"#E5FF4F"});
                        }, 500);
                    }
                });
                
                $(indicator).hover(
                    () => {
                        if (index !== this.currentSlide) {
                            TweenMax.to(indicator, 0.2, {
                                scale: 1.1,
                                backgroundColor: "rgba(255,255,255,0.6)",
                                borderColor: "rgba(255,255,255,0.8)"
                            });
                        }
                        // Preview slide on hover
                        if (!this.isAnimating && index !== this.currentSlide) {
                            TweenMax.to(this.slides[index], 0.3, {opacity: 0.3});
                        }
                    },
                    () => {
                        if (index !== this.currentSlide) {
                            TweenMax.to(indicator, 0.2, {
                                scale: 1,
                                backgroundColor: "rgba(255, 255, 255, 0.4)",
                                borderColor: "rgba(255,255,255,0.5)"
                            });
                            // Hide preview
                            TweenMax.to(this.slides[index], 0.3, {opacity: 0});
                        }
                    }
                );
            });
            
            // Hover controls for auto-slide
            if (this.carouselContainer) {
                $(this.carouselContainer).hover(
                    () => this.stopAutoSlide(),
                    () => this.startAutoSlide()
                );
            }
        }
        
        showSlide(index, direction = 'next') {
            if (this.isAnimating || index === this.currentSlide) return;
            
            this.isAnimating = true;
            const currentSlide = this.slides[this.currentSlide];
            const nextSlide = this.slides[index];
            
            // Prepare next slide
            TweenMax.set(nextSlide, {
                opacity: 0,
                visibility: 'visible',
                x: direction === 'next' ? 50 : -50
            });
            
            // Animate transition
            const timeline = new TimelineMax({
                onComplete: () => {
                    this.isAnimating = false;
                    $(currentSlide).removeClass('active');
                    $(nextSlide).addClass('active');
                    TweenMax.set(currentSlide, {visibility: 'hidden'});
                }
            });
            
            timeline
                .to(currentSlide, 0.5, {opacity: 0, x: direction === 'next' ? -50 : 50, ease: Power2.easeInOut})
                .to(nextSlide, 0.5, {opacity: 1, x: 0, ease: Power2.easeInOut}, 0.2);
            
            this.currentSlide = index;
            this.updateIndicators();
        }
        
        updateIndicators() {
            this.indicators.forEach((indicator, index) => {
                if (index === this.currentSlide) {
                    $(indicator).addClass('active');
                    TweenMax.to(indicator, 0.3, {
                        backgroundColor: "rgba(255,255,255,0.9)", 
                        borderColor: "rgba(255,255,255,0.9)",
                        scale: 1.2
                    });
                } else {
                    $(indicator).removeClass('active');
                    TweenMax.to(indicator, 0.3, {
                        backgroundColor: "rgba(255, 255, 255, 0.4)", 
                        borderColor: "rgba(255,255,255,0.5)",
                        scale: 1
                    });
                }
            });
        }
        
        nextSlide() {
            const nextIndex = (this.currentSlide + 1) % this.totalSlides;
            this.showSlide(nextIndex, 'next');
            this.resetAutoSlide();
        }
        
        prevSlide() {
            const prevIndex = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
            this.showSlide(prevIndex, 'prev');
            this.resetAutoSlide();
        }
        
        goToSlide(index) {
            const direction = index > this.currentSlide ? 'next' : 'prev';
            this.showSlide(index, direction);
            this.resetAutoSlide();
        }
        
        startAutoSlide() {
            this.stopAutoSlide();
            this.autoSlideInterval = setInterval(() => {
                this.nextSlide();
            }, this.autoSlideDelay);
        }
        
        stopAutoSlide() {
            if (this.autoSlideInterval) {
                clearInterval(this.autoSlideInterval);
                this.autoSlideInterval = null;
            }
        }
        
        resetAutoSlide() {
            this.stopAutoSlide();
            this.startAutoSlide();
        }
    }
    
    // Initialize carousel
    const carousel = new GSAPCarousel();
   
    // Add click handlers for each event space
        document.querySelectorAll('.event-space').forEach((space, index) => {
            space.addEventListener('click', function(e) {
                if (e.target.classList.contains('event-space')) {
                    return; // Let button handle its own click
                }
                
                // Add your navigation logic here
                console.log(`Clicked on event ${index + 1}`);
                
                // Example: Navigate to event page
                // window.location.href = `event-${index + 1}.html`;
            });
        });

        // Add some interactive animations
        document.querySelectorAll('.event-space').forEach(space => {
            space.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.02)';
            });
            
            space.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
            });
        });


}); 