const obtenerInformacion = (materia) => {
    materias = {
        fisica:["Hernandez","Juancito", "Nicolas", "Analia", "Cofla", "Luisina", "Maria"],  
        programacion:["Limoneti","Juancito", "Pedrito", "Analia", "Luisina", "Maria"],
        matematetica:["Juarez","Juancito", "Nicolas", "Cofla", "Luisina", "Maria"],
        literatura:["Estebanez","Nicolas", "Analia", "Cofla", "Luisina", "Maria"],
        astrologia:["Alberini","Juancito", "Nicolas", "Pedrito", "Analia", "Cofla", "Luisina", "Maria"],
        ingles:["Rodriguez","Juancito", "Nicolas"]
    }
    if (materias[materia] !== undefined) {
        return [materias[materia], materia]
    } else {
        return false;
    }
}

let preguntaMateria = prompt("¿Qué materia desea conocer?")
let informacion = obtenerInformacion(preguntaMateria);

if (informacion !== false) {
let profesor = obtenerInformacion(preguntaMateria)[0][0];
let obtenerAlumnos = obtenerInformacion(preguntaMateria)[0]
document.write(`El profesor de la materia es: ${profesor}. <br>
Los alumnos que participan de sus clases son: ${obtenerAlumnos} <br> <br>`)
    if (obtenerAlumnos.includes("Cofla")){
        document.write("SI, Cofla, por ahora viene a " + preguntaMateria)
    } else {
        document.write("NO, Cofla dejo " + preguntaMateria + " hace rato.")
    }
} else {
    document.write("Fijate que algo mal escribiste MAESTRO.")
}

