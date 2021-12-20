var currentValue = 0;

var s="", s1="", s2="";

window.onload = function () {
    s="", s1="", s2="";
    document.getElementById('myForm').reset();
    
}

function textChange(text) {
    s2 = "Hi. This is " + document.getElementById("fname").value + " from DAY6-fanpage.";
    s=s1+s2;
    document.getElementById("myTextarea").value = s;
}
function clearButton(text) {
    s="", s1="", s2="";
    document.getElementById('myForm').reset();
}