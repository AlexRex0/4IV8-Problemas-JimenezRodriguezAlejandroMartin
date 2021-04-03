function borrar9(){
    document.problema9.horas.value = "";
    document.problema9.costoHora.value = "";
    document.problema9.respuesta9.value = "";
}

function calHoras(){
    var patron = /[0-9]+[.]?[0-9]*/;
    let horasTotal = document.problema9.horas.value;
    let c = document.problema9.costoHora.value;
    if(!patron.test(horasTotal) || !patron.test(c)){
        alert("Algún campo está vacio");
    }else{
        horasTotal = parseFloat(horasTotal);
        c = parseFloat(c);
        let res = 0;
        let doble = 0;
        let triple = 0;
        res = parseFloat(res);
        doble = parseFloat(doble);
        triple = parseFloat(triple);
        doble = horasTotal - 40;
        if(doble < 0){ 
            doble = 0;
        }
        if(doble > 8){
            doble = 8;
            triple = horasTotal - 40 - 8;
        }
        horasTotal = horasTotal - doble - triple;
        alert(horasTotal);
        alert(doble);
        alert(triple);
        res = (horasTotal * c) + (doble * (c * 2)) + (triple * (c * 3));
        document.problema9.respuesta9.value ="$ " + res;
    }
}