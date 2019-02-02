$(document).ready(function ($) {
  var parPosition = [];
  $('.par').each(function () {
    parPosition.push($(this).offset().top);
  });

  $('a').click(function () {
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
    return false;
  });

  $('.vNav ul li a').click(function () {
    $('.vNav ul li a').removeClass('active');
    $(this).addClass('active');
  });

  $(document).scroll(function () {
    var position = $(document).scrollTop(),
      index;
    for (var i = 0; i < parPosition.length; i++) {
      if (position <= parPosition[i]) {
        index = i;
        break;
      }
    }
    $('.vNav ul li a').removeClass('active');
    $('.vNav ul li a:eq(' + index + ')').addClass('active');
  });

  $('.vNav ul li a').click(function () {
    $('.vNav ul li a').removeClass('active');
    $(this).addClass('active');
  });
});

var vid = document.getElementById("bgvid");
// var pauseButton = document.querySelector("#polina button");

if (window.matchMedia('(prefers-reduced-motion)').matches) {
  vid.removeAttribute("autoplay");
  vid.pause();
  // pauseButton.innerHTML = "Paused";
}

function vidFade() {
  vid.classList.add("stopfade");
}

vid.addEventListener('ended', function () {
  // only functional if "loop" is removed 
  vid.pause();
  // to capture IE10
  vidFade();
});


// pauseButton.addEventListener("click", function() {
//   vid.classList.toggle("stopfade");
//   if (vid.paused) {
//     vid.play();
//     pauseButton.innerHTML = "Pause";
//   } else {
//     vid.pause();
//     pauseButton.innerHTML = "Paused";
//   }
// })
// jQuery(document).ready(function ($) {
//   var contentSections = $('.cd-section'),
//     navigationItems = $('#cd-vertical-nav a');

//   updateNavigation();
//   $(window).on('scroll', function () {
//     updateNavigation();
//   });

//   //smooth scroll to the section
//   navigationItems.on('click', function (event) {
//     event.preventDefault();
//     smoothScroll($(this.hash));
//   });
//   //smooth scroll to second section
//   $('.cd-scroll-down').on('click', function (event) {
//     event.preventDefault();
//     smoothScroll($(this.hash));
//   });

//   //open-close navigation on touch devices
//   $('.touch .cd-nav-trigger').on('click', function () {
//     $('.touch #cd-vertical-nav').toggleClass('open');

//   });
//   //close navigation on touch devices when selectin an elemnt from the list
//   $('.touch #cd-vertical-nav a').on('click', function () {
//     $('.touch #cd-vertical-nav').removeClass('open');
//   });

//   function updateNavigation() {
//     contentSections.each(function () {
//       $this = $(this);
//       var activeSection = $('#cd-vertical-nav a[href="#' + $this.attr('id') + '"]').data('number') - 1;
//       if (($this.offset().top - $(window).height() / 2 < $(window).scrollTop()) && ($this.offset().top + $this.height() - $(window).height() / 2 > $(window).scrollTop())) {
//         navigationItems.eq(activeSection).addClass('is-selected');
//       } else {
//         navigationItems.eq(activeSection).removeClass('is-selected');
//       }
//     });
//   }

//   // function smoothScroll(target) {
//   //   $('body,html').animate({
//   //       'scrollTop': target.offset().top
//   //     },
//   //     600
//   //   );
//   // }
// });