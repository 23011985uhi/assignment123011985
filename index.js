const data = require('./data');
//node index
const successBtn = 'Success Button';
  const incorrectBtn = 'Incorrect Button';
  const userInput = true; 
  
function userAttempt(realAnswer) {
  
  if (userInput === realAnswer) {
    return successBtn;
  } 
  
  return incorrectBtn;
}

module.exports = userAttempt;


