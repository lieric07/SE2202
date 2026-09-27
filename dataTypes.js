/*
The goal of this excercise is to practice working with different data types,
type conversions, and basic operations. In some cases, you are instructed to assume a limited set of inputs.
In real code, this could be because the input is checked somewhere else or created in a way its values will 
be limited. Here, it is to make your job easier. :)

Functions [like function checkNumber(number)] are used to help the autograder, but we have not seen how they work yet. 
You only need to change the part inside the braces! All functions can be completed in one line, but solutions
will not be marked for brevity.

IMPORTANT NOTES: Do NOT use logical operators (&&, ||, ??) for this part, or control flow statements like "if" 
(which we haven't learned yet but you may remember from another language).

For this tutorial, you SHOULD NOT do any checking on inputs that is not asked for, for example
to limit birth years to a plausible range. You also don't need to worry about overflow in Number values.
*/

// Modify function so it takes an input age and outputs the age that 
// a person born in that year will turn in 2026.
// Example: if birthyear is 2006, the value stored in age (and then printed!) should be 20  
// Inputs: Birth year will be of Number type and will be a positive integer (not greater than 2026), 
// or a similar String of digits such as "1991" 
// (but not text like "nineteen ninety one").
function printAgeIn2026(birthYear){
    let age;
    age = 2026-birthYear
    // Don't modify these lines.
    console.log("This person will turn " + age + " in 2026.")
    return age;
}

// Modify the function so that it prints the age plus 10. 
// Inputs: age may be of Number type and will be a positive integer, or a similar String of digits such as "1991"
// (but not text like "nineteen ninety one").
// Hint: Consider how implicit type conversion works with + and strings.
function printAgeIn10Years(age){
    let newAge;
    newAge = age+10
    // Don't modify these lines.
    console.log("This person will be " + newAge + " in 10 years.")
    return newAge;
}

// Change the function so adultBool contains True is age is at least 18.
// The logic for the print statement is done for you. We will see this syntax later.
// Input type: String or Number, representing an integer.
function checkIfAdult(age){
    let isAdult;
    isAdult = Boolean(age>=18)
    // Leave this part. We haven't learned this syntax yet, but
    // this statement will print "The person is not an adult." if isAdult is False,
    // and "The person is an Adult" if isAdult is true.
    console.log("The person is " + (isAdult ? "" : "not")  + " adult.")
    return isAdult;
}

// Check if the input is of Number type with value 0. 
// Hint: Make sure to NOT accept the string "0", undefined, null.
function checkIfZero(number){
    // Change the following line.
    let isZero = number === 0;

    // Leave this part. We haven't learned this syntax yet, but
    // this statement will print "The input is not zero." if isZero is False,
    // and "The input is zero" if isZero is true.
    console.log("The input is " + (isZero ? "" : "not")  + " 0.")
    return isZero;
}

// Check whether the first input is a digit string equivalent in value to the second input
// Example: if the inputs are "9" and 9, isEquivalent should be true
// Counter-example: if the inputs are "nine" and 9, isEquivalent should be false
// Input: The first input is guaranteed to be a non-empty String, the second an Number (and will not be NaN) 
function checkIfEquivalent(string, number){
    let isEquivalent = string == number;

    // Leave this part. We haven't learned this syntax yet, but
    // this statement will print "The string is not equivalent to the number." if isEquivalent is False,
    // "The string is equivalent to the number." if isEquivalent is True,
    console.log("The string is " + (isEquivalent ? "" : "not")  + " equivalent to the number.")
    return isEquivalent;
}







