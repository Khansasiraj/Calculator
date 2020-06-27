function getNumber(num) {
    var output = document.getElementById("output");
    output.value += num;

}

function clearScreen() {

    var output = document.getElementById("output");
    output.value = " ";

}

function result(num) {
    var output = document.getElementById("output");
    output.value = eval(output.value);

}

function squareRoot() {
    var output = document.getElementById("output");
    output.value = eval(Math.sqrt(output.value));

}

function power() {
    var output = document.getElementById("output");
    output.value = eval(Math.pow(output.value, 2));

}

function pi() {
    var output = document.getElementById("output");
    output.value = eval(Math.PI);

}

function back() {
    
    var output = document.getElementById("output");
    var a = output.value;
    output.value = a.substring(0, a.length - 1);


}