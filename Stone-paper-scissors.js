const getUserChoice  = userInput => {
  userInput = userInput.toLowerCase();
  if(userInput=='rock' || userInput=='paper' || userInput=='scissors'|| userInput =='bomb'){
    return userInput;
  }
  else{
    console.log('INVALID VALUE!!');
  }
}
const getComputerChoice  = () => {
  var num = Math.floor(Math.random()*2);
  if(num===0){
    return "rock";
  }
  else if(num==1){
    return "scissors";
  }
  else {
    return "paper";
  }
}
const determineWinner= (userChoice,computerChoice) => {
  if(userChoice == 'rock'){
    if(computerChoice=='rock'){
        return "game was tie";
    }
    else if(computerChoice=='paper'){
      return "user loss"
    }
    else{
      return "user won";
    }
  }
  else if(userChoice == 'paper'){
    if(computerChoice=='paper'){
        return "game was tie";
    }
     else if(computerChoice=='scissors'){
      return "user loss"
    }
    else{
      return "user won";
    }
  }
  else if(userChoice == 'scissors'){
    if(computerChoice=='scissors'){
        return "game was tie";
    }
     else if(computerChoice=='rock'){
      return "user loss"
    }
    else{
      return "user won";
    }
  }
  if(userChoice==="bomb"){
    return 'User won';
  }
}
function playGame(UserChoice){
  let user = getUserChoice(UserChoice);
  let comp = getComputerChoice();
  //console.log(user);
  //console.log(comp);
  console.log(determineWinner(user,comp));
}
playGame('bomb');
