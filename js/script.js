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


//=======================================================================

$('.custom-select').each(function () {
   var classes = $(this).attr('class'),
      id = $(this).attr('id'),
      name = $(this).attr('name')
   var template = '<div class="' + classes + '">'
   template +=
      '<span class="custom-select-trigger">' +
      $(this).attr('placeholder') +
      '</span>'
   template += '<div class="custom-options">'
   $(this)
      .find('option')
      .each(function () {
         template +=
            '<span class="custom-option ' +
            $(this).attr('class') +
            '" data-value="' +
            $(this).attr('value') +
            '">' +
            $(this).html() +
            '</span>'
      })
   template += '</div></div>'

   $(this).wrap('<div class="custom-select-wrapper"></div>')
   $(this).hide()
   $(this).after(template)
})
$('.custom-option:first-of-type').hover(
   function () {
      $(this).parents('.custom-options').addClass('option-hover')
   },
   function () {
      $(this).parents('.custom-options').removeClass('option-hover')
   }
)
$('.custom-select-trigger').on('click', function () {
   $('html').one('click', function () {
      $('.custom-select').removeClass('opened')
   })
   $(this).parents('.custom-select').toggleClass('opened')
   event.stopPropagation()
})
$('.custom-option').on('click', function () {
   $(this)
      .parents('.custom-select-wrapper')
      .find('select')
      .val($(this).data('value'))
   $(this)
      .parents('.custom-options')
      .find('.custom-option')
      .removeClass('selection')
   $(this).addClass('selection')
   $(this).parents('.custom-select').removeClass('opened')
   $(this)
      .parents('.custom-select')
      .find('.custom-select-trigger')
      .text($(this).text())
})