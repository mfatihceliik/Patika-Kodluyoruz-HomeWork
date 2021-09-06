const arguments = process.argv.slice(2);
const pi = 3.14159265;

function areaCalculation(r){
    let circle = pi * (r * r);
    console.log("Yarıçapı: "+ r +" olan dairenin alanı: " + circle);
}

areaCalculation(arguments[0] * 1);