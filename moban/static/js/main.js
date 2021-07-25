(function ($) {
    "use strict";

    /*----------------------------
       		Preloader Active
       	------------------------------*/

    $(window).on('load', function () {
        $(".preloader").fadeOut(500);
    });

    /*----------------------------
       		main menu Active
       	------------------------------*/

    jQuery('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "991"
    });

    /*----------------------------
       		search form Active
       	------------------------------*/

    $('#close-btn').on('click', function () {
        $('#search-overlay').fadeOut();
        $('#search-btn').show();
    });
    $('#search-btn').on('click', function () {
        $('#search-overlay').fadeIn();
    });

    /*----------------------------
         		home 1 main slider 1 active
         	------------------------------*/
    $(".papri-main-1-slider").owlCarousel({
        loop: true,
        autoplay: true,
        dots: false,
        nav: true,
        navText: ["<i class='fa fa-angle-left '></i>", "<i class='fa fa-angle-right '></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            992: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
    });

    /*----------------------------
         		home2 main slider 1 active
         	------------------------------*/
    $(".papri-main-2-slider").owlCarousel({
        loop: true,
        autoplay: true,
        dots: false,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            992: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
    });

    /*----------------------------
    		   isotop type 1 active
    	------------------------------*/
    $('.folio-menu-1 li').on('click', function () {
        $('.folio-menu-1 li.active').removeClass('active');
        $(this).addClass('active');
    });

    $('#container').imagesLoaded(function () {
        $('.folio-menu-1 li').on('click', function () {
            var filterValue = $(this).attr('data-filter');
            $folios2.isotope({
                filter: filterValue
            });
        });
        var $folios2 = $('.typ1-all-folio').isotope({
            itemSelector: '.typ1-folios-item',
            percentPosition: true,
            transitionDuration: '0.9s',
            // only opacity for reveal/hide transition
            hiddenStyle: {
                opacity: 0
            },
            visibleStyle: {
                opacity: 1
            },
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: '.typ1-folios-item'
            },
        });
    });

    /*----------------------------
    		   isotop type 2 active
    	------------------------------*/
    $('.folio-menu-2 li').on('click', function () {
        $('.folio-menu-2 li.active').removeClass('active');
        $(this).addClass('active');
    });

    $('#container').imagesLoaded(function () {
        $('.folio-menu-2 li').on('click', function () {
            var filterValue = $(this).attr('data-filter');
            $folios2.isotope({
                filter: filterValue
            });
        });
        var $folios2 = $('.typ2-all-folio').isotope({
            itemSelector: '.typ2-folios-item',
            percentPosition: true,
            transitionDuration: '0.9s',
            // only opacity for reveal/hide transition
            hiddenStyle: {
                opacity: 0
            },
            visibleStyle: {
                opacity: 1
            },
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: '.typ2-folios-item'
            },
        });
    });


    /*----------------------------
    		   isotop type 2 active
    	------------------------------*/
    $('.folio-menu-3 li').on('click', function () {
        $('.folio-menu-3 li.active').removeClass('active');
        $(this).addClass('active');
    });

    $('#container').imagesLoaded(function () {
        $('.folio-menu-3 li').on('click', function () {
            var filterValue = $(this).attr('data-filter');
            $folios2.isotope({
                filter: filterValue
            });
        });
        var $folios2 = $('.typ3-all-folio').isotope({
            itemSelector: '.typ3-folios-item',
            percentPosition: true,
            transitionDuration: '0.9s',
            // only opacity for reveal/hide transition
            hiddenStyle: {
                opacity: 0
            },
            visibleStyle: {
                opacity: 1
            },
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: '.typ3-folios-item'
            },
        });
    });

    /*---------------------
    	// popup active
    --------------------- */
    $('.folio-hvr-pop a').magnificPopup({
        type: 'image'
    });
    /*---------------------
    	// popup2 active
    --------------------- */
    $('.folio-hvr2-pop a').magnificPopup({
        type: 'image'
    });
    /*---------------------
    	// popup3 active
    --------------------- */
    $('.folio-hvr3-pop a').magnificPopup({
        type: 'image'
    });
    /*----------------------------
        		testimonial slider Active
        	------------------------------*/

    $(".papri-testi-typ-1-all-wrape").owlCarousel({
        loop: true,
        autoplay: true,
		animateIn: 'fadeInDown',
        smartSpeed: 1000,
        dots: true,
        nav: true,
        navText: ["<i class='fa fa-angle-left '></i>", "<i class='fa fa-angle-right '></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            992: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
    });
    /*----------------------------
    		Counter Active
    	------------------------------*/

    $('.counter').counterUp({
        delay: 2,
        time: 1000
    });

 /*----------------------------
    		Skill Bar1 Active
    	------------------------------*/
    $('#skill-bar1').LineProgressbar({
        percentage: 90,
        fillBackgroundColor: '#090909',
        backgroundColor: '#eeeeee',
        height: '3px',
    });

    $('#skill-bar2').LineProgressbar({
        percentage: 70,
        fillBackgroundColor: '#090909',
        backgroundColor: '#eeeeee',
        height: '3px',
    });

    $('#skill-bar3').LineProgressbar({
        percentage: 80,
        fillBackgroundColor: '#090909',
        backgroundColor: '#eeeeee',
        height: '3px',
    });

    $('#skill-bar4').LineProgressbar({
        percentage: 95,
        fillBackgroundColor: '#090909',
        backgroundColor: '#eeeeee',
        height: '3px',
    });
    /*----------------------------
         		scrolltop active
         	------------------------------*/

    $('body').materialScrollTop();

    /*----------------------------
        		WOW active
        	------------------------------*/

    new WOW().init();

})(jQuery);