
const changeColorBtn = document.querySelector('.change-color');
const colorSpanBgr = document.querySelector('.color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
changeColorBtn.addEventListener("click",() =>{
 
 document.body.style.backgroundColor = getRandomHexColor();
 colorSpanBgr.textContent = document.body.style.backgroundColor;
})

