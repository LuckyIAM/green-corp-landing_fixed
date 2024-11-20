const INCREASE_NUMBER_ANIMATION_SPEED = 50;
let animationInited = false;
function increaseNumberAnimationStep (i, element, endNumber) {
    if (i <= endNumber) {
      if (i === endNumber) {
        element.innerText = i + '+';
      } else {
        element.innerText = i;
        // console.log(element.innerText)
      }
  
      i+=100;
        
      setTimeout(increaseNumberAnimationStep,INCREASE_NUMBER_ANIMATION_SPEED,i,element,endNumber);
   }
}


function initIncreaseNumberAnimation() {
    const element = document.querySelector('div.features__clients-count');
    increaseNumberAnimationStep(0, element, 5000);
    
}


document.querySelector('#budget').addEventListener('change', function handleSelectChange(event) {
  if (event.target.value === 'other') {
    // Должны добавить еще одно текстовое поле
    const formContainer = document.createElement('div');
    formContainer.classList.add('form__group');
    formContainer.classList.add('form__other-input');
    const input = document.createElement('input')
    input.placeholder = 'Вводите свое значение';
    input.type = 'text';
    formContainer.append(input);
    document.querySelector('.form form').insertBefore(formContainer, document.querySelector('.form__submit')); 
    
  }
  let otherInput = document.querySelector('.form__other-input');
  if (event.target.value !== 'other' && Boolean(otherInput)) {
    // Удаляем ранее добавленное текстовое поле, если оно есть в DOM
    
    document.querySelector('.form form').removeChild(otherInput);
  }
});

function updateScroll() {
  let header = document.querySelector('header');
  if(window.scrollY > 0){
    header.classList.add('header__scrolled');
  } else {
    header.classList.remove('header__scrolled');
  }
  // Запуск анимации увеличения числа
  let  countElementPosition = document.querySelector('.features__clients-count').offsetTop;
  let windowBottomPosition = window.scrollY + window.innerHeight;
  if(windowBottomPosition >= countElementPosition && !animationInited){
    initIncreaseNumberAnimation();
    animationInited = true;
  }
}
window.addEventListener('scroll', updateScroll)

//плавный скрулл scrollIntoView
function addSmoothScroll(anchor) {
  anchor.addEventListener('click', function onLinkClick(event) {
    event.preventDefault();
    document.querySelector(event.target.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
}


document.querySelectorAll('a[href^="#"]').forEach(a => {
  addSmoothScroll(a)
})

addSmoothScroll(document.querySelector('.more-button'));
