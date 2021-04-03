function borrar8(){
    document.problema8.num1.value = "";
    document.problema8.num2.value = "";
    document.problema8.num3.value = "";
    document.problema8.respuesta8.value = "";
}

function calMayor(){
    var patron = /[0-9]+[.]?[0-9]*/;
    let a = document.problema8.num1.value;
    let b = document.problema8.num2.value;
    let c = document.problema8.num3.value;
    if(!patron.test(a) || !patron.test(b) || !patron.test(c)){
        alert("Algún campo está vacio");
    }else{
        a = parseFloat(a);
        b = parseFloat(b);
        c = parseFloat(c);
        let res = 0;
        res = parseFloat(res);
        res = Math.max(a,b,c);
        document.problema8.respuesta8.value = res;
    }
}