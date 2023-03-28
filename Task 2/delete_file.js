exports.deleteFileNums = function () {
    const fs = require('fs');
    
    // Delete the nums.txt file
    fs.unlink('nums.txt', (err) => {
        if (err) throw err;
        //Display if was successful
        console.log('nums.txt was deleted');
    });
};