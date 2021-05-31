function barajaTarjetas() {
    var resultado;
    resultado = totalTarjetas.sort(function () {
        return 0.5 - Math.random();
    });
    return resultado;
}

function reparteTarjetas() {
    var mesa = document.querySelector("#mesa");
    var tarjetasBarajadas = barajaTarjetas();
    mesa.innerHTML = "";

    tarjetasBarajadas.forEach(function (element) {

        tarjeta = document.createElement("div");

        tarjeta.innerHTML = "<div class='tarjeta' data-valor=" +
            element +
            ">" +
            "<div class='tarjeta__contenido'>" +
            "<img src='img/" + element + ".png'" + " height='150px' width='auto' />" +
            "</div>" +
            "</div>";

        mesa.appendChild(tarjeta);


    })

}


