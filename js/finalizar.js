

function continuar() {

    document.querySelector("#referendo").classList.remove("visible");
    document.querySelector("#plebiscito").classList.remove("visible");
    document.querySelector("#legislativa").classList.remove("visible");
    document.querySelector("#revocatorio").classList.remove("visible");
    document.querySelector("#cabildo").classList.remove("visible");
    finalizar();

}


function finalizar() {

    tarjetasPendientes = document.querySelectorAll(".tarjeta:not(.acertada)");
    if (tarjetasPendientes.length === 0) {

        document.querySelector("#endGame").classList.add("visible");

    }

}