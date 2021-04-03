function calSueldo(){
    var patron = /[0-9]+[.]?[0-9]*/;
    let v1 = document.problema2.V1.value;
    let v2 = document.problema2.V2.value;
    let v3 = document.problema2.V3.value;
    let sueldofinal = document.problema2.sueldo.value;
    if(!(patron.test(v1)) || !(patron.test(v2)) || !(patron.test(v3)) || !(patron.test(sueldofinal))){
        alert("Algún campo está vacio");
    }else{
        v1 = parseFloat(v1);
        v2 = parseFloat(v2);
        v3 = parseFloat(v3);
        sueldofinal = parseFloat(sueldofinal);
        sueldofinal+= v1*0.1 + v2*.1 + v3*.1;
        document.problema2.sueldoFinal.value = "$ " + sueldofinal;
    }
}

function borrar2(){
    document.problema2.V1.value = "";
    document.problema2.V2.value = "";
    document.problema2.V3.value = "";
    document.problema2.sueldo.value = "";
    document.problema2.sueldoFinal.value = "";
}