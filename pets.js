const contenedor = document.querySelector(".contenedor");
let documentFragment = document.createDocumentFragment()

function createPets (puesto, dni, precio) {
    img = '<img src="pets.png">';
    puesto = `<h2>El puesto de tu mascota es: <strong style="color: #A32D28">${puesto}</strong></h2>`;
    dni = `<h3>El documento del perrito es: <strong style="color: #9E8959">${dni}</strong></h3>`;
    precio = `<p>El precio del perrito es de: <strong style="color: #7E0AA1">$${precio}</strong></p>`;
    return [img, puesto, dni, precio];    
}

const changeHidden = (number) => {
    document.querySelector(".key-data").value = number;
}

for (let i = 1; i <= 15; i++) {
    //Creacion de las propiedades de la función createPets para que en cada iteración se complete con su respectivo dato.
    let creacionDni = Math.round(Math.random()*10000000);
    let creacionPrecio = Math.round((Math.random() * (3000+1 -500)) +500);
    //Implementación de las variables en funcion y a su vez, guardar esto ¡en cada una de las pet!
    let pet = createPets(i, creacionDni, creacionPrecio);
    //Una vez que ya tengo todas las propiedades de la función para cada mascota generadas, tengo que generar los div.
    let div = document.createElement("DIV");
    div.addEventListener("click", () => {changeHidden(creacionDni)});
    div.tabIndex = i;
    div.classList.add(`item-${i}`,"flex-item");
    div.innerHTML = pet[0] +  pet[1] +  pet[2] + pet[3];
    documentFragment.appendChild(div)
}

contenedor.appendChild(documentFragment);

