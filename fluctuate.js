$(function (){
    setTimeout('circle()');
});

function circle() {
    $('.circle-outer').animate({
        marginTop: '-=5px'
    }, 3000).animate({
        marginTop: '+=5px'
    }, 3000);
    setTimeout('circle()', 6000);
}