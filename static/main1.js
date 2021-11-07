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
