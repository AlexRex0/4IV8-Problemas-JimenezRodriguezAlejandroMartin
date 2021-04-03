function borrar7(){
    document.problema7.numero1.value = "";
    document.problema7.numero2.value = "";
    document.problema7.respuesta7.value = "";
}

function calNumeros(){
    var patron = /[0-9]+[.]?[0-9]*/;
    let a = document.problema7.numero1.value;
    let b = document.problema7.numero2.value;
    if(!patron.test(a) || !patron.test(b)){
        alert("Algún campo está vacio");
    }else{
        a = parseFloat(a);
        b = parseFloat(b);
        let res = 0;
        res = parseFloat(res);
        if(a == b){
            res = a * b;
        }else{
            if(a > b){
                res = a - b;
            }else{
                res = a + b;
            }
        }
        document.problema7.respuesta7.value = res;
    }
}