/*
* variables
*/

/*
* test data
* */

/*
* functions dummy calls
* */

/*
* main functions
* */

// let canvasFront = document.querySelector('.canvas-front');
// let ctx2 = canvasFront.getContext('2d');
//
// ctx2.arc(100, 100, 95, 0, getRadians(23),true);
// ctx2.lineWidth = 8;
// ctx2.angleOffset = 90;
// ctx2.strokeStyle = '#5D6066';
// ctx2.lineCap = 'round';
// // ctx2.shadowInset = true;
// // ctx2.shadowColor = "red";
// // ctx2.shadowBlur = 0;
// // ctx2.shadowOffsetX = -4;
// // ctx2.shadowOffsetY = 1;
// ctx2.stroke();
//
// function getRadians(degrees) {
//     return (Math.PI / 180) * degrees;
// }

function createCanvas(selector, cx, cy, radius, startAngle, endAngle) {
    let canvasBg = document.querySelector(selector);
    let ctx = canvasBg.getContext('2d');

    ctx.arc(cx, cy, radius, startAngle, getRadians(endAngle),true);
    ctx.lineWidth = 10;
    ctx.angleOffset = 90;
    ctx.strokeStyle = '#5D6066';
    ctx.lineCap = 'round';
    ctx.stroke();

    function getRadians(degrees) {
        return (Math.PI / 180) * degrees;
    }
}
createCanvas('.canvas-bg', 100,100, 95, 0, 360);
createCanvas('.canvas-front', 100,100, 95, 0, 100);