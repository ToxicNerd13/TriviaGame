$(document).ready(function () {

    // Create array with possible questions/answers
    let questions = [
        {
            question: "In which game does Vincent Valentine appear?",
            choices: ["Final Fantasy X", "Final Fantasy VII", "Final Fantasy III", "Final Fantasy IX"],
            answer: "Final Fantasy VII"
        },
        {
            question: "What is the coded language spoken by Rikku and her family in Final Fantasy X?",
            choices: ["Aura Bead", "Farplane", "Al Bhed", "Kala Brea"],
            answer: "Al Bhed"
        },
        {
            question: "What giant yellow bird can you ride around on?",
            choices: ["Chocobo", "Phoenix", "Cockatrice", "Big Bird"],
            answer: "Chocobo"
        },
        {
            question: "What is the currency in the Final Fantasy universe called?",
            choices: ["Silver", "Dosh", "Gold", "Gil"],
            answer: "Gil"
        },
        {
            question: "What is the name of the floating, rodent-like NPC that helps your character along their quest?",
            choices: ["Meeple", "Moogle", "Peggle", "Squiggle"],
            answer: "Moogle"
        },
        {
            question: "What does an Ether do?",
            choices: ["Restore MP", "Cure Blind", "Restore HP", "Grant Vitality"],
            answer: "Restore MP"
        },
        {
            question: "Which of these FFX characters can summon?",
            choices: ["Tidus", "Rikku", "Yuna", "Auron"],
            answer: "Yuna"
        },
        {
            question: "What airship-flying character appears in almost every Final Fantasy?",
            choices: ["Cid", "Seymour", "Barrett", "Noctis"],
            answer: "Cid"
        }
    ];

    // Variable to track correct & incorrect guesses
    let correct = 0;
    let incorrect = 0;

    // Set first question to use the first object in questions array
    let currentQuestion = 0;

    // Set variable to represent value of whatever radio button is currently clicked
    let userGuess = "";
    // This will reassign every time user clicks a guess

    // Set variable to represent which question text will be displayed
    let questionDisplayed = questions[currentQuestion].question;

    let answerDisplayed = questions[currentQuestion].choices

    // By default, Game div is hidden until Start button is clicked
    $(".gameDiv").hide();

    // Function to show question
    function showQuestion() {
        // Add an h2 with questions[currentQuestion].question
        $("#questionDiv").html(`<h2>${questionDisplayed}</h2>`)
        // Populate div with 4 radio buttons & have their <span> say questions[currentQuestion].choices[i] with a For Loop
        for (i = 0; i < 4; i++) {
            let radio = $(`<input type="radio" name="answer">${answerDisplayed[i]}<br>`);
            radio.attr("value", answerDisplayed[i]);
            $("#answerDiv").append(radio);
        };
        currentQuestion++;
    };

    // Function to start game
    $("#startBtn").on("click", function () {
        // Hide start button
        $("#startBtn").hide();
        // Display first question
        $(".gameDiv").show();
        showQuestion();
    });

    // Function to create 4 radio buttons & give them values

    // Function to check answer -- NEED TO CALL THIS WITH A CLICK EVENT (so it checks the answer for the right question each time)
    function checkAnswer() {
        if (questions[currentQuestion].answer === userGuess) {
            console.log("Correct!");
            correct++;
        }
        else {
            console.log("Incorrect!");
            incorrect++;
        };
        currentQuestion++;
    };


    // Function to populate new radio buttons for each question, all unclicked and with <span> text for each one with questions.choices[index] -- For loop?


})