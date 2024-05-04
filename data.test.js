const data = require('./data.js');
//Firstly checking to see if the balances object exists within the data. If it exists then the next tests will start
describe('Data object', () => {
  test('should contain the balances object', () => {
    expect(data.balances).toBeDefined();
  });

  // Checking if the fullquestion object exists within the balances object
  describe('balances object', () => {
    test('should contain the fullquestion object within balances', () => {
      expect(data.balances.questions.fullquestion).toBeDefined();
    });

    // Checking if the question exists within the fullquestion object and taht it is the type of a string. This is to confim there is a readable question for students
    describe('fullquestion object', () => {
      test('should have a question property', () => {
        expect(data.balances.questions.fullquestion.question).toBeDefined();
        expect(typeof data.balances.questions.fullquestion.question).toBe('string');
      });
      // Checking that an answers array exists within the fullquestion object that will contain the multiple choice answers
      test('should contain the answers array', () => {
        // Deeply nested answer data being assigned to variable answers. Easier to reuse for multiple tests
        const answers = data.balances.questions.fullquestion.answer;
        expect(answers).toBeDefined();
        expect(Array.isArray(answers)).toBeTruthy();
      });

      // Using forEach to loop through the answers array to determine type and property
      describe('answers array', () => {
        test('should have answer items with required properties', () => {
          const answers = data.balances.questions.fullquestion.answer;
          answers.forEach(answer => {
            expect(answer.correct).toBeDefined();         // Checking that the correct property exists for each answer in the array which contains the boolean result
            expect(typeof answer.correct).toBe('boolean');   // Checking that the correct property is typeof boolean to determine correct answer
            expect(answer.text).toBeDefined();              // Checking that there is a text property on each answer
            expect(typeof answer.text).toBe('string');      // Checking that the text property has a typeof string so that answers are visible to students
          });
        });
      });
    });
  });
});




const userAttempt = require('./index');

describe('userAttempt', () => {
  const successBtn = 'Success Button';
  const incorrectBtn = 'Incorrect Button';
  const answers = data.balances.questions.fullquestion.answer;

  test('should return successBtn for correct answers and incorrectBtn for incorrect answers', () => {
    // Looping through the answer array
    answers.forEach(answer => {
      // realAnswer being assigned the answer.correct property boolean value for the userAttempt function.
      const result = userAttempt(answer.correct); 
      // ternary operator displaying successBtn if answer.correct matches the userInput in userAttempt fucntion or incorrectBtn if not.
      const expectedResult = answer.correct ? successBtn : incorrectBtn;
      console.log('Result:', result);
      console.log('Expected Result:', expectedResult); 
      expect(result).toBe(expectedResult);
    
     // The console will show a result and expectedResult for each answer in the answer array. They both have to show true to display the successBtn.
     // The 4th answer is correct in this example so the 7 & 8th console log are for the 4th answer. Both show true which  would show the successbtn. Others will show incorrectBtn.
    });
  });
});