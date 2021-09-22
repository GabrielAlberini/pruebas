// const persona = [ 
//     nombre = "Carlos",
//     edad = 43 + " años",
//     sexo = "H",
//     gustos = [
//         helado = "Limón",
//         musica = "Rock"
//     ]
// ]


const persona = {
    nombre: "Carlos",
    edad: 43 + " años",
    sexo: "H",
    gustos: { 
        helado: "Limón",
        musica: "Rock"  
    },
    isTeacher: false,
    mascotas: [mascotaPerro = "boby", mascotaGato = "Tom"]
}

// document.write(persona.mascotas[1])

// const verEdad = "edad";

// console.log(persona[verEdad]);

const sumar = (num1, num2) => {
    num1 = prompt("Numero 1: ");
    num2 = prompt("Numero 2: ");
    let resultado = parseInt(num1) + parseInt(num2); 
    document.write("El resultado es: " + resultado)
}

sumar();