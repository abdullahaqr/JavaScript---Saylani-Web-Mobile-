// // FUNCTIONS, SWITCH STATEMENTS, WHILE, DO-WHILE LOOPS (Ch#38-42): Task # 1 :  Write a custom function power ( a, b ), to calculate the value of a raised to b.
// document.write("<h2><b>FUNCTIONS, SWITCH STATEMENTS, WHILE, DO-WHILE LOOPS (Ch#38-44): Task # 1</b></h2>");
// document.write("<h3><b>Write a custom function power ( a, b ), to calculate the value of a raised to b. :</b></h3>");

// function power(a, b){
//     var result = a**b;
//     document.write("The result of " + a + "^" + b + " is : " + result);
// }
// power(5, 2);

// document.write("<br><br><br><br><br>");
// ////////////////////////////////////////////





// // FUNCTIONS, SWITCH STATEMENTS, WHILE, DO-WHILE LOOPS (Ch#38-42): Task # 2 :  Any year is entered through the keyboard. Write a function to determine whether the year is a leap year or not. Leap years ..., 2012, 2016, 2020, …
// document.write("<h2><b>FUNCTIONS, SWITCH STATEMENTS, WHILE, DO-WHILE LOOPS (Ch#38-44): Task # 2</b></h2>");
// document.write("<h3><b>Any year is entered through the keyboard. Write a function to determine whether the year is a leap year or not.<br> Leap years ..., 2012, 2016, 2020, … :</b></h3>");

// var userInput = Number(prompt("Enter year to check if it's leap year or not : \n e.g: 2008 "));
// function leapYear(year){
//     if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)){
//         document.write("The year " + year + " is a leap year !")
//     }
//     else{
//         document.write("The year " + year + " is <b>not</b> a leap year !")
//     }
// }

// leapYear(userInput);


// document.write("<br><br><br><br><br>");
// ////////////////////////////////////////////





// // FUNCTIONS, SWITCH STATEMENTS, WHILE, DO-WHILE LOOPS (Ch#38-42): Task # 3 :  If the lengths of the sides of a triangle are denoted by a, b, and c, then area of triangle is given by area = S(S − a)(S − b)(S − c) where, S = ( a + b + c ) / 2 Calculate area of triangle using 2 functions
// document.write("<h2><b>FUNCTIONS, SWITCH STATEMENTS, WHILE, DO-WHILE LOOPS (Ch#38-44): Task # 3</b></h2>");
// document.write("<h3><b>If the lengths of the sides of a triangle are denoted by a, b, and c, then area of triangle is given by <br> area = S(S − a)(S − b)(S − c) <br> where, S = ( a + b + c ) / 2 <br><br> Calculate area of triangle using 2 functions :</b></h3>");

// var side1 = Number(prompt("Enter length of the side # 1 of triangle "));
// var side2 = Number(prompt("Enter length of the side # 2 of triangle "));
// var side3 = Number(prompt("Enter length of the side # 3 of triangle "));

// function calculate_S(a, b, c){
//     var s = ( (a+b+c) / 2 )
//     return s;
// }

// function areaOfTriangle(a, b, c){
//     var s = calculate_S(a, b, c);
//     var area = Math.sqrt( (s*((s - a)*(s - b)*(s - c))) );
//     document.write("The area of triangle is : " + area.toFixed(2));
// }

// areaOfTriangle(side1, side2, side3);


// document.write("<br><br><br><br><br>");
// ////////////////////////////////////////////





// // FUNCTIONS, SWITCH STATEMENTS, WHILE, DO-WHILE LOOPS (Ch#38-42): Task # 4 :  Write a function that receives marks received by a student in 3 subjects and returns the average and percentage of these marks. there should be 3 functions one is the mainFunction and other are for average and percentage. Call those functions from mainFunction and display result in mainFunction.
// document.write("<h2><b>FUNCTIONS, SWITCH STATEMENTS, WHILE, DO-WHILE LOOPS (Ch#38-44): Task # 4</b></h2>");
// document.write("<h3><b>Write a function that receives marks received by a student in 3 subjects and returns the average and percentage of these marks. there should be 3 functions one is the mainFunction and other are for average and percentage. Call those functions from mainFunction and display result in mainFunction. :</b></h3>");

// var sub1 = Number(prompt("Enter the obtained marks of subject # 1 out of 100 :  "));
// var sub2 = Number(prompt("Enter the obtained marks of subject # 2 out of 100 :  "));
// var sub3 = Number(prompt("Enter the obtained marks of subject # 3 out of 100 :  "));

// function averageCal(a, b, c){
//     return ( (a+b+c)/3 )
// }

// function percentageCal(a, b, c){
//     return ( ((a+b+c)/300) * 100 )
// }

// function mainFunction(a, b, c) {
//     var average = averageCal(a, b, c);
//     var percentage = percentageCal(a, b, c);

//     document.write("Result : <br><br>");
//     document.write("Average : " + average.toFixed(2) + "<br>" );
//     document.write("Percentage : " + percentage.toFixed(2) + " %" );

// }

// mainFunction(sub1, sub2, sub3);


// document.write("<br><br><br><br><br>");
// ////////////////////////////////////////////





// // FUNCTIONS, SWITCH STATEMENTS, WHILE, DO-WHILE LOOPS (Ch#38-42): Task # 5 :  You have learned the function indexOf. Code your own custom function that will perform the same functionality. You can code for single character as of now
// document.write("<h2><b>FUNCTIONS, SWITCH STATEMENTS, WHILE, DO-WHILE LOOPS (Ch#38-44): Task # 5</b></h2>");
// document.write("<h3><b>You have learned the function indexOf. Code your own custom function that will perform the same functionality. You can code for single character as of now :</b></h3>");

// function custom_indexOf(word, letter) {
//     var index ;
//     for (var i = 0; i < word.length ; i++){
//         if (word[i] === letter){
//             index = i;
//             break
//         }
//         index = "Not Found";
//     }
//     return index
// }

// var word = prompt("Enter the word :  ");
// var letter = prompt("Enter the letter to find it's index number in word :  " + word);

// var index =  custom_indexOf(word, letter);
// document.write("The index of '" + letter + "' in '" + word + "' is : <b>" + index + "</b>");



// document.write("<br><br><br><br><br>");
// ////////////////////////////////////////////





// // FUNCTIONS, SWITCH STATEMENTS, WHILE, DO-WHILE LOOPS (Ch#38-42): Task # 6 :  Write a function to delete all vowels from a sentence. Assume that the sentence is not more than 25 characters long.
// document.write("<h2><b>FUNCTIONS, SWITCH STATEMENTS, WHILE, DO-WHILE LOOPS (Ch#38-44): Task # 6</b></h2>");
// document.write("<h3><b>Write a function to delete all vowels from a sentence. Assume that the sentence is not more than 25 characters long. :</b></h3>");

// var userInput = prompt("Enter the sentence of maximum 25 characters long \n (Note that a space is also counted as a character !) :  ");

// function vowels_deleter(sentence) {
//     if (sentence.length > 25) {
//         document.write("Your sentence exceeds the limit of 25 characters !!!");
//     }
//     else {
//         document.write("<b>Before:</b><br>" + sentence + "<br><br><br>");
//         var sentence_del = [];

//         for (var i = 0; i < sentence.length; i++) {

//             if (sentence[i] === "a" || sentence[i] === "A" || sentence[i] === "e" || sentence[i] === "E" || sentence[i] === "i" || sentence[i] === "I" || sentence[i] === "o" || sentence[i] === "O" || sentence[i] === "u" || sentence[i] === "U") {
//                 sentence_del[i] = "";
//             }else{
//                 sentence_del.push(sentence[i]);
//             }
//         }

//         document.write("<b>After:</b><br>" + sentence_del.join(""));
//     }
// }

// vowels_deleter(userInput);

// document.write("<br><br><br><br><br>");
// ////////////////////////////////////////////





// // FUNCTIONS, SWITCH STATEMENTS, WHILE, DO-WHILE LOOPS (Ch#38-42): Task # 7 :  Write a function with switch statement to count the number of occurrences of any two vowels in succession in a line of text. For example, in the sentence “Pleases read this application and give me gratuity” Such occurrences are ea, ea, ui.
// document.write("<h2><b>FUNCTIONS, SWITCH STATEMENTS, WHILE, DO-WHILE LOOPS (Ch#38-44): Task # 7</b></h2>");
// document.write("<h3><b>Write a function with switch statement to count the number of occurrences of any two vowels in succession in a line of text. For example, in the sentence <br> “Pleases read this application and give me gratuity” <br> Such occurrences are ea, ea, ui. :</b></h3>");

// function doubleVowelChecker(sentence){
//     var result = [] , counter = 0;

//     for (var i = 0 ; i < sentence.length ; i++){
//         if ( (sentence[i] === "a" || sentence[i] === "A" || sentence[i] === "e" || sentence[i] === "E" || sentence[i] === "i" || sentence[i] === "I" || sentence[i] === "o" || sentence[i] === "O" || sentence[i] === "u" || sentence[i] === "U") && (sentence[i+1] === "a" || sentence[i+1] === "A" || sentence[i+1] === "e" || sentence[i+1] === "E" || sentence[i+1] === "i" || sentence[i+1] === "I" || sentence[i+1] === "o" || sentence[i+1] === "O" || sentence[i+1] === "u" || sentence[i+1] === "U") ){
//             result += sentence[i] + sentence[i+1] + " ";
//             counter += 1;
//         }
//     }
//     document.write("The number of occurrences of of any two vowels in succession is : " + counter + "<br>");
//     document.write("The list of occurrences of vowels is : " + result);

// }
// var userInput = prompt("Enter the sentence to check the occurrences of any two vowels in succession  :  "); 
// doubleVowelChecker(userInput);

// document.write("<br><br><br><br><br>");
// ////////////////////////////////////////////  ****************** I tried this task with switch but could not find that how to use && and || statements with switch statements 





// // FUNCTIONS, SWITCH STATEMENTS, WHILE, DO-WHILE LOOPS (Ch#38-42): Task # 8 :  The distance between two cities (in km.) is input through the keyboard. Write four functions to convert and print this distance in meters, feet, inches and centimeters
// document.write("<h2><b>FUNCTIONS, SWITCH STATEMENTS, WHILE, DO-WHILE LOOPS (Ch#38-44): Task # 8</b></h2>");
// document.write("<h3><b>The distance between two cities (in km.) is input through the keyboard. Write four functions to convert and print this distance in meters, feet, inches and centimeters :</b></h3>");

// var userInput = prompt("Enter the distance in Kilometers to convert it into Meters , Feet , Inches and Centimeters  :  ");

// function toMeters(km){
//     var meter = km * 1000;
//     document.write("Meters : "+ meter +"<br>");
// }
// function toFeet(km){
//     var feet = km * 3280.84;
//     document.write("Feet : "+ feet +"<br>");
// }
// function toInches(km){
//     var inch = km * 39370.1;
//     document.write("Inches : "+ inch +"<br>");
// }
// function toCentimeters(km){
//     var cm = km * 100000;
//     document.write("Centimeters : "+ cm +"<br>");
// }

// document.write("<b>" + userInput +" Kilometers into following : </b><br><br>");
// toMeters(userInput);
// toFeet(userInput);
// toInches(userInput);
// toCentimeters(userInput);

// document.write("<br><br><br><br><br>");
// ////////////////////////////////////////////





// // FUNCTIONS, SWITCH STATEMENTS, WHILE, DO-WHILE LOOPS (Ch#38-42): Task # 9 :  Write a program to calculate overtime pay of employees. Overtime is paid at the rate of Rs. 12.00 per hour for every hour worked above 40 hours. Assume that employees do not work for fractional part of an hour
// document.write("<h2><b>FUNCTIONS, SWITCH STATEMENTS, WHILE, DO-WHILE LOOPS (Ch#38-44): Task # 9</b></h2>");
// document.write("<h3><b>Write a program to calculate overtime pay of employees. Overtime is paid at the rate of Rs. 12.00 per hour for every hour worked above 40 hours. Assume that employees do not work for fractional part of an hour :</b></h3>");

// var userInput = prompt("Enter the total worked hours :  ");

// function workHoursCalculator(hrs){
//     var overtimePay = ( (hrs - 40) * 12 )
//     document.write("The overtime pay of " + hrs + " hours is : <b>$" + overtimePay + "</b>");
// }

// workHoursCalculator(userInput);


// document.write("<br><br><br><br><br>");
// //////////////////////////////////////////// 





// // FUNCTIONS, SWITCH STATEMENTS, WHILE, DO-WHILE LOOPS (Ch#38-42): Task # 10 :  A cashier has currency notes of denominations 10, 50 and 100. If the amount to be withdrawn is input through the keyboard in hundreds, find the total number of currency notes of each denomination the cashier will have to give to the withdrawer
// document.write("<h2><b>FUNCTIONS, SWITCH STATEMENTS, WHILE, DO-WHILE LOOPS (Ch#38-44): Task # 10</b></h2>");
// document.write("<h3><b>A cashier has currency notes of denominations 10, 50 and 100. If the amount to be withdrawn is input through the keyboard in hundreds, find the total number of currency notes of each denomination the cashier will have to give to the withdrawer :</b></h3>");

// var userInput = Number(prompt("Enter the currency amount in hundreds :  "));
// function currencyNotes(amount) {
//     var hundred = 0, fifty = 0, ten = 0;

//     hundred = Math.floor(amount / 100);
//     fifty = Math.floor((amount % 100) / 50);
//     ten = Math.floor(((amount % 100) % 50) / 10);

//     document.write("You will have <b>" + hundred + "</b> hundred notes , <b>" + fifty + "</b> fifty notes and <b>" + ten + "</b> ten notes");
// }

// currencyNotes(userInput);


// document.write("<br><br><br><br><br>");
// ////////////////////////////////////////////





// // EVENTS (Ch#43-48): Task # 1 :  Show an alert box on click on a link.
// document.write("<h2><b>EVENTS (Ch#43-48): Task # 1</b></h2>");
// document.write("<h3><b>Show an alert box on click on a link. :</b></h3>");

// function greet(){
//     alert("Assalam O Alaikum , User ");
// }


// document.write("<br><br><br><br><br>");
// ////////////////////////////////////////////





// // EVENTS (Ch#43-48): Task # 2 :  Display some Mobile images in browser. On click on an image Show the message in alert to user
// document.write("<h2><b>EVENTS (Ch#43-48): Task # 2</b></h2>");
// document.write("<h3><b>Display some Mobile images in browser. On click on an image Show the message in alert to user :</b></h3>");

// function iphone11(){
//     alert("This is iphone 11 Pro Max" );
// }
// function iphone10(){
//     alert("This is iphone 10" );
// }
// function samsungS20(){
//     alert("This is Samsung Galaxy S 20 Ultra" );
// }
// function samsungS10(){
//     alert("This is Samsung Salaxy S 10" );
// }


// document.write("<br><br><br><br><br>");
// ////////////////////////////////////////////





// // EVENTS (Ch#43-48): Task # 3 :  Display 10 student records in table and each row should contain a delete button. If you click on a button to delete a record, entire row should be deleted.
// document.write("<h2><b>EVENTS (Ch#43-48): Task # 3</b></h2>");
// document.write("<h3><b>Display 10 student records in table and each row should contain a delete button. If you click on a button to delete a record, entire row should be deleted. :</b></h3>");

// var studentArray = ["Ali","Umer","Hamza","Bilal","Usama","Arslan","Farhan","Hassan","Huzaifa","Ahmed"];
// var table = document.getElementById("studentTable");
// table.innerHTML = "<tr><td><b>Index</b></td><td><B>Name</B></td><td><b>Class</b></td></tr>";

// for (var i = 0; i < 10; i++){
//     var row = "<tr><td>" + i + "</td><td>" + studentArray[i] + "</td><td>10</td><td><input type='button' value='Delete' onclick='deleteToRow(this)'></td></tr>";
//     table.innerHTML += row;
// }

// function deleteToRow(row){
//     var row_Delete = row.parentNode.parentNode.rowIndex;
//     document.getElementById("studentTable").deleteRow(row_Delete);
// }

// document.write("<br><br><br><br><br>");
// //////////////////////////////////////////// 





// // EVENTS (Ch#43-48): Task # 4 :  Display an image in browser. Change the picture on mouseover and set the first picture on mouseout.
// document.write("<h2><b>EVENTS (Ch#43-48): Task # 4</b></h2>");
// document.write("<h3><b>Display an image in browser. Change the picture on mouseover and set the first picture on mouseout. :</b></h3>");

// // This task is done on html page!!!!!!!!!!!!!!!


// document.write("<br><br><br><br><br>");
// ////////////////////////////////////////////





// // EVENTS (Ch#43-48): Task # 5 :  Show a counter in browser. Counter should increase on click on increase button and decrease on click on decrease button. And show updated counter value in browser.
// document.write("<h2><b>EVENTS (Ch#43-48): Task # 5</b></h2>");
// document.write("<h3><b>Show a counter in browser. Counter should increase on click on increase button and decrease on click on decrease button. And show updated counter value in browser. :</b></h3>");

// function addCounter(){
//     var counter = document.getElementById("counter").innerHTML;
//     counter++;
//     document.getElementById("counter").innerHTML = counter;

// }
// function subCounter(){
//     var counter = document.getElementById("counter").innerHTML;
//     if (counter > 0){
//         document.getElementById("counter").innerHTML -= 1;
//     }

// }

// document.write("<br><br><br><br><br>");
// ////////////////////////////////////////////





// // EVENTS (Ch#49-52): Task # 1 :  Create a signup form and display form data in your web page on submission.
// document.write("<h2><b>EVENTS (Ch#49-52): Task # 1</b></h2>");
// document.write("<h3><b>Create a signup form and display form data in your web page on submission. :</b></h3>");

// function hideForm(){
//     document.getElementById("signupForm").className = "hideForm";
//     document.getElementById("formData").className = "displayForm";

//     var firstName = document.getElementById("firstName").value;
//     document.getElementById("firstNameSpan").innerHTML = firstName;

//     var lastName = document.getElementById("lastName").value;
//     document.getElementById("lastNameSpan").innerHTML = lastName;

//     var password = document.getElementById("password").value;
//     document.getElementById("passwordSpan").innerHTML = password;

//     var email = document.getElementById("email").value;
//     document.getElementById("emailSpan").innerHTML = email;

//     var phoneNumber = document.getElementById("phoneNumber").value;
//     document.getElementById("phoneNumberSpan").innerHTML = phoneNumber;

//     var address = document.getElementById("address").value;
//     document.getElementById("addressSpan").innerHTML = address;

//     var postalCode = document.getElementById("postalCode").value;
//     document.getElementById("postalCodeSpan").innerHTML = postalCode;
// }


// document.write("<br><br><br><br><br>");
// ////////////////////////////////////////////





// // EVENTS (Ch#49-52): Task # 2 :  Suppose in your webpage there is content area in which you have entered your item details, but user can only see some details on first look. When user clicks on “Read more” button, full detail of that particular item will be displayed.
// document.write("<h2><b>EVENTS (Ch#49-52): Task # 2</b></h2>");
// document.write("<h3><b>Suppose in your webpage there is content area in which you have entered your item details, but user can only see some details on first look. When user clicks on “Read more” button, full detail of that particular item will be displayed. :</b></h3>");

// function paraExpand(){
//     var detailedPAra = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, saepe! Excepturi rem rerum iusto numquam, ratione, veniam eum quia corrupti omnis quaerat dolor recusandae  temporibus illum? Suscipit aliquid ea in!"
//     document.getElementById("ParaShort").innerHTML = detailedPAra;
// }


// document.write("<br><br><br><br><br>");
// ////////////////////////////////////////////





// // EVENTS (Ch#49-52): Task # 3 :  In previous assignment you have created a tabular data using javascript. Let’s modify that. Create a form which takes student’s details and show each student detail in table. Each row of table must contain a delete button and an edit button. On click on delete button entire row should be deleted. On click on edit button, a hidden form will appear with the values of that row
// document.write("<h2><b>EVENTS (Ch#49-52): Task # 3</b></h2>");
// document.write("<h3><b>In previous assignment you have created a tabular data using javascript. Let’s modify that. Create a form which takes student’s details and show each student detail in table. Each row of table must contain a delete button and an edit button. On click on delete button entire row should be deleted. On click on edit button, a hidden form will appear with the values of that row :</b></h3>");

// var studentNameArray = [];
// var studentClassArray = [];

// var studentFormTable = document.getElementById("studentFormTable");
// studentFormTable.innerHTML = "<tr><td><b>Index</b></td><td><B>Name</B></td><td><b>Class</b></td></tr>";

// function addNew() {
//     var studentName = document.getElementById("studentName");
//     var studentClass = document.getElementById("studentClass");
//     studentFormTable.innerHTML = "";

//     studentNameArray.push(studentName.value)
//     studentClassArray.push(studentClass.value)

//     studentFormTable.innerHTML = "<tr><td><b>Index</b></td><td><B>Name</B></td><td><b>Class</b></td></tr>";

//     for (var i = 0; i < studentNameArray.length; i++) {
//         var row = "<tr><td>" + i + "</td><td>" + studentNameArray[i] + "</td><td>" + studentClassArray[i] + "</td><td><input type='button' value='Delete' onclick='deleteToRow(this)'><input id='editBtn' type='button' value='Edit' onclick='edit_row(this)'><input id='saveBtn' type='button' value='Save' onclick='save_row(this)' style='display: none;'></td></tr>";
//         studentFormTable.innerHTML += row;
//     }

//     studentName.value = ""
//     studentClass.value = ""
// }

// function deleteToRow(row) {
//     var row_Delete = row.parentNode.parentNode.rowIndex;
//     document.getElementById("studentFormTable").deleteRow(row_Delete);

//     studentNameArray.splice(row_Delete - 1, 1);
//     studentClassArray.splice(row_Delete - 1, 1);

// }

// function edit_row(row){
//     var row_edit = row.parentNode.parentNode;

//     row.style.display="none";
//     row.nextSibling.style.display="inline";

//     // document.getElementById("editBtn").style.display="none";
//     // document.getElementById("saveBtn").style.display="inline";

//     var student_Name = row_edit.childNodes[1].innerHTML
//     var student_Class = row_edit.childNodes[2].innerHTML

//     row_edit.childNodes[1].innerHTML = "<input type='text'  value='" + student_Name + "'>";
//     row_edit.childNodes[2].innerHTML = "<input type='text'  value='" + student_Class + "'>";



// }

// function save_row(row){
//     var row_edit = row.parentNode.parentNode;

//     row.style.display="none";
//     row.previousSibling.style.display="inline";

//     // document.getElementById("editBtn").style.display="inline";
//     // document.getElementById("saveBtn").style.display="none";

//     var student_Name = row_edit.childNodes[1].firstChild.value
//     var student_Class = row_edit.childNodes[2].firstChild.value

//     row_edit.childNodes[1].innerHTML = student_Name
//     row_edit.childNodes[2].innerHTML = student_Class


// }


// document.write("<br><br><br><br><br>");
// ////////////////////////////////////////////





// // EVENTS (Ch# 53-57): Task # 1 :  Consider you have 4 images in a file as shown below: <br> Now When you click on an image it should display in a modal <br> Modal code is available in this assignment file.
// document.write("<h2><b>EVENTS (Ch# 53-57): Task # 1</b></h2>");
// document.write("<h3><b>Consider you have 4 images in a file as shown below: <br> Now When you click on an image it should display in a modal <br> Modal code is available in this assignment file. :</b></h3>");

// var imagesArray = ["images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg"];
// var imagesDiv = document.getElementById('imagesDiv');

// for (var i = 1; i <= 4; i++){
//     imagesDiv.innerHTML += "<img class='phonePics' id='img" + i + "' src='images/" + i + ".jpg' onclick='showModal(" + i + ")'>"
// }

// function showModal(no){
//     var modal = document.getElementById('modal');
//     modal.classList.add('modal-open');
//     modal.classList.remove('modal-close');
//     modal.style.display="block";
//     modal.childNodes[3].src="images/" + no + ".jpg";
// }

// function onClosedImagModal(){
//     var modal = document.getElementById('modal');
//     modal.classList.add('modal-close');
//     modal.classList.remove('modal-open');
//     setTimeout(()=>{ modal.style.display = "none"; }, 550)
// }

// document.write("<br><br><br><br><br>");
// ////////////////////////////////////////////





// // EVENTS (Ch# 53-57): Task # 2 :  Create a paragraph and two buttons “zoom in ”(+) and “zoom out”(-). <br> On each click on “zoom in”(+) , add 10px in font size of paragraph. <br> And on each click on “zoom out”(-) , minus 10px in font size of paragraph.
// document.write("<h2><b>EVENTS (Ch# 53-57): Task # 2</b></h2>");
// document.write("<h3><b>Create a paragraph and two buttons “zoom in ”(+) and “zoom out”(-). <br> On each click on “zoom in”(+) , add 10px in font size of paragraph. <br> And on each click on “zoom out”(-) , minus 10px in font size of paragraph. :</b></h3>");

// function zoomIn(){
//     var zoom_Para = document.getElementById('zoomPara');
//     var style = window.getComputedStyle(zoom_Para, null).getPropertyValue('font-size');
//     var fontSize = parseFloat(style);
//     zoom_Para.style.fontSize = (fontSize + 10) + 'px';
// }

// function zoomOut(){
//     var zoom_Para = document.getElementById('zoomPara');
//     var style = window.getComputedStyle(zoom_Para, null).getPropertyValue('font-size');
//     var fontSize = parseFloat(style);
//     zoom_Para.style.fontSize = (fontSize - 10) + 'px';
    
// }

// document.write("<br><br><br><br><br>");
// ////////////////////////////////////////////





// // DOM (Ch# 58-67): Task # 1 :  Consider you have following code snippet: <br> i. Get element of id “main-content” and assign them in a variable. <br> ii. Display all child elements of “main-content” element. <br> iii. Get all elements of class “render” and show their innerHTML in browser. <br> iv. Fill input value whose element id first-name using javascript. <br> v. Repeat part iv for id ”last-name” and “email”.
// document.write("<h2><b>DOM (Ch# 58-67): Task # 1</b></h2>");
// document.write("<h3><b>Consider you have following code snippet: <br> i. Get element of id “main-content” and assign them in a variable. <br> ii. Display all child elements of “main-content” element. <br> iii. Get all elements of class “render” and show their innerHTML in browser. <br> iv. Fill input value whose element id first-name using javascript. <br> v. Repeat part iv for id ”last-name” and “email”. :</b></h3>");


// // i. Get element of id “main-content” and assign them in a variable.
// document.write("i. Get element of id “main-content” and assign them in a variable. <br><br>");
// var main_content = document.getElementById("main-content");


// // ii. Display all child elements of “main-content” element.
// document.write("ii. Display all child elements of “main-content” element. <br><br>");
// var childNodesOf_main_content = main_content.childNodes;


// // iii. Get all elements of class “render” and show their innerHTML in browser.
// document.write("iii. Get all elements of class “render” and show their innerHTML in browser. <br><br>");

// var renderClassList = document.getElementsByClassName("render");
// document.write("<h3>Output : </h3>")

// for (var i = 0; i < renderClassList.length; i++){
//     document.write(renderClassList[i].innerHTML + "<br>");
// }


// // iv. Fill input value whose element id first-name using javascript.
// document.write("iv. Fill input value whose element id first-name using javascript. <br><br>");

// var first_name = document.getElementById("first-name");
// first_name.value = "Abdullah";


// // v. Repeat part iv for id ”last-name” and “email”.
// document.write("v. Repeat part iv for id ”last-name” and “email”. <br><br>");

// var last_name = document.getElementById("last-name");
// last_name.value = "Bin Abdul Qadeer";

// var email = document.getElementById("email");
// email.value = "abdullahaqr786@gmail.com";


// document.write("<br><br><br><br><br>");
// ////////////////////////////////////////////





// // DOM (Ch# 58-67): Task # 2 :  use HTML code of question 1 and show the result on browser.
// document.write("<h2><b>DOM (Ch# 58-67): Task # 2</b></h2>");
// document.write("<h3><b>use HTML code of question 1 and show the result on browser. :</b></h3>");

// // i. What is node type of element having id “form-content”.
// document.write("i. What is node type of element having id “form-content”. <br><br>");

// var form_content = document.getElementById("form-content");
// var nodeTypeOf_form_content = form_content.nodeType;
// document.write("Node type of form-content is : " + nodeTypeOf_form_content  +"<br>")

// // ii. Show node type of element having id “lastName” and its child node.
// document.write("i. What is node type of element having id “form-content”. <br><br>");


// var lastName = document.getElementById("lastName");
// var nodeTypeOf_lastName = lastName.nodeType;
// document.write("Node type of lastName is : " + nodeTypeOf_lastName  +"<br>");

// var nodeTypeOf_lastName_childNodes = lastName.firstChild.nodeType;
// document.write("Node type of lastName child is : " + nodeTypeOf_lastName_childNodes  +"<br><br>");


// // iii. Update child node of element having id “lastName”.
// document.write("iii. Update child node of element having id “lastName”. <br><br>");

// lastName.innerHTML = "Last Name : John (Updated)";

// // iv. Get First and last child of id “main-content”.
// document.write("iv. Get First and last child of id “main-content” <br><br>");

// var main_content_firstChild = main_content.firstChild;
// var main_content_lastChild = main_content.lastChild;

// // v. Get next and previous siblings of id “lastName”.
// document.write("v. Get next and previous siblings of id “lastName”. <br><br>");

// var lastName_previousSibling = lastName.previousSibling;
// var lastName_nextSibling = lastName.nextSibling;

// // vi. Get parent node and node type of element having id “email”
// document.write("vi. Get parent node and node type of element having id “email” <br><br>");

// var email_parentNode = email.parentNode;
// var email_parentNode_nodeType = email_parentNode.nodeType;

// document.write("<br><br><br><br><br>");
// ////////////////////////////////////////////






















// // EVENTS (Ch#49-52): Task # 1 :  
// document.write("<h2><b>EVENTS (Ch#49-52): Task # 1</b></h2>");
// document.write("<h3><b> :</b></h3>");




// document.write("<br><br><br><br><br>");
// ////////////////////////////////////////////
















