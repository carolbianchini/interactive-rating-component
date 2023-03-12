const submit =  document.querySelector(".enviar")
const card1 = document.querySelector(".conteudo-principal")
const card2 = document.querySelector(".conteudo-agradecimento")
const retornar = document.querySelector(".botao-voltar")
const rates = document.querySelectorAll(".botao-avaliar")
const rating = document.querySelector("#rating")


submit.addEventListener("click", () => {
    card2.classList.remove("hidden")
    card1.style.display = "none"
})

retornar.addEventListener("click", () => {
    card2.classList.add("hidden")
    card1.style.display = "block"
})

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
    })
})



