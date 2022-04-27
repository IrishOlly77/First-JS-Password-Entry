var password  = "password"; //Users correct password
var response; //Store whatever the user enters in
var entryCount = 0; // These last 2 vars limit the entry
var entryLimit = 3; // amounts. After 3 ammounts, give error
var error = false; // Password entered too may times. Boolean.

// I want to keep looping while response is not equal (!=)
// to the password and as long as not (!) error.
while(response != password && !error){
    if(entryCount < entryLimit) { //As long as password not as much as entryLimit, do below.
        response = window.prompt("Enter Password"); 
        entryCount++; //Every time response, add to entry ammount
    } else { //If password is entered to many times, error is now true.
        error = true;
    }
}
if(error){ //If error is true, show message
    alert("Too many entries!");
} else { //If correct password
    alert("You're in!"); //Sucess message
}
