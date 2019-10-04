window.onload = function (){
    
    var flagOk = true;
    do
    {
        var input = this.prompt("Ingrese un numero positivo: ");
        var inputNum = this.parseInt(input);
        if(!this.isNaN(inputNum) && inputNum >= 1)
        {
            this.alert("El factorial de " + inputNum + " es " + this.calculaFactorial(inputNum));
            flagOk = false;
        }
        else if (this.isNaN(inputNum))
        {
            this.alert(input + " no es un número válido");
        }
    }
    while(flagOk);
}


function calculaFactorial(number)
{
    var output = 1;
    for(var i = 1; i < number + 1; i++)
    {
        output *= i;
    }
    return output;
}