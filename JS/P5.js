function calPorcentaje(){
    var patron = /[0-9]+[.]?[0-9]*/;
    let cantidadH = document.problema5.hombres.value;
    let cantidadM = document.problema5.mujeres.value;
    if(!patron.test(cantidadH) || !patron.test(cantidadM)){
        alert("Algún campo está vacio");
    }else{
        cantidadH = parseFloat(cantidadH);
        cantidadM = parseFloat(cantidadM);
        let suma = 0;
        suma = cantidadH + cantidadM;
        let porH = (cantidadH * 100) / suma;
        let porM = (cantidadM * 100) / suma;
        document.problema5.Phombres.value = "% " + porH;
        document.problema5.Pmujeres.value = "% " + porM;
    }
}

function borrar5(){
    document.problema5.hombres.value = "";
    document.problema5.Phombres.value = "";
    document.problema5.mujeres.value = "";
    document.problema5.Pmujeres.value = "";
}