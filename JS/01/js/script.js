/*window.addEventListener("load", cargaOnLoad);

function cargaOnLoad()
{
    alert("Hola mundo!");
    alert("Puedo mostrar comillas 'simples'");
    alert('Y comillas "dobles"');
}*/

window.onload = function(){
    var mensaje = "Hola mundo!\nPuedo mostrar comillas 'simples'\n" + 'Y comillas "dobles"';
    alert(mensaje);
}