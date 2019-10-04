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
    var flagOk = true;

    if(apellido == "" || apellido === undefined)
    {
        $("txtApellidoError").hidden = false;
        flagOk = false;
    }
    else
        $("txtApellidoError").hidden = true;
        

    if(nombre == "" || nombre === undefined)
    {
        $("txtNombreError").hidden = false;
        flagOk = false;
    }
    else
        $("txtNombreError").hidden = true;

    if(isNaN(dni) || dni === undefined)
    {
        $("txtDNIError").hidden = false;
        flagOk = false;
    }
    else
        $("txtDNIError").hidden = true;

    if(sexo == "" || sexo === undefined || sexo.toLowerCase() != 'm' && sexo.toLowerCase() != 'f')
    {
        $("txtSexoError").hidden = false;
        flagOk = false;
    }
    else
        $("txtSexoError").hidden = true;

    if(flagOk)
    {
        alert("Todos los campos se validaron correctamente.")
    }
    
}

function $(id)
{
    return document.getElementById(id);
}