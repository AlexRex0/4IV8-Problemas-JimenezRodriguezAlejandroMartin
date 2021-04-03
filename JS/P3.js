function calCompra(){
    var patron = /[0-9]+[.]?[0-9]*/;
    let aux = document.problema3.compra.value;
    if(!patron.test(aux)){
        alert("Algún campo está vacio");
    }else{
        aux = parseFloat(aux);
        aux = aux*0.85;
        document.problema3.compraFinal.value = "$ " + aux;
    }
}

function borrar3(){
    document.problema3.compra.value = "";
    document.problema3.compraFinal.value = "";
}