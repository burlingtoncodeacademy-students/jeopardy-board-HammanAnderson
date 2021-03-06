//How do I use async await for this? I keep being told that fetch is not a function and the path is not recognized even though it is exactly as below

//Get clues from JSON file to use throughout app
let jsonClues = require('./clues.json')
// console.log(jsonClues)

//Pull out category headings
let nature = jsonClues.placeholderQuestions[0].category
// console.log(nature)
let animals = jsonClues.placeholderQuestions[11].category
// console.log(animals)
let computers = jsonClues.placeholderQuestions[22].category
// console.log(computers)
let mythology = jsonClues.placeholderQuestions[33].category
// console.log(mythology)
let history = jsonClues.placeholderQuestions[44].category
// console.log(history)
let general = jsonClues.placeholderQuestions[55].category
// console.log(general)

console.log(jsonClues)

 
Object.keys(jsonClues.placeholderQuestions).forEach(function(category){
    console.log(category)
})

//gives all key names
for (let key in jsonClues.placeholderQuestions){
    for (let key1 in jsonClues.placeholderQuestions[key]){
      
        Object.values(jsonClues.placeholderQuestions[key][key1])

        };
    }

console.log(Object.keys(jsonClues.placeholderQuestions[0]))

console.log(Object.values(jsonClues.placeholderQuestions[0]))


///get new array with only category key values --- then use to populate value of category headers


//get all categories
function getCategories(arr){
    return arr.map(function(o){
        return o.category;
    })
}

let categories = getCategories(jsonClues.placeholderQuestions)

console.log(categories)

//get all answers
function getAnswers(arr){
    return arr.map(function(o){
        return o.answer;
    })
}

let answers = getAnswers(jsonClues.placeholderQuestions)

console.log(answers)


//get all questions
function getQuestions(arr){
    return arr.map(function(o){
        return o.question;
    })
}

let questions = getQuestions(jsonClues.placeholderQuestions)

console.log(questions)



//iterate through array of objects 


//------------------------------------------------------//
//Once data is fetched, then extract the categories from the arrays. This information needs to be added to the category headings - but only 1 of each. --Should I delete duplicates in array?

//Need to also extract the question and answer data and assign them accordingly. Question text would not display until button is clicked. Answer display would not show.

//I know a lot of this project has to do with iterating over arrays and using eventhandlers and listeners as well as JSON data. I had a lot of trouble with this project and at the least wanted to submit my notes to make sure I'm on the right track...

//I feel like I comprehend a lot of the concepts covered so far. Honestly though I am struggling with the projects and on this one I just felt extremely stuck. I know I should ask questions but I have no idea how to phrase my questions or what it is that I'm not comprehending. I would appreciate some advice on how to proceed and improve. I want to have fun with these projects and right now I am struggling to even get something submitted...let alone have fun.

//-----------DOM Elements / Query Selectors-------------------------//

// //players 
let player1 = document.getElementById ("player1")
let player2 = document.getElementById ("player2")

// //Turn
let turn = document.getElementById("turn")

// //User Input
let answerInput = document.getElementById("answer")

// //Game Play 
// //question 
let questionTile = document.querySelector()


// // //answer - successful (not sure where this should illustrate on page)
// // //answer - fail

// //Buttons
// //guess
let guessButton = document.getElementById("guess")
// //pass
let passButton = document.getElementById("pass")
// //next
let nextButton = document.getElementById("next")

// //---------------ROUND ONE PAGE -------------------------------//

// //player turn shows player 1 to begin
//     //---------player 1, it is your turn
//     //---------both player 1 and 2 show score value of 0


//     //I know score is a DOM element as well but I wasn't sure how to break apart my css/html code yet to reflect this.
    let player1Score = 0
    let player2Score = 0

// //WHILE player1 and player2 score < 2500 || all tiles(questions)not asked:
// //while(player1Score && player2 Score < 2500 || all click events on questions !occured)


// ------------- Stuck on game play

while(player1Score < 2500 || player2Score < 2500 || ){

//     //next button is disabled
    nextButton.disabled = true
//     //guess button is disabled
    guessButton.disabled = true
//     //pass button is disabled
    passButton.disabled = true


//WHEN current player chooses question tile on gameboard(addEventListener)(onClick event)

//guess button is endabled-----guessButton.disabled = false
//pass button is enabled-----passButton.disabled = false

//number value of question(tile) needs to be recorded into a variable to add/subtract from player score
//the TEXTCONTENT of question needs to display to player --- not quite certain on how this would be formated.

//IF current player enters input in form(waiting on input - event listener) and hits guess(submit - event)
//THEN the input is compared against the question answer
//IF player curren player answerInput === answer
//THEN add question value to player score + update the score variable.
//reassign player score variable
//else subtract question value from player score + update the score variable.
//reassign player score variable
//Alert to player whether they are correct or not and what current score is?

//else if current player clicks pass or score is subtracted from

//THEN alert other player it is their turn.
///THEN the input is compared against the question answer
//IF player answerInput === answer
//THEN add question value to player score + update the score variable.
//reassign player score variable
//else subtract question value from player score + update the score variable.
//reassign player score variable

//Alert to player whether they are correct or not and what current score is?

//Once both player 1 and 2 have tried to guess/pass the question,

//THEN that question tile is disabled + text on tile becomes blank
//questionTile.disabled = true --- delete text on tile?

//guess and pass buttons again disabled

//guess button is disabled-----guessButton.disabled = true
//pass button is disabled-----passButton.disabled = true

//Player turn remains with last player to hit guess. Then they have the opportunity to continue loop if while value is still true.

//Once a player score is >= 2500 or all question tiles are clicked
//THEN enable next round button (OnClick + Even Listener)

//nextButton.disabled = false

//use parameters and document location on round-2 page to tie into this page --- will need to capture player scores somehow?
