const imagenesMostrada = document.querySelectorAll(".imagenMostradaJs");
const colores = document.querySelectorAll(".coloresJs");
const rodados = document.querySelectorAll(".rodado")
const cards = document.querySelectorAll(".card")


const cambioDeImagen = (id) => {
    imagenesMostrada.forEach(imagenMostrada => {
        switch (id) {
            case :

                break;
            case :

                break;
            case :

                break;
            case :

                break;
            case :

                break;

            default:
                break;
        }
        imagenMostrada.setAttribute("src", `./img/${id}.png`)

    })
}


colores.forEach(color => {
    color.addEventListener("click", () => {
        let id = color.getAttribute("id")
        cambioDeImagen(id)
    })
})


const eliminarActive = () => {
    rodados.forEach(rodado => {
        rodado.classList.remove("active")
    })

}
rodados.forEach(rodado => {
    rodado.addEventListener("click", () => {
        eliminarActive()
        rodado.classList.add("active")

    })
})

