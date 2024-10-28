const geoBlock = document.querySelector('.geo-block')
const geoPanel = document.querySelector('.geo__list-item')
const geoCloseIcon = document.querySelector('.close-icon')
const searchCityPanel = document.getElementById('searchPanel')

geoBlock.addEventListener('click', openPanel)

function openPanel() {
   geoPanel.classList.toggle('active')
   document.body.classList.toggle('_lock')
}

geoCloseIcon.onclick = () => {
   if (geoPanel.classList.contains('active')) {
      geoPanel.classList.remove('active')
      document.body.classList.remove('_lock')
   }
}
searchCityPanel.addEventListener('click', () => {
   searchCityPanel.style.minWidth = '100%'
   geoCloseIcon.style.display = 'none'
})

// searchCityPanel.onfocus = () => {}

navigator.geolocation.getCurrentPosition(success, error, {
   enableHighAccuracy: true,
})

function success({ coords }) {
   const { latitude, longitude } = coords
   const position = [latitude, longitude]
   console.log(position)
}

function error({ message }) {
   console.log(message) // при отказе в доступе получаем PositionError: User denied Geolocation
}
