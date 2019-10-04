window.onload = function(){
    var meses = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre",
        "Diciembre"
    ];


    var body = document.getElementsByTagName("body");
    meses.forEach(function(item, index)
    {
        var label = document.createElement("label");
        var input = document.createElement("input");
        input.setAttribute("type", "checkbox");
        input.setAttribute("name", "chkMeses");

        var texto = document.createTextNode(item);

        label.appendChild(input);
        label.append(texto);

        var br = document.createElement("br");

        body[0].appendChild(label);
        body[0].appendChild(br);
    });    
}

function $(id)
{
    return document.getElementById(id);
}