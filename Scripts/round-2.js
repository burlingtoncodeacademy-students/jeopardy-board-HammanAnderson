//---------------------SECOND ROUND -------------------------------//

//player turn shows last player in round 1 to begin
        
    // let player1Score = score from round-1
    // let player2Score = score from round-1
    

//WHILE player1 and player2 score < 5000 || all tiles(questions)not asked:
//while(player1Score && player2 Score < 5000 || all click events on questions !occured)

    //next button is disabled-----nextButton.disabled = true
    //guess button is disabled-----guessButton.disabled = true
    //pass button is disabled-----passButton.disabled = true
    
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

//Once a player score is >= 5000 or all question tiles are clicked
        //THEN enable next round button (OnClick + Even Listener)        

        //nextButton.disabled = false

 //use parameters and document location on final-round page to tie into this page --- will need to capture player scores somehow?