window.onload = getMyLocation

function getMyLocation(e) {
   e.preventDefault()
   if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(displayLocation)
   } else {
      alert('Упс, геолокация не поддерживается')
   }
}

function displayLocation(position) {
   let latitude = position.coords.latitude
   let longitude = position.coords.longitude
   let div = document.getElementById('location')
   // div.innerHTML = `${latitude}, ${longitude}`
}

function displayError(error) {
   let errorTypes = {
      0: 'Неизвестная ошибка',
      1: 'Доступ запрещен',
      2: 'Координаты не определены',
      3: 'Время запроса истекло',
   }
   let errorMessage = errorTypes[error.code]
   if (error.code == 0 || error.code == 2) {
      errorMessage = errorMessage + ' ' + error.message
   }
   let div = document.getElementById('location')
   div.innerHTML = errorMessage
}
