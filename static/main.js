
const listFig = document.getElementsByTagName('li')

for (let i = 0; i < listFig.length; i++) {
  listFig[i].addEventListener('click', function (e) {
    listFig[i + 1].className = 'image'
  })
}
