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
    
    document.getElementById('choices').addEventListener('click', function(event) {
        const playerChoice = event.target.id;
        const computerChoice = getComputerChoice();
        const result = determineWinner(playerChoice, computerChoice);
    
        document.getElementById('playerChoice').textContent = playerChoice;
        document.getElementById('computerChoice').textContent = computerChoice;
        document.getElementById('result').textContent = result;
    });
}

main();