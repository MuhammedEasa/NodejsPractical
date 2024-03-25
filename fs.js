const fs = require('fs')


// file creating
fs.writeFile("text.txt","Hello World!",(err)=>{
    console.log(err);
})

// file modifying
fs.appendFile("text.txt","APPENDED TEXTS",(err)=>{
    console.log(err);
})

// file reading
fs.readFile("text.txt","utf-8",(err,data)=>{
    console.log(data);
})

// file deleting
fs.unlink("text.txt",(err)=>{
    if(!err)
        console.log("Deleted Successfully");
    else  
        console.log("Error in Deleting")    
});