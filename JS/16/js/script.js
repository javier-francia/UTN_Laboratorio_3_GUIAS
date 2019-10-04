window.onload = function(){
    this.$("btnAgregarUL").addEventListener("click", this.btnAgregarUL_Click);
};




function btnAgregarUL_Click()
{
    var input = $("txtInput").value;

    if(input != "" && input !== undefined)
    {
        agregaItemUL(input, "listaUL");
    }
    else
    {
        alert("El texto a ingresar no puede estar vacio.")
    }
}

function agregaItemUL(str, lista)
{
    var listaUL = $(lista);
    var nuevoLI = document.createElement("li");
    var textNode = document.createTextNode(str);
    nuevoLI.appendChild(textNode);
    listaUL.appendChild(nuevoLI);
}


function $(id)
{
    return document.getElementById(id);
}