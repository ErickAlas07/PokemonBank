// Declaración de variables
let cuenta = document.getElementById('cuenta');
let btn1 = document.getElementById('b1');
let btn2 = document.getElementById('b2');
let btn3 = document.getElementById('b3');
let btn4 = document.getElementById('b4');
let btn5 = document.getElementById('b5');
let btn6 = document.getElementById('b6');
let btn7 = document.getElementById('b7');
let btn8 = document.getElementById('b8');
let btn9 = document.getElementById('b9');
let btn0 = document.getElementById('b0');
let clear = document.getElementById('limpiar');
let ok = document.getElementById('entrar');
let errorCuenta = document.getElementById('errorNum')

// Eventos de botones
btn1.onclick = function(e){
    cuenta.textContent = cuenta.textContent + "1";
}

btn2.onclick = function(e){
    cuenta.textContent = cuenta.textContent + "2";
}

btn3.onclick = function(e){
    cuenta.textContent = cuenta.textContent + "3";
}

btn4.onclick = function(e){
    cuenta.textContent = cuenta.textContent + "4";
}

btn5.onclick = function(e){
    cuenta.textContent = cuenta.textContent + "5";
}

btn6.onclick = function(e){
    cuenta.textContent = cuenta.textContent + "6";
}

btn7.onclick = function(e){
    cuenta.textContent = cuenta.textContent + "7";
}

btn8.onclick = function(e){
    cuenta.textContent = cuenta.textContent + "8";
}

btn9.onclick = function(e){
    cuenta.textContent = cuenta.textContent + "9";
}

btn0.onclick = function(e){
    cuenta.textContent = cuenta.textContent + "0";
}

clear.onclick = function(e){
    limpiar();
}

ok.onclick = function (e){
    ir();
}

// Funciones
function ir(){
    const c = document.querySelector('#cuenta').innerHTML;
    const a = "1234";

    if(c==a){
        document.getElementById('errorNum').innerHTML = "PIN Correcto";
        
    }

    else{
        document.getElementById('errorNum').innerHTML = "PIN Incorrecto";
        }

}

//función que se encarga de limpiar 
function limpiar(){
    cuenta.textContent = "";

}
