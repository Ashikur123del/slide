
const counterElement = document.getElementById("counter")
const plasu = document.getElementById("plasu")
const mynas = document.getElementById("mynas")

let count = 0;


function counterUpDate(value) {
  count = count + value;
  counterElement.textContent = count;

  // plus button control
  if (count >= 10) {
    plasu.setAttribute('disabled', true);
  } else {
    plasu.removeAttribute('disabled');
  }

  // minus button control
  if (count <= 0) {
    mynas.setAttribute('disabled', true);
  } else {
    mynas.removeAttribute('disabled');
  }}


plasu.addEventListener('click',()=>{
  counterUpDate(1)
})


mynas.addEventListener('click',()=>{
  counterUpDate(-1)
})


const generateRGBColor = () => {
  const r = Math.floor(Math.random() * 255)
  const g = Math.floor(Math.random() * 255)
  const b = Math.floor(Math.random() * 255)
  return `rgb(${r},${g},${b})`
}
const updateColor = () => {
  const color = generateRGBColor();
 const colorBox = document.getElementById("colorBox")
 const colorCode = document.getElementById("colorCode")
 colorBox.style.backgroundColor = color;
 colorCode.innerText = color;

}
const copyColorode = ()=> {
 const colorCode = document.getElementById('colorCode')
 const inputTeg = document.createElement('input')
 document.body.appendChild(inputTeg)
 inputTeg.value = colorCode.innerText;

 inputTeg.select();
 document.execCommand('copy')
 document.body.removeChild(inputTeg)
 alert('copyto Color Code')
}
document.getElementById("copyButton").addEventListener('click',()=>{
  copyColorode()
})

function generateNewColor(){
  updateColor()
}

