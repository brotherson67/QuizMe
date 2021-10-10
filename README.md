DESCRIPTION
    a quiz application
        the application needs to change pages once an item is selected
        have a timer
        have a hyperlink which takes you to 'high scores' page
        display if the selected choice is correct or not
        take you to a new page after each question
______________________________________________________________________________

REQUIRMENTS
    GIVEN I am taking a code quiz

        WHEN I click the start button
        THEN a timer starts and I am presented with a question

        WHEN I answer a question
        THEN I am presented with another question

        WHEN I answer a question incorrectly
        THEN time is subtracted from the clock
        
        WHEN all questions are answered or the timer reaches 0
        THEN the game is over
        
        WHEN the game is over
        THEN I can save my initials and score

_______________________________________________________________________________
INITIAL-OUTLINE
    1.First page will be blank with nothing but a welcome banner and a 'Start' button and a 'high scores' page 
    2.If the 'Start' button is selected, 
        * timer will start
        * user will be presented with a question 
        * the user can:
            1) select an answer to the question
                * IF the selection is right, the selection will turn green and 'Correct' will show on the bottom of the screen.
                * If the Selection is wrong, the option will turn red and 'Wrong Choice' will show at the bottom of the screen.
                * the user will then be moved to the next screen after 2 seconds
                
            2) select 'view high scores'
                * the quiz will imediatly quit and the score will not be compiled

        * After the user has passed though all of the questions their score will be compiled. 
            1) Things the score can be made from:
                A) Time remaining in the test +5 for each correct question
                B) Time remaining in the test -5 for each correct quesiton
                c) assign random amounts for each question then multiply the sum by time remaining
                D) percent correct times time remaining
        
        * A screen saying "good Job" will prompt the player to input initials and display score

        * Score and initials will then be added to score board
            This can be an array?
        * On Score page player will be presented with the option to try again
_________________________________________________________________________________
DEVELOPMENT OUTLINE

HTML
    1) create LandingPage 
        the landing page will contain:
            High Scores link
            Welcome message
            Begin option
    2) create 3 identical quiz pages (if I want more I can add more later)
        Each page will contain
            a link to go see the high scores
            a timer counting down from 60
            4 buttons which will be the possible answers
    3) create score display, name entry page
        Will contain: 
            the player score
            prompt for player to enter their name
    4) Create High score page
        will contain:
            a numberically sorted list of the 5 best high scores
            a button to retake the quiz


CSS 
    1)The background of each page will be gunmetal grey
    2)The buttons will be light blue initally 
    3)the corners of all buttons will be rounded

JAVASCRIPT
    TIMER
        this will be a 'setInterval' function
            there will need to be an initial global variable to represent starting time
            every second the number will decrement 1 until it reaches 0
            function will activate when the 'start' button is selected and not before 

    QUIZ PAGES
        each page will be a different 

    HIGH-SCORES

    MOVING FROM ONE PAGE TO THE NEXT. 
        to start
            1) for the first quiz questions, the quiz section will replace the welcome div
            2) 

_________________________________________________________________________________________________________

WIREFRAMES

    INDEX
        ![image](https://user-images.githubusercontent.com/89677641/136671727-b1f80f46-10dc-400a-a726-71f42e5b9b1a.png)

    QUESTIONS
        ![image](https://user-images.githubusercontent.com/89677641/136676733-98dc6c62-23aa-4cb4-8016-6ba430c64d45.png)
