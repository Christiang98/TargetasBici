const imagenMostrada = document.querySelector(".imagenMostradaJs");
const colores = document.querySelectorAll(".coloresJs");
const rodados = document.querySelectorAll(".rodado")
colores.forEach(color => {
    color.addEventListener("click", () => {
        const id = color.getAttribute("id")
        imagenMostrada.setAttribute("src",`./img/${id}.png`)
        console.log(imagenMostrada)
    })
})
console.log(rodados)
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


