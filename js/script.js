'use strict';


//$('.radio-item').click(function(){ 
//  $(this).find(':radio').attr('checked','checked');
//   $(this).addClass('check').siblings().removeClass('check');
//});



$('.radio-item').on('click', function() {
  $(this).addClass('check').siblings().removeClass('check');

})


$('input:checkbox').click(function(){
	if ($(this).is(':checked')) {
		$(this).parent().addClass('check');
	} else {
		$(this).parent().removeClass('check');
	}
});

// Работает только для одного чекбокса, а нужно для двух

$('input:checkbox').click(function(){
	if ($(this).is(':checked')){
		$('#agree').removeAttr('disabled');
	} else {
		$('#agree').attr('disabled', 'disabled'); 
	}
});



// Лучший рабочий вариант

const buttons = Array.from(document.querySelectorAll('button'));
const consent = document.querySelector('.consent');
const main = document.querySelector('#main');


for (let btn of buttons) {
  btn.addEventListener('click', (e) => {
    if (e.currentTarget.closest('section') != main.lastElementChild) {
      e.currentTarget.closest('.form-item').classList.add('hidden');
      e.currentTarget.closest('.form-item').nextElementSibling.classList.remove('hidden');
    let nextSibChildren = e.currentTarget.closest('.form-item').parentElement.nextElementSibling.children;
      for (let child of nextSibChildren) {
        if (child.hasAttribute('data-state')) {  
          child.getAttribute('data-state') == "active" ? child.classList.remove('hidden') : null;
          child.getAttribute('data-state') == "hidden" ? child.classList.add('hidden') : null;
        }
      }
    } else {
     for (let item of document.querySelector('#main').children)
      item != main.lastElementChild ? item.classList.add('hidden') : null;
      main.lastElementChild.querySelector('.form-item[data-state="checked"]').classList.remove('hidden');
      main.lastElementChild.querySelector('.form-item[data-state="active"]').classList.add('hidden');

    }
  });
}


// Работает всё, но код написан через задницу))
const changeBtn = Array.from(document.querySelectorAll('.change'));
for (let change of changeBtn) {
  change.addEventListener('click', (e) => {
    document.querySelectorAll('.form-item[data-state="active"]').forEach(function (elem) {
      elem.classList.add('hidden');
    })
    document.querySelectorAll('.form-item[data-state="checked"]').forEach(function (elem) {
      elem.classList.add('hidden');
    })
    document.querySelectorAll('.form-item[data-state="hidden"]').forEach(function (elem) {
      elem.classList.remove('hidden');
    })

    e.currentTarget.closest('.form-item').classList.add('hidden');
    e.currentTarget.closest('section').querySelector('.form-item[data-state="active"]').classList.remove('hidden');
    if (e.currentTarget.closest('section').previousElementSibling != null) {
      e.currentTarget.closest('section').querySelector('.form-item[data-state="hidden"]').classList.add('hidden');
      e.currentTarget.closest('section').previousElementSibling.querySelector('.form-item[data-state="checked"]').classList.remove('hidden');
    } 
  })
}















//
//
//
//
//$('.radio-item').on('click', function() {
//  $(this).addClass('check').siblings().removeClass('check');
//})
//
//
//
//   
//
//
//const buttons = Array.from(document.querySelectorAll('button'));
//const consent = document.querySelector('.consent');
//const main = document.querySelector('#main');
//for (let btn of buttons) {
//  btn.addEventListener('click', (e) => {
//   
//    if (!e.currentTarget.closest('.consent')) {
//    e.currentTarget.closest('.form-item').classList.add('hidden');
//    e.currentTarget.closest('.form-item').nextElementSibling.classList.remove('hidden');
//    let nextSibChildren = e.currentTarget.closest('.form-item').parentElement.nextElementSibling.children;
//    
//      for (let child of nextSibChildren) {
//        if (child.hasAttribute('data-state')) {  
//          child.getAttribute('data-state') == "active" ? child.classList.remove('hidden') : null;
//          child.getAttribute('data-state') == "hidden" ? child.classList.add('hidden') : null;
//        }
//      }
//    }   else {
//    for (let item of document.querySelector('#main').children)
//      !item.classList.contains('consent') ? item.classList.add('hidden') : null;
//      consent.querySelector('.form-item[data-state="checked"]').classList.remove('hidden');
//      consent.querySelector('.form-item[data-state="active"]').classList.add('hidden');
//  }
//    
//  })
//}
//


// const changeBtn = Array.from(document.querySelectorAll('.change'));
// for (let change of changeBtn) {
//   change.addEventListener('click', (e) => {
//     e.currentTarget.closest('.form-item').classList.add('hidden');
//     e.currentTarget.closest('section').querySelector('.form-item[data-state="active"]').classList.remove('hidden');
//     for (let items of Array.from(document.getElementsByClassName('.form-item'))) {
//       items.getAttribute('data-state') == "active" ? items.classList.add('hidden') : null;
//       items.getAttribute('data-state') == "hidden" ? items.classList.remove('hidden') : null;
  
//     }
    
//     // items.querySelector('.form-item[data-state="active"]').classList.add('hidden');
//     // items.querySelector('.form-item[data-state="hidden"]').classList.remove('hidden');
 
    
//   })
// }
//
//
//const changeBtn = Array.from(document.querySelectorAll('.change'));
//for (let change of changeBtn) {
//  change.addEventListener('click', (e) => {
//    e.currentTarget.closest('.form-item').classList.add('hidden');
//    e.currentTarget.closest('section').querySelector('.form-item[data-state="active"]').classList.remove('hidden');
//    if (e.currentTarget.closest('.choose')) {
//      e.currentTarget.closest('section').nextElementSibling.querySelector('.form-item[data-state="active"]').classList.add('hidden');
//      e.currentTarget.closest('section').nextElementSibling.querySelector('.form-item[data-state="hidden"]').classList.remove('hidden');
//      
//// main.children.forEach(elem => {
////   elem.querySelector('.form-item[data-state="active"]').classList.add('hidden');
////   elem.querySelector('.form-item[data-state="hidden"]').classList.remove('hidden');
////   elem.querySelector('.form-item[data-state="checked"]').classList.add('hidden');
//// });
//
//
//
//      
//      // e.currentTarget.closest('section').nextElementSibling.nextElementSibling.querySelector('.form-item[data-state="active"]').classList.add('hidden');
//      // e.currentTarget.closest('section').nextElementSibling.nextElementSibling.querySelector('.form-item[data-state="hidden"]').classList.remove('hidden');
//      // e.currentTarget.closest('section').nextElementSibling.nextElementSibling.querySelector('.form-item[data-state="checked"]').classList.add('hidden');
//    } else {
//    e.currentTarget.closest('section').nextElementSibling.querySelector('.form-item[data-state="active"]').classList.add('hidden');
//    e.currentTarget.closest('section').nextElementSibling.querySelector('.form-item[data-state="hidden"]').classList.remove('hidden');
//   }
//
//   
// 
// 
//  })
//}



// main.children.each(function () {
//   $('.form-item[data-state="active"]').addClass('hidden');
//   $('.form-item[data-state="hidden"]').removeClass('hidden');
//   $('.form-item[data-state="checked"]').addClass('hidden');
// })


// $('.form-item:has(this)')
// $('p:has(b)')

// $('button').on('click', function () {
//   $('.form-item:has(button)').addClass('hidden');
//   $('.form-item:has(button)').nextSiblingElement('.form-item').removeClass('hidden');
//   // $(this).parent().addClass('hidden');
//   // $(this).parent().addClass('hidden');
// })
    



  
// const changeBtn = Array.from(document.querySelectorAll('.change'));
// for (let change of changeBtn) {
//   change.addEventListener('click', (e) => {
//     e.currentTarget.closest('.form-item').classList.add('hidden');
//     e.currentTarget.closest('section').querySelector('.form-item[data-state="active"]').classList.remove('hidden');
//     e.currentTarget.closest('section').nextElementSibling.querySelector('.form-item[data-state="active"]').classList.add('hidden');
//     e.currentTarget.closest('section').nextElementSibling.querySelector('.form-item[data-state="hidden"]').classList.remove('hidden');
 
    
//   })
// }