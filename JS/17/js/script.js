window.onload = function(){
    this.$("btnAgregar").addEventListener("click", btnAgregar_Click)
};



function btnAgregar_Click()
{
    agregaSelectOptions($("txtInput"));
}



function agregaSelectOptions(inputTextArea)
{
    var lineas = inputTextArea.value.split('\n');
    var select = document.createElement("select");

    lineas.forEach(function(item){
        var option = document.createElement("option");
        var texto = document.createTextNode(item);
        option.appendChild(texto);
        select.appendChild(option);
    });

    var div = $("theDIV");
    div.innerHTML = "";
    div.appendChild(select);
}


function $(id)
{
    return document.getElementById(id);
}