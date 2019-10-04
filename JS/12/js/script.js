window.onload = function(){
    var as = document.getElementsByTagName("a");

    var divNuevo = document.createElement("div");

    var cantEnlaces = as.length;
    var anteUltimo = "";
    var cantPrueba = 0;
    var cantTercerParrafo = 0;
    
    for(var i = 0; i < as.length; i++)
    {
        if(cantEnlaces > 1 && i == cantEnlaces - 2)
        {
            anteUltimo = as[i].getAttribute("href");
        }
        if(as[i].getAttribute("href") == "http://prueba")
        {
            cantPrueba++;
        }
    }

    var parrafos = document.getElementsByTagName("p");

    for(var i = 0; i < parrafos.length; i++)
    {
        if(i == 2)
        {
            cantTercerParrafo = parrafos[i].children.length;
        }
    }

    var p1String = "La página posee " + cantEnlaces + " enlaces.";
    var p2String = "La dirección del penúltimo enlace es: " + anteUltimo;
    var p3String = "La página posee " + cantPrueba + " enlaces a 'http://prueba'";
    var p4String = "La página posee " + cantTercerParrafo + " enlaces en el tercer párrafo.";


    var div = document.createElement("div");
    var br = document.createElement("br");
    var p1 = document.createElement("p");
    var p2 = document.createElement("p");
    var p3 = document.createElement("p");
    var p4 = document.createElement("p");
    var textp1 = document.createTextNode(p1String);
    var textp2 = document.createTextNode(p2String);
    var textp3 = document.createTextNode(p3String);
    var textp4 = document.createTextNode(p4String);

    p1.appendChild(textp1);
    p2.appendChild(textp2);
    p3.appendChild(textp3);
    p4.appendChild(textp4);

    div.appendChild(p1);
    div.appendChild(document.createElement("br"));
    div.appendChild(p2);
    div.appendChild(document.createElement("br"));
    div.appendChild(p3);
    div.appendChild(document.createElement("br"));
    div.appendChild(p4);

    this.document.getElementsByTagName("body")[0].appendChild(div);
};