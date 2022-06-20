window.addEventListener("load", sumaf);

function suma(num1, num2, num3) {
    return num1 + num2 + num3;
let sum = num1 + num2 + num3
return sum;
}	//Fin de la función suma

function sumaf(num1, num2, num3) {
    val1 = document.getElementById("num1").value;
    val2 = document.getElementById("num2").value;
    val3 = document.getElementById("num3").value;
    suma(val1, val2, val3);
    document.getElementById("Result").innerHTML = suma(val1, val2, val3);
}	//Fin de la función sumaf

function mostrarsuma() {
    if (val1 != "" && val2 != "" && val3 != "") {
        let suma = (num1.value, num2.value, num3.value); 
    } else {
        document.getElementById("Result").value = "";
    }
}	//Fin de la función mostrarsuma