//Declare the required files
const fs = require('fs');
const palin= require('./palin.js');
const div7= require('./div7.js');
const deleteNums = require('./delete_file');
const http = require('http');

//Write File Header
fs.writeFile('nums.txt', "Palindromes: \n", (err) =>{
    if(err) throw err;
    //Append File with Array Data
    fs.appendFile('nums.txt', JSON.stringify(palin.palindrome()), (err) =>{
        if(err) throw err;
        //Append File with Header
        fs.appendFile('nums.txt', "\n\nDiv7s: \n", (err) =>{
            if(err) throw err;
            //Append File with Array Data        
            fs.appendFile('nums.txt', JSON.stringify(div7.devisableBySeven()), (err) =>{
                if(err) throw err;
                // Log in console success
                console.log("File was successfully created");

                fs.readFile('./nums.txt', 'utf8', function(err, data){
                    if(err) throw err;
                    // Web server that returns a web page with the data on port 8000
                    http.createServer(function(request, response) {
                        response.write(data);
                        response.end();
                    }).listen(8000);
                    // Delete the nums.txt file
                    deleteNums.deleteFileNums();     
                });       
            });
        });
    });
});
