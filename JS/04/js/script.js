window.onload = function()
{
    var cantidad = parseInt(this.prompt("Elija cantidad de primos a mostrar:"));
    if(this.isNaN(cantidad))
    {
        this.alert(cantidad + " no es un numero valido.");
    }
    else
    {
        var primos = this.numerosPrimos(cantidad);
        primos.forEach(function(item){
            document.write("<p>" + item + "</p>" + "<br>");
        });
    }
};




function numerosPrimos(cantidad)
{
    var primosCounter = 0;
    var numero = 1;
    var numeroAux = 1;
    var arrayPrimos = [];

    while(primosCounter < cantidad)
    {
        if(numero > 1)
        {
            var noPrimo = false;
            numeroAux = numero - 1;

            while(numeroAux > 1)
            {
                if(numero % numeroAux == 0)
                {
                    noPrimo = true;
                    break;
                }
                numeroAux--;
            }

            if(noPrimo)
            {
                numero++;
                continue;
            }
            
            arrayPrimos.push(numero);
            numero++;
            primosCounter++;
        }
        else
        {
            arrayPrimos.push(numero);
            numero++;
            primosCounter++;
        }
    }

    return arrayPrimos;
}