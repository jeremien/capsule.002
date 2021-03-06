const data = [
  {
    titre: 'Portacarte e Portamatite di Marmo',
    date: 1960,
    image: '036.jpg',
    class: 'image'
  },
  {
    titre: 'Guardare un Fotografo',
    date: 2000,
    image: '013.jpg',
    class: 'no-image'
  },
  {
    titre: 'Portaritratti',
    date: 1965,
    image: '033.jpg',
    class: 'no-image'
  }
]

const el = document.getElementById('container')

data.forEach(function (element, index) {
  const html = `
    <li class="${element.class}">
      <figure id="fig${index}">
        <img src="static/images/${element.image}" />
        <figCaption>${element.titre}, ${element.date}</figCaption>
      </figure>
    </li>
  `
  el.innerHTML += html
})

const listFig = document.getElementsByTagName('li')

for (let i = 0; i < listFig.length; i++) {
  listFig[i].addEventListener('click', function (e) {
    listFig[i + 1].className = 'image'
  })
}

let trigger = false
const monButton = document.getElementById('button')
monButton.addEventListener('click', function (event) {
  const images = document.getElementsByTagName('img')
  console.log(trigger)
  if (!trigger) {
    this.innerText = 'clear'
    for (let i = 0; i < images.length; i++) {
      images[i].style.filter = 'blur(10px)'
    }
    trigger = !trigger
  } else {
    this.innerText = 'blur'
    for (let i = 0; i < images.length; i++) {
      images[i].style.filter = 'blur(0)'
    }
    trigger = !trigger
  }
})
