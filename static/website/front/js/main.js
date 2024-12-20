jQuery(function ($) {
    'use strict'; $(window).on('scroll', function () {
        if ($(this).scrollTop() > 120) {
            $('.navbar-area').addClass("is-sticky");
            $('.spacefored').addClass("onoff");
        } else {
            $('.navbar-area').removeClass("is-sticky");
            $('.spacefored').removeClass("onoff");
        }
    });
    setTimeout(() => {
        $('.preloader-area').fadeOut();

    }, 5000);

    jQuery('.mean-menu').meanmenu({ meanScreenWidth: "991" });
    /* $(".others-option-for-responsive .dot-menu").on("click", function () {
         $(".others-option-for-responsive .containerb .containerb").toggleClass("active");
     });*/

    $(".others-option-for-responsive .dot-menu").on("click", function () {
        $(".classy-menu").toggleClass("menu-on");
    });

    $(".classy-menu").on("click", function () {
        $(".classy-menu").toggleClass("menu-on");
    });
    $(function () {
        $('.default-btn').on('mouseenter', function (e) {
            var parentOffset = $(this).offset(), relX = e.pageX - parentOffset.left, relY = e.pageY - parentOffset.top; $(this).find('span').css({ top: relY, left: relX })
        }).on('mouseout', function (e) { var parentOffset = $(this).offset(), relX = e.pageX - parentOffset.left, relY = e.pageY - parentOffset.top; $(this).find('span').css({ top: relY, left: relX }) });
    }); $(function () {
        $('.optional-btn').on('mouseenter', function (e) { var parentOffset = $(this).offset(), relX = e.pageX - parentOffset.left, relY = e.pageY - parentOffset.top; $(this).find('span').css({ top: relY, left: relX }) }).on('mouseout', function (e) { var parentOffset = $(this).offset(), relX = e.pageX - parentOffset.left, relY = e.pageY - parentOffset.top; $(this).find('span').css({ top: relY, left: relX }) });
    }); $('.banner-content-slides').owlCarousel({ loop: true, nav: true, dots: false, autoplayHoverPause: true, autoplay: true, autoHeight: true, items: 1, navText: ["<i class='bx bx-left-arrow-alt'></i>", "<i class='bx bx-right-arrow-alt'></i>"] });
    $('.banner-image-slider').owlCarousel({ loop: true, nav: false, dots: true, autoplayHoverPause: true, autoplay: true, autoplayTimeout: 2500, autoHeight: true, items: 1, animateOut: 'fadeOut', }); (function ($) { $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current'); $('.tab ul.tabs li a').on('click', function (g) { var tab = $(this).closest('.tab'), index = $(this).closest('li').index(); tab.find('ul.tabs > li').removeClass('current'); $(this).closest('li').addClass('current'); tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp(); tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown(); g.preventDefault(); }); })(jQuery); $('.feedback-slides').owlCarousel({ loop: true, nav: false, dots: true, autoplayHoverPause: true, autoplay: true, margin: 30, navText: ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"], responsive: { 0: { items: 1, }, 768: { items: 1, }, 1024: { items: 2, }, 1200: { items: 2, } } }); $('.odometer').appear(function (e) { var odo = $(".odometer"); odo.each(function () { var countNumber = $(this).attr("data-count"); $(this).html(countNumber); }); }); $('.popup-btn').magnificPopup({ type: 'image', gallery: { enabled: true, } }); $('.popup-youtube').magnificPopup({ disableOn: 320, type: 'iframe', mainClass: 'mfp-fade', removalDelay: 160, preloader: false, fixedContentPos: false }); $('.partner-slides').owlCarousel({ loop: true, nav: false, dots: false, autoplayHoverPause: true, autoplay: true, margin: 50, navText: ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"], responsive: { 0: { items: 2, }, 576: { items: 3, }, 768: { items: 3, }, 1200: { items: 4, } } }); $('.testimonials-slides').owlCarousel({ loop: true, nav: false, dots: true, autoplayHoverPause: true, autoplay: true, margin: 30, navText: ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"], responsive: { 0: { items: 1, }, 576: { items: 2, }, 768: { items: 2, }, 1200: { items: 2, } } }); $(function () { $('.accordion').find('.accordion-title').on('click', function () { $(this).toggleClass('active'); $(this).next().slideToggle('fast'); $('.accordion-content').not($(this).next()).slideUp('fast'); $('.accordion-title').not($(this)).removeClass('active'); }); }); $(".newsletter-form").validator().on("submit", function (event) {
        if (event.isDefaultPrevented()) { formErrorSub(); submitMSGSub(false, "Please enter your email correctly."); }
        else { event.preventDefault(); }
    }); function callbackFunction(resp) {
        if (resp.result === "success") { formSuccessSub(); }
        else { formErrorSub(); }
    }
    function formSuccessSub() { $(".newsletter-form")[0].reset(); submitMSGSub(true, "Thank you for subscribing!"); setTimeout(function () { $("#validator-newsletter").addClass('hide'); }, 4000) }
    function formErrorSub() { $(".newsletter-form").addClass("animated shake"); setTimeout(function () { $(".newsletter-form").removeClass("animated shake"); }, 1000) }
    function submitMSGSub(valid, msg) {
        if (valid) { var msgClasses = "validation-success"; }
        else { var msgClasses = "validation-danger"; }
        $("#validator-newsletter").removeClass().addClass(msgClasses).text(msg);
    }
    $(".newsletter-form").ajaxChimp({ url: "https://envytheme.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9", callback: callbackFunction }); $(function () { $(window).on('scroll', function () { var scrolled = $(window).scrollTop(); if (scrolled > 600) $('.go-top').addClass('active'); if (scrolled < 600) $('.go-top').removeClass('active'); }); $('.go-top').on('click', function () { $("html, body").animate({ scrollTop: "0" }, 500); }); }); $('.blog-slides').owlCarousel({ loop: true, nav: true, dots: false, autoplayHoverPause: true, autoplay: true, margin: 30, navText: ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"], responsive: { 0: { items: 1, }, 576: { items: 1, }, 768: { items: 2, }, 1200: { items: 3, } } }); $('.case-studies-slides').owlCarousel({ loop: true, nav: true, dots: false, autoplayHoverPause: true, autoplay: true, margin: 30, navText: ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"], responsive: { 0: { items: 1, }, 576: { items: 2, }, 768: { items: 2, }, 992: { items: 3, }, 1200: { items: 4, } } }); $('.testimonials-slides-two').owlCarousel({ loop: true, nav: false, dots: true, autoplayHoverPause: true, autoplay: true, animateOut: 'fadeOut', animateIn: 'fadeIn', items: 1, navText: ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"] }); $(window).on('load', function () { if ($(".wow").length) { var wow = new WOW({ boxClass: 'wow', animateClass: 'animated', offset: 20, mobile: true, live: true, }); wow.init(); } });
    $(window).on('load', function () {
        $('.preloader-area').fadeOut();
    });


}(jQuery));