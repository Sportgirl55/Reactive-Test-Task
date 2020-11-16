// Переключение радиокнопок

$('.radio-item').on('click', function() {
    $(this).addClass('check').siblings().removeClass('check');
  })
  
  //Переключение чекбоксов
  
  $('input:checkbox').click(function(){
      if ($(this).is(':checked')) {
          $(this).parent().addClass('check');
      } else {
          $(this).parent().removeClass('check');
      }
  });

// Основная логика переключения секций

const steps = [...document.querySelectorAll('.step')];
const btsNext = [...document.querySelectorAll('.next')];
const btsChange = [...document.querySelectorAll('.btn-change')];
const btnSubmit = document.querySelector('.submit');
const checkBox = [...document.querySelectorAll('input[type=checkbox]')];

btnSubmit.setAttribute('disabled', true);
steps[steps.length - 1].classList.add('hidden');

checkBox.forEach((element) => {
  element.addEventListener('change', () => {
    if (checkBox.every((element) => element.checked)) {
      btnSubmit.removeAttribute('disabled');
    }
  })
})

btsNext.forEach((element, i) => {
    element.addEventListener('click', (event) => {
      event.preventDefault();
      steps[i].classList.remove('open');
      steps[i].classList.add('change');
      steps[i + 1].classList.add('open');
      steps[i + 1].classList.remove('hidden');
      if (i === steps.length - 2) {
        steps[i + 1].classList.add('done');
        [...steps].splice(0, i + 1).forEach((element) => 
        element.classList.add('hidden'),
        );
      }
    })
  }
);

btsChange.forEach((element, i) => {
    element.addEventListener('click', () => {
      [...steps].splice(i).forEach((element) => {
        element.classList.remove('change');
        element.classList.remove('open');
        element.classList.remove('done');
      })
      steps[i].classList.add('open');
    })
  }
);
