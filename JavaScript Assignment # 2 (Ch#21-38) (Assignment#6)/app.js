// STRING METHODS(Ch#21-25): Task # 1 : Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name.
document.write("<h2><b>STRING METHODS (Ch#21-25): Task # 1</b></h2>");
document.write("<h3><b>Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name. :</b></h3>");

var firstName = prompt("Enter Your First Name : ");
var lastName = prompt("Enter Your Last Name : ");
var fullName = firstName + " " + lastName;
document.write("Hi " + fullName);

document.write("<br><br><br><br><br>");
////////////////////////////////////////////





// STRING METHODS(Ch#21-25): Task # 2 : Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser
document.write("<h2><b>STRING METHODS (Ch#21-25): Task # 2</b></h2>");
document.write("<h3><b>Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser :<br>Example:   My Favourite phone is : Samsung Galaxy S6 Edge Plus<br> Length of string : 28</b></h3>");

var favoriteMobile = prompt("Enter Your Favorite Mobile Phone Model : ");
var textLength = favoriteMobile.length;
document.write("<b>My Favourite phone is :</b> " + favoriteMobile + "<br>");
document.write("<b>Length of String is :</b> " + textLength);

document.write("<br><br><br><br><br>");
////////////////////////////////////////////





// STRING METHODS(Ch#21-25): Task # 3 : Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser .
document.write("<h2><b>STRING METHODS (Ch#21-25): Task # 3</b></h2>");
document.write("<h3><b>Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser :<br> Example :  String : Pakistani <br>index of 'n': 7 </b></h3>");

var string = "Pakistani";
var indexOfString = string.indexOf("n");
document.write("<b>String :</b> " + string + "<br>");
document.write("<b>Index of 'n' is :</b> " + indexOfString);

document.write("<br><br><br><br><br>");
////////////////////////////////////////////





// STRING METHODS(Ch#21-25): Task # 4 : Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.
document.write("<h2><b>STRING METHODS (Ch#21-25): Task # 4</b></h2>");
document.write("<h3><b>Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser :<br> Example :  String : Hello World <br>Last index of 'l': 9</b></h3>");

var string = "Hello World";
var indexOfString = string.lastIndexOf("l");
document.write("<b>String :</b> " + string + "<br>");
document.write("<b>Last index of 'l' is :</b> " + indexOfString);

document.write("<br><br><br><br><br>");
////////////////////////////////////////////





// STRING METHODS(Ch#21-25): Task # 5 : Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.
document.write("<h2><b>STRING METHODS (Ch#21-25): Task # 5</b></h2>");
document.write("<h3><b>Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser :<br> Example :  String : Pakistani <br>Character at index 3: i</b></h3>");

var string = "Pakistani";
var indexOfString = string.charAt(3);
document.write("<b>String :</b> " + string + "<br>");
document.write("<b>Character at index 3 is :</b> " + indexOfString);

document.write("<br><br><br><br><br>");
////////////////////////////////////////////





// STRING METHODS(Ch#21-25): Task # 6 : Repeat Q1 using string concat() method.
document.write("<h2><b>STRING METHODS (Ch#21-25): Task # 6</b></h2>");
document.write("<h3><b>Repeat Q1 using string concat() method. :</b></h3>");

var firstName = prompt("Enter Your First Name : ");
var lastName = prompt("Enter Your Last Name : ");
var fullName = firstName.concat(" " + lastName);

document.write("Hi " + fullName);

document.write("<br><br><br><br><br>");
////////////////////////////////////////////





// STRING METHODS(Ch#21-25): Task # 7 : Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser
document.write("<h2><b>STRING METHODS (Ch#21-25): Task # 7</b></h2>");
document.write("<h3><b>Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser :<br> Example :  City : Hyderabad <br>After replacement: Islamabad</b></h3>");

var city = "Hyderabad";
var replacedCity = city.replace("Hyder" , "Islam");
document.write("<b>City :</b> " + city + "<br>");
document.write("<b>After Replacement :</b> " + replacedCity);

document.write("<br><br><br><br><br>");
////////////////////////////////////////////





// STRING METHODS(Ch#21-25): Task # 8 : Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.<br><i> var message = “Ali and Sami are best friends. They play cricket and football together.”; </i>
document.write("<h2><b>STRING METHODS (Ch#21-25): Task # 8</b></h2>");
document.write("<h3><b>Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.<br><i> var message = “Ali and Sami are best friends. They play cricket and football together.”; </i> :</b></h3>");

var message = "Ali and Sami are best friends. They play cricket and football together.";

var replacedMessage = message.replace(/and/g , "&");
document.write("<b>Message :</b> " + message + "<br>");
document.write("<b>Message After Replacement :</b> " + replacedMessage);

document.write("<br><br><br><br><br>");
////////////////////////////////////////////





// STRING METHODS(Ch#21-25): Task # 9 : Write a program that converts a string “472” to a number 472. Display the values & types in your browser.
document.write("<h2><b>STRING METHODS (Ch#21-25): Task # 9</b></h2>");
document.write("<h3><b>Write a program that converts a string “472” to a number 472. Display the values & types in your browser :<br> Example :  Value : 472 <br>Type: String<br> Value : 472 <br>Type: number</b></h3>");

var num = "472";

document.write("<h3><b>Before :</b></h3><br>");
document.write("<b>Value :</b> " + num + "<br>");
document.write("<b>Type :</b> " + typeof num + "<br><br>");

document.write("<h3><b>After :</b></h3><br>");
var convertedNumber = Number(num);
document.write("<b>Value :</b> " + convertedNumber + "<br>");
document.write("<b>Type :</b> " + typeof convertedNumber);

document.write("<br><br><br><br><br>");
////////////////////////////////////////////





// STRING METHODS(Ch#21-25): Task # 10 : Write a program that takes user input. Convert and show the input in capital letters
document.write("<h2><b>STRING METHODS (Ch#21-25): Task # 10</b></h2>");
document.write("<h3><b>Write a program that takes user input. Convert and show the input in capital letters :<br> Example :  User input : peanuts <br>Upper case: PEANUTS</b></h3>");

var input = prompt("Enter any Text in Lower case to convert it into Capital letters :");
document.write("<b>User input :</b> " + input + "<br>");
input = input.toUpperCase();
document.write("<b>Upper case :</b> " + input);

document.write("<br><br><br><br><br>");
////////////////////////////////////////////





// STRING METHODS(Ch#21-25): Task # 11 : Write a program that takes user input. Convert and show the input in title case
document.write("<h2><b>STRING METHODS (Ch#21-25): Task # 11</b></h2>");
document.write("<h3><b>Write a program that takes user input. Convert and show the input in title case :<br> Example :  User input : javascript <br>Title case: Javascript</b></h3>");

var input = prompt("Enter any Text to convert it into Title Case :");
document.write("<b>User input :</b> " + input + "<br>");
var firstCharacter = input.slice(0, 1);
var otherCharacters = input.slice(1);
firstCharacter = firstCharacter.toUpperCase();
otherCharacters = otherCharacters.toLowerCase();
var titleCaseWord = firstCharacter.concat(otherCharacters);
document.write("<b>Title case :</b> " + titleCaseWord);

document.write("<br><br><br><br><br>");
////////////////////////////////////////////





// STRING METHODS(Ch#21-25): Task # 12 : Write a program that converts the variable num to string.<br> var num = 35.36 ;<br> Remove the dot to display “3536” display in your browser.
document.write("<h2><b>STRING METHODS (Ch#21-25): Task # 12</b></h2>");
document.write("<h3><b>Write a program that converts the variable num to string.<br> var num = 35.36 ;<br> Remove the dot to display “3536” display in your browser :<br> Example :  Number : 35.36 <br>Result: 3536</b></h3>");

var num = 35.36 ;
document.write("<b>Number :</b> " + num + "<br>");
num = num.toString();
num = num.replace("." , "");
document.write("<b>Result :</b> " + num);

document.write("<br><br><br><br><br>");
////////////////////////////////////////////





// STRING METHODS(Ch#21-25): Task # 13 : Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username. For character codes of [@ . <br> Note:<br> ASCII code of ! is 33<br> ASCII code of , is 44<br> ASCII code of . is 46<br> ASCII code of @ is 64
document.write("<h2><b>STRING METHODS (Ch#21-25): Task # 13</b></h2>");
document.write("<h3><b>Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username. For character codes of [@ . <br> Note:<br> ASCII code of ! is 33<br> ASCII code of , is 44<br> ASCII code of . is 46<br> ASCII code of @ is 64 :</b></h3>");

var userInput = prompt("Enter Your User Name : ");
var charASCII;

for (var i = 0; i < userInput.length; i++) {
    charASCII = userInput.charAt(i);
    charASCII = charASCII.charCodeAt();
    if (charASCII === 33 | charASCII === 44 | charASCII === 46 | charASCII === 64) {
        document.write("Invalid! , Please enter a valid username");
        break;
    }

}
document.write("Your User Name is Valid");


document.write("<br><br><br><br><br>");
////////////////////////////////////////////





// STRING METHODS(Ch#21-25): Task # 14 : You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability
document.write("<h2><b>STRING METHODS (Ch#21-25): Task # 14</b></h2>");
document.write("<h3><b>You have an array<br> A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]<br> Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not.<br> Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability<br> Example:<br> Cookie is <b>available</b> at index 2 in our bakery <br> We are sorry. pastry is <b>not available</b> in our bakery :</b></h3>");

var arr = ["cake", "apple pie", "cookie", "chips", "patties"];

var input = prompt("Welcome to ABC Bakery. What do you want to order sir/Ma'am ?");
var inputItem = input.toLowerCase();

for (var i = 0 ; i <= arr.length ; i++ ){
    if(inputItem === arr[i]){
        document.write(arr[i] + " is <b>available</b> at index " + i + " in our bakery");
        break
    }
    else{
        document.write("We are sorry. " + input + " is <b>not available</b> in our bakery");
        break

    }

}

document.write("<br><br><br><br><br>");
////////////////////////////////////////////





// STRING METHODS(Ch#21-25): Task # 15 : Write a program to take password as an input from user. The password must qualify these requirements: a. It should contain alphabets and numbers b. It should not start with a number c. It must at least 6 characters long If the password does not meet above requirements, prompt the user to enter a valid password. For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document.
document.write("<h2><b>STRING METHODS (Ch#21-25): Task # 15</b></h2>");
document.write("<h3><b>Write a program to take password as an input from user. The password must qualify these requirements: a. It should contain alphabets and numbers b. It should not start with a number c. It must at least 6 characters long If the password does not meet above requirements, prompt the user to enter a valid password. For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document. :</b></h3>");

var inputPassword = prompt("Enter Password : \n(a.) It should contain alphabets and numbers \n(b.) It should not start with a number \n(c.) It must at least 6 characters long ");

// checks if  the first character of the input password is number
var firstCharacterASCII = (inputPassword.charAt(0)).charCodeAt();
var alphaNumeric;
// function to check the input password has a combination of alphabets and numbers
function alphaNumericChecker(inputtext) {
    var letterNumber = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/;

    if (inputtext.match(letterNumber)) {
        alphaNumeric = true;
    }

    else {
        alphaNumeric = false;
    }
}

alphaNumericChecker(inputPassword);

if (inputPassword.length <= 0) {
    document.write("Entered Password : " + inputPassword + "<br>");
    document.write("You don't enter your password !");
}
else if (inputPassword.length < 6) {
    document.write("Entered Password : " + inputPassword + "<br>");
    document.write("Password is less than 6 characters");
}
else if (firstCharacterASCII >= 48 && firstCharacterASCII <= 57) {
    document.write("Entered Password : " + inputPassword + "<br>");
    document.write("Password can not begin with a number <br>");
    document.write("Please enter a valid Password");
}
else if (alphaNumeric === false) {
    document.write("Entered Password : " + inputPassword + "<br>");
    document.write("Your Password not contain combination of alphabets and numbers <br>");
    document.write("Please enter a valid Password");
}
else {
    document.write("You Entered Valid Password ");
}





document.write("<br><br><br><br><br>");
////////////////////////////////////////////





// STRING METHODS(Ch#21-25): Task # 16 : Write a program to convert the following string to an array using string split method. var university = “University of Karachi”; Display the elements of array in your browser.
document.write("<h2><b>STRING METHODS (Ch#21-25): Task # 16</b></h2>");
document.write("<h3><b>Write a program to convert the following string to an array using string split method. var university = “University of Karachi”; Display the elements of array in your browser. :</b></h3>");

var university = "University of Karachi";
var arr = university.split("");

for (var i = 0 ; i < arr.length ; i++){
    document.write(arr[i] + "<br>");
}



document.write("<br><br><br><br><br>");
////////////////////////////////////////////





// STRING METHODS(Ch#21-25): Task # 17 : Write a program to display the last character of a user input
document.write("<h2><b>STRING METHODS (Ch#21-25): Task # 17</b></h2>");
document.write("<h3><b>Write a program to display the last character of a user input<br> Example :  User input : Pakistan <br>Last character of input: n </b></h3>");

var string = prompt("Enter text to display it's last character");
var lastIndexOfString = string.charAt(string.length - 1);
document.write("<b>User Input :</b> " + string + "<br>");
document.write("<b>Last character of input is :</b> " + lastIndexOfString);

document.write("<br><br><br><br><br>");
////////////////////////////////////////////





// STRING METHODS(Ch#21-25): Task # 18 : You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string<br> Text: The quick brown fox jumps over the lazy dog <br> There are 2 occurrence(s) of word 'the'
document.write("<h2><b>STRING METHODS (Ch#21-25): Task # 18</b></h2>");
document.write("<h3><b>You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string<br> Text: The quick brown fox jumps over the lazy dog <br> There are 2 occurrence(s) of word 'the' :</b></h3>");

var str = "The quick brown fox jumps over the lazy dog";
var strLower = str.toLowerCase();
var occurrence = (strLower.match(/the/g)).length;
document.write("<b>Text :</b> " + str + "<br>");
document.write("There are <b> " + occurrence + "</b> occurrence(s) of the word 'the' ");


document.write("<br><br><br><br><br>");
////////////////////////////////////////////









// MATH METHODS (Ch#26-30): Task # 1 : Write a program that takes a positive integer from user & display the following in your browser. a. number b. round off value of the number c. floor value of the number d. ceil value of the number
document.write("<h2><b>MATH METHODS (Ch#26-30): Task # 1</b></h2>");
document.write("<h3><b>Write a program that takes a positive integer from user & display the following in your browser.<br> a. number<br> b. round off value of the number<br> c. floor value of the number<br> d. ceil value of the number :</b></h3>");

var inputNumber = Number(prompt("Enter Positive number : "));
document.write("<b>Number : </b>" + inputNumber + "<br>");
document.write("<b>Round off value : </b>" + Math.round(inputNumber) + "<br>");
document.write("<b>Floor value : </b>" + Math.floor(inputNumber) + "<br>");
document.write("<b>Ceil value : </b>" + Math.ceil(inputNumber) + "<br>");

document.write("<br><br><br><br><br>");
////////////////////////////////////////////





// MATH METHODS (Ch#26-30): Task # 2 : Write a program that takes a negative floating point from user & display the following in your browser.<br> a. number<br> b. round off value of the number<br> c. floor value of the number<br> d. ceil value of the number
document.write("<h2><b>MATH METHODS (Ch#26-30): Task # 2</b></h2>");
document.write("<h3><b>Write a program that takes a negative floating point from user & display the following in your browser.<br> a. number<br> b. round off value of the number<br> c. floor value of the number<br> d. ceil value of the number :</b></h3>");

var inputNumber = Number(prompt("Enter Negative number : "));
document.write("<b>Number : </b>" + inputNumber + "<br>");
document.write("<b>Round off value : </b>" + Math.round(inputNumber) + "<br>");
document.write("<b>Floor value : </b>" + Math.floor(inputNumber) + "<br>");
document.write("<b>Ceil value : </b>" + Math.ceil(inputNumber) + "<br>");

document.write("<br><br><br><br><br>");
////////////////////////////////////////////





// MATH METHODS (Ch#26-30): Task # 3 : Write a program that displays the absolute value of a number. E.g. absolute value of -4 is 4 & absolute value of 5 is 5
document.write("<h2><b>MATH METHODS (Ch#26-30): Task # 3</b></h2>");
document.write("<h3><b>Write a program that displays the absolute value of a number.<br> E.g. absolute value of -4 is 4 & absolute value of 5 is 5 :</b></h3>");

var inputNumber = Number(prompt("Enter number to display it's absolute value :  "));
var absoluteNumber = Math.abs(inputNumber);
document.write("The absolute value of <b>" + inputNumber + "</b> is <b>" + absoluteNumber + "</b>");


document.write("<br><br><br><br><br>");
////////////////////////////////////////////





// MATH METHODS (Ch#26-30): Task # 4 : Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.
document.write("<h2><b>MATH METHODS (Ch#26-30): Task # 4</b></h2>");
document.write("<h3><b>Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser :</b></h3>");

var num = Math.random();
var num2 = (num * 6) + 1;
var randomNumber = Math.floor(num2);
document.write("Random dice value : " + randomNumber);

document.write("<br><br><br><br><br>");
////////////////////////////////////////////





// MATH METHODS (Ch#26-30): Task # 5 : Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser
document.write("<h2><b>MATH METHODS (Ch#26-30): Task # 5</b></h2>");
document.write("<h3><b>Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser :</b></h3>");

var num = Math.random();
var num2 = (num * 2) + 1;
var randomNumber = Math.floor(num2);
document.write(randomNumber + "<br>");
if (randomNumber === 1){
    document.write("Random coin value : Tails");
}
else if (randomNumber === 2){
    document.write("Random coin value : Heads");
}


document.write("<br><br><br><br><br>");
////////////////////////////////////////////





// MATH METHODS (Ch#26-30): Task # 6 : Write a program that shows a random number between 1 and 100 in your browser.
document.write("<h2><b>MATH METHODS (Ch#26-30): Task # 6</b></h2>");
document.write("<h3><b>Write a program that shows a random number between 1 and 100 in your browser. :</b></h3>");

var num = Math.random();
var num2 = (num * 100) + 1;
var randomNumber = Math.floor(num2);
document.write("Random number between 1 and 100 : " + randomNumber);

document.write("<br><br><br><br><br>");
////////////////////////////////////////////





// MATH METHODS (Ch#26-30): Task # 7 : Write a program that asks the user about his weight. Parse the user input and display his weight in your browser. Possible user inputs can be: a. 50 b. 50kgs c. 50.2kgs d. 50.2kilograms
document.write("<h2><b>MATH METHODS (Ch#26-30): Task # 7</b></h2>");
document.write("<h3><b>Write a program that asks the user about his weight. Parse the user input and display his weight in your browser. Possible user inputs can be:<br> a. 50<br> b. 50kgs<br> c. 50.2kgs<br> d. 50.2kilograms </b></h3>");

var userInput = parseFloat(prompt("Enter Your weight in kilograms :"));
var arr = ["" , " kg" , " kgs" , " kilograms" ];

var num = Math.random();
var num2 = (num * 4);
var randomNumber = Math.floor(num2);
document.write("The weight of user is " + userInput + arr[randomNumber] );


document.write("<br><br><br><br><br>");
////////////////////////////////////////////





// MATH METHODS (Ch#26-30): Task # 8 : Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input equals the secret number, congratulate the user.
document.write("<h2><b>MATH METHODS (Ch#26-30): Task # 8</b></h2>");
document.write("<h3><b>Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input equals the secret number, congratulate the user :</b></h3>");

var  randomNumber = Math.floor(Math.random() * 10 + 1);
var userGuess = (+prompt("Enter a Number to Guess The Secret Number ( between 1 - 10 )"));

if (randomNumber === userGuess ){
    document.write("Bingo! Correct Answer");
}
else if (randomNumber ===  (userGuess + 1) ){
    document.write("Close enough to the correct answer");
}
else if (randomNumber != userGuess ){
    document.write("You Loose !!!");
}
else{
    document.write("You entered irrelavent information !!!  <br>");
}

document.write("<br><br><br><br><br>");
////////////////////////////////////////////









// DATE METHODS (Ch#31-34): Task # 1 : Write a program that displays current date and time in your browser.
document.write("<h2><b>DATE METHODS (Ch#31-34): Task # 1</b></h2>");
document.write("<h3><b>Write a program that displays current date and time in your browser. :</b></h3>");

var currDateTime = new Date();
document.write(currDateTime);

document.write("<br><br><br><br><br>");
////////////////////////////////////////////





// DATE METHODS (Ch#31-34): Task # 2 : Write a program that alerts the current month in words. For example December.
document.write("<h2><b>DATE METHODS (Ch#31-34): Task # 2</b></h2>");
document.write("<h3><b>Write a program that alerts the current month in words. For example December. :</b></h3>");

var currDateTime = new Date();
var currMonth = currDateTime.getMonth();
var monthArray = ["January" , "February" , "March" , "April" , "May" , "June" , "July" , "August" , "September" , "October" , "November" , "December"];
alert("Current Month : " + monthArray[currMonth]);

document.write("<br><br><br><br><br>");
////////////////////////////////////////////





// DATE METHODS (Ch#31-34): Task # 3 : Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun.
document.write("<h2><b>DATE METHODS (Ch#31-34): Task # 3</b></h2>");
document.write("<h3><b>Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun. :</b></h3>");

var currDateTime = new Date();
var currDay = currDateTime.getDay();
var dayArray = ["Sun" , "Mon" , "Tue" , "Wed" , "Thu" , "Fri" , "Sat"];
alert("Today is " + dayArray[currDay]);

document.write("<br><br><br><br><br>");
////////////////////////////////////////////





// DATE METHODS (Ch#31-34): Task # 4 : Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.
document.write("<h2><b>DATE METHODS (Ch#31-34): Task # 4</b></h2>");
document.write("<h3><b>Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today :</b></h3>");

var currDateTime = new Date();
var currDay = currDateTime.getDay();
if (currDay === 0 | currDay === 6){
    alert("It's Fun day");
}

document.write("<br><br><br><br><br>");
////////////////////////////////////////////





// DATE METHODS (Ch#31-34): Task # 5 : Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month else shows “Last days of the month”.
document.write("<h2><b>DATE METHODS (Ch#31-34): Task # 5</b></h2>");
document.write("<h3><b>Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month else shows “Last days of the month”. :</b></h3>");

var currDateTime = new Date();
var currDate = currDateTime.getDate();
if (currDate < 15 ){
    document.write("First fifteen days of the month");
}
else{
    document.write("Last days of the month");
}


document.write("<br><br><br><br><br>");
////////////////////////////////////////////





// DATE METHODS (Ch#31-34): Task # 6 : Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't been declared beforehand. Use any variable you like to represent the Date object.
document.write("<h2><b>DATE METHODS (Ch#31-34): Task # 6</b></h2>");
document.write("<h3><b>Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't been declared beforehand. Use any variable you like to represent the Date object. :</b></h3>");

var currDateTime = new Date();
var currMilliseconds = currDateTime.getTime();
var currMinutes = Math.floor(currDateTime / (1000 * 60));
document.write("<b>Current Date : </b>" + currDateTime + "<br>");
document.write("<b>Elapsed Milliseconds since January 1, 1970 : </b>" + currMilliseconds + "<br>");
document.write("<b>Elapsed Minutes since January 1, 1970: </b>" + currMinutes);

document.write("<br><br><br><br><br>");
////////////////////////////////////////////





// DATE METHODS (Ch#31-34): Task # 7 : Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.
document.write("<h2><b>DATE METHODS (Ch#31-34): Task # 7</b></h2>");
document.write("<h3><b>Write a program that tests whether it's before noon and alert “Its AM” else “its PM”. :</b></h3>");

var currDateTime = new Date();
var currHour = currDateTime.getHours();
if (currHour < 12 ){
    document.write("It's AM");
}
else{
    document.write("It's PM");
}

document.write("<br><br><br><br><br>");
////////////////////////////////////////////





// DATE METHODS (Ch#31-34): Task # 8 : Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate.
document.write("<h2><b>DATE METHODS (Ch#31-34): Task # 8</b></h2>");
document.write("<h3><b>Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate. :</b></h3>");

var laterDate = new Date("December 31, 2020");
document.write(laterDate);

document.write("<br><br><br><br><br>");
////////////////////////////////////////////





// DATE METHODS (Ch#31-34): Task # 9 : Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan? Note: 1st Ramadan was on June 18, 2015
document.write("<h2><b>DATE METHODS (Ch#31-34): Task # 9</b></h2>");
document.write("<h3><b>Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan?<br> Note: 1st Ramadan was on June 18, 2015 :</b></h3>");

var subtractedMilliseconds = new Date("May 26, 2020").getTime() - new Date("June 18, 2015").getTime();
var totalDays = Math.floor(subtractedMilliseconds / (1000 * 60 * 60 * 24));
alert(totalDays + " days have passed since 1st Ramadan, 2015");


document.write("<br><br><br><br><br>");
////////////////////////////////////////////





// DATE METHODS (Ch#31-34): Task # 10 : Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015.
document.write("<h2><b>DATE METHODS (Ch#31-34): Task # 10</b></h2>");
document.write("<h3><b>Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015. :</b></h3>");

var referenceDate = new Date("June 21, 2020");
var subtractedMilliseconds = referenceDate.getTime() - new Date("January 1, 2015").getTime();
var totalseconds = Math.floor(subtractedMilliseconds / (1000 * 60));
document.write("On reference date " + referenceDate + ", <br>" + totalseconds + " seconds had passed since beginning of 2015");

document.write("<br><br><br><br><br>");
////////////////////////////////////////////





// DATE METHODS (Ch#31-34): Task # 11 : Create a Date object for the current date and time. Extract the hours, reset the date object an hour ahead and finally display the date object in your browser
document.write("<h2><b>DATE METHODS (Ch#31-34): Task # 11</b></h2>");
document.write("<h3><b>Create a Date object for the current date and time. Extract the hours, reset the date object an hour ahead and finally display the date object in your browser :</b></h3>");

var currDateTime = new Date();
var currHour = currDateTime.getHours();
var hourLater = new Date();
hourLater.setHours(currHour + 1);
document.write("Current date : " + hourLater + "<br> 1 Hour ago, it was " + currDateTime);

document.write("<br><br><br><br><br>");
////////////////////////////////////////////





// DATE METHODS (Ch#31-34): Task # 12 : Write a program that creates a date object and show the date in an alert box that is reset to 100 years back?
document.write("<h2><b>DATE METHODS (Ch#31-34): Task # 12</b></h2>");
document.write("<h3><b>Write a program that creates a date object and show the date in an alert box that is reset to 100 years back? :</b></h3>");

var currDateTime = new Date();
var currYear = currDateTime.getFullYear();
var yearLater = new Date();
yearLater.setFullYear(currYear - 100);
document.write("Current date : " + currDateTime + "<br> 100 Years back, it was " + yearLater);

document.write("<br><br><br><br><br>");
////////////////////////////////////////////





// DATE METHODS (Ch#31-34): Task # 13 : Write a program to ask the user about his age. Calculate and show his birth year in your browser.
document.write("<h2><b>DATE METHODS (Ch#31-34): Task # 13</b></h2>");
document.write("<h3><b>Write a program to ask the user about his age. Calculate and show his birth year in your browser :</b></h3>");

var userAge = Number(prompt("Enter Your Age to Display your Birth Year : "));
var userBirthMonth = prompt("Now Enter Your Birth Month to Display your Birth Year : ");
userBirthMonth = userBirthMonth.toLowerCase();

var monthArray = ["january" , "february" , "march" , "april" , "may" , "june" , "july" , "august" , "september" , "october" , "november" , "december"];

// To convert the input month into number to compare 
for (var i = 0 ; i <= 11 ; i++){
    if (userBirthMonth === monthArray[i]){
        userBirthMonth = i;
    }
}

var currDateTime = new Date();
var currYear = currDateTime.getFullYear();
var currMonth = currDateTime.getMonth();
var birthYear = currYear - userAge;

// If user Birth month is greater than current month then subtract 1 from birth year 
if (userBirthMonth > currMonth){
    birthYear -= 1 ;
}

document.write("<b>Your age is </b>: " + userAge + "<br>");
document.write("<b>Your Birth Year is </b>: " + birthYear);

document.write("<br><br><br><br><br>");
////////////////////////////////////////////





// DATE METHODS (Ch#31-34): Task # 14 : Write a program to generate your K-Electric bill in your browser. All the amounts should be rounded off to 2 decimal places. Display the following fields:<br> a. Customer Name<br> b. Current Month <br> c. Number of units <br> d. Charges per unit <br> e. Net Amount Payable (within Due Date) <br> f. Late Payment Surcharge <br> g. Gross Amount Payable (after Due Date) <br> Where, <br> Net Amount Payable (within Due Date) = Number of units * Charges per unit & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge
document.write("<h2><b>DATE METHODS (Ch#31-34): Task # 14</b></h2>");
document.write("<h3><b>Write a program to generate your K-Electric bill in your browser. All the amounts should be rounded off to 2 decimal places. Display the following fields:<br> a. Customer Name<br> b. Current Month <br> c. Number of units <br> d. Charges per unit <br> e. Net Amount Payable (within Due Date) <br> f. Late Payment Surcharge <br> g. Gross Amount Payable (after Due Date) <br> Where, <br> Net Amount Payable (within Due Date) = Number of units * Charges per unit & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge :</b></h3>");

document.write("<h1> K-Electric Bill </h1>");

var username = "ABC Customer";
document.write("Customer Name : <b>" + username + "</b><br>");

var currDateTime = new Date();
var currMonth = currDateTime.getMonth();
var monthArray = ["January" , "February" , "March" , "April" , "May" , "June" , "July" , "August" , "September" , "October" , "November" , "December"];
document.write("Month : <b>" + monthArray[currMonth] + "</b><br>");

var numberOfUnits = 410;
document.write("Number of units : <b>" + numberOfUnits + "</b><br>");

var chargesPerUnit = 16;
document.write("Charges per unit : <b>" + 16 + "</b><br><br>");

var netAmount = numberOfUnits * chargesPerUnit;
document.write("Net Amount Payable (within Due Date) : <b>" + netAmount + "</b><br>");

var latePaymentSurcharge = 350;
document.write("Late Payment Surcharge : <b>" + latePaymentSurcharge + "</b><br>");

var grossAmount = netAmount + latePaymentSurcharge;
document.write("Gross Amount Payable (after Due Date) : <b>" + grossAmount + "</b><br>");


document.write("<br><br><br><br><br>");
////////////////////////////////////////////





// FUNCTION (Ch#35-38): Task # 1 :  Write a function that displays current date & time in your browser
document.write("<h2><b>FUNCTION (Ch#35-38): Task # 1</b></h2>");
document.write("<h3><b>Write a function that displays current date & time in your browser :</b></h3>");

// Function definition / declaration 
function  currDateTime(){
    var currDateTime = new Date();
    document.write(currDateTime);
}

// function call 
currDateTime();


document.write("<br><br><br><br><br>");
////////////////////////////////////////////





// FUNCTION (Ch#35-38): Task # 2 :  Write a function that takes first & last name and then it greets the user using his full name.
document.write("<h2><b>FUNCTION (Ch#35-38): Task # 2</b></h2>");
document.write("<h3><b>Write a function that takes first & last name and then it greets the user using his full name :</b></h3>");

function greetUserWithName(){
    firstName = prompt("Enter Your First Name : ");
    lastName = prompt("Enter Your Last Name : ");
    alert("Hi !  " + firstName.concat(" " + lastName));
}

greetUserWithName();

document.write("<br><br><br><br><br>");
////////////////////////////////////////////





// FUNCTION (Ch#35-38): Task # 3 :  Write a function that adds two numbers (input by user) and returns the sum of two numbers.
document.write("<h2><b>FUNCTION (Ch#35-38): Task # 3</b></h2>");
document.write("<h3><b>Write a function that adds two numbers (input by user) and returns the sum of two numbers. :</b></h3>");

function addition(){
    firstNumber = Number(prompt("Enter First Number to perform Addition : "));
    secondNumber = Number(prompt("Enter Second Number to perform Addition : "));
    return firstNumber + secondNumber;
}

var sum = addition();
document.write("Addition is : " + sum);

document.write("<br><br><br><br><br>");
////////////////////////////////////////////





// FUNCTION (Ch#35-38): Task # 4 :  Calculator: Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser.
document.write("<h2><b>FUNCTION (Ch#35-38): Task # 4</b></h2>");
document.write("<h3><b>Calculator:<br> Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser :</b></h3>");

// a. First number

var firstNumber = (+prompt("Enter The First Number : "));

// b. Second number

var secondNumber = (+prompt("Enter The Second Number : "));

// c. Operation (+, -, *, /, %)

var operation = prompt("Enter The Operation to perform  (+, -, *, /, %) : ");

function calculator(num1, operator , num2) {
    var result;

    if (operator === "+") {
        result = (num1 + num2);
        document.write("Addition of : " + num1 + " + " + num2 + " = " + result);
    }
    else if (operator === "-") {
        result = (num1 - num2);
        document.write("Subtraction of : " + num1 + " - " + num2 + " = " + result);
    }
    else if (operator === "*") {
        result = (num1 * num2);
        document.write("Multiplication of : " + num1 + " * " + num2 + " = " + result);
    }
    else if (operator === "/") {
        result = (num1 / num2);
        document.write("Division of : " + num1 + " / " + num2 + " = " + result);
    }
    else if (operator === "%") {
        result = (num1 % num2);
        document.write("Modulus of : " + num1 + " % " + num2 + " = " + result);
    }
    else {
        document.write("You entered irrelavent information !!!  <br>");
    }
}

calculator(firstNumber , operation , secondNumber);

document.write("<br><br><br><br><br>");
////////////////////////////////////////////





// FUNCTION (Ch#35-38): Task # 5 :  Write a function that squares its argument.
document.write("<h2><b>FUNCTION (Ch#35-38): Task # 5</b></h2>");
document.write("<h3><b>Write a function that squares its argument. :</b></h3>");

function square(num){
    return sqr = num * num;

}

document.write("Square of 5 is : " + square(5));

document.write("<br><br><br><br><br>");
////////////////////////////////////////////





// FUNCTION (Ch#35-38): Task # 6 :  Write a function that computes factorial of a number.
document.write("<h2><b>FUNCTION (Ch#35-38): Task # 6</b></h2>");
document.write("<h3><b>Write a function that computes factorial of a number. :</b></h3>");

var inputNumber = Number(prompt("Enter number to find it's Factorial : "));

function factorial(num) { 
    var ans = 1; 
    // the code is same for (var i = 1) but (var i = 2) is bit faster than (var i = 1)   
    for (var i = 2 ; i <= num ; i++) 
        ans = ans * i; 
    return ans; 
}
document.write("Factorial of " + inputNumber + "!" + " is " + factorial(inputNumber) );


document.write("<br><br><br><br><br>");
////////////////////////////////////////////





// FUNCTION (Ch#35-38): Task # 7 :  Write a function that take start and end number as inputs & display counting in your browser.
document.write("<h2><b>FUNCTION (Ch#35-38): Task # 7</b></h2>");
document.write("<h3><b>Write a function that take start and end number as inputs & display counting in your browser. :</b></h3>");

function counting() {
    countingStart = (+prompt("Enter a number where you want to Start counting :"));
    countingEnd = (+prompt("Enter a number where you want to End counting :"));
    document.write("<b>Counting from " + countingStart + " to " + countingEnd +  " : </b><br><br>");
    for (var i = countingStart ; i <= countingEnd ; i++) {
        document.write(i + ", ");
    }
}
counting();

document.write("<br><br><br><br><br>");
////////////////////////////////////////////





// FUNCTION (Ch#35-38): Task # 8 :  Write a nested function that computes hypotenuse of a right angle triangle. <br> Hypotenuse2 = Base2 + Perpendicular2 <br> Take base and perpendicular as inputs. <br> Outer function : calculateHypotenuse() <br> Inner function: calculateSquare()
document.write("<h2><b>FUNCTION (Ch#35-38): Task # 8</b></h2>");
document.write("<h3><b>Write a nested function that computes hypotenuse of a right angle triangle. <br> Hypotenuse2 = Base2 + Perpendicular2 <br> Take base and perpendicular as inputs. <br> Outer function : calculateHypotenuse() <br> Inner function: calculateSquare() :</b></h3>");

function calculateHypotenuse(base , perpendicular){

    function calculateSquare(num){
        return num = num * num;
    }

    result = Math.hypot(calculateSquare(base) + calculateSquare(perpendicular))
    document.write("<b> Hypotenuse of a right angle triangle is : </b>" + result );
}

calculateHypotenuse(3 , 4);

document.write("<br><br><br><br><br>");
////////////////////////////////////////////





// FUNCTION (Ch#35-38): Task # 9 : Write a function that calculates the area of a rectangle. A = width * height Pass width and height in following manner: i. Arguments as value ii. Arguments as variables 
document.write("<h2><b>FUNCTION (Ch#35-38): Task # 9</b></h2>");
document.write("<h3><b>Write a function that calculates the area of a rectangle. <br> A = width * height <br> Pass width and height in following manner: <br> i. Arguments as value <br> ii. Arguments as variables  </b></h3>");

function areaOfRectangle(length, width){
    return length * width;
}

// i. Arguments as value

document.write("<b> Area of Rectangle using Arguments as value </b>: " + areaOfRectangle(3 , 4) + "<br>");

// ii. Arguments as variables

var lengthOfRectangle = prompt("Enter a number for the length of your rectangle.");
var widthOfRectangle = prompt ("Enter a number for the width of your rectangle.");

document.write("<b> Area of Rectangle using Arguments as variables : </b>" + areaOfRectangle(lengthOfRectangle , widthOfRectangle));

document.write("<br><br><br><br><br>");
////////////////////////////////////////////





// FUNCTION (Ch#35-38): Task # 10 :  Write a JavaScript function that checks whether a passed string is palindrome or not? <br> A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam.
document.write("<h2><b>FUNCTION (Ch#35-38): Task # 10</b></h2>");
document.write("<h3><b>Write a JavaScript function that checks whether a passed string is palindrome or not? <br><i> A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam.</i> </b></h3>");

function palindromeChecker(string) {
    lowerString = string.toLowerCase()
    if (lowerString == lowerString.split('').reverse().join('')) {
        document.write(string + " is a palindrome");
    }
    else {
        document.write(string + " is not a palindrome");
    }
}

var userInput = prompt("Enter string to check if it is Palindrome or not : ");

palindromeChecker(userInput);

document.write("<br><br><br><br><br>");
////////////////////////////////////////////





// FUNCTION (Ch#35-38): Task # 11 :  Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. <br> EXAMPLE STRING : 'the quick brown fox' <br> EXPECTED OUTPUT : 'The Quick Brown Fox'
document.write("<h2><b>FUNCTION (Ch#35-38): Task # 11</b></h2>");
document.write("<h3><b>Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. <br> EXAMPLE STRING : 'the quick brown fox' <br> EXPECTED OUTPUT : 'The Quick Brown Fox' :</b></h3>");

function titleCaseConverter(str) {
    document.write("<b> Before </b>: " + str + "<br>");
    var words = str.toLowerCase().split(" ");
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    document.write("<b> After </b>: " + words.join(" "));
}

titleCaseConverter("the quick brown fox");

document.write("<br><br><br><br><br>");
////////////////////////////////////////////





// FUNCTION (Ch#35-38): Task # 12 :  Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. <br> EXAMPLE STRING : 'Web Development Tutorial' <br> EXPECTED OUTPUT : 'Development'
document.write("<h2><b>FUNCTION (Ch#35-38): Task # 12</b></h2>");
document.write("<h3><b>Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. <br> EXAMPLE STRING : 'Web Development Tutorial' <br> EXPECTED OUTPUT : 'Development' :</b></h3>");

function longestWordChecker(str) {
    document.write("<b> EXAMPLE STRING </b>: " + str + "<br>");

    var words = str.split(" ");

    var longestWord = "";
    var longestWordLength = 0;
    var wordLength = 0;

    for (var i = 0; i < words.length; i++) {

        wordLength = words[i].length;
        if (wordLength > longestWordLength){
            longestWordLength = wordLength;
            longestWord = words[i];
        }
    }
    document.write("<b> EXPECTED OUTPUT </b>: " + longestWord);
}

longestWordChecker("Web Development Tutorial");

document.write("<br><br><br><br><br>");
////////////////////////////////////////////





// FUNCTION (Ch#35-38): Task # 13 :  Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.<br> <i> Sample arguments : 'JSResourceS.com', 'o' </i>
document.write("<h2><b>FUNCTION (Ch#35-38): Task # 13</b></h2>");
document.write("<h3><b>Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.<br> <i> Sample arguments : 'JSResourceS.com', 'o' </i> :</b></h3>");

function wordsOccurrencesChecker(string , letter) {
    var strLower = string.toLowerCase();

    var occurrence = strLower.split(letter).length - 1;

    document.write("<b>Text :</b> " + string + "<br>");
    document.write("There are <b> " + occurrence + "</b> occurrence(s) of the word " + letter);
}

wordsOccurrencesChecker("JSResourceS.com" , "o");

document.write("<br><br><br><br><br>");
////////////////////////////////////////////





// FUNCTION (Ch#35-38): Task # 14 :  The Geometrizer <br><br> Create 2 functions that calculate properties of a circle, using the definitions here. <br><br> Create a function called calcCircumference: <br><br> • Pass the radius to the function. • Calculate the circumference based on the radius, and output "The circumference is NN". <br><br> Create a function called calcArea: <br><br> • Pass the radius to the function. <br> • Calculate the area based on the radius, and output "The area is NN". <br><br><br> Circumference of circle = 2πr <br><br><br> Area of circle = πr2
document.write("<h2><b>FUNCTION (Ch#35-38): Task # 14</b></h2>");
document.write("<h3><b>The Geometrizer <br><br> Create 2 functions that calculate properties of a circle, using the definitions here. <br><br> Create a function called calcCircumference: <br><br> • Pass the radius to the function. • Calculate the circumference based on the radius, and output 'The circumference is NN'. <br><br> Create a function called calcArea: <br><br> • Pass the radius to the function. <br> • Calculate the area based on the radius, and output 'The area is NN'. <br><br><br> Circumference of circle = 2πr <br><br><br> Area of circle = πr2 :</b></h3>");

document.write("OUTPUT : <br><br>");
function calcCircumference(radius){
    circumference = (2 * 3.142 * radius);
    document.write("The circumference is : " + circumference + "<br><br>");
}

calcCircumference(12);

function calcArea(radius){
    area = (3.142 * radius * radius);
    document.write("The area is : " + area);
}

calcArea(12);


document.write("<br><br><br><br><br>");
////////////////////////////////////////////






















