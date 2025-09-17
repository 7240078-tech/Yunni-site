
const btn = document.querySelector('#menuToggle');
const menu = document.querySelector('#mobileMenu');
if(btn){
  btn.addEventListener('click', ()=>{
    menu.classList.toggle('show');
  });
}
