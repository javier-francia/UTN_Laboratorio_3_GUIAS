window.onload = function()
{
    var input = this.prompt("Ingrese un numero:");
    var parseado = this.parseInt(input);
    this.console.log(parseado);
    if(isNaN(parseado))
    {
        this.alert(input + " no es un numero.");
    }
    else
    {
        var paridad;
        if(parseado == 0)
        {
            alert("El número 0 no es par ni impar.");
        }
        else
        {
            if(this.ParImpar(parseado) == 2)
            {
                paridad = "par";
            }
            else
            {
                paridad = "impar";
            }

            alert("El número " + parseado + " es " + paridad + ", siendo " + parseado + " el número ingresado.");
        }
    }
};


function ParImpar(numero)
{
    if(numero % 2 == 0)
    {
        return 2;
    }
    else
    {
        return 1;
    }
}