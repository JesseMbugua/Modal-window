'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
const closeModal = function(){
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}
const openModal = function(){
  console.log('button clicked');
  modal.classList.remove('hidden');
  //modal.style.display = 'block';
  overlay.classList.remove('hidden');
}

for (let i=0;i<btnsOpenModal.length;i++){ 
    btnsOpenModal[i].addEventListener('click', openModal)
}
btnCloseModal.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)

document.addEventListener('keydown', function(event){
  console.log(event);
  if (event.key === 'Escape' && !modal.classList.contains('hidden')){
    closeModal();
}
})