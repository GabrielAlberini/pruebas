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
    potencia(num1, num2){
        num1 = prompt("¿De qué numero desea saber la potencia?")
        num2 = prompt("¿A qué potencia desea elevarlo?")
        if (num2 == 2 || num2 == "cuadrado" || num2 == "al cuadrado" || num2 == "Cuadrado" || num2 == "Al cuadrado") {
            let resultadoPotencia = Math.pow(num1, 2);
            return document.write("El resultado de la potencia al cuadradro es: " + resultadoPotencia);
        } else if (num2 == 3 || num2 == "cubo" || num2 == "al cubo" || num2 == "Cubo" || num2 == "Al cubo") {
            let resultadoPotenciaCubo = Math.pow(num1, 3);
            return document.write("El resultado de la potencia al cubo es: " + resultadoPotenciaCubo);
        } else {
            let resultadoPotenciaGeneral = Math.pow(num1, num2);
            return document.write("El resultado de tu potencia es: " + resultadoPotenciaGeneral);
        }
    }
    raizCuadrada(num1){
        num1 = prompt("¿De qué que numero desea saber la raiz cuadrada?");
        let resultadoRaiz = Math.sqrt(num1);
        return document.write("El resultado de la raiz cuadrada es: " + resultadoRaiz.toFixed(4));
    }
    raizCubica(num1){
        num1 = prompt("¿De qué numero desea saber la raiz cubica?");
        let resultadoRaizCubica = Math.pow(num1, 1 / 3)
        return document.write("El resultado de la raiz cubica es: " + resultadoRaizCubica.toFixed(4));
    }
}

const operacion = new Calculadora();

alert("¿Qué operación desea realizar?")
var tipoDeOperacion = prompt("1: SUMA 2: RESTA, 3: MULTIPLICACION, 4: DIVISION, 5: POTENCIA, 6: RAIZ CUADRADA, 7: RAIZ CUBICA")
console.log(tipoDeOperacion)

switch (tipoDeOperacion) {
    case '1':
        operacion.sumar()
    break
    case '2':
        operacion.restar()
    break
    case '3':
        operacion.multiplicar()
    break
    case '4':
        operacion.dividir()
    break
    case '5':
        operacion.potencia()
    break
    case '6':
        operacion.raizCuadrada()
    break
    case '7':
        operacion.raizCubica()
    break
    default:
        document.write("Fijate bien cabezón que la pifiaste en algo.")
}


// if (tipoDeOperacion == 1){
//     operacion.sumar();
// } else if (tipoDeOperacion == 2) {
//     operacion.restar();
// } else if (tipoDeOperacion == 3) {
//     operacion.multiplicar();
// } else if (tipoDeOperacion == 4) {
//     operacion.dividir();
// } else {
//     document.write("No está accediendo a una operacion posible.")
// }

// var tipoDeOperacion = {
//     1: operacion.sumar(),
//     2: operacion.restar(),
//     3: operacion.multiplicar(),
//     4: operacion.dividir()
// }

