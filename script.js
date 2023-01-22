const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
form.addEventListener("change", save)

const button = document.querySelector("header button")
button.addEventListener("click", add)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)
  if (dayExists) {
    alert("Dia ja inserido!")
    return
  }
  nlwSetup.addDay(today)
  alert("Dia inserido com sucesso!")
}

function save() {
  localStorage.setItem("nlwSetup.data", JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem("nlwSetup.data")) || {}
nlwSetup.setData(data)
nlwSetup.load()
