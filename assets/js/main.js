$(window).on('load', function() { // makes sure the whole site is loaded 

    $('#status').fadeOut(); // will first fade out the loading animation 

    $('#preloader').delay(300).fadeOut('slow'); // will fade out the white DIV that covers the website. 

    $('body').delay(600).css({'overflow':'visible'});

    })

    $(document).ready(function(){
  
        $(window).scroll(function () {
      
                if ($(this).scrollTop() > 200) {
      
                    $('#back-to-top').fadeIn();
      
                } else {
      
                    $('#back-to-top').fadeOut();
      
                }
      
            });
      
            // scroll body to 0px on click
      
            $('#back-to-top').click(function () {
      
                $('body,html').animate({
      
                    scrollTop: 0
      
                }, 400);
      
                return false;
      
            });
      
      });
        
        // Tab-Pane change function
        
        var tabChange = function(){
        
        var tabs1 = $('.nav-tabs');
      
        var tabs = $('.nav-tabs > li');
      
        var active = tabs.filter('.active'); 
      
        var active2 = tabs.filter('.active2'); 
      
        active.removeClass('active')
      
       
      
        active.next('li').length?  active.next("li").addClass('active'):active2.addClass('active')
      
      
      
        active.next("li").addClass('active')
      
        var next = active.next('li').length? active.next('li').find('a') : tabs.filter(':first-child').find('a');
      
        next.tab('show')
      
        }
      
        var start = true;
      
        // var tabCycle = setInterval(tabChange, 5000)
      
        $(function(){
      
        $('.nav-tabs a').click(function(e) {
      
          $(this).tab('show')
      
        // e.preventDefault();
      
          // if(start){
      
          //   start = false;
      
          //   clearInterval(tabCycle);
      
          // }
      
          // else{
      
          //   start = true;
      
          //   setTimeout(function(){
      
          //     tabCycle = setInterval(tabChange, 5000)
      
          //   }, 5000);
      
          // }
      
        
      
        });
      
      
      
        });
      
         /*MAPPPPPPPP */
      
        $(".map_button").click( function(){
      
          $('.current').removeClass('current');
      
           $(this).addClass('current');
      
      });
      
      
      
      $(function() {
      
        $('.tabs-map a').click(function() {
      
      
      
          // Check for active
      
          $('.tabs-map li').removeClass('active');
      
          $(this).parent().addClass('active');
      
      
      
          // Display active tab
      
          let currentTab = $(this).attr('href');
      
          $('.tabs-content div').hide();
      
          $(currentTab).show();
      
      
      
          return false;
      
        });
      
      });


    //   sticky header

    // $(document).on("scroll", function(){
    //     if
    //     ($(document).scrollTop() > 50){
    //     $("#banner").addClass("shrink");
    //     }
    //     else
    //     {
    //     $("#banner").removeClass("shrink");
    //     }
    //     });


            // sticky menu
    var nav = $('#banner');
    var win = $(window);

    win.on('scroll', function() {
       var scroll = win.scrollTop();
       if (scroll < 1) {
        nav.removeClass("shrink");
       } else {
        nav.addClass("shrink");
       }

        $("section").each(function() {
        var elementTop = $(this).offset().top - $('#banner').outerHeight();
            if(scroll >= elementTop) {
                $(this).addClass('loaded');
            }
        });

    });
