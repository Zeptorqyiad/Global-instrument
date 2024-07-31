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
