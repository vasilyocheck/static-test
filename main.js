const inputField = document.getElementById('radius')
const canvas = document.getElementById('canvas')

console.log(inputField.value)
let currentRadius = Number(inputField.value);

inputField.addEventListener('input', (e) => {
  clearCanvas()
  const currentValue = Number(e.currentTarget.value)
  currentRadius = Math.min(currentValue, 388);
  draw()
  if(currentRadius < currentValue) {
    inputField.style.backgroundColor = 'red'
  } 
  if(currentValue < 389) {
    inputField.style.backgroundColor = 'white'
  } 
})

function cornerCircle(r) {      
  return Math.round(((Math.sqrt(Math.pow((Math.sqrt(r * r  * 2) - r), 2) * 2 * 2 / 2) * 2 - (Math.sqrt(r * r  * 2) - r) * 2 ) / 2) * 100) / 100;
}

function draw() {
  const ctx = canvas.getContext('2d')
  ctx.fillStyle = "green";

  ctx.beginPath();
  ctx.moveTo(790, 790);
  
  ctx.lineTo(790, 10);
  ctx.setLineDash([10, 5]);

  ctx.moveTo(790, 790);
  ctx.lineTo(10, 790);

  ctx.lineWidth = 1;
  ctx.strokeStyle = 'black';

  ctx.stroke();

  const centerX = 790 - currentRadius;
  const centerY = 790 - currentRadius;
  const radius = currentRadius;

  ctx.beginPath();

  ctx.arc(centerX, centerY, radius, 0, Math.PI * 2, false);
  ctx.setLineDash([]);

  ctx.fillStyle = 'blue';

  ctx.lineWidth = 1;
  ctx.strokeStyle = 'blue';
  ctx.stroke();

  const innerRadius = cornerCircle(currentRadius)

  const innerCenterX = 790 - innerRadius;
  const innerCenterY = 790 - innerRadius;


  ctx.beginPath();
  ctx.arc(innerCenterX, innerCenterY, innerRadius, 0, Math.PI * 2, false);


  ctx.lineWidth = 1;
  ctx.strokeStyle = 'red';
  ctx.stroke();

}

function clearCanvas() {
  const ctx = canvas.getContext('2d')
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

draw()