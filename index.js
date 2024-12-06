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

const root = document.documentElement;

let xPosition = 45;
let yPosition = 45;

let xDirection = 0.01;
let yDirection = 0.01;

function changeGradation() {
    //X軸ポジション
    xPosition += xDirection
    //default:55
    if (xPosition >= 55 ){
        xDirection = -0.01;
    //default:45
    } else if (xPosition <= 45){
        xDirection = 0.01;
    }

    //Y軸ポジション
    yPosition += yDirection
    //default:50
    if (yPosition >= 50) {
        yDirection = -0.01;
    //default:40
    } else if (yPosition <= 40){
        yDirection = 0.01;
    }

    //cssプロパティに対して算出した値をセット
    root.style.setProperty('--x-position', `${xPosition}%`);
    root.style.setProperty('--y-position', `${yPosition}%`);

    setTimeout(changeGradation, 50);
}

//再起処理
changeGradation();

