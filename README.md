Balances Question Testing Suite:

Setup:
To access the test suite you will clone the repository, obtaining the URL (https://github.com/23011985uhi/assignment123011985.git). Then either through the CLI or an IDE , VScode in this case, download the repository containing the files. 

CLI:
In the CLI you can CD into where you want it stored and then use the command git clone followed by the URL e.g. C:\Users\user\Documents>git clone https://github.com/23011985uhi/assignment123011985.git. 
To then open the project use the command start vscode followed by the full filepath for the project like this start vscode://file/c:/users/user/documents/assignment123011985.
This will open the project within VScode.

VSCode:
Using the VScode user interface you can simply click the explorer icon or press ctrl+shift+e and click the button that says "clone repository". You are then prompted to enter the github URL (https://github.com/23011985uhi/assignment123011985.git) and it will ask where 
to save the project on your computer. Pick a location and then you will be prompted if you want to open the project immediately, select yes and the project will open.

The repository does not contain node modules and so you will need to use npm install to obtain all dependencies for the project to run properly. After this a simply npm run test will start the testing suite and proceed through the tests.



Testing Suite:
The first set of tests revolve around probing the dataset for the data that is required for the specific balances question. The first test checks that a balances object exists within the data. If this test passes then the next set of tests checks for the question within
the balances object and also checks the value of it is that of a string. This is to check that the balances object has a question property with a value of string which should display a readable line/paragraph of text when rendered. Next test checks for an answers array within
the balances object that will contain the multiple choice answers and checks that it is an array. Next tests loop through the answers array with "forEach" to check that they have a "correct" property with a boolean value and then tests that each answer also has a text property 
with a string value. These tests are checking that the answers will have a readable text value displaying the possible answers and also have a correct property to determine which answer is the correct answer.
This was the first choice to be tested since the blances object is required for the question to render on a page for users to interact with. The tests check for all parts of the question required (that were provided in the data) to be able to render the question fully for 
students to be able to attempt the question.

The second set of tests are based around a student attempting to answer the question. Since the answers have a boolean property showing true for right answers and false for wrong answers, a click of a radio button would also be a true/false boolean since the choice would be true while the others would be false as they hadn't been chosen. By the user attempt as true then comparing it to the boolean property on the answer data, if they match then the user would have picked a correct answer and if they don't then it would be wrong. The test loops through the answers array comparing the user attempt(true) to each of the the "correct" property for each answer then by mocking the correct button or wrong answer button. If the two boolean match then the correct button will be displayed but if they don't the wrong answer button will be displayed.


