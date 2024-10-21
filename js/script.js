// Бургер меню
let burgerIcon = document.querySelector('.burger__line')
let burgerList = document.querySelector('.icon-menu')

burgerIcon.addEventListener('click', () => {
   if (burgerIcon) {
      burgerIcon.classList.toggle('active')
      burgerList.classList.toggle('active')
      document.body.classList.toggle('_lock')
   }
})

let burgerText = document.querySelectorAll('.burger__link-min')
burgerText.forEach((btn) => btn.addEventListener('click', closeParentBlock))

function closeParentBlock() {
   burgerIcon.classList.remove('active')
   burgerList.classList.remove('active')
   document.body.classList.remove('_lock')
}

window.addEventListener('resize', function () {
   if (window.matchMedia('(max-width: 1024px)').matches) {
      burgerIcon.classList.remove('active')
      burgerList.classList.remove('active')
      document.body.classList.remove('_lock')
   }
})

// FAQ
document.querySelectorAll('.faq__container details').forEach((item) => {
   item.addEventListener('toggle', (event) => {
      if (event.target.open) {
         document
            .querySelectorAll('.faq__container details')
            .forEach((otherItem) => {
               if (otherItem !== event.target) {
                  otherItem.removeAttribute('open')
               }
            })
      }
   })
})

// Popup
const popupLinks = document.querySelectorAll('.popup-link')
const body = document.querySelector('body')
const lockPadding = document.querySelectorAll('.lock-padding')

let unlock = true

const timeout = 800

if (popupLinks.length > 0) {
   for (let index = 0; index < popupLinks.length; index++) {
      const popupLink = popupLinks[index]
      popupLink.addEventListener('click', function (e) {
         const popupName = popupLink.getAttribute('href').replace('#', '')
         const curentPopup = document.getElementById(popupName)
         popupOpen(curentPopup)
         e.preventDefault()
      })
   }
}

const popupCloseIcon = document.querySelectorAll('.close-popup')
if (popupCloseIcon.length > 0) {
   for (let index = 0; index < popupCloseIcon.length; index++) {
      const el = popupCloseIcon[index]
      el.addEventListener('click', function (e) {
         popupCLose(el.closest('.popup'))
         e.preventDefault()
      })
   }
}

function popupOpen(curentPopup) {
   if (curentPopup && unlock) {
      const popupActive = document.querySelector('.popup.open')
      if (popupActive) {
         popupCLose(popupActive, active)
      }
      curentPopup.classList.add('open')
      curentPopup.addEventListener('click', function (e) {
         if (!e.target.closest('.popup__content')) {
            popupCLose(e.target.closest('.popup'))
         }
      })
   }
}
function popupCLose(popupActive, doUnlock = true) {
   if (unlock) {
      popupActive.classList.remove('open')
   }
}

document.addEventListener('keydown', function (e) {
   if (e.which === 27) {
      const popupActive = document.querySelector('.popup.open')
      popupCLose(popupActive)
   }
})
;(function () {
   if (!Element.prototype.closest) {
      Element.prototype.closest = function (css) {
         var node = this
         while (node) {
            if (node.matches(css)) return node
            else node = node.parentElement
         }
         return null
      }
   }
})()
;(function () {
   if (!Element.prototype.matches) {
      Element.prototype.matches =
         Element.prototype.matchesSelector ||
         Element.prototype.webkitMatchesSelector ||
         Element.prototype.mozMatchesSelector ||
         Element.prototype.msMatchesSelector
   }
})()

// Отправка формы
document.addEventListener('DOMContentLoaded', function () {
   const form = document.getElementById('form')
   form.addEventListener('submit', formSend)

   async function formSend(e) {
      e.preventDefault()
      let error = formValidate(form)

      let formData = new FormData(form)

      if (error === 0) {
         form.classList.add('_sending')
         let response = await fetch('sendmail.php', {
            method: 'POST',
            body: formData,
         })
         if (response.ok) {
            let result = await response.json()
            alert(result.message)
            formPreview.innerHTML = ''
            form.reset()
            form.classList.remove('_sending')
         }
      } else {
      }
   }

   function formValidate(form) {
      let error = 0
      let formReq = document.querySelectorAll('._req')

      for (let index = 0; index < formReq.length; index++) {
         const input = formReq[index]
         formRemoveError(input)

         if (input.classList.contains('_email')) {
            if (emailText(input)) {
               formAddError(input)
               error++
            }
         } else {
            if (input.value === '') {
               formAddError(input)
               error++
            }
         }
      }
      return error
   }
   function formAddError(input) {
      input.parentElement.classList.add('_error')
      input.classList.add('_error')
   }
   function formRemoveError(input) {
      input.parentElement.classList.remove('_error')
      input.classList.remove('_error')
   }
   function emailText(input) {
      return !/^\w+[-_\.]*\w+@\w+-?\w+\.[a-z]{2,4}$/.test(input.value)
   }
})

window.addEventListener('promo', offsetAnchor)
window.setTimeout(offsetAnchor, 1)
function offsetAnchor() {
   if (location.hash.length !== 0) {
      window.scrollTo(window.scrollX, window.scrollY - 50)
   }
}
