//EJERCICIO 1

const titulo = document.getElementById('titulo')

//EJERCICIO 2

const tituloPrincipal = 'Frutas'

titulo.innerHTML = tituloPrincipal

//EJERCICIO 3 

const colorHeaderFooter = document.querySelectorAll('.headerFooter')

colorHeaderFooter[0].style.backgroundColor = 'orange'
colorHeaderFooter[1].style.backgroundColor = 'orange'

//EJERCICIO 4

const pFooter = document.querySelector('footer p')

pFooter.textContent += ' Abel Segura Cohort 53'

//EJERCICIO 5

const contenedorId = document.getElementById('contenedor')

//EJERCICIO 6

function crearCard(nombre, foto, descripcion) {
    const cardCreada = `
    <div class="card">
        <img src="${foto}" alt="">
        <div class="card-info">
            <h5 class="card-titulo">${nombre}</h5>
            <p class="card-descripcion">${descripcion}</p>
        </div>
    </div>
    `
    return cardCreada
}

//EJERCICIO 7-8

for (const fruta of frutas) {
    const { nombre, foto, descripcion } = fruta

    const card = crearCard(nombre, foto, descripcion)

    contenedorId.innerHTML += card
}

//EJERCICIO 9 

const listaID = document.getElementById('lista')

document.getElementById('lista').innerHTML = '<h2>Frutas Dulces</h2>'

//EJERCICIO 10

function crearListaFrutasDulces(frutas) {
    let listaDesordenada = document.createElement('ul');

    for (let i = 0; i < 20; i++) {
        if (frutas[i].esDulce) {

            let itemDeLista = document.createElement('li')

            itemDeLista.textContent = frutas[i].nombre

            listaDesordenada.appendChild(itemDeLista)
        }
    }
    return listaDesordenada
}


//EJERCICIO 11

let FrutasDulcesLista = crearListaFrutasDulces(frutas)

document.getElementById('lista').appendChild(FrutasDulcesLista)

