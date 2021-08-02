// URL Api

const API = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"

// Obtener resultados de la API, parametro api url que obtiene por la ejecución de la funcion(valor)
// metodo fetch ->metodo get, fetch -> promesa de que traerá algo o mostrará error
// si es algo correcto then si es error catch

//json la información que llego del fetch
const getData = (API) => {

    return fetch(API)
        .then((response) => response.json())
        .then((json) => {
            llenarDatos(json.results), paginacion(json), console.log(json.results, json);
        })
        .catch((error) => {
            console.log("Error", error);
        });
};

//Dibujar cada personaje
//cb funcion que no sbemos que va a recibir palabra especial para recibir respuesta de una función

// recibe json.results
const llenarDatos = (data) => {
    let html = "";
    data.forEach((pj) => {
        html += '<div class="col mt-5">';
        html += '<div class="card" style="width: 18rem;">';
        html += '<div class="card-body">';
        html += `<h5 class="card-title">${pj.name}</h5>`;
        html += "</div>";
        html += "</div>";
        html += "</div>";
    });
    document.getElementById("datosPersonajes").innerHTML = html;
};

// paginacion

const paginacion = (data) => {
    let prevDisabled = "";
    let nextDisabled = "";

    data.previous == null ? prevDisabled = "disabled" : prevDisabled = "";
    data.next == null ? nextDisabled = "disabled" : nextDisabled = "";
/*
    if (data.prev == null) {
        prevDisabled = "disabled";
    } else {
        prevDisabled = "";
    }
*/
    let html = "";

    html += `<li class="page-item ${prevDisabled}"><a class="page-link" onclick="getData('${data.previous}')" >Previus</a></li>`;
    html += `<li class="page-item ${nextDisabled}"><a class="page-link" onclick="getData('${data.next}')" >Next</a></li>`;

    document.getElementById("paginacion").innerHTML = html;

};

// ejectuta la funcion

getData(API);



