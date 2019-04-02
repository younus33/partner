//
//    jQuery(document).ready(function($){
//        $('.product-list').masonry();
//        $('.client-list').owlCarousel();
//        $( '.client-list' ).owlCarousel({
//            items: 6,
//            nav: true,
//            dots: false,
//            mouseDrag: true,
//            responsiveClass: true,
//            responsive: {
//                0:{
//                  items: 1
//                },
//                480:{
//                  items: 3
//                },
//                769:{
//                  items: 6
//                }
//            }
//        });
//
// 
//        $(".menu-trigger").on("click", function(){
//            $(".off-canvas-menu, .off-canvas-overlay").addClass(".active");
//            return false;
//        });
//
//
//        
//
//
//    });

(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();
        $(".mainmenu-area").sticky({topSpacing:0});
        $('.parallax-window').parallax({imageSrc: '../img/header-bg.jpg'});
        var lightbox = $('.portfolio-details a').simpleLightbox();
        var containerEl = document.querySelector('.portfolio-items');

        var mixer = mixitup(containerEl);        
        
        $( '.client-list' ).owlCarousel({
            items: 6,
            nav: true,
            dots: false,
            mouseDrag: true,
            responsiveClass: true,
            responsive: {
                0:{
                  items: 1
                },
                480:{
                  items: 3
                },
                769:{
                  items: 6
                }
            }
        });
         $("body").niceScroll();
    $('ul li a, .scroll-to-bottom a').bind('click', function(event) {
        var $anchor = $(this);
        var headerH = '70';
        $('html, body').stop().animate({
            scrollTop : $($anchor.attr('href')).offset().top - headerH + "px"
        }, 1200, 'easeInOutExpo');

        event.preventDefault();
    }); 

        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	