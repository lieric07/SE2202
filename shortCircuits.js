//The template code prints the notification no matter what.
//Modify the code so that the message notification will only be printed
//if unreadCount is defined, not 0, and not null.
//Inputs: unreadCount is guaranteed to be a (positive, integer) Number, null, or undefined.
//Concept hint: This one requires a single short-circuiting operator.
function unreadAlert(unreadCount){
    //Add to this line.
    unreadCount && console.log("You have " + unreadCount + " messages.")
}

//The template code prints the notification no matter what.
//Modify the code so that the message notification will only be printed if unreadCount is a Number greater than zero.
//Inputs: unreadCount may be any type. 
//Concept hint: This one requires chained short-circuiting operators, typeof,
//AND a comparison operator.
//Extra hint: Be careful of order for the short-circuiting.
function unreadAlertValidated(unreadCount){
        //Add to this line.
    typeof unreadCount === 'number' && unreadCount > 0 && console.log("You have " + unreadCount + " messages.")
}

//Modify the code so that the message notification will only be printed
//if unreadCount is defined, a Number greater than zero OR a string of digits (e.g., "10","1", but not "one" or "ten") representing a number greater than 0, and not null.
//Inputs: unreadCount may be String, Number, null or undefined. 
//Concept hint: This one requires chained short-circuiting operators,
//AND a comparison operator, and explicit type conversion.
//Extra hint: What result will you get if you convert "one" to a Number?
function unreadAlertStringInput(unreadCount){
    unreadCount && Number(unreadCount) > 0 && console.log("You have " + unreadCount + " messages.")
}

//Modify the code so that correctedScore will contain "N/A" if the score is
//undefined, or null and the original score (including 0) otherwise.
//Inputs: unreadCount may be a Number, null or undefined. You do not need
//to check if the score is positive or an interger.
//Hint: 0 can be treated the same as other numbers if you use the right
//operator.
function showScore(score){
    //change this line
    let correctedScore = score ?? "N/A";

    //Leave the print statement for debugging and
    //the return line for the autograder.
    console.log("The score is:" + score)
    return correctedScore;
}

//Modify function so that userOrPlaceholder contains the original username
//if username is a non-empty string or "Mustang" otherwise.
//Input: String (including empty string), or undefined
//Hint: Double-check spelling and capitalization for the autograder.
function printWelcomeMessage(username){
    //change this line
    let userOrPlaceholder = username || "Mustang";

    //Leave the print statement for debugging and
    //the return line for the autograder.
    console.log("Welcome, " + userOrPlaceholder + "!")
    return userOrPlaceholder;
}
