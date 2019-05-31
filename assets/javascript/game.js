
        var computerChoices = ["a", "b" , "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

        var wins = 0;
        var losses = 0;
        var guessesRemain = 8;
        var lettersGuessed = [];

        document.onkeyup = function(event) {
            var userGuess = event.key;
            var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
            var userChoices = ["a", "b" , "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

            var winsText = document.getElementById("wins-text");
            var lossesText = document.getElementById("losses-text");
            var remainText = document.getElementById("remain-text");
            var guessedText = document.getElementById("guessed-text");


            if (userChoices.indexOf(userGuess) > -1){
                if (userGuess === computerGuess) {
                    wins++;
                    guessesRemain = 8;
                    lettersGuessed = [];
                    alert("You Won! Yay!");
                }
                if (userGuess != computerGuess) {
                    guessesRemain --;
                    lettersGuessed.push(userGuess);
                }
                if (guessesRemain === 0) {
                    lettersGuessed = [];
                    losses ++;
                    guessesRemain = 8;
                }
                winsText.textContent = "wins: " + wins;
                lossesText.textContent = "losses: " +losses;
                remainText.textContent = "Remaining Guesses: " + guessesRemain;
                guessedText.textContent = "You've Guessed So Far: " + lettersGuessed.join(", ");

                
            }
        }