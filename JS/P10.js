function borrar10(){
    document.problema10.salarioM.value = "";
    document.problema10.antiguedad.value = "";
    document.problema10.respuesta10.value = "";
}

function calUtilidad(){
    var patron = /[0-9]+[.]?[0-9]*/;
    let salM = document.problema10.salarioM.value;
    let ant = document.problema10.antiguedad.value;
    if(!patron.test(salM) || !patron.test(ant)){
        alert("Algún campo está vacio");
    }else{
        salM = parseFloat(salM);
        ant = parseFloat(ant);
        let res = 0;
        if(ant < 1){
            res = salM * .05;
        }else{
            if(ant <= 2){
                res = salM * .07;
            }else{
                if(ant <= 5){
                    res = salM * .10;
                }else{
                    if(ant <= 10){
                        res = salM * .15;
                    }else{
                        res = salM * .20;
                    }
                }
            }
        }
        document.problema10.respuesta10.value = "$ " + res;
    }
}