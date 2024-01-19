function toggleMode() {
    const html = document.documentElement

//    if(html.classList.contains('light')) {
//        html.classList.remove ('light')
//    } else {
//        html.classList.add('light')
//    }

    html.classList.toggle('light')

// pegar a tag img
const img = document.querySelector('#profile img')

// substituir a imagem
if(html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./projeto/assets/avatar-light.png")
    img.setAttribute("alt", "Foto de Mayk Brito sorrindo, usando óculos escuros e casaco preto, barba e fundo gradiente rosa e azul.")
    } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./projeto/assets/avatar.png")

    }
}
