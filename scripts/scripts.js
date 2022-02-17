
function computerChoice(min, max)/*Selecting a random number in the range [min, max)*/
{
    return Math.floor(Math.random() * (max - min)) + min;
}

/*comparison of player and computer selection.Each sign is assigned a number:
stone - 3;
scissors - 2;
paper - 1;
After the player and the computer are selected, the elections are compared according to the principle "who has the most and won" (3 > 2 > 1),
except in the case of "paper and stone" (3 - 1 = 2 - paper beats stone).
If the person wins, the function returns 1, if the draw function returns -1, if the computer wins, the function returns 0.*/
function playRound(playerSelection, computerSelection)
{
    if( (playerSelection > computerSelection || (computerSelection - playerSelection) == 2) && ( (playerSelection - computerSelection) != 2) )/*it is determined whether a human has won*/
    {
        return 1;
    }

    if(playerSelection == computerSelection)/*a draw is determined*/
    {
        return -1;
    }

    else /*if a human has not won and is not a draw, then the computer has won*/
    {
        return 0;
    }
}

/*Displaying the score on the scoreboard*/
function score(scoreH, scoreC, result)
{
    if(result != -1)
    {
        scoreH.textContent = Number(scoreH.textContent) + result;
        scoreC.textContent = Number(scoreC.textContent) + (result - 1) * (-1);
    }
}
/*Delay function.
The code uses the Date.now method to get the number of milliseconds that have passed since January 1,
1970 and assigns this value to the date variable.
It then creates an empty currentDate variable before entering the do...while loop.
In the loop, it repeatedly gets the number of milliseconds that have passed since January 1,1970,
and assigns the value of the previously declared currentDate variable.
The loop will continue as long as the difference between date and current Date is less than the required delay in milliseconds.*/
function sleep(milliseconds)
{
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

/*Changes the images in the 'winnerIcon' class , also makes the image visible*/
function changeImageWinner(path, alt)
{
    /*DOM elements of the central field of images where the winner icon is shown*/
    const winner = document.querySelector('.winner');
    const winnerIcon = document.querySelector('.winnerIcon');

    winnerIcon.src = path;/*The path to the image*/
    winnerIcon.alt = alt;/*Alternative text*/
    winner.style.opacity = '1';/*Field transparency (By default, the field is transparent)*/
}


/*Depending on the winner, it changes the image*/
function winnerDisplay(result)
{

    if (result == 1)
    {
        changeImageWinner('images/human.svg','human');
    }
    if(result == 0)
    {
        changeImageWinner('images/computer.svg', 'computer');
    }
    if(result == -1)
    {
        changeImageWinner('images/draw.svg', 'draw', 'Draw');
    }
}


const signs = document.querySelectorAll('.button');/*NodeList of all game signs*/
/*Adding listening to each game sign*/
signs.forEach((button)=>
{
    button.addEventListener('click', ()=>
    {
        /*DOM elements of the invoice field*/
        const scoreH = document.querySelector('.scoreH');
        const scoreC = document.querySelector('.scoreC');

        const playerSelection = button.dataset.number;/*the number of the sign selected by the player*/
        const computerSelection = computerChoice(1, 4);/*the number of the sign selected by the computer*/

        const result = playRound(playerSelection, computerSelection);
        sleep(200);
        score(scoreH, scoreC, result);
        winnerDisplay(result);

    });
});