//Question Arrays (needed for randomization)
var gradeOne = [[["I have 5 cookies, I ate 2, How many do I have left?"],["3"]],[["I had 10 dollars, I was given 5 in allowance, how many dollars do I have?"],["15"]],[["What is 5 + 5?"],["10"]],[["What is 5-5?"],["0"]],[["When creating this the time is 10:50AM, I spent fifty minutes and I will spend an hour and a half making this game, how much time will I spend making this game?"],["40 Minutes"]]]; //[Main] -->[Ranomized Question] -->[Question] --> [Answer]

var gradeTwo = [[["I have a sequence of numbers, (2,4,6,8,10,12), what is the next number in the sequence?"],["14"]],[["I have a sequence of numbers, (100,90,80,70), what is the next number in the sequence?"],["60"]],[["I have 5 dollars to start with, each week I get 5 more dollars, how many dollars will I have after 7 weeks?"],["35 Dollars"]],[["I have 100 dollars, I then split it among my ten best friends, how much money did each person, including myself recieve after the split?"],["10"]],[["What is 1/2 + 5/10?"],["1"]]];

var gradeThree = [[["I bought a piece of land recently with 5 acre by 7 acre dimentions. What is the Area and Perimeter of my land in acres? Put answer with a / and with no spaces"],["35/24"]],[["I have two shapes, I have a right triangle and an Equilateral Triangle, what does the right triangle have that the Equilateral triangle doesn't? Put your in 'A (x)(measurement) angle' "],["A 90 degree angle"]],[["I have a right triangle with a height of 4 and a base of 5, what is the Area of the Triangle?"],["10 Units"]],[["What is 7/3 as a mixed number? Put your answer in (x) (y)/(z) format (ie. 5 1/5)"],["2 1/3"]],[["What is 4 1/3 as an improper fraction?"],["13/3"]]];

var gradeFour = [[["What is 6/10 as a decimal? put format in (x or 0).(y)"],["0.6"]],[["What is  6/18 - 1/3?"],["0"]],[["What is 5/10 x 4/5? Put in simplest form."],["2/5"]],[["What is the mean within the set of numbers? (1,2,3,4,5,6,7,8,9,10)"],["5.5"]],[["What is the median of the set of numbers? (1,2,3,4,5)"],["3"]]];

var gradeFive = [[["How would you express the sum of 508 and x?"],["508 + x"]],[["What is 14/7 as a decimal? Use (x or 0).(y) format."],["2.0"]],[["If you lived in Portland, Oregon and you had a friend who lived in Springfield, Massachusetts. If it is 8am in Portland, what time is it in Springfield?"],["11 AM"]],[["Compute: 3^2 (3 squared)."],["9"]],[["What is the missing base of the following number? 1000"],["10"]]];

var gradeSix = [[["I have 3 green balls, I then put it in a bag with 5 purple balls. What is the ratio between GREEN BALLS and PURPLE BALLS? Write in (x):(y)"],["3:5"]],[["What are the whole number factors of 50? Write factors within commas (ie: 10 = 1,2,5,10)"],["1,2,5,10,25,50"]],[["what is 50% of 5000"],["2500"]],[["Compute: (4/2)/(2)"],["1"]],[["What shape does a 45/45/45 represent?"],["Equilateral Triangle"]]];

var gradeSeven = [[["Compute: f(x) = 1/2x + 10. What is f(5)"],["12.5"]],[["What is 3/4 as a percent?"],["75%"]],[["Compute for x: y = x + 14; when y = 43. Write in x = (answer)"],["x = 29"]],[["I have a 30/60/90 triangle. Solve for the hypotenuse or x, given the following numbers. 3/4/x"],["5"]],[["What is the square root of 25?"],["5"]]];

var preAlgebra = [[["Solve for x given the quadratic; (x^2 * 5 + 1)"],["5"]],[["If I have an ordered pair, (1,1), (2,1), (2,2); Is this a function? Answer with Yes or No"],["No"]],[["Solve the following cubic: x^3 when x = 2"],["8"]],[["Is the following sequence Arithmetic or Geometric: (2,4,6,8,10)"],["Arithmetic"]],[["I have a 45/45/45 Triangle, one of my side lengths is 10 units? What are the side lengths of the other two side lengths?"],["10"]]];

var algebra1 = [[["Using Equation Manipulation, what does i equal when y = print? Solve using i ="],["i = y/prnt"]],[["Using your knowledge of polynomials, what is the highest degree of the following polynomial. x^6 + x^3 + x"],["6"]],[["What is the cube root of 64?"],["4"]],[["When points (2,1) and (0,7) are plotted on a real plain, where is the midpoint with respect to the y-axis?"],["x = 1"]],[["What is the absolute value of 46?"],["46"]]];

var geometry = [[["Using trigonometry, find sin(60)? Use Radians. Use sqrt to symbolize square root. sqrt(5)/7 for a example answer"],["sqrt(3)/2"]],[["Prove why a 30/60/90 is a right triangle?"],["It has a 90 degree angle"]],[["If f(x) = 5x + 8. And f(x) is a parent function, describe the transformation: f'(x) = 5x + 10?"],["Translation of 2 units to the right"]],[["What trigonometric function is used to solve for the hypotenuse?"],["tan(x)"]],[["What are the three sides of a triangle when in relation to trigonometry called? List with commas and Capital letters (ie Fifty, Fourty, Thirty)."],["Adjacent, Opposite, Hypotenuse"]]];

var algebra2 = [[["Solve the for y: y = 5x^2 - 10x + 60"],["5(x^2 - 2x - 12)"]],[["What does log(10) equal?"],["1"]],[["Solve for x: y = logBASE10(10^x)"],["x"]],[["True or False: ln(x) and log_10(x) are the same? Answer with True or False as written here."],["False"]],[["What is the approximate value of e? Round to the nearest 10th place"],["2.7"]]];

var preCalculus = [[["Compute: 5/0"],["undefined"]],[["What is the formula for any and all power functions?"],["y = kx^p"]],[["Find the hole in the following function: (7x + 3)(x-8)/(x-8)"],["8"]],[["If I have a trigonometic function of f(x) = sin(x), f'(x) would equal? Put f'(x) before your answer"],["f'(x) = sin^-1(x)"]],[["What is the amplitude of f(x) if the local minimum is 12 and the local minimum is 2 with a domain restriction of -5 <= x <= 15?"],["6"]]];

var bonus = [[["On a real x-y plane, does y = function(x)?"],["Yes"]],[["Compute: 5 % 5 =?"],["0"]],[["I have a polynomial, x^10 + x = f(x); How many zeros are in my function?"],["10"]],[["Compute from Binary to Integer: 11101001 + 11111011? You may use a binary calculator if you are stuck"],["484"]],[["Compute from Integer to Binary: 40 - 25 = ?"],["1111"]]];

//Global Variables
var question = [gradeOne, gradeTwo, gradeThree, gradeFour, gradeFive, gradeSix, gradeSeven, preAlgebra, algebra1, geometry, algebra2, preCalculus, bonus]; 


//NOTE: This (^) is a 4 dimensional array
var cashCounter = 0; //Displayed, going to have table which with correct questions highlighted
var totalQuestions = 13; //The ammount of questions that are in the game
var questionCounter = 0; //the current question you are on
var cashValue = [100,200,500,1000,2000,4000,8000,32000,64000,125000,250000,500000,10000000] //The array that listed cash values, index + 1 is correlated to each question. 
var saveCash = 0; //Cash save benchmark, labled as a psuedo high score. 
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
		console.log("Current Cash Value: "+cashCounter+" dollars"); //Test, remove when finished
		console.log("Cash Saved: "+saveCash); //Test, remove when finished
		console.log(loseFlag); //Test, remove when finished

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
	}

	//If the answer is not correct, set loseFlag to true, set questionDisplay text to string, remove submit button and next question button. Adds new game button (later implementation A 0.8)
	if (loseFlag == true){
		questionDisplay.innerText = "Im sorry, that answer is incorrect, you have lost all of you money, but we have benchmarked your cash at... $"+saveCash+". If you would like to play again, please refresh the page";
	}
}