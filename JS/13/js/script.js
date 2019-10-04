window.onload = function(){
    $("continuar").addEventListener("click", continuar);
};


function continuar()
{
    $("p1").classList.remove("visible");
    $("p1").classList.add("oculto");
    $("p2").classList.remove("oculto");
    $("p2").classList.add("visible");
}

function $(id)
{
    return document.getElementById(id);
}