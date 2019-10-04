window.onload = function (){

    var input = prompt("Ingrese un texto: ");
    var msg = "La cadena ingresada ";
    if(this.esPalindromo(input))
        msg += "es un palindromo.";
    else
        msg += "no es un palindromo."

    this.alert(msg);
}



/*replace ' ' por ''*/

function esPalindromo(str)
{
    str = str.toLowerCase();
    
    str = str.split(" ").join("");
    //  Como replace solo reemplaza la primera ocurrencia, hago split para borrar
    //  los espacios y vuelvo a unir el array
    
    var output = false;
    var ae = "";
    if(str == invertirString(str))
        output = true;

    return output;
}


function invertirString(str) {
    var splitString = str.split("");

    var reverseArray = splitString.reverse();

    var joinArray = reverseArray.join("");

    return joinArray;
}