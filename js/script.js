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
