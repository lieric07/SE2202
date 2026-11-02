let nextPlayer = 'X'; // takes a value of either 'X' or 'O' according to the game turns

//initalize the game by setting the value inside next-lbl to nextPlayer
//hint: you could use innerText for this
document.getElementById('next-lbl').innerText = nextPlayer;

//This call will create the buttons needed for the gameboard.
createGameBoard()

function createGameBoard()
{
    // Programatically add a button with square brackets enclosing an empty space to each cell in the gameboard
    for(let i=1; i<=9; i++){//loops through 9 times from 1-9
        let cell = document.getElementById(`c${i}`);//creates cell from c1-c9
        let btn = document.createElement('button');//creates a button for that cell
        btn.innerText = '[ ]';//adds inner text to be empty
        cell.appendChild(btn);
    }

    // Programatically add 'takeCell' as an event listener to all the buttons on the board
    let btns = document.querySelectorAll('button');

    for (let i=0; i<9; i++)
    {
        btns[i].addEventListener('click', function(event){//assigns an event listener to each of the buttons in btns and listens for a click
            takeCell(event);
        });//pass the event to takeCell
    }
}

// This function will be used to respond to a click event on any of the board buttons.
function takeCell(event)
{
    let btn = event.target;
    btn.innerText = `[${nextPlayer}]`;//when pressed, the symbol of the currentplayer is then set the the innerText

    btn.disabled = true;//disables the button

    //switch player
    nextPlayer = nextPlayer === 'X' ? 'O' : 'X';//sets next player to the next player by checking if current is X, then change to O and if not X, change to X
    document.getElementById('next-lbl').innerText = nextPlayer;

    // Check if the game is over
    if (isGameOver())
    {
        // let the label with the id 'game-over-lbl' display the words 'Game Over' inside <h1> element
        document.getElementById('game-over-lbl').innerHTML = '<h1>Game Over</h1>';
    }
}

function isGameOver()
{
    // This function returns true if all the buttons are disabled and false otherwise
    let btns = document.querySelectorAll('button');
    for(let i=0; i<9; i++){//goes through btns and checks every one if its enabled/not disabled
        if(!btns[i].disabled){//checks if current is enabled(not disabled)
            return false;//if so return false
        }
    }
    return true;//if none are enabled then return true
}
