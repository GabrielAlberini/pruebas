
console.log("Comienzo del código, buena suerte :)")

// uso del objeto WeakMap

const _private = new WeakMap ()

let jugadores = [1,2,3,4,5,6,7,8,9,10]

class Juegos {
    constructor(nombre, tipoDeJuego, peso, cantidadDeJugadores){
        
        const properties = {
            _nombre: nombre,
            _tipoDeJuego: tipoDeJuego,
            _peso: peso,
            _cantidadDeJugadores: cantidadDeJugadores
        }

        _private.set(this, {properties});
    } 

    //Metodos Getters and Setters. Getter toma/obtiene el valor actual. Y Setter permite modificarlo/cambiar/colocar.

    //Toma el titulo de un libro
    //RECETA: Para que este metodo funciones haremos: Retornamos por medio del objeto WeakMap es decir el objeto _private utilizando su método get, traenos para este objeto (this), en las propiedades, su valor _nombre.
    get nombre() {
        return _private.get(this).properties["_nombre"];
    }
    
    //Modifica el titulo de un libro
    //El procedimiento es el mismo, solo que al valor que recibimos lo asignamos un nuevo nombre al cúal tomaremos como un parametro/argumento.
    set nombre (newTitle) {
        return _private.get(this).properties["_nombre"] = newTitle;
    }
}

const juegoUno = new Juegos("League Of Legends", "MOBA", "3GB", jugadores[9])

const juegoDos = new Juegos("Solitario", "De mesa", "200MB", jugadores[0])

//Muestro al metodo. Se ejecuta el Get automaticamente cuando nombre no se ve modificado. A continuación modificaremos el nombre.
console.log(juegoDos.nombre);

juegoDos.nombre = "Buscaminas"

console.log(juegoDos.nombre)

console.log("A conticuación, incorporaremos otra clase llamada Mamiferos.")    

class Mamiferos {
    constructor(nombre, raza, edad, estatura, habitad) {
        const properties = {
            nombre: nombre,
            raza: raza,
            edad: edad,
            estatura: estatura,
            habitad: habitad
        }
    }
}

//Para que la clase aves herede las mismas propiedades que la clase Mamiferos, utilizamos la palabra clave Extends.

class Aves extends Mamiferos {
    constructor(nombre, raza, edad, estatura, colorDePlumas) {
        super(nombre, raza, edad, estatura)
        //Para definir una propiedad dentro del constructor de debe usar la palabra reservada this: "a este objeto darle la propiedad llamada:"
        this._colorDePlumas = colorDePlumas;
    }
}

const ave1 = new Aves ("Gorrión", "Passer domesticus", "3 años", "15cm", "Marrón")

console.log(ave1._colorDePlumas)
