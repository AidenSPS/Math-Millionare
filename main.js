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
}


function respondQuestion(){ //WORKS + REFORMATTED
	//Compares string values of 'answerBox' and compares it to the answer item of the array in consoleDisplay

	//Variables to set answers, get the response and to set variable to user response
	let answerBox = document.getElementById("answer");
	let response = answerBox.value;
	let answer = question[questionCounter][randomQuestion]?.[1];

	//If you get the right answer, run the code below
	if(response == answer){
		//Add one to numberDisplay
		numberDisplay++;

		console.log("Current Number Should be Displayed: "+numberDisplay);
		//Set cashCounter to the questionValue
		cashCounter = cashValue[questionCounter];

		//Set the string to equal correct
		questionDisplay.innerText = "Correct: Your current cash prize is for $"+cashCounter+" dollars";

		if(saveCash() == 1000000){
			questionDisplay.innerText = "CONGRADULATIONS!!!! YOU HAVE JUST WON ONE MILLION DOLLARS! To play again, please refresh the page. If you would like to play something else, check out my page on Github.com www.github.com/AidenSPS. There is more to come.";
		}

		//Add one to questionCounter
		questionCounter++;

		//Roll a new question. Repeat until either win OR loseFlag is true. 
		randomQuestion = newRoll();
	}

	else{ //Otherwise, trigger the loseFlag and run the next condition below
		loseFlag = true;
		questionDisplay.innerText = "Im sorry, that answer is incorrect, you have lost all of you money, but you have reached a cash savepoint worth... $"+saveCash()+". If you would like to play again, please refresh the page";
	}
}

function saveCash(){ //WORKING + FORMATTED
	let cashSaves = [0,1000,4000,64000,1000000];
	let cashmark = 0;
	if(loseFlag == true){
		switch(cashCounter){
			case 0:{
				cashmark = 0;
				return cashmark;
			}
			case 100:{
				cashmark = 0;
				return cashmark;
			}
			case 200:{
				cashmark = 0;
				return cashmark;
			}
			case 500:{
				cashmark = 0;
				return cashmark;
			}
			case 1000:{
				cashmark = 1000;
				return cashmark;
			}
			case 2000:{
				cashmark = 1000;
				return cashmark;
			}
			case 4000:{
				cashmark = 4000;
				return cashmark;
			}
			case 8000:{
				cashmark = 4000;
				return cashmark;
			}
			case 32000:{
				cashmark = 4000;
				return cashmark;
			}
			case 64000:{
				cashmark = 64000;
				return cashmark;
			}
			case 125000:{
				cashmark = 64000;
				return cashmark;
			}
			case 250000:{
				cashmark = 64000;
				return cashmark;
			}
			case 500000:{
				cashmark = 64000;
				return cashmark;
			}
			case 10000000:{
				cashmark = 10000000;
				return cashmark;
			}
			default:{
				console.log("Error in saveCash(). Fix please");
			}
		}
	}
}