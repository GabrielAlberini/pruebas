class Calculadora {
    constructor(){
    }
    sumar(num1, num2){
        num1 = prompt("¿Cuál es el primer numero que desea sumar?")
        num2 = prompt("¿Cuál es el segundo numero que desea sumar?")
        let resultado = parseInt(num1) + parseInt(num2);
        return document.write("El resultado de la suma es: " + resultado);
    } 
    restar(num1, num2){
        num1 = prompt("¿Cuál es el primer numero que desea restar?")
        num2 = prompt("¿Cuál es el segundo numero que desea restar?")
        let resultado = parseInt(num1) - parseInt(num2)
        return document.write("El resultado de la suma es: " + resultado);
    } 
    multiplicar(num1, num2){
        num1 = prompt("¿Cuál es el primer numero que desea multiplicar?")
        num2 = prompt("¿Cuál es el segundo numero que desea multiplicar?")
        let resultado = parseInt(num1) * parseInt(num2)
        return document.write("El resultado de la suma es: " + resultado);
    } 
    dividir(num1, num2){
        num1 = prompt("¿Cuál es el primer numero que desea dividir?")
        num2 = prompt("¿Cuál es el segundo numero que desea dividir?")
        let resultado = parseInt(num1) / parseInt(num2)
        return document.write("El resultado de la suma es: " + resultado);
    } 
}

const operacion = new Calculadora();

alert("¿Qué operación desea realizar?")
var tipoDeOperacion = prompt("1: SUMA, 2: RESTA, 3: MULTIPLICACION, 4: DIVISION")
console.log(tipoDeOperacion)


if (tipoDeOperacion == 1){
    operacion.sumar();
} else if (tipoDeOperacion == 2) {
    operacion.restar();
} else if (tipoDeOperacion == 3) {
    operacion.multiplicar();
} else if (tipoDeOperacion == 4) {
    operacion.dividir();
} else {
    document.write("No está accediendo a una operacion posible.")
}



// switch (tipoDeOperacion) {
//     case 1:
//         operacion.sumar()
//     break
//     case 2:
//         operacion.restar()
//     break
//     case 3:
//         operacion.multiplicar()
//     break
//     case 4:
//         operacion.dividir()
//     break
//     default:
//         document.write("Fijate bien cabezón que la pifiaste en algo.")
// }

// var tipoDeOperacion = {
//     1: operacion.sumar(),
//     2: operacion.restar(),
//     3: operacion.multiplicar(),
//     4: operacion.dividir()
// }

