const board = document.querySelector('#board')
const colors = ['#694F90','#1A053A' ,'#4A2D74','#8E79AD','#694F90',
'#440026','#661141','#CD88AF']
const Squares_number = 900


for (let i=0; i < Squares_number; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseleave', () => removeColor(square))
    board.append(square)
}

function setColor(element){
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}`
}


function removeColor(element) {
    element.style.backgroundColor = "#fff"
    element.style.boxShadow = `0 0 2px #fff`
}


function getRandomColor(){
  const index =   Math.floor( Math.random() * colors.length)
  return colors[index]
}