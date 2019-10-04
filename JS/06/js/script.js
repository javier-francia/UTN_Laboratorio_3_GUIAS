window.onload = function(){
    var input = this.prompt("Ingrese una cadena de texto: ");

    var output = "La cadena ingresada esta formada ";
    if(input == input.toLowerCase())
        output += "unicamente por minúsculas";
    else if(input == input.toUpperCase())
        output += "unicamente por mayúsculas.";
    else
        output += "por una mezcla de mayúsculas y minúsculas.";

    alert(output);
}