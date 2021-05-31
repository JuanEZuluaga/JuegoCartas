function acierto(lasTarjetas) {

  lasTarjetas.forEach(function (element) {

    element.classList.add("acertada")


  })

  document.querySelector("#sonido-acierto").cloneNode().play();


  setTimeout(function () {

    mostrar = lasTarjetas[0].dataset.valor
    document.querySelector("#" + mostrar).classList.add("visible");

  }, 1000)


}

function equivocacion(lasTarjetas) {

  lasTarjetas.forEach(function (element) {

    element.classList.add("error")

  })

  document.querySelector("#sonido-error").cloneNode().play();

  setTimeout(function () {

    lasTarjetas.forEach(function (element) {

      element.classList.remove("descubierta")
      element.classList.remove("error")

    })

  }, 1000)

}




