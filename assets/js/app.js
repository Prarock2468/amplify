function fitElementToParent(el, padding) {

    var timeout = null;
  
    function resize() {
  
      if (timeout) clearTimeout(timeout);
  
      anime.set(el, {scale: 1});
  
      var pad = padding || 0;
  
      var parentEl = el.parentNode;
  
      var elOffsetWidth = el.offsetWidth - pad;
  
      var parentOffsetWidth = parentEl.offsetWidth;
  
      var ratio = parentOffsetWidth / elOffsetWidth;
  
      timeout = setTimeout(anime.set(el, {scale: ratio}), 10);
  
    }
  
    resize();
  
    window.addEventListener('resize', resize);
  
  }  
  
  var sphereAnimation = (function() {
  
  
  
    var sphereEl = document.querySelector('.sphere-animation');
  
    var spherePathEls = sphereEl.querySelectorAll('.sphere path');
  
    var pathLength = spherePathEls.length;
  
    var hasStarted = false;
  
    var aimations = [];
  
  
  
    fitElementToParent(sphereEl);
  
  
  
    var breathAnimation = anime({
  
      begin: function() {
  
        for (var i = 0; i < pathLength; i++) {
  
          aimations.push(anime({
  
            targets: spherePathEls[i],
  
            stroke: {value: ['rgba(245,165,9,1)', 'rgba(40,40,40,.35)'], duration: 500},
  
            translateX: [2, -4],
  
            translateY: [2, -4],
  
            easing: 'easeOutQuad',
  
            autoplay: false
  
          }));
  
        }
  
      },
  
      update: function(ins) {
  
        aimations.forEach(function(animation, i) {
  
          var percent = (1 - Math.sin((i * .35) + (.0022 * ins.currentTime))) / 2;
  
          animation.seek(animation.duration * percent);
  
        });
  
      },
  
      duration: Infinity,
  
      autoplay: false
  
    });
  
  
  
    var introAnimation = anime.timeline({
  
      autoplay: false
  
    })
  
    .add({
  
      targets: spherePathEls,
  
      strokeDashoffset: {
  
        value: [anime.setDashoffset, 0],
  
        duration: 3900,
  
        easing: 'easeInOutCirc',
  
        delay: anime.stagger(190, {direction: 'reverse'})
  
      },
  
      duration: 2000,
  
      delay: anime.stagger(60, {direction: 'reverse'}),
  
      easing: 'linear'
  
    }, 0);
  
  
  
    var shadowAnimation = anime({
  
        targets: '#sphereGradient',
  
        x1: '25%',
  
        x2: '25%',
  
        y1: '0%',
  
        y2: '75%',
  
        duration: 30000,
  
        easing: 'easeOutQuint',
  
        autoplay: false
  
      }, 0);
  
  
  
    function init() {
  
      introAnimation.play();
  
      breathAnimation.play();
  
      shadowAnimation.play();
  
    }
  
    
  
    init();
  
  
  
  })();
  
  // accept cookies

  const cookieBox = document.getElementById('js-cookie-box');
  const cookieButton = document.getElementById('js-cookie-button');

  if (!Cookies.get('cookie-box')) {

      cookieBox.classList.remove('cookie-box--hide');

      cookieButton.onclick = function () {
          Cookies.set('cookie-box', true, { expires: 7 });
          cookieBox.classList.add('cookie-box--hide');
      };
  }
  var closebtns = document.getElementsByClassName("close");
  var i;
  for (i = 0; i < closebtns.length; i++) {
      closebtns[i].addEventListener("click", function () {
          this.parentElement.style.display = 'none';
      });
  }

  // end accept cookies

  // modal-popup on-load
  $(window).on('load', function () {
    setTimeout(function () {
        $('#modal-subscribe').modal("show")
    }, 3000)
})
function openPopup() {
    $('#modal-subscribe').modal("show")
}

$('#something').click(function () {
    document.location = 'https://tde.fi';
});
  // end modal-popup on-load

// loader
  $(window).on('load', function () { // makes sure the whole site is loaded 
    $('#status').fadeOut(); // will first fade out the loading animation 
    $('#preloader').delay(300).fadeOut('slow'); // will fade out the white DIV that covers the website. 
    $('body').delay(600).css({
        'overflow': 'visible'
    });
})
// loader