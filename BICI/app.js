const imagenes = document.querySelectorAll(".imagenesJs");
const imagenMostrada = document.querySelector(".imagenMostradaJs");
const colores = document.querySelectorAll(".coloresJs");
const rodados = document.querySelectorAll(".rodados.rodado")
colores.forEach(color => {
    color.addEventListener("click", () => {
        const id = color.getAttribute("id")
        imagenMostrada.setAttribute("src",`./img/${id}.png`)
        console.log(imagenMostrada)
    })
})

// const eliminarActive = () => {
//     rodados.forEach(rodado => {
//         rodado.classList.remove("active")
//     })
// }
// rodados.forEach(rodado => {
//     rodado.addEventListener("click", () => {
//         rodado.classList.add("active")
//     })
// })
// imagenes.forEach(img => {
//     img.addEventListener("click", (e) => {
//         const rutaImagen = e.target.src;
//         imagenMostrada.setAttribute("src",rutaImagen)
//     })
// })

