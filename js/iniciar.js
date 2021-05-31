function iniciaCartas() {
    reparteTarjetas();
    document.querySelectorAll(".tarjeta").forEach(function (elemento) {
        elemento.addEventListener("click", descubrir)
        elemento.classList.remove("descubierta")
        elemento.classList.remove("acertada")
        document.querySelector("#referendo").classList.remove("visible");
        document.querySelector("#plebiscito").classList.remove("visible");
        document.querySelector("#legislativa").classList.remove("visible");
        document.querySelector("#revocatorio").classList.remove("visible");
        document.querySelector("#cabildo").classList.remove("visible");
        document.querySelector("#endGame").classList.remove("visible");


    });
}

iniciaCartas();

document.querySelectorAll(".reiniciar").forEach(function (elemento) {
    elemento.addEventListener("click", iniciaCartas);
});

document.querySelectorAll("#continuar").forEach(function (elemento) {
    elemento.addEventListener("click", continuar);
});
