'use strict';

$('.radio-item').on('click', function() {
     $(this).addClass('active').siblings().removeClass('active');
})
    
   


// const buttons = Array.from(document.querySelectorAll('.button'));
// for (let btn of buttons) {
//      btn.addEventListener('click', (e) => {
//           e.currentTarget.parentElement....
//      })
// }