const popup = document.querySelector(".popup-wrapper");
const btn = document.querySelector("button");
const close = document.querySelector(".popup-close");
btn.addEventListener('click',()=>{
    popup.setAttribute('style','display:inline')
});

close.addEventListener('click',() => {
    popup.style.display = 'none';
});

popup.addEventListener('click',() => {
    popup.style.display = 'none';
});