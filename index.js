const bouton = document.querySelectorAll('button')
const input = document.querySelector('input')

bouton.forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.value == "=") {input.value = eval(input.value)}
    else if(btn.value == "SUP"){input.value = ""}
    else {input.value += btn.value}
  })
})
