window.onload = function(){
    var nombre = prompt("Ingrese su nombre:");
    var apellido = prompt("Ingrese su apellido");

    if(nombre == "" || nombre === undefined || apellido == "" || apellido === undefined)
        this.alert("Debe ingresar tanto el nombre como el apellido para que funcione correctamente.");
    else
    {
        nombre = nombre.toLowerCase();
        this.console.log(nombre[0].toUpperCase());
        //nombre[0] = nombre[0].toUpperCase();
        var nombreMayus = nombre[0].toUpperCase() + nombre.slice(1);
        apellido = apellido.toUpperCase();

        this.alert(apellido + ", " + nombreMayus);
    }
}