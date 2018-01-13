/*preloader js*/
var delayTime = 500; //in milliseconds
$(".preloader").show(); 

$(window).on('load', function () {
//    alert('page is loaded');
console.log("loading screen");
    setTimeout(function () {
//        alert('page is loaded and 1 minute has passed');
        
    $(".preloader").fadeOut("normal", function() {
        $(this).remove();
    });
    }, delayTime);

});