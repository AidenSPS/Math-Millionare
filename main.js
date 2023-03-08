//Global Variables
var cashCounter = 0; //Displayed, going to have table which with correct questions highlighted
var totalQuestions = 13; //The ammount of questions that are in the game
var questionCounter = 0; //the current question you are on
var cashValue = [100,200,500,1000,2000,4000,8000,32000,64000,125000,250000,500000,10000000] //The array that listed cash values, index + 1 is correlated to each question. 
var diceFlag = false;
var randomQuestion = newRoll();
var loseFlag = false;
var numberDisplay = 1;


//DOM variables 
var yesButton = document.getElementById("yes");
var noButton = document.getElementById("no");
var questionDisplay = document.getElementById("questionDisplay");
var nextButton = document.getElementById("next")
var submitButton = document.getElementById("submit");
var nextButton = document.getElementById("next");
var answerBox = document.getElementById("answer");
var gradeLevel = document.getElementById("gradeLevel");
var homeTitle = document.getElementById("homeTitle");
var homeDescribe = document.getElementById("homeDescribe")

//Functions and Local variables
function yesPlay(){ //WORKS + REFORMATTED
	//Removing Title Buttons and Home Page Elements
	noButton.remove();
	yesButton.remove();
	homeTitle.remove();
	homeDescribe.remove();

	//Defining new HTMLObjects that are appended within the newly cleared space
	let answerBox = document.createElement("input");
	let submitButton = document.createElement("button");
	let nextQuestion = document.createElement("button");

	//Setting the attributes to the new elements
	nextQuestion.setAttribute("id","next");
	answerBox.setAttribute("id","answer");
	submitButton.setAttribute("id",'submit');
	submitButton.setAttribute('onClick','respondQuestion()');
	nextQuestion.setAttribute('onClick','askQuestion()');

	//Setting Text onto the buttons
	submitButton.innerText = "Submit Answer";
	nextQuestion.innerText = "Next Question";

	//Setting Question Display
	gradeLevel.innerText = "Question "+numberDisplay+":";

	//Appending new elements to the primary body
	document.body.appendChild(answerBox);
	document.body.appendChild(submitButton);
	document.body.appendChild(nextQuestion);

	//Computer Randomly asks a quesetion from askQuestion()
	askQuestion();
}


function noPlay(){ //WORKS + REFORMATTED
	//Reloads the page, implement next project here  
	location.reload(); 
}

function newRoll(){ //WORKS + REFORMATTED
	//defines a variable named "diceRoll". Is a floored integer between 0 and 4 and is returned to give the function a value
	let diceRoll = Math.floor(Math.random() * 5);
	return diceRoll;
}

function askQuestion(){ //WORKS + REFORMATTED
	//defines a local variable "consoleDisplay" and defines it as a random question within the primary "question" array. 
	//Takes "questionCounter to define what grade level to take from. 
	//Then calls upon a random question from that array. 
	//Then displays the question string from the question/answer array"
	let consoleDisplay = question[questionCounter][randomQuestion]?.[0];
	questionDisplay.innerText = consoleDisplay
	console.log(questionCounter); //Test, remove when finished
	console.log(randomQuestion); //Test, remove when finished
}


function respondQuestion(){ //WORKING + REFORMATTED
	//Compares string values of 'answerBox' and compares it to the answer item of the array in consoleDisplay

	//Variables to set answers, get the response and to set variable to user response
	let answerBox = document.getElementById("answer");
	let response = answerBox.value;
	let answer = question[questionCounter][randomQuestion]?.[1];
	console.log(answer); //Test, remove when finished

	//If you get the right answer, run the code below
	if(response == answer){
		//Add one to numberDisplay
		numberDisplay++;

		//Set cashCounter to the questionValue
		cashCounter = cashValue[questionCounter];

		//Set the string to equal correct
		questionDisplay.innerText = "Correct: Your current cash prize is for $"+cashCounter+" dollars";

		//Add one to questionCounter
		questionCounter++;

		//Roll a new question. Repeat until either win OR loseFlag is true. 
		randomQuestion = newRoll();
	}
	else{ //Otherwise, trigger the loseFlag and run the next condition below
		loseFlag = true;
		questionDisplay.innerText = "Im sorry, that answer is incorrect, you have lost all of you money, but we have benchmarked your cash at... $"+saveCash()+". If you would like to play again, please refresh the page";
	}
}

function saveCash(){
	let cashSaves = [0,1000,4000,64000,1000000];
	let cashmark = 0;
	if(loseFlag == true){
		if(questionCounter == 0 || 1 || 2){
			cashmark = 0;
		}
		if(questionCounter == 3 || 4){
			cashmark = 1000;
		}
		if(questionCounter == 5 || 6 || 7){
			cashmark = 4000;
		}
		if(questionCounter == 8 || 9 || 10 || 11){
			cashmark = 64000;
		}
		if(questionCounter == 13){
			cashmark = 10000000
		}
	}
	return cashmark;
}