window.onload = function(){
    this.setBackgroundColor("txtPrueba", "yellow");
};


function $(id)
{
    return document.getElementById(id);
}


function setBackgroundColor(id, color)
{
    $(id).setAttribute("style", "background-color: " + color);
}