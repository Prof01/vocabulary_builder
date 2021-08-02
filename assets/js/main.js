// Questions Array
const questions = [
    {
    question: 'Complex',
    answers: ['Enthusiastic', 'Intriguing', 'Intricate', 'Uniform'],
    answer: 'Intricate'
},
{
    question: 'Abate',
    answers: ['Decrease', 'Abreviate', 'Forbid', 'Retire'],
    answer: 'Decrease'
},
{   
    question: 'Benovelent',
    answers: ['Spendthrift', 'Philanthropic', 'Philadephia', 'Benedict'],
    answer: 'Philanthropic'
},
{   
    question: 'Enlightened',
    answers: ['Enchantment', 'Interested', 'Informed', 'Unequivocal'],
    answer: 'Informed'
},
{
    question: 'Nebulous',
    answers: ['Clear', 'Value', 'Void', 'Vague'],
    answer: 'Vague'
},
{
    question: 'Catching',
    answers: ['Electrifying', 'Intriguing', 'Perplexing', 'Luring'],
    answer: 'Intriguing'
},
{
    question: 'Ubiquitous',
    answers: ['Uninamous', 'Unilateral', 'United', 'Common'],
    answer: 'Common'
},
{
    question:'Fade-off',
    answers: ['Deprecated', 'Pale-off', 'Fate-off', 'Fake-off'],
    answer: 'Pale-off'
},
{
    question: 'Rigged',
    answers: ['Realised', 'Won', 'Lost', 'Stolen'],
    answer: 'Stolen'
},
{
    question: 'Distinguished',
    answers: ['Despecable', 'Elevated', 'Eminent', 'Well-informed'],
    answer: 'Eminent'
},
{
    question: 'Juvenile',
    answers: ['Old', 'Delinquent', 'Young', 'Demon'],
    answer: 'Young'
},
{
    question: 'Identical',
    answers: ['Dire', 'Original', 'Homogeneous', 'Demon'],
    answer: 'Homogeneous'
},
{
    question: 'Surmount',
    answers: ['Lose', 'Befreind', 'Result', 'Overcome'],
    answer: 'Overcome'
},
{
    question: 'Anguish',
    answers: ['Sorrow', 'Curious', 'Mental', 'Beat'],
    answer: 'Sorrow'
},
{
    question: 'Legitimate',
    answers: ['Bald', 'Calm', 'Cool', 'Legal'],
    answer: 'Legal'
},
{
    question: 'Subservient',
    answers: ['Trivial', 'Submissive', 'Notice', 'Disrespect'],
    answer: 'Submissive'
},
{
    question: 'Effusive',
    answers: ['Emotional', 'Unfair', 'Supprise', 'Attractive'],
    answer: 'Emotional'
},
]

// Grabbing DOM Elements
const step = document.querySelector('#step');
const total = document.querySelector('#total');
const domTime = document.querySelector('#time');
const score = document.querySelector('#score');
const domQuestion = document.querySelector('#question');
const domAnswers = document.querySelector('#answers');
const marks = document.querySelector('#marks');
const main = document.querySelector('#main');
const quiz = document.querySelector('#quiz');

// Initializing vital variables
let questionNumber = 0;
let totalQuestions = 10;
// Start index
let start = 0;
let begin = 0;

// Score Variable
let totalScore = 0;
// Total time variable
let totalTime = 10;

// Text to Display Before Quiz start
const startHtml = `
<div id='startDiv' class='start'>
<div>
Choose the word of Nearest in Meaning
</div>
<button id='start'>START QUIZ</button>
</div>`

// Text to Display when Quiz is over
const quizOverHtml = `
	<div id='endDiv' class='end'>
		<div>
			<h4>SCORE: <span id='highScore'></span></h4>
		</div>
		<button id='replay'>PLAY AGAIN</button>
	</div>`

// This shows the Before Quiz Commerce Page
if(begin === 0) {
    // Hides all existing DOM Elements
	quiz.style.opacity = 0;
	quiz.style.height = '0px';
	quiz.style.width = '0px';

    // Appends startHTML to it the DOM
	const div = document.createElement('div')
	div.innerHTML = startHtml;
	main.append(div);

    // An event to show Quiz Questions
	const start = document.querySelector('#start')
	start.addEventListener('click', () => nextQuestion())
}

// Handles What happens when Quiz is over
function quizOver(finalScore) {
    // Hides all DOM Quiz Page when Quiz is over
	quiz.style.opacity = 0;
	quiz.style.height = '0px';
	quiz.style.width = '0px';

    // Shows Quiz over Page to the DOM
	const div = document.createElement('div')
	div.innerHTML = quizOverHtml;
	main.append(div);

    // Append final Score and Replay Button to the DOM
	const replay = document.querySelector('#replay')
	const highScore = document.querySelector('#highScore')
	highScore.innerHTML = finalScore;

    // Replay Button Event Listener
	replay.addEventListener('click', () => {
		 questionNumber = 0;
		start = 0;
		const endDiv = document.querySelector('#endDiv')
		endDiv.innerHTML = '';
        // Starts New Quiz Again
		nextQuestion()
	})
}

// Function for moving to the Next Question
function nextQuestion(endDiv){
    // Starts and Display Quiz to the DOM 
	begin = 1;
	quiz.style.opacity = 1;
	quiz.style.height = '80vh'
	quiz.style.width = '100%';

    // Hides all other Existing Elements from the DOM
	const startDiv = document.querySelector('#startDiv')
	startDiv.style.opacity = 0;
	startDiv.style.height = '0px';
	startDiv.style.width = '0px';
	startDiv.style.marginTop = '-25vh';

    // Generating Random Indexes
    let randomIndex = Math.floor(Math.random() * questions.length);

	// Increamenting the start index by 1 for changes in Total Answered Questions 
    start += 1;

    // Restart test Questions ends 
    if(start > totalQuestions) {
    	quizOver(totalScore)
        start = 0;
        questionNumber = 0;
        totalScore = 0;
    }
    
    // Incrementing the Question Number
    questionNumber += 1;
    // Clearing previous Marks from the DOM ready for new changes
    marks.style.opacity = 0;
    domAnswers.innerHTML = '';
    marks.innerHTML = '';

    // Destructure current Question object
    const {
        question, 
        answers, 
        answer
    }  = questions[randomIndex];
    
    // Appending Question Number to the DOM
    step.innerHTML = questionNumber;
    // Appending total Number of Questions to the DOM
    total.innerHTML = totalQuestions;
    // Appending Current Question to the DOM
    domQuestion.innerHTML = question;
    // Appending timer variable to the DOM
    domTime.innerHTML = totalTime;
    correctAnswer = answer.toLowerCase();

    // Looping and appending possible answers to the DOM
    answers.forEach((data) => {      
        // Creating new DOM Elements
    const li = document.createElement('li');
    const hr = document.createElement('hr');
    const hr1 = document.createElement('hr');

    // Giving the lis a class of 'ans'
    li.className = 'ans';
    // Giving each li onclick event attribute with a callback function
    li.setAttribute("onclick", 'choice(this)')
    // Appending Each answer to the li created
    li.append(data);
    
    // Appending changes made to the DOM 
    domAnswers.appendChild(hr1);
    domAnswers.appendChild(li);
    domAnswers.appendChild(hr);
    })
    
}

// Function to determing whether the answer is correct
function choice(e){
    // Getting Candidate choice of answer and converting it to Lowercase
    const selection = e.innerText.toLowerCase();
    
    // Condition for determing correct answer
    if(correctAnswer === selection) {
        // Handles what displays to the DOM hen a User Choice is Correct
        totalScore += 10;
        marks.style.backgroundColor = '#090';
        marks.innerHTML = 'Correct Answer'
        marks.style.opacity = 1;
        e.style.backgroundColor = '#090'
        score.innerHTML = totalScore;
        
        // Move to the next Question after 5 seconds
        setTimeout(nextQuestion, 500);
        
    } else {
        
        // Handles what displays to the DOM hen a User Choice is Wrong
        marks.innerHTML = 'Wrong Answer'
        marks.style.opacity = 1;
        marks.style.backgroundColor = 'red';
        e.style.backgroundColor = '#900';

         // Move to the next Question after 5 seconds
        setTimeout(nextQuestion, 500);

    }
}