function main() {
    function getComputerChoice() {
        const choices = ['rock', 'paper', 'scissors'];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }
    
    function determineWinner(playerChoice, computerChoice) {
        if (playerChoice === computerChoice) {
            return 'It\'s a tie!';
        }
        if (
            (playerChoice === 'rock' && computerChoice === 'scissors') ||
            (playerChoice === 'paper' && computerChoice === 'rock') ||
            (playerChoice === 'scissors' && computerChoice === 'paper')
        ) {
            return 'You win!';
        }
        return 'You lose!';
    }

    let playerChoice = "";
    
    document.getElementById('choices').addEventListener('click', function(event) {
        playerChoice = event.target.id;
        document.getElementById('playerChoice').textContent = playerChoice;
    });

    document.getElementById('play').addEventListener('click', function(event) {
        const computerChoice = getComputerChoice();
        const result = determineWinner(playerChoice, computerChoice);
    
        document.getElementById('computerChoice').textContent = computerChoice;
        document.getElementById('result').textContent = result;
        if (result === 'You win!'){
            document.getElementById('result').style.backgroundColor = 'green';
        } else if (result === 'You lose!') {
            document.getElementById('result').style.backgroundColor = 'red';
        } else {
            document.getElementById('result').style.backgroundColor = 'white';
        }
    });
}

main();