function validarC(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function interes(){

    var patron = /[0-9]+[.]?[0-9]*/
    let aux = document.problema1.cap.value;
    if(aux == " " || !(patron.test(aux))){
        alert("ingrese un valor en Capital");
    }else{
        let res = parseFloat(aux);
        res = res * 1.02;
        document.problema1.resCap.value = "$ " + res;
    }

}

function borrar(){
    document.problema1.cap.value = "";
    document.problema1.resCap.value = "";
}