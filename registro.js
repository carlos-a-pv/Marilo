
let registros = [];

function obtenerUsername(arreglo){

    arreglo = [];
    for (const username of registros) {
        if (username.indexOf() >= 0) {
            arreglo.push(username);
        }
    }    
    console.log(arreglo);
    return arreglo;
}


function filtrarCorreo(arreglo){

    arreglo = [];
    for (const correo of registros) {
        if (correo.indexOf("hotmail.com") >= 0) {
            arreglo.push(correo);
        }
    }
    console.log(arreglo);
    return arreglo;
}



function agregarRegistro(){

    /*let username = document.getElementById('username').value;
    registros.push(username);*/
    let correo = document.getElementById('correo', 'username').value;
    registros.push(correo);

}

module.exports.registros = registros;
module.exports.filtrarCorreo = filtrarCorreo;
module.exports.obtenerUsername = obtenerUsername;
module.exports.agregarRegistro = agregarRegistro;
