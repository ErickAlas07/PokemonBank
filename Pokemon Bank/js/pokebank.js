// Declaración de variables
let cuenta = document.getElementById('cuenta');
let passwd = document.getElementById('pinCuenta');
let depositoMonto = document.getElementById('montoDeposito');
let retiroMonto = document.getElementById('montoRetiro');
let saldoNuevo = 0;
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

//Ocultar ventanas

document.getElementById('dos').style.display = 'none';
document.getElementById('tres').style.display = 'none';
document.getElementById('tresuno').style.display = 'none';
document.getElementById('tresdos').style.display = 'none';
//document.getElementById('tres-tres').style.display = 'none';
document.getElementById('tres-cuatro').style.display = 'none';
document.getElementById('capa-energia').style.display = 'none';
document.getElementById('capa-agua').style.display = 'none';
document.getElementById('capa-internet').style.display = 'none';

document.getElementById('cinco').style.display = 'none';
document.getElementById('exit').style.display = 'none';


//*************** Almacenamiento de datos en LocalStrogae ******************//
localStorage.setItem("nombre","Ash Ketchum");
localStorage.setItem("pin","1234");
localStorage.setItem("cuenta","0987654321");
localStorage.setItem("saldoInicial","500.00");
localStorage.setItem("montoadd", "0");

let nameUser = localStorage.getItem("nombre");
let numCuenta = localStorage.getItem("cuenta");
let pin = localStorage.getItem("pin");
let montoInicial = localStorage.getItem("saldoInicial");
let montoAdd = localStorage.getItem("montoadd");

//************************** Funciones ***********************//
function ir(){
 
    let c = document.querySelector('#cuenta').innerHTML; 
  
    if(c == numCuenta){
        
        datosCorrectos();

        document.getElementById('uno').style.display = 'none';
        document.getElementById('dos').style.display = 'block';
        document.getElementById('saludo').textContent = "Bienvenido " + nameUser;
        // Llamar a la función para limpiar caja
        limpiar();
    }
        
    else{ 
        errorData();
        limpiar();
        }
  
}

//Función parea datos correctos e incorrectos 
function datosCorrectos(){
    
    passwd.textContent = "";
    swal({
        title: "¡Bien hecho!",
        text: "Número de cuenta correcto",
        icon: "success",
        button: "Adelante",
      });
}

function errorData(){
    swal({
        title: "¡Error!",
        text: "Número de cuenta incorrecto",
        icon: "error",
        button: "Intentar de nuevo",
      });

}

// Función que verifica el PIN de usuario 
function pinLogin(){
        
        let d = document.querySelector('#pinCuenta').innerHTML;

        //Verificación de PIN
        if(d == pin){

            datosCorrectos();
            document.getElementById('dos').style.display = 'none';
            document.getElementById('tres').style.display = 'block';

            document.querySelector('.nombreUser').textContent = " " + nameUser;
            document.querySelector('.cuentaUser').textContent = "Cuenta:  " + numCuenta;
            limpiar();
           }

        else {
            errorData();
            limpiar();
        }

}

//Función para deposito de efectivo
function depositar(){
    
    document.getElementById('tres').style.display = 'none';
    document.getElementById('tresuno').style.display = 'block';

    
    document.getElementById('nombreUser').textContent = " " + nameUser;
    document.getElementById('cuentaUser').textContent = "Cuenta:  " + numCuenta;
    document.getElementById('labelInicial').textContent = "Saldo inicial:  $  " + montoInicial;


}

//función que almacena la lógica de transacción de deposito de efectivo
function ingresarMonto(){
    let depositoNuevo = document.getElementById('montoDeposito').innerHTML;

    if(depositoNuevo == ""){
        swal({
            title: "¡Error!",
            text: "No ha ingresado cantidad.",
            icon: "error",
            button: "Intentar de nuevo",
          });
    }
    else{
        swal({
            title: "¡Hecho!",
            text: "Cantidad ingresada",
            icon: "success",
            button: "OK",
          });

          limpiar();
    }
    
    
    saldoNuevo = parseInt(montoInicial) + parseInt(depositoNuevo);
    localStorage.setItem("saldoInicial", saldoNuevo);
    saldoAdd = depositoNuevo;
    localStorage.setItem("montoadd", depositoNuevo);

    document.getElementById('labelActual').textContent = "Saldo final:  $" + saldoNuevo;
    document.getElementById('labelInicial').textContent = "Saldo inicial:  $  " + montoInicial;
    
}

//Función para retiro de efectivo 

function retirar(){


    document.getElementById('tres').style.display = 'none';
    document.getElementById('tresdos').style.display = 'block';

    document.querySelector('nombreUser2').textContent = " " + nameUser;
    document.querySelector('cuentaUser2').textContent = "Cuenta:  " + numCuenta;
    document.getElementById('labelInicial2').textContent = "Saldo inicial:  $  " + montoInicial;
    

    limpiar();

}

//Función que se encarga del porcesamiento lógico de segunda transacción, retiro de efectivo 
function retirarMonto(){
  
    let retiroNuevo = document.getElementById('montoRetiro').innerHTML;

    if(retiroNuevo == "" || retiroNuevo < 0){
        swal({
            title: "¡Error!",
            text: "No ha ingresado cantidad válida.",
            icon: "error",
            button: "Intentar de nuevo"
          });
    }
   

    else if(retiroNuevo > montoInicial){
        swal({
            title: "¡Error!",
            text: "Excede de su saldo disponible.",
            icon: "error",
            button: "Intentar de nuevo"
          });

          limpiar();
    }  
     
    else{
        swal({
            title: "¡Hecho!",
            text: "Cantidad ingresada",
            icon: "success",
            button: "OK"
          });

          limpiar();
          saldoNuevo = parseInt(montoInicial) - parseInt(retiroNuevo);
          document.getElementById('labelActual2').textContent = "Saldo final:  $" + saldoNuevo;
      
          saldoAdd = retiroNuevo;
          localStorage.setItem("montoadd", retiroNuevo);
    }
}

// Función que muestra la ventana de pagar servicios
function services(){
    document.getElementById('tres').style.display = 'none';
    document.getElementById('tres-cuatro').style.display = 'block';
}

// Función para mostrar ventana de energía
function mostrarEnergia(){
    document.getElementById('tres-cuatro').style.display = 'none';
    document.getElementById('capa-energia').style.display = 'block';
}

//Función para pagar energía
function pagoEnergia(){
    let pago1 = document.getElementById('payEnergia').innerHTML;

    if(pago1 == "" || pago1 < 0){
        swal({
            title: "¡Error!",
            text: "No ha ingresado cantidad válida.",
            icon: "error",
            button: "Intentar de nuevo"
          });
    }

    else if(pago1 > montoInicial){
        swal({
            title: "¡Error!",
            text: "Excede de su saldo disponible.",
            icon: "error",
            button: "Intentar de nuevo"
          });

          limpiar();
    }
    
    else{

        swal("¿Esta seguro que desea pagar $" + pago1 + " del servicio de Energía", {
            icon: "warning",
            buttons: {
              cancel: "Cancelar",
              catch: {
                text: "Confirmar",
                value: "catch",
              },
            },
          })
          .then((value) => {
            switch (value) {
           
              case "catch":
                swal("¡Pago realizado de forma exitosa!",{
                    icon: "success",
                })
                break;
           
              default:
                swal("¡Intente de nuevo!",{
                    icon: "error",
                })
            }
          });
       
        limpiar();
        saldoNuevo = parseInt(montoInicial) - parseInt(pago1);
        document.getElementById('payEnergia').textContent = "Saldo final:  $" + saldoNuevo;
      
        saldoAdd = pago1;
        localStorage.setItem("montoadd", pago1);
    }
}

// Función para mostrar ventana de agua
function mostrarAgua(){
    document.getElementById('tres-cuatro').style.display = 'none';
    document.getElementById('capa-agua').style.display = 'block';
}


//Función para pagar agua
function pagoAgua(){
    let pago2 = document.getElementById('payAgua').innerHTML;

    if(pago2 == "" || pago2 < 0){
        swal({
            title: "¡Error!",
            text: "No ha ingresado cantidad válida.",
            icon: "error",
            button: "Intentar de nuevo"
          });
    }

    else if(pago2 > montoInicial){
        swal({
            title: "¡Error!",
            text: "Excede de su saldo disponible.",
            icon: "error",
            button: "Intentar de nuevo"
          });

          limpiar();
    }
    
    else{

        swal("¿Esta seguro que desea pagar $" + pago2 + " del servicio de Agua", {
            icon: "warning",
            buttons: {
              cancel: "Cancelar",
              catch: {
                text: "Confirmar",
                value: "catch",
              },
            },
          })
          .then((value) => {
            switch (value) {
           
              case "catch":
                swal("¡Pago realizado de forma exitosa!",{
                    icon: "success",
                })
                
                
                break;
           
              default:
                swal("¡Intente de nuevo!",{
                    icon: "error",
                })
            }
          });
       
        limpiar();
        saldoNuevo = parseInt(montoInicial) - parseInt(pago2);
        document.getElementById('payAgua').textContent = "Saldo final:  $" + saldoNuevo;
      
        saldoAdd = pago2;
        localStorage.setItem("montoadd", pago2);
    }
}

// Función para mostrar ventana de internet
function mostrarInternet(){
    document.getElementById('tres-cuatro').style.display = 'none';
    document.getElementById('capa-agua').style.display = 'block';
}


//Función para pagar agua
function pagoInternet(){
    let pago3 = document.getElementById('payInter').innerHTML;

    if(pago3 == "" || pago3 < 0){
        swal({
            title: "¡Error!",
            text: "No ha ingresado cantidad válida.",
            icon: "error",
            button: "Intentar de nuevo"
          });
    }

    else if(pago3 > montoInicial){
        swal({
            title: "¡Error!",
            text: "Excede de su saldo disponible.",
            icon: "error",
            button: "Intentar de nuevo"
          });

          limpiar();
    }
    
    else{

        swal("¿Esta seguro que desea pagar $" + pago3 + " del servicio de Internet", {
            icon: "warning",
            buttons: {
              cancel: "Cancelar",
              catch: {
                text: "Confirmar",
                value: "catch",
              },
            },
          })
          .then((value) => {
            switch (value) {
           
              case "catch":
                swal("¡Pago realizado de forma exitosa!",{
                    icon: "success",
                })
                
                limpiar();
                saldoNuevo = parseInt(montoInicial) - parseInt(pago3);
                // document.getElementById('payInternet').textContent = "Saldo final:  $" + saldoNuevo;
              
                saldoAdd = pago3;
                localStorage.setItem("montoadd", pago3);
                
                break;
           
              default:
                swal("¡Intente de nuevo!",{
                    icon: "error",
                })

                saldoNuevo = parseInt(montoInicial);
                limpiar();
            }
          });
       
      
    }
}

//Función para mostrar historial
function mostrarHistorial(){
    document.getElementById('tres').style.display = 'none';
    document.getElementById('cinco').style.display = 'block';
}



// Función para imprimir en PDF las transacciones
function printPDF(){

    //codigo jsPDF
    let doc = new jsPDF();

    //Agregar datos
    doc.addFont('Quicksand', 'normal');
    doc.setFont('Quicksand');
    doc.setTextColor(51,98,173);
    doc.text("Cajero Pokemón Bank", 10,30); 
    doc.text("Comprobante", 150, 30);
    doc.setTextColor(0,0,0);
    doc.setFontSize(15);
    doc.text(`Nombre usuario: ${nameUser}`, 10,40);
    doc.text(`N° cuenta: ${numCuenta}`, 135,40);
    doc.text("Transacción XXXX0000", 10,50);
    
    doc.text(`Monto: $${saldoAdd}`, 10, 60);
    doc.text(`Saldo disponible: $${saldoNuevo}`, 10, 70);
  
    doc.output('save' ,'Comprobante de transacción.pdf');
    
    document.getElementById('exit').style.display = 'block';
    document.getElementById('tresuno').style.display = 'none';
   
    conteo();
   
    
}
 
// Función que tiene un intervalo de tiempo para transisión de una ventana a otra
const conteo = function (){
    setTimeout(function(){
        window.location.reload();

    }, 4000)
};


/********** CÓDIGO PARA GRÁFICA ************/
var ctx = document.getElementById('myGrafico');
var myGrafico = new Chart(ctx,{
    type: "bar",
    data: {
        labels: ['Deposito', 'Retiro', 'Pago de luz', 'Pago de Internet', 'Pago de Agua'],
        datasets: [{
            label: 'Gastos',
            data: [5,10,5,9,7],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes:[{
                ticks:{ 
                    beginAtZero: true
                }
            }]
        }
    }
});

//Función para regresar al menú
function retroceder(){
    document.getElementById('tres').style.display = 'block';
    document.getElementById('tresuno').style.display = 'none';
    document.getElementById('tresdos').style.display = 'none';
    document.getElementById('tres-cuatro').style.display = 'none';
    document.getElementById('capa-energia').style.display = 'none';
    document.getElementById('capa-agua').style.display = 'none';
    document.getElementById('capa-internet').style.display = 'none';
    document.getElementById('cinco').style.display = 'none';
    
}

//función que se encarga de limpiar la caja de texto (span)
function limpiar(){
    cuenta.textContent = "";
    passwd.textContent = "";
    depositoMonto.textContent = "";
    retiroMonto.textContent = ""; 
    payEnergia.textContent = "";
}

// Función para salir del banco
function salir(){
    document.getElementById('exit').style.display = 'block';
    document.getElementById('uno').style.display = 'none';
    document.getElementById('dos').style.display = 'none';
    document.getElementById('tres').style.display = 'none';
    document.getElementById('tresuno').style.display = 'none';
    document.getElementById('tresdos').style.display = 'none';
    document.getElementById('tres-cuatro').style.display = 'none';
    
    document.getElementById('cinco').style.display = 'none';
 
    conteo();
}