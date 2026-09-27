function printAgeIn2026(birthYear){
    let age;
    age = 2026-birthYear//gets age this year by using 2026-birthyear

    console.log("This person will turn " + age + " in 2026.")
    return age;
}
function printAgeIn10Years(age){
    let newAge;
    newAge = age+10//gets age ten years from now by using the age calculated before and adding 10

    console.log("This person will be " + newAge + " in 10 years.")
    return newAge;
}
function checkIfAdult(age){
    let isAdult;
    isAdult = Boolean(age>=18)//checks in age is 18 or higher in which its a boolean so its either true or false which can be used to check if >=18

    console.log("The person is " + (isAdult ? "" : "not")  + " adult.")
    return isAdult;
}
function checkIfZero(number){
    let isZero = number === 0;//the variable isZero is set to the parameter number which is checked if its === to 0 which checks if the number and type is the same

    console.log("The input is " + (isZero ? "" : "not")  + " 0.")
    return isZero;
}
function checkIfEquivalent(string, number){
    let isEquivalent = string == number;//similar to one before but 2 parameters one string and one number and the == sign is used to check if the number is the same not type

    console.log("The string is " + (isEquivalent ? "" : "not")  + " equivalent to the number.")
    return isEquivalent;
}
function unreadAlert(unreadCount){
    unreadCount && console.log("You have " + unreadCount + " messages.")//if unread count is larger than 0, then its true and the message is always true so it plays. if its 0 or null or undefined, itll be false which means the and statement is false so it wont run
}
function unreadAlertValidated(unreadCount){
    typeof unreadCount === 'number' && unreadCount > 0 && console.log("You have " + unreadCount + " messages.")//type of gives a string of the type which is checked with === to make sure its a string and the same letters
}
function unreadAlertStringInput(unreadCount){
    unreadCount && Number(unreadCount) > 0 && console.log("You have " + unreadCount + " messages.")//unread count is true if not 0. a string gets changed to a number and if it above 0, its true, and the statement is always true so if number is 0, null, or undef or a string of numbers, then itll print the statement
}
function showScore(score){
    let correctedScore = score ?? "N/A";//the nullish coalescing operator checks if the left is null or undefined and will return N/A in that case

    console.log("The score is:" + score)
    return correctedScore;
}
function printWelcomeMessage(username){
    let userOrPlaceholder = username || "Mustang";//if username is a not undef, null, 0, or anything that returns false, itll print the usename but if it is, itll print mustang instead

    console.log("Welcome, " + userOrPlaceholder + "!")
    return userOrPlaceholder;
}