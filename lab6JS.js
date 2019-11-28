//lab6 JS//
//global variables for the randoml6 function//
var lab6array=[];
var addition = 0.0;
//global variables for the date//
var d= new Date();
var d1= Date();


//Random Function designated l6 (Lab6)//

function randoml6()
{
    var randomArrayl6=[];
    for (var i=0;i<20;i++)
    {
        var randomNumberl6= parseInt(Math.random()*10); //*10 for whole numbers//
        randomArrayl6.push(randomNumberl6);
        console.log(randomNumberl6);
    }
    document.getElementById("randomNumberl6").innerHTML=randomNumberl6
}
function currentTime() {
    var today = new Date();
    var d = today.getDay();
    var mn = today.getMonth();
    var y = today.getFullYear()
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    d = checkTime(d);
    mn = checkTime(mn);
    y = checkTime(y);
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('date').innerHTML =
        d + "-" + mn + "-" + y + " " + h + ":" + m + ":" + s;
    var t = setTimeout(currentTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}



    function printArray() {
        console.log(testArray[4]);
        testArray.push('Toyota')
        //testArray[5]='toyota';
        console.log(testArray)
    }


