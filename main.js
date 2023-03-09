const classifica = document.querySelectorAll([data-classifica])

classifica.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento)
    })
})

