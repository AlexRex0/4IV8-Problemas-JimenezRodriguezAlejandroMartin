function calCalificacion(){
    var patron = /[0-9]+[.]?[0-9]*/;
    let p1 = document.problema4.par1.value;
    let p2 = document.problema4.par2.value;
    let p3 = document.problema4.par3.value;
    let exam = document.problema4.examen.value;
    let Tfinal = document.problema4.examen.value;
    let aux = 0;
    if(!patron.test(p1) || !patron.test(p2) || !patron.test(p3) || !patron.test(exam) || !patron.test(Tfinal)){
        alert("Algún campo está vacio");
    }else{
        p1 = parseFloat(p1);
        p2 = parseFloat(p2);
        p3 = parseFloat(p3);
        exam = parseFloat(exam);
        Tfinal = parseFloat(Tfinal);
        aux = parseFloat(aux);
        aux = ((((p1+p2+p3) / 3) * 55) / 10 ) + ((exam * 30) / 10) + ((Tfinal * 15) / 10);
        document.problema4.calificacion.value = "% " + aux;
    }
}

function borrar4(){
    document.problema4.par1.value = "";
    document.problema4.par2.value = "";
    document.problema4.par3.value = "";
    document.problema4.examen.value = "";
    document.problema4.trabajoFinal.value = "";
    document.problema4.calificacion.value = "";
}