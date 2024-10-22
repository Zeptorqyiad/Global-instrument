'use strict'

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
            form.reset()
            form.classList.remove('_sending')
         } else {
            form.classList.remove('_sending')
            alert('Ошибка')
         }
      }
   }

   function formValidate(form) {
      let error = 0
      let formReq = document.querySelectorAll('._req')

      for (let index = 0; index < formReq.length; index++) {
         const input = formReq[index]
         formRemoveError(input)

         if (input.value === '') {
            formAddError(input)
            error++
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
})

let successPopup = document.getElementById('successPopup')
let errorPopup = document.getElementById('errorPopup')

$(document).ready(function () {
   $('.form__body').on('submit', function (e) {
      e.preventDefault()

      $.ajax({
         type: 'POST',
         url: 'sendmail.php',
         data: $(this).serialize(),
         success: function (response) {
            document.getElementById('loading').style.display = 'block'
            setTimeout(function () {
               document.getElementById('loading').style.display = 'none'
               showPopup('Сообщение отправлено успешно!')
            }, 300)

            if (response.trim() === 'success') {
					successPopup.classList.add('open')
				} else {
					errorPopup.classList.add('open')
            }
         },
         error: function () {
				alert('Произошла ошибка при отправке. Попробуйте снова.')
         },
      })
   })
})
