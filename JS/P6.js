function borrar6(){
    document.problema6.nacimiento.value = "";
    document.problema6.actual.value = "";
    document.problema6.edad.value = "";
}

function calEdad(){
    var patron = /[0-9]+[.]?[0-9]*/;
    let ini = document.problema6.nacimiento.value;
    let fin = document.problema6.actual.value;
    if(ini > fin || !patron.test(ini) || !patron.test(fin)){
        alert("Algún campo está vacio o las fechas son invalidas");
    }else{
        ini = parseInt(ini);
        fin  = parseInt(fin);
        let res = fin - ini;
        document.problema6.edad.value = "Esta es su edad: " +  res;
    }
}