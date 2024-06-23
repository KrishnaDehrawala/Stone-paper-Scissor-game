let userScore = 0;
let comScore = 0;
let choices = document.querySelectorAll(".choice")
let msg = document.querySelector("#msg");
let userPoints = document.querySelector("#user-score");
let comPoints = document.querySelector("#com-score");
let messageContainer = document.querySelector(".message-container ");
let genComChoice = () => {
    let options = ["rock", "paper", "scissor"];
    let randIdx = Math.floor(Math.random() * 3);
    let compChoice = options[randIdx]
    return compChoice;
}
let drawGame = (userChoice, comChoice) => {
    console.log(`Game draw as ${userChoice} equals ${comChoice}`);
    msg.innerText = `Game draw as ${userChoice} equals ${comChoice}`
    messageContainer.classList.add("message-container");
    messageContainer.classList.remove("looser");
    messageContainer.classList.remove("winner");
}
let showWinner = (userWin, comChoice, userChoice) => {
    if (userWin == true) {
        console.log(`User won as ${userChoice} beats ${comChoice}`);
        userScore++;
        userPoints.innerText = userScore;
        msg.innerText = `User won as ${userChoice} beats ${comChoice}`;
        messageContainer.classList.add("winner");
        messageContainer.classList.remove("looser");
    }
    else {
        console.log("com won");
        comScore++;
        comPoints.innerText = comScore;
        msg.innerText = `User loose as ${comChoice} beats ${userChoice}`;
        messageContainer.classList.add("looser");
        messageContainer.classList.remove("winner");
    }
}
let playGame = (userChoice) => {
    console.log("User Choice=", userChoice);
    const comChoice = genComChoice();
    console.log("Com choice=", comChoice)

    if (userChoice === comChoice) {
        drawGame(userChoice, comChoice);
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = comChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            userWin = comChoice === "scissor" ? false : true;
        }
        else {
            userWin = comChoice === "rock" ? false : true;
        }
        showWinner(userWin, comChoice, userChoice);
    }
};
choices.forEach((choice) => {
    // console.log(choice)
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);
    })
});