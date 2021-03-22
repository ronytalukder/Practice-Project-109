var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);

//222
var scene = document.getElementById('scene2');
var parallaxInstance = new Parallax(scene);
//222

//3333
var scene = document.getElementById('scene3');
var parallaxInstance = new Parallax(scene);
//3333



//banner slider=============start===================
$('.banner_slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
});
//banner slider=============end===================


var mixer = mixitup('.product_filter_filter');

//omg slider=============start===================
$('.omg_slider_class').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
});
//omg slider=============end===================

//offer slider part end===============star====

$('.offer_slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
});

//offer slider part end===============end====

//new product part================start=======

$('.new_product_part_slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
});
//new product part================end=======




//hot deal part================start=======

// Set the date we're counting down to
var countDownDate = new Date("Jan 31, 2021 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("day1").innerHTML = days
    document.getElementById("hour1").innerHTML = hours
    document.getElementById("min1").innerHTML = minutes
    document.getElementById("sec1").innerHTML = seconds

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);



// Set the date we're counting down to
var countDownDate = new Date("Jan 31, 2021 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("day2").innerHTML = days
    document.getElementById("hour2").innerHTML = hours
    document.getElementById("min2").innerHTML = minutes
    document.getElementById("sec2").innerHTML = seconds

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);



// Set the date we're counting down to
var countDownDate = new Date("Jan 31, 2021 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("day3").innerHTML = days
    document.getElementById("hour3").innerHTML = hours
    document.getElementById("min3").innerHTML = minutes
    document.getElementById("sec3").innerHTML = seconds

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);


//hot deal part================end=======

//hot deal part slider 1================end=======
$('.hot_deas_slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
});
//hot deal part  slider 1================end=======

//hot deal part slider 2================end=======
$('.hot_deal_slider_2').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
});
//hot deal part  slider 2================end=======


//testimonial part slider ================end=======
$('.test_slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
});
//testimonial part  slider ================end=======

//special part  slider ================start=======
$('.special_product_slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
});
//special part  slider ================end=======


//instagrma part  slider ================start=======
$('.instagram_slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 7,
    slidesToScroll: 1,
    arrows: false,
    
});
//instagrma part  slider ================end=======
