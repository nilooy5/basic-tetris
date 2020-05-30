document.addEventListener('DOMContentLoaded', () => {
    // code here
    const grid = document.querySelector('.grid')
    const score = document.querySelector('#score')
    const start = document.querySelector('#start-button')
    const width = 10
    let squares = Array.from(document.querySelectorAll('.grid div'))

    let firstName = 'Niloy'

    let names = ['Fazal', 'Niloy', 'Munira', 'Tabassum']

    function showAlert(name) {
        alert('Welcome ' + name + '!')
    }
    
    //The Tetrominoes
  const lTetromino = [
    [1, width+1, width*2+1, 2],
    [width, width+1, width+2, width*2+2],
    [1, width+1, width*2+1, width*2],
    [width, width*2, width*2+1, width*2+2]
  ]

  const zTetromino = [
    [0,width,width+1,width*2+1],
    [width+1, width+2,width*2,width*2+1],
    [0,width,width+1,width*2+1],
    [width+1, width+2,width*2,width*2+1]
  ]

  const tTetromino = [
    [1,width,width+1,width+2],
    [1,width+1,width+2,width*2+1],
    [width,width+1,width+2,width*2+1],
    [1,width,width+1,width*2+1]
  ]

  const oTetromino = [
    [0,1,width,width+1],
    [0,1,width,width+1],
    [0,1,width,width+1],
    [0,1,width,width+1]
  ]

  const iTetromino = [
    [1,width+1,width*2+1,width*3+1],
    [width,width+1,width+2,width+3],
    [1,width+1,width*2+1,width*3+1],
    [width,width+1,width+2,width+3]
  ]

  const tetraminos = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino]

    showAlert(firstName)    
    console.log(squares);
    
})