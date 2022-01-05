const container = document.querySelector('.container')
const urlUsplash = "https://source.unsplash.com/random/"
const rows = 10

for (let i=0; i < rows * 3; i++) {
    const img = document.createElement('img')
    img.src = `${urlUsplash}${tamanhoRandow()}` //url+tamanho randow = imagens aleatoria `10!`
    container.appendChild(img)
}

function tamanhoRandow () { //para pegar o tamanho da imagem
    return `${numeroRandow()}x${numeroRandow()} `
}


function numeroRandow() { //randomizar os numeros para o tamanho da imagem
    return Math.floor(Math.random() * 10) + 300
}