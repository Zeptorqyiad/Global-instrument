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

const geoBtnM = document.getElementById('geoBtnM')
const geoBtnP = document.getElementById('geoBtnP')
const geoCity = document.getElementById('GeoCity')
const getPopup = document.getElementById('geoPopup')

let defaultCity

localStorage.setItem('city', defaultCity)
console.log(localStorage.getItem('city'))

if (localStorage.getItem('city') !== 'Москва') {
   getPopup.classList.add('change')
   geoBtnP.onclick = () => {
      getPopup.classList.remove('change')
      defaultCity = {
         city: 'Moscow',
      }
      localStorage.setItem('city', 'Москва')
      console.log(localStorage.getItem('city'))
   }
   geoBtnM.onclick = () => {
		getPopup.classList.remove('change')
		openPanel()
   }
   geoCity.innerHTML = 'Москва'
} else {
   getPopup.classList.remove('change')
   geoCity.innerHTML // Доделать
}

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
