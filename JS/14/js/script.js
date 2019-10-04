window.onload = function(){
    this.$("btnConfirmar").addEventListener("click", btnConfirmar_Click)
}



function btnConfirmar_Click()
{
    var errorMsg = "";
    var apellido = $("txtApellido").value;
    var nombre = $("txtNombre").value;
    var dni = parseInt($("txtDNI").value);
    var sexo = $("txtSexo").value;

    if(apellido == "" || apellido === undefined)
        errorMsg += "El campo apellido no es correcto.\n"

    if(nombre == "" || nombre === undefined)
        errorMsg += "El campo nombre no es correcto.\n"

    if(isNaN(dni) || dni === undefined)
        errorMsg += "El campo DNI no es correcto.\n"

    if(sexo == "" || sexo === undefined || sexo.toLowerCase() != 'm' && sexo.toLowerCase() != 'f')
        errorMsg += "El campo sexo no es correcto."

    if(errorMsg == "")
        errorMsg = "Los campos se validaron correctamente."
    
    alert(errorMsg);
}

function $(id)
{
    return document.getElementById(id);
}