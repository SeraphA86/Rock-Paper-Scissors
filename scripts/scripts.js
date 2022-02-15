
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
    if(playerSelection > computerSelection || (computerSelection - playerSelection) == 2)/*it is determined whether a human has won*/
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
