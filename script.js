let choice = ['камень', 'бумага', 'ножницы'];
function getComputerChoice (choice) {
    return choice[Math.floor(Math.random() * choice.length)];
}


function round (playerSelection,computerSelection){
    if (playerSelection==computerSelection) {
        return "Ничья";       
    }
    else if (playerSelection=="камень" && computerSelection=="ножницы") {
        return "Ты победил"
    }
    else if (playerSelection=="ножницы" && computerSelection=="бумага") {
        return "Ты победил"
    }
    else if (playerSelection=="бумага" && computerSelection=="камень") {
        return "Ты победил"
    }
    else return "Ты проиграл"
}
for (i=0; i<5; i++) {
const playerSelection = prompt("Введи камень,ножниц или бумагу").toLowerCase();
const computerSelection = getComputerChoice(choice);
console.log(computerSelection);
console.log(round(playerSelection,computerSelection))
}