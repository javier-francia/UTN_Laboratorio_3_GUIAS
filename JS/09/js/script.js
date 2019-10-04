window.onload = function(){
    $('btnCalcular').addEventListener("click", btnCalcular_Click);
}




function btnCalcular_Click()
{
    var numero1 = parseFloat($("txtNumero1").value);
    var numero2 = parseFloat($("txtNumero2").value);

    var resultado = 0;

    var radioButtons = document.getElementsByName("rdbOperacion");
    var operacion = "";
    radioButtons.forEach(function(item){
        if(item.checked)
            operacion = item.value;
    });

    switch(operacion)
    {
        case "Sumar":
            resultado = numero1 + numero2;
            break;
        case "Restar":
            resultado = numero1 - numero2;
            break;
        case "Multiplicar":
            resultado = numero1 * numero2;
            break;
        case "Dividir":
            if(numero2 == 0)
            {
                alert("No se puede hacer una división por 0.");
                return;
            }
            resultado = numero1 / numero2;
            break;
        default:
            break;
    }

    alert("El resultado de " + operacion.toLowerCase() + " " + numero1 + " y " + numero2 + " es: " + resultado);
}

function $(id)
{
    return document.getElementById(id);
}