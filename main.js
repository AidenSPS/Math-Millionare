//Question Arrays (needed for randomization)
var gradeOne = [[["I have 5 cookies, I ate 2, How many do I have left?"],["3"]],[["I had 10 dollars, I was given 5 in allowance, how many dollars do I have?"],["15"]],[["What is 5 + 5?"],["10"]],[["What is 5-5?"],["0"]],[["When creating this the time is 10:50AM, I spent fifty minutes and I will spend an hour and a half making this game, how much time will I spend making this game?"],["40 Minutes"]]]; //[Main] -->[Ranomized Question] -->[Question] --> [Answer]

var gradeTwo = [[["I have a sequence of numbers, (2,4,6,8,10,12), what is the next number in the sequence?"],["14"]],[["I have a sequence of numbers, (100,90,80,70), what is the next number in the sequence?"],["60"]],[["I have 5 dollars to start with, each week I get 5 more dollars, how many dollars will I have after 7 weeks?"],["35 Dollars"]],[["I have 100 dollars, I then split it among my ten best friends, how much money did each person, including myself recieve after the split?"],["10"]],[["What is 1/2 + 5/10?"],["1"]]];

var gradeThree = [[["I bought a piece of land recently with 5 acre by 7 acre dimentions. What is the Area and Perimeter of my land in acres? Put answer with a / and with no spaces"],["35/24"]],[["I have two shapes, I have a right triangle and an equalateral triangle, what does the right triangle have that the equalateral triangle doesn't? Put your in 'A (x)(measurement) angle' "],["A 90 degree angle"]],[["I have a right triangle with a height of 4 and a base of 5, what is the Area of the Triangle?"],["10 Units"]],[["What is 7/3 as a mixed number? Put your answer in (x) (y)/(z) format (ie. 5 1/5)"],["2 1/3"]],[["What is 4 1/3 as an improper fraction?"],["13/3"]]];

var gradeFour = [[["What is 6/10 as a decimal? put format in (x or 0).(y)"],["0.6"]],[["What is  6/18 - 1/3?"],["0"]],[["What is 5/10 x 4/5? Put in simplest form."],["2/5"]],[["What is the mean within the set of numbers? (1,2,3,4,5,6,7,8,9,10)"],["5.5"]],[["What is the median of the set of numbers? (1,2,3,4,5)"],["3"]]];

var gradeFive = [[["How would you express the sum of 508 and x?"],["508 + x"]],[["What is 14/7 as a decimal? Use (x or 0).(y) format."],["2.0"]],[["If you lived in Portland, Oregon and you had a friend who lived in Springfield, Massachusetts. If it is 8am in Portland, what time is it in Springfield?"],["11 AM"]],[["Compute: 3^2 (3 squared)."],["9"]],[["What is the missing base of the following number? 1000"],["10"]]];

var gradeSix = [[["I have 3 green balls, I then put it in a bag with 5 purple balls. What is the ratio between GREEN BALLS and PURPLE BALLS? Write in (x):(y)"],["3:5"]],[["What are the whole number factors of 50? Write factors within commas (ie: 10 = 1,2,5,10)"],["1,2,5,10,25,50"]],[["what is 50% of 5000"],["2500"]],[["Compute: (4/2)/(2)"],["1"]],[["What shape does a 45/45/45 represent?"],["Equalateral Triangle"]]];

var gradeSeven = [[["Compute: f(x) = 1/2x + 10. What is f(5)"],["12.5"]],[["What is 3/4 as a percent?"],["75%"]],[["Compute for x: y = x + 14; when y = 43. Write in x = (answer)"],["x = 29"]],[["I have a 30/60/90 triangle. Solve for the hypotenuse or x, given the following numbers. 3/4/x"],["5"]],[["What is the square root of 25?"],["5"]]];

var preAlgebra = [[["Solve for x given the quadratic; (x^2 * 5 + 1)"],["5"]],[["If I have an ordered pair, (1,1), (2,1), (2,2); Is this a function? Answer with Yes or No"],["No"]],[["Solve the following cubic: x^3 when x = 2"],["8"]],[["Is the following sequence Arithmetic or Geometric: (2,4,6,8,10)"],["Arithmetic"]],[["I have a 45/45/45 Triangle, one of my side lengths is 10 units? What are the side lengths of the other two side lengths?"],["10"]]];

var algebra1 = [[["Using Equation Manipulation, what does i equal when y = print? Solve using i ="],["i = y/prnt"]],[["Using your knowledge of polynomials, what is the highest degree of the following polynomial. x^6 + x^3 + x"],["6"]],[["What is the cube root of 64?"],["4"]],[["When points (2,1) and (0,7) are plotted on a real plain, where is the midpoint with respect to the y-axis?"],["x = 1"]],[["What is the absolute value of 46?"],["46"]]];

var geometry = [[["Using trigonometry, find sin(60)? Round to the nearest 10th"],["−0.3"]],[["Prove why a 30/60/90 is a right triangle?"],["It has a 90 degree angle"]],[["If f(x) = 5x + 8. And f(x) is a parent function, describe the transformation: f'(x) = 5x + 10?"],["Translation of 2 units to the right"]],[["What trigonometric function is used to solve for the hypotenuse?"],["tan(x)"]],[["What are the three sides of a triangle when in relation to trigonometry called? List with commas and Capital letters (ie Fifty, Fourty, Thirty)."],["Adjacent, Opposite, Hypotenuse"]]];

var algebra2 = [[["Solve the for x: y = 10x^3 - 5x^2 - 3x + 486"],[/* Solve for this on paper */]],[["What does log(10) equal?"],["1"]],[["Solve for x: y = log_10(10^x)"],["x"]],[["True or False: ln(x) and log_10(x) are the same? Answer with True or False as written here."],["False"]],[["What is the approximate value of e? Round to the nearest 10th place"],["2.7"]]];

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

//DOM variables 
var yesButton = document.getElementById("yes");
var noButton = document.getElementById("no");
var questionDisplay = document.getElementById("questionDisplay");
var nextButton = document.getElementById("next")


//Functions and Local variables

function yesPlay(){
	noButton.remove();
	yesButton.remove();
	let answerBox = document.createElement("input");
	let submitButton = document.createElement("button");
	let nextQuestion = document.createElement("button");
	nextQuestion.setAttribute("id","next");
	answerBox.setAttribute("id","answer");
	submitButton.setAttribute("id",'submit')
	submitButton.innerText = "Submit Answer";
	nextQuestion.innerText = "Next Question";
	submitButton.setAttribute('onClick','respondQuestion()');
	nextQuestion.setAttribute('onClick','nextQuestion()');
	document.body.appendChild(answerBox);
	document.body.appendChild(submitButton);
	document.body.appendChild(nextQuestion);
	askQuestion();
}


function noPlay(){
	location.reload(); 
}

function newRoll(){
	let diceRoll = Math.floor(Math.random() * 5) + 1;
	return diceRoll;
}

function askQuestion(){ //Asking a question and responding to it are different functions for notice. 
	let consoleDisplay = question[questionCounter][randomQuestion][0]; //Google Console says there is a problem here
	questionDisplay.innerText = consoleDisplay
	console.log(questionCounter);
	console.log(randomQuestion);
	console.log(consoleDisplay);
}


function respondQuestion(){ //Compares string values of 'answerBox' and compares it to the answer item of the array in consoleDisplay
	let answerBox = document.getElementById("answer");
	let response = answerBox.value;
	let answer = question[questionCounter][randomQuestion][1]; //Google Console says there is a problem here (Most likely, if there is an error at line 78:64, there is most likely one here too).
	console.log(answer);
	if(response == answer){
		cashCounter = cashValue[questionCounter];
		switch(cashCounter){ //To check if the cashCounter value has aligned with the saveCash benchmarks listed in switch
		case 1000:
			saveCash = 1000
		case 32000:
			saveCash = 32000
		case 64000:
			saveCash = 64000
		default:
			saveCash = 0;
			break;
	}
		questionDisplay.innerText = "Correct for $"+cashCounter+" dollars";
		questionCounter++
		randomQuestion = newRoll();
	}

	else {
		questionDisplay.innerText = "Im sorry, that answer is incorrect, you have lost all of you money, but we have benchmarked your cash at... $"+saveCash;
	}
}


function nextQuestion(){ //Function is to loop through all of the questions in "questions" array. 
	for(var i = questionCounter; i < totalQuestions; i++){
		askQuestion();
		respondQuestion();
	}
}