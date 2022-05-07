// in-line comment

/* Data types:
undefined, null, boolean, string, symbol, number, object
*/

/* var, const, let */

// let name = "Reinis"
// console.log(name);

// var difference = 45 - 33;
// console.log(difference);

// var product = 8 * 3;
// console.log(product);

// var quetient = 66 / 3;
// console.log(quetient);

// var myVar = 87;

// myVar = myVar + 1;
// console.log(myVar);

// var myVar = 87;

// myVar++;
// console.log(myVar);

// var myVar = 11;

// myVar--;
// console.log(myVar);

// var ourDecimal = 5.7;
// var myDecimal = 0.009;
// console.log(myDecimal);

// var product = 2.2 * 1.7;
// console.log(product);

// var quetient = 4.4 / 2.2;
// console.log(quetient);

// var remainder;
// remainder = 11 % 3;
// console.log(remainder);

// var remainder;
// remainder = 10 % 2;
// console.log(remainder);

// var a = 3;
// var b = 17;
// var c = 12;
// var d = 5

// a += 12; // shortcut for a = a + 12;
// b *= 9; // shortcut for b = b * 9;
// c -= 7; // shortcut for c = c - 7;
// d /= 1; // shortcut for d = d / 5;

// var firstName = "Reinis";
// var lastName = "Komuls";

// var myStr = "I am a \"double quoted\" string inside \"double quotes\""
// console.log(myStr);
/* thats how we tell javas where quotation marks need to end
other way to do it is by using single quotes outside */

/*****
CODE OUTPUT
\' single quote
\" double quote
\\ backslash
\n new line
\r carriage return
\t tab
\b backspace
\f from feed
 *****/

// var myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
// console.log(myStr);

// var ourStr = "I come first. " + "I come second.";
// var myStr = "This is the start. " + "This is the end."
// var yourStr = myStr + ourStr;
// console.log(yourStr);

// var ourStr = "I come first. ";
// ourStr += "I come second."

// var myStr = "This is the first sentence. "
// myStr += "This is the second sentence."
// console.log(myStr);

// var myName = "Reinis";
// var myStr = "Hello, my name is " + myName + ", how are you?";

// console.log(myStr);

// var firstName = "Reinis";

// firstNameLength = firstName.length;
// console.log(firstNameLength);

// var firstLetterOfFirstName = "";
// var firstName = "Reinis";

// firstLetterOfFirstName = firstName[0];
// console.log(firstLetterOfFirstName);

// var myStr = "Jello World";
// myStr[0] = "H"; // wont change the first letter

// myStr = "Hello World"; //will change
// console.log(myStr);

// var firstName = "Reinis";
// var lastLetterOfFirstName = firstName[firstName.length - 1];

// console.log(lastLetterOfFirstName);

// function wordBlanks(myNoun, myAdjective, myVerb, myAdVerb) {
//     var result = "";
//     result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdVerb + "."
//     return result;
// }

// console.log(wordBlanks("dog", "big", "ran", "quickly"));
// console.log(wordBlanks("bike", "slow", "flew", "slowly"));

// var ourArray = ["Reinis", 26];

// var ourArray = [["the universe, 42"], ["everything", 101010]];
// console.log(ourArray);

// var ourArray = [50, 60, 70];
// var ourData = ourArray[1];
// console.log(ourData);

// var ourArray = [18, 64, 99];
// ourArray[1] = 45;
// console.log(ourArray)

// var myArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [[10, 11, 12], 13, 14]];
// var myData = myArray[2][1];
// console.log(myData)

// var ourArray = ["Stimpson", "J", "cat"];
// ourArray.push(["happy", "joy"]);

// console.log(ourArray)

// var ourArray = [1, 2, 3];
// var removedFromOurArray = ourArray.pop()

// console.log(ourArray)
// console.log(removedFromOurArray)

// var ourArray = ["Stimpson", "J", ["cat"]];
// var removedFromOurArray = ourArray.shift();

// console.log(ourArray)

// var ourArray = ["Stimpson", "J", ["cat"]];
// ourArray.shift(); // remove first element
// ourArray.unshift("Happy"); // adds element at the beginning

// console.log(ourArray)