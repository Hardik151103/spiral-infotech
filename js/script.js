var owl = $('.owl-carousel');
owl.owlCarousel({
    items: 1,
    margin: 20,
    loop: true,
    nav: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
});
$('.play').on('click', function () {
    owl.trigger('play.owl.autoplay', [5000])
})
$('.stop').on('click', function () {
    owl.trigger('stop.owl.autoplay')
})
$(".owl-prev").html('<i class="fa-solid fa-angle-left" style="color: #362a50;  background-color: #FFBD3B; width: 30px; padding-top: 5px; padding-bottom: 5px; border-radius: 20px;"></i>');
$(".owl-next").html('<i class="fa-solid fa-angle-right" style="color: #362a50;  background-color: #FFBD3B; width: 30px; padding-top: 5px; padding-bottom: 5px; border-radius: 20px;"></i>');





$('.card-header').click(function () {
    $(this).find('i').toggleClass('fas fa-plus fas fa-minus');
});
