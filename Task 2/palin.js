exports.palindrome = function () {
    
    //Array to store the palindromes
    let arrayNumbers = [];

    // Test for all the palindromic numbers between 1 and 1000
    for(number=2; number<1000; number++){
        
        // Convert number to string for tests
        let palinWord = number.toString();

        // Get the index length of the number
        let lastLetterIndex = (palinWord.length -1);

        // Start with true statement until proven false
        let palinTrue = true;
        // Last letter Index
        let x = lastLetterIndex;
        // For loop To test for palindrome
        for(i=0; i<=lastLetterIndex; i++){
            
            //Compare the letters, if not the same then return false palindrome
            if(palinWord[i] != palinWord[x]){
                palinTrue = false;
            } 
            // Subtract index end 1
            x--;
        }

        // If True that it is a Palindrome, Add to the Array
        if(palinTrue === true){
            arrayNumbers.push(number); 
        }      
    }

    // Return the Array of palindrome numbers
    return(arrayNumbers);
};




