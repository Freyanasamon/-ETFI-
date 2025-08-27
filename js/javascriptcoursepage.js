
        // Smooth scrolling for program cards
        let isScrolling = false;
        const programsGrid = document.querySelector('.programs-grid');

        // Add touch and mouse wheel support for horizontal scrolling
        programsGrid.addEventListener('wheel', (e) => {
            e.preventDefault();
            programsGrid.scrollLeft += e.deltaY;
        });

        // Add keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                programsGrid.scrollLeft -= 300;
            } else if (e.key === 'ArrowRight') {
                programsGrid.scrollLeft += 300;
            }
        });

        // Auto-hide scroll indicator after interaction
        programsGrid.addEventListener('scroll', () => {
            const scrollIndicator = document.querySelector('.scroll-indicator');
            if (scrollIndicator) {
                scrollIndicator.style.opacity = '0.3';
                setTimeout(() => {
                    if (scrollIndicator) scrollIndicator.style.opacity = '1';
                }, 2000);
            }
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



