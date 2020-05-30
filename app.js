document.addEventListener('DOMContentLoaded', () => {
    
    // code here
    const grid = document.querySelector('.grid');
    const score = document.querySelector('#score');
    const start = document.querySelector('#start-button');
    const width = 10;
    let squares = Array.from(document.querySelectorAll('.grid div'));

    const tetraminos = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino];

    let currentPosition = 4;
    let currentRotation = 0;

    // randomly select a tetramino
    let random = Math.floor(Math.random()*tetraminos.length);
    console.log(random);
    
    let current = tetraminos[random][currentRotation];

    // draw the tetramino
    function draw() {
        current.forEach(index => {
            squares[currentPosition + index].classList.add('tetramino');
        })
    }
    // undraw the tetramino
    function undraw() {
        current.forEach(index => {
            squares[currentPosition + index].classList.remove('tetramino');
        })
    }

    draw();

    // make the tetramino move down every second
    timerID = setInterval(moveDown, 1000);

    // move down
    function moveDown() {
        undraw();
        currentPosition += width;
        draw();
        freeze();
    }

    // freeze tetramino
    function freeze() {
        if(current.some(index => squares[currentPosition + index + width].classList.contains('taken'))) {
            current.forEach(index => squares[currentPosition + index].classList.add('taken'));
            //start new tetramino falling
            random = Math.floor(Math.random() * tetraminos.length);
            current = tetraminos[random][currentRotation];
            currentPosition = 4;
            draw();
        }
    }
})