// JavaScript Document





//var audio = new Audio();
//audio.src = "audio/a.mp3"
//audio.play();

//TweenMax.to(bloc1,5,{marginLeft:"-200%",marginTop:"-200%",width:0,delay:5.5,ease: Expo.easeOut})
//TweenMax.to(bloc2,2,{width:0,delay:5.5,ease: Expo.easeOut})
//TweenMax.to(pageIntro,2,{display:"none",delay:5.5,ease: Expo.easeOut})


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
//TweenMax.staggerTo(".loader",0.7,{opacity:0,delay:4.5},0.3)
TweenMax.staggerTo(".depart",0.2,{opacity:1,delay:0.25,x:"+20px"},0.1);

$("body").mousedown(function(){
  $(".box").addClass("clicked");
});
$("body").mouseup(function(){
  $(".box").removeClass("clicked");
});

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
    '-webit-transform': translate,
    '-moz-transform': translate,
    'transform': translate
  });

  window.requestAnimationFrame(moveBackground);
}

$(window).on('mousemove click', function(e) {

  var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
  var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
  lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
  lFollowY = (10 * lMouseY) / 100;

});

moveBackground();






var tabchange = ["1","2","3","4","5",];
var indice = 0;
change.innerHTML = tabchange[0];
var indicee = 0;
grandbloc.style.top="0%"


crochet1.onclick = function () {
	
	
	indicee += 100;
	if (indicee > 0){
		indicee = -400
	}
	
	indice--
	if (indice < 0 ) {
		indice =tabchange.length - 1;
	}
	
	TweenMax.to(grandbloc,1,{top:indicee + "%",ease:Expo. easeOut});
	change.innerHTML = tabchange[indice];
	
}

crochet2.onclick= function () {

	
	indicee -= 100;
	if (indicee < -400){
		indicee = -0
	}
	
	indice++
	if (indice > tabchange.length - 1 ) {
		indice=0;
	}
	
		TweenMax.to(grandbloc,1,{top:indicee + "%",ease:Expo. easeOut});
	change.innerHTML = tabchange[indice];
}




crochet1.onmouseover = function () {
	TweenMax.to(crochet1,0.2,{scale:1.2})
	TweenMax.staggerTo(".box",0.5,{width:"25px",height:"25px",backgroundColor:"transparent"})
}
crochet1.onmouseout = function () {
	TweenMax.to(crochet1,0.2,{scale:1})
	TweenMax.staggerTo(".box",0.5,{width:"20px",height:"20px",backgroundColor:"#FFE7CA"})
}
crochet2.onmouseover = function () {
	TweenMax.to(crochet2,0.2,{scale:1.2})
	TweenMax.staggerTo(".box",0.5,{width:"25px",height:"25px",backgroundColor:"transparent"})
}
crochet2.onmouseout = function () {
	TweenMax.to(crochet2,0.2,{scale:1})
	TweenMax.staggerTo(".box",0.5,{width:"20px",height:"20px",backgroundColor:"#FFE7CA"})
}



	var $box = $('.box'),
  inter = 30,
  speed = 0;

function moveBox(e) {
  $box.each(function(index, val) {
   TweenLite.to($(this), 0.05, { css: { left: e.pageX, top: e.pageY},delay:0+(index/750)});
  });
}

$(window).on('mousemove', moveBox);

$box.each(function(index, val) {
    index = index + 1;
    TweenMax.set(
      $(this),{
        autoAlpha: 1 - (0.0333 * index),
        delay:0
      });
  });
  TweenMax.set(
    $('.text:nth-child(30)'), {
      autoAlpha: 1.5,
      delay: 0
    }
  );

//	TweenMax.to(page1,1,{top:0,left:0,opacity:1,ease:Expo. easeOut})
//	TweenMax.to(page2,1,{top:0,left:0,opacity:1,ease:Expo. easeOut})
//	TweenMax.to(page3,1,{top:0,left:0,opacity:1,ease:Expo. easeOut})
//	TweenMax.to(page4,1,{top:0,left:0,opacity:1,ease:Expo. easeOut})
//	TweenMax.to(page5,1,{top:0,left:0,opacity:1,ease:Expo. easeOut})
//	TweenMax.to(page6,1,{top:0,left:0,opacity:1,ease:Expo. easeOut})

function verspage1 () {
	
	TweenMax.to(bt1,0.4,{color:"#E5FF4F"})
	TweenMax.to(bt2,0.4,{color:"white"})
	TweenMax.to(bt3,0.4,{color:"white"})
	TweenMax.to(bt4,0.4,{color:"white"})
	TweenMax.to(bt5,0.4,{color:"white"})
	TweenMax.to(bt6,0.4,{color:"white"})
	
}
function verspage2 () {
	
	TweenMax.to(bt2,0.4,{color:"#E5FF4F"})
	TweenMax.to(bt1,0.4,{color:"white"})
	TweenMax.to(bt3,0.4,{color:"white"})
	TweenMax.to(bt4,0.4,{color:"white"})
	TweenMax.to(bt5,0.4,{color:"white"})
	TweenMax.to(bt6,0.4,{color:"white"})
	
}

function verspage3 () {
	
	TweenMax.to(bt3,0.4,{color:"#E5FF4F"})
	TweenMax.to(bt2,0.4,{color:"white"})
	TweenMax.to(bt1,0.4,{color:"white"})
	TweenMax.to(bt4,0.4,{color:"white"})
	TweenMax.to(bt5,0.4,{color:"white"})
	TweenMax.to(bt6,0.4,{color:"white"})
}
function verspage4 () {
	
	TweenMax.to(bt4,0.4,{color:"#E5FF4F"})
	TweenMax.to(bt2,0.4,{color:"white"})
	TweenMax.to(bt3,0.4,{color:"white"})
	TweenMax.to(bt1,0.4,{color:"white"})
	TweenMax.to(bt5,0.4,{color:"white"})
	TweenMax.to(bt6,0.4,{color:"white"})
	
}
function verspage5 () {
	
	TweenMax.to(bt5,0.4,{color:"#E5FF4F"})
	TweenMax.to(bt2,0.4,{color:"white"})
	TweenMax.to(bt3,0.4,{color:"white"})
	TweenMax.to(bt4,0.4,{color:"white"})
	TweenMax.to(bt1,0.4,{color:"white"})
	TweenMax.to(bt6,0.4,{color:"white"})
	
}
function verspage6 () {
	
	TweenMax.to(bt6,0.4,{color:"#E5FF4F"})
	TweenMax.to(bt2,0.4,{color:"white"})
	TweenMax.to(bt3,0.4,{color:"white"})
	TweenMax.to(bt4,0.4,{color:"white"})
	TweenMax.to(bt5,0.4,{color:"white"})
	TweenMax.to(bt1,0.4,{color:"white"})
	
}

bt1.style.color = "#E5FF4F"
bt1.onclick = function () {
	verspage1();
}
bt2.onclick = function () {
	verspage2();
}
bt3.onclick = function () {
	verspage3();
}
bt4.onclick = function () {
	verspage4();
}
bt5.onclick = function () {
	verspage5();
}
bt6.onclick = function () {
	verspage6();
}

content1.onmouseover = function () {
	TweenMax.to(img1,1,{opacity:1,scale:1.1,ease:Expo. easeOut})
}
content2.onmouseover = function () {
	TweenMax.to(img2,1,{opacity:1,scale:1.1,ease:Expo. easeOut})
}
content3.onmouseover = function () {
	TweenMax.to(img3,1,{opacity:1,scale:1.1,ease:Expo. easeOut})

	
}
content4.onmouseover = function () {
	TweenMax.to(img4,1,{opacity:1,scale:1.1,ease:Expo. easeOut})

}
content5.onmouseover = function () {
	TweenMax.to(img5,1,{opacity:1,scale:1.1,ease:Expo. easeOut})

}

content1.onmouseout = function () {
	TweenMax.to(img1,1,{opacity:0.5,scale:1,ease:Expo. easeOut})
}
content2.onmouseout = function () {
	TweenMax.to(img2,1,{opacity:0.5,scale:1,ease:Expo. easeOut})
}
content3.onmouseout = function () {
	TweenMax.to(img3,1,{opacity:0.5,scale:1,ease:Expo. easeOut})
}
content4.onmouseout = function () {
	TweenMax.to(img4,1,{opacity:0.5,scale:1,ease:Expo. easeOut})
}
content5.onmouseout = function () {
	TweenMax.to(img5,1,{opacity:0.5,scale:1,ease:Expo. easeOut})


}

//(function($) {
//    var loadImages = new Promise(function(done) {
//        var loading = $("img").length;
//        $("img").each(function() {
//            $("<img/>")
//                .on('load', function() {
//                    loading--;
//                    if (!loading) done();
//                })
//                .on('error', function() {
//                    loading--;
//                    if (!loading) done();
//                })
//                .attr("src", $(this).attr("src"))
//        });
//    });
//    loadImages.then(function() {
//        $(document).trigger({
//            type: "imagesLoaded"
//        });
//    });
//})(jQuery);
//
//$(document).on("imagesLoaded", function(){
//    alert("all images loaded");        //Faut que tu enlèves ou remplace ça par ce que tu veux !
//})


//page3 & more Navigation//

 let currentSlide = 0;
        const totalSlides = 5;
        const slides = document.querySelectorAll('.bloctxtImage');
        const dots = document.querySelectorAll('.indicator-dot');
        const slideCounter = document.getElementById('current-slide');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');

        function showSlide(slideIndex) {
            // Hide all slides
            slides.forEach(slide => {
                slide.classList.remove('active');
            });
            
            // Remove active class from all dots
            dots.forEach(dot => {
                dot.classList.remove('active');
            });
            
            // Show current slide
            slides[slideIndex].classList.add('active');
            dots[slideIndex].classList.add('active');
            
            // Update counter
            slideCounter.textContent = slideIndex + 1;
            
            currentSlide = slideIndex;
        }

        function nextSlide() {
            const next = (currentSlide + 1) % totalSlides;
            showSlide(next);
        }

        function previousSlide() {
            const prev = (currentSlide - 1 + totalSlides) % totalSlides;
            showSlide(prev);
        }

        // Event listeners for navigation buttons
        nextBtn.addEventListener('click', nextSlide);
        prevBtn.addEventListener('click', previousSlide);

        // Event listeners for dot indicators
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                showSlide(index);
            });
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                previousSlide();
            } else if (e.key === 'ArrowRight') {
                nextSlide();
            }
        });

        // Touch/swipe support for mobile
        let startX = 0;
        let endX = 0;
        const carousel = document.querySelector('.carousel-container');

        carousel.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });

        carousel.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            handleSwipe();
        });

        function handleSwipe() {
            const threshold = 50;
            const diff = startX - endX;
            
            if (Math.abs(diff) > threshold) {
                if (diff > 0) {
                    nextSlide();
                } else {
                    previousSlide();
                }
            }
        }

        // Auto-play (optional - uncomment to enable)
        // setInterval(nextSlide, 5000);

        // Initialize first slide
        showSlide(0);