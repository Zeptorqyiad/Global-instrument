let cityArray = [
   'Астрахань',
   'Башкирия',
   'Барнаул и Алтай',
   'Благовещенск',
   'Владивосток',
   'Волгоград',
   'Донецк',
   'Екатеринбург',
   'Иркутск',
   'Кемерово',
   'Краснодар',
   'Красноярск',
   'Крым',
   'Минск',
   'Москва и М.обл.',
   'Мурманск',
   'Нижний Новгород',
   'Новосибирск',
   'Норильск',
   'Омск',
   'Оренбург',
   'Пермь',
   'Ростов на Дону',
   'Самарская обл.',
   'Саратовская обл.',
   'Санкт-Петербург',
   'Сыктывкар',
   'Татарстан',
   'Тюмень',
   'Улан-Удэ',
   'Хабаровск',
   'Череповец',
   'Челябинск',
   'Якутск',
   'Ярославль',
]

const cityLink = document.querySelectorAll('.city-link')
cityLink.forEach((el, i) => (el.textContent = cityArray[i]))

// GeoPanel
const geoBlock = document.querySelector('.geo-block')
const geoPanel = document.querySelector('.geo__list-item')
const geoCloseIcon = document.querySelector('.close-icon')
const searchCityPanel = document.getElementById('searchPanel')

const getCityMin = document.getElementById('GeoCity-min')
const geoBlockMin = document.querySelector('.geoMin-block')

geoBlock.addEventListener('click', openPanel)
// geoBlockMin.addEventListener('click', openPanel)

function openPanel() {
   geoPanel.classList.toggle('active')
   document.body.classList.toggle('_lock')
   cityChoosePanel()
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

// GeoPopupLoad
const geoBtnM = document.getElementById('geoBtnM')
const geoBtnP = document.getElementById('geoBtnP')
const geoCity = document.getElementById('GeoCity')
const getPopup = document.getElementById('geoPopup')

let defaultCity = localStorage
window.addEventListener('load', singleLoadPopup)

function singleLoadPopup() {
   localStorage.setItem('city', (localStorage.getItem('city') || '') + '')

   if (localStorage.getItem('city') == '') {
      // Navigator
      navigator.geolocation.getCurrentPosition(success, error, {
         enableHighAccuracy: true,
      })
      function success({ coords }) {
         const { latitude, longitude } = coords
         const position = [latitude, longitude]
         console.log(position)
      }
      function error({ message }) {
         console.log(message)
      }

      geoCity.innerHTML = 'Москва'
      getPopup.classList.add('change')
      geoBtnP.onclick = () => {
         defaultCity.city = 'Москва'
         getPopup.classList.remove('change')
         localStorage.setItem('city', defaultCity.city)
         geoCity.innerHTML = defaultCity.city
      }
      geoBtnM.onclick = () => {
         getPopup.classList.remove('change')
         openPanel()
      }
   }
}

function cityChoosePanel() {
   cityLink.forEach((item) =>
      item.addEventListener('click', () => {
         localStorage.clear()
         localStorage.setItem(
            'city',
            (localStorage.getItem('city') || item.innerText) + ''
         )
         let cityValue = item.innerText
         defaultCity = {
            city: cityValue,
         }
         geoCity.innerHTML = defaultCity.city
         geoPanel.classList.remove('active')

         return defaultCity
      })
   )
}

const cityInput = document.getElementById('cityInput')
const cityInput2 = document.getElementById('cityInput-2')

if (defaultCity.city !== '') {
   geoCity.innerHTML = defaultCity.city
   getCityMin.innerHTML = defaultCity.city
   cityInput.value = defaultCity.city
   cityInput2.value = defaultCity.city
}

if (localStorage.getItem('city') == 'Москва') {
   getPopup.classList.remove('change')
   defaultCity.city = 'Москва'
   geoCity.innerHTML = defaultCity.city
}

// ДОбавить проверку если поле не пустое, то width 100%
