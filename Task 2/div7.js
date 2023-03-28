exports.devisableBySeven = function () {
    // Array to store the values
    numbersArray = [];
    for(i=2; i<1000; i++){
        // Push to Array if modulus 7
        if((i%7) === 0){
            numbersArray.push(i);
        }
    } 
    // Return the Array of number devisable by 7
    return (numbersArray);
};