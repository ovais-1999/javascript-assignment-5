
// Chapter#1

// alert("Thank you For Your Input");



// alert("Welcome to Javascript land... \n Happy Codding!");


// for(var i = 0; i < 3; i++){
//     alert("Hello World");
// }

// var a =("Hello.. I Can Run JS through my web browser console");
// console.log(a);

                               // Chapter#2

// Q1                               

// var userName = "Muhammad";

// var myName = "Ovais";

// alert(userName + ' ' + myName);

// Q2

// var messAge = "Hello World"; 
// alert(messAge);

// Q3

// var naMe = "Muhammad Ovais";
// alert(naMe)
// var aGe = "16";
// alert(aGe);
// var couRse = "Web & Mobile Hybrid Application";
// alert(couRse)
 
// Q4

// alert("PIZZA \n PIZZ \n PIZ \n PI \n P");

// Q5

// var myemAil = "My Email Addess is :";
// var emAil = " oviasmuhammad@gmail.com";
// alert(myemAil + emAil);

// Q6

// var boOk = "A smarter Way to Learn Javascript";
// alert(boOk);

// Q7

// document.write("Yeh! I can write HTML content through Javascript.");

// Q8

// alert("“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”");


                                 // CH#3


// Q1

// var age = "I am 20 Years Old";
// alert(age);

// Q2

// var numberOFvisits = "You have Visited this site 15 times.";
// alert(numberOFvisits);

// Q3

// var birthYear = 1999;
// document.write("My Birth Year is" + " " + birthYear + "<br>");
// document.write("Data type of my declared variable is number.");

// Q4

// var visitersName = "Muhammad Ovais";
// var productTittle = "T-Shirts";
// var quanTity = 3;
// var storeName = "XYZ clothing store."
// document.write(visitersName + " " + "Ordered" + " " + quanTity + " " + productTittle + " " +"on" + " " + storeName)  


                                 // CH#4

// Q1

// var myName, myEmail, myCourse;

// Q2

// 5 legal way to Declare a variable.
// var myName;
// var bird_Names;
// var students123;
// var $aGe;
// var myVar;

// 5 Illegal way to Declare a variable.
// var "myName";
// var 12343;
// var 1aGe;
// var car Names;
// var var;

// Q3

// document.write("<h1>Rules for naming JS variables</h1>")

// document.write("Variable names can only contain Numbers, $, and _ . For example $my_1stVariable" + "<br>" + "Variables must begin with a Letter, $ or _. For example $name, _name or name" + "<br>" + " Variable names are case Sensitive." + "<br>" + "Variable names should not be JS Keywords.")


                                      // CH#5


//Q1

// Addition

// var num = 3;
// var anothernum = 5;
// var numPopular = num + anothernum;
// document.write("The sum of " + num + " and " + anothernum + " is " + numPopular);

// Q2

// Subtraction

// var num = 9;
// var anothernum = 7;
// var numPopular = num - anothernum;
// document.write("The subtraction of " + num + " and " + anothernum + " is " + numPopular + ".");

// Multiplication

// var num = 12;
// var anothernum = 5;
// var numPopular = num * anothernum;
// document.write("The Multiplication of " + num + " and " + anothernum + " is " + numPopular + ".");

// Division

// var num = 100;
// var anothernum = 4;
// var numPopular = num / anothernum;
// document.write("The Division of " + num + " and " + anothernum + " is " + numPopular + ".");

// Modulus

// var num = 10;
// var anothernum = 4;
// var numPopular = num % anothernum;
// document.write("The Modulus of " + num + " and " + anothernum + " is " + numPopular + ".");

// Q3

// var a;
// document.write("Value after variable declaration is " + a + "<br>");
// a = 7;
// document.write("Initial value " + a + "<br>");
// var a = ++a
// document.write("Value after incriment " + a + "<br>");
// var a = a+7;
// document.write("Value after addition " + a + "<br>");
// var a = --a;
// document.write("Value after decrement " + a + "<br>");
// var a = a % 2;
// document.write("The remaider is " + a + "<br>");

// Q4

// var oneTicket = 600;
// var nticKets = 10;
// document.write("Total Cost Of 5 ticket is " + oneTicket * nticKets + " PKR"); 

// Q5

// for(i = 1; i <= 10; i++){
//     document.write("5" + "x" + i + "=" + 5*i + "<br>")
// }

// Q6

// var c = 40;
// var f = 104;
// var $c = (f - 32) * 5/9;
// var $f = (c * 9/5) + 32; 
// document.write(f + " <sup>o</sup>F" + " is equal to " + $c + " <sup>o</sup>C" + "<br>")
// document.write(c + " <sup>o</sup>C" + " is equal to " + $f + " <sup>o</sup>F")

// Q7

// var item1 = 300;
// var item2 = 600;
// var quanTityiTem1 = 3;
// var quanTityiTem2 = 4;
// var shippingCharges = 200;
// var item1Total = item1*quanTityiTem1;
// var item2Total = item2*quanTityiTem2;
// document.write("<h1>Shopping Cart</h1>");
// document.write("Price of item 1 is " + item1 + "<br>" + "Price of item 2 is " + item2 + "<br>" + 
// "Quantity of item 1 is " + quanTityiTem1 + "<br>" + "Quantity of item 2 is " + quanTityiTem2 + "<br>" +"Shipping Charges " + shippingCharges + "<br>");

// document.write(item1Total + item2Total + shippingCharges + " PKR");

// Q8

// var markObt = 700;
// var totalMarks = 1100;
// var perCentage = markObt/totalMarks*100;
// document.write("<h1>Mark Sheet</h1>")
// document.write("Total Marks : " + totalMarks + "<br>" + "Marks Obtained : " + markObt + "<br>" + "Percentage : " + perCentage);

// Q9

// document.write("<h1>Currency in PKR</h1>");
// var pKr = 1;
// var uS$ = 165;
// var sDr = 40;
// document.write("Total Currency in PKR " + (uS$ * 10 + sDr * 25))

// Q10

// var a = 10+5*6/2-1;
// document.write(a)

// Q11











// Q12

// var circleRadius = 20;
// var circumferRence = 2*3.14*circleRadius;
// var circlearea = 3.14*circleRadius*circleRadius;
// document.write("The Radius of Circle is " + circleRadius + "<br>" + "The circumference of circle is " + circumferRence +  "<br>" + "The Area of circle is " + circlearea); 

// Q13

// var snacks = "chocolate chip";
// var aGe = 20;
// var maxAge = 65;
// var snacksPerday = 3;
// var need = snacksPerday * 12775;
// document.write("Favorite Snacks : " + snacks + "<br>");
// document.write("Current Age : " + aGe + "<br>");
// document.write("Estimated Maximum Age : " + maxAge + "<br>");
// document.write("Amount of Snacks Per Day : " + snacksPerday + "<br>");
// document.write("You Will Need : " + need + " " + snacks + " to last you until the ripe old age of” " + maxAge);


                                  // CH6-9

// Q1

// var a = 10;
// document.write("<h1>Result</h1>" + "<br>" + "The Value Of a is " + a + "<br>" + "<br>" + "<br>");
// var a = ++a;
// document.write("The vale of ++a is " + a + "<br>" + "The value of a is " + a  + "<br>");
// var a = a++;
// document.write("The value of a++ is" + a++ + "<br>" + "The value of a is " + a  + "<br>");
// var a = --a;
// document.write("The value of --a is" + a + "<br>" + "The value of a is " + a  + "<br>");
// var a = a--;
// document.write("The value of a-- is" + a-- + "<br>" + "The value of a is " + a  + "<br>");

// Q2

// var a = 2, b = 1;
// var a = --a;
// document.write("--a " + "is " + a + "<br>");
// var b = --b;
// document.write("--b " + "is " + b + "<br>");
// var c = a-b;
// document.write("--a - --b " + "is " + c + "<br>");
// var b = ++b;
// document.write("++b " + "is " + b + "<br>");
// var b = b--;
// document.write("b-- " + "is " + b + "<br>");
// var d = b + b;
// document.write("++b + --b " + "is " + d + "<br>");

// var result = c + d;

// document.write("The result is " + result);

// Q3

// prompt("Enter Your Name");
// alert("welcome to our website");

// Q4

// var j = prompt("Enter Your Number");
// for(i = 1; i <= 10; i++){
//     document.write(j + "x" + i + "=" + j*i + "<br>")
// };

// Q5

// var sub_1 = prompt("Enter subject 1");
// var sub_2 = prompt("Enter subject 2");
// var sub_3 = prompt("Enter subject 3");
// var marksObtsub1 = prompt("Enter Subject 1 Marks");
// var marksObtsub2 = prompt("Enter Subject 2 Marks");
// var marksObtsub3 = prompt("Enter Subject 3 Marks");
// var totalMarks = 100;
// var perCentagesub1 = marksObtsub1 / totalMarks *100;
// var perCentagesub2 = marksObtsub2 / totalMarks *100;
// var perCentagesub3 = marksObtsub3 / totalMarks *100;

// document.write("Subjects" + "<br>" + sub_1 + "<br>" +sub_2 + "<br>" + sub_3 + "<br>");
// document.write("Toatal Marks" + "<br>" +totalMarks + "<br>" + totalMarks + "<br>" + totalMarks + "<br>");
// document.write("Marks Otained " + "<br>" + marksObtsub1 + "<br>" + marksObtsub2 + "<br>" + marksObtsub3 + "<br>");
// document.write("Percentage"+ "<br>" + perCentagesub1 +  "<br>" + perCentagesub2 + "<br>"+perCentagesub3 + "<br>")



                                      // CH#9,10

// Q1                                      
// var a = prompt("Which City is Pakistan's Biggest City ");
// if(a === "karachi"){
//     alert("Welcome to the city of Light")
// };

// Q2

// var genDer = prompt("Enter Your Gender");
// if(genDer === "male"){
//     alert("Good Morning Sir");
// }
// else{
//     alert("Good Morning Maam");
// }

// Q3

// var color$ = prompt("Enter Colour for Trafic signal");
// if(color$ === "red"){
//     alert("You Must Stop");
// }
// else if(color$ === "yellow"){
//     alert("Ready to Move")
// }
// else{
//     alert("Move Now");
// }

// Q4

// var fuEl = prompt("Enter remaining fuel in car");
// if(fuEl === "0.25 litre"){
//     alert("“Please refill the fuel in your car”");
// }
// else{
//     alert("You have fuel");
// }

// Q5

// a.

// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

// b.

// var b = 82;
// if (b++ === 82){
// alert("given condition for variable b is true");
// }

// c.

// var c = 12;
// if (c++ === 12){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 15){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
    
// d.

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

//e.

// if (true){
// alert("True");
// }
// if ("false"){
//  alert("false")
// }

//f.

// if("car" < "cat"){
// alert("car is smaller than cat");
// }

// Q6

// document.write("<h1>Mark Sheet</h1>")

// var totalMarks = prompt("Enter Your Total Marks");
// document.write("Total Marks" + totalMarks + "<br>");
// var marksObt = prompt("Enter Your Obtained Marks");
// document.write("Marks Obtained" + marksObt + "<br>");
// var perCentage = marksObt / totalMarks * 100;
// document.write("Percentage" + perCentage + "%" + "<br>");
// if(perCentage >= 80){
//     document.write("Grade : A+" + "<br>" + "Remarks : Excellent ");
// }
// else if(perCentage >= 70){
//     document.write("Grade : A" + "<br>" + "Remarks : V.Good");
// }
// else if(perCentage >= 60){
//     document.write("Grade : B" + "<br>" + "Remarks : Good");
// }
// else if(perCentage >= 50){
//     document.write("Grade : C" + "<br>" + "Remarks : Nice");
// }
// else if(perCentage >= 40){
//     document.write("Grade : D" + "<br>" + "Remarks : Need To Improve");
// }
// else{
//     document.write("Fail" + "<br>" + "Remarks : Poor")
// }


// Q7

// var secretnum = 6;
// var guess$ = prompt("Guess the number b/w 1 to 10");
// if(secretnum == guess$){
//     alert("Correct Answer");
// }
// else if(secretnum == guess$-1){
//     alert("So Close");
// }
// else{
//     alert("Wrong Answer");
// }


// Q8

// var count = prompt("Enter Number");
// if (count % 3 === 0){
//  alert("This Number is Divisible by 3");
// }
// else{
//     alert("This Number is Not Divisible by 3")
// } 

// Q9

// var num = prompt("Enter Number");
// document.write("Number = "+num+"<br>");
// if(num % 2 == 0) {
//    document.write('Number is even!');
// } else {
//    document.write('Number is odd!');
// }


// Q10


// var temPerature = prompt("Enter Temperatue");

// if(temPerature >= 40){
// document.write("Its Too Hot Today." + "<br>" );
// }
// else if(temPerature >= 30){
// document.write("The Weather today is Normal." + "<br>");
// }
// else if(temPerature >= 20){
// document.write("The Weather today is cool." + "<br>");
//     }
// else if(temPerature >= 10){
// document.write("OMG! weather is So cold" + "<br>");
//     }
// else if(temPerature >= 0){
// document.write("Freezing Cold");
//     }
// else{
// document.write("That was not Correct")
//     }

// Q11

// var num1 = prompt("Enter First Value");
// var sign$ = prompt("Enter Operater Sign");
// var num2 = prompt("Enter Second Value");

// console.log(num1+sign$+num2);

// if(sign$ === '+'){
//     document.write((+num1) + (+num2));
// }
// else if(sign$ === '-') {
//     document.write(num1 - num2);
// }
// else if(sign$ === '*') {
//     document.write(num1 * num2);
// }
// else if(sign$ === '/') {
//     document.write(num1 / num2);
// }
// else if(sign$ === '%') {
//     document.write(num1 / num2 * 100);
// }


                                             // Ch 12,13

// Q1









// Q2

// var a = 12;
// var b = 30;
// if(a > b){
//     document.write( a + " is Greater.")
// }
// else{
//     document.write( b + " is Greater.")
// }

// Q3

// var a = prompt("Enter Number");
// if(a > "1"){
//     alert("Positive Number");
// }
// else if(a == "0"){
//     alert("Zero");
// }
// else if(a < "0"){
//     alert("Negative Number");
// }

// Q4


// var vowel = prompt("Enter Character");

// if(vowel == "a"  ){
//  document.write("Vowel");
// }
// else if(vowel == "e"  ){
//     document.write("Vowel");
// }
// else if(vowel == "i" ){
//     document.write("Vowel");
// }
// else if(vowel == "o"  ){
//     document.write("Vowel");
// }
// else if(vowel == "u"  ){
//     document.write("Vowel");
// }
// else(document.write("Not a Vowel"));

// var str = "behaviour";
// document.write(str.length);

// Q5

// var correctPassword = "ovais54321";
// var passWord = prompt("Enter Password");
// if(passWord == correctPassword){
//     alert("The password you entered matches the original password");
// }
// else if(passWord != correctPassword){
//     alert("Wrong Password :" + " " + passWord);
// }
// else{
//     alert("Pleaze Enter Password")
// }

// Q6

// var greeting = "Good Day";
// var hour = 13;
// if (hour < 18) {
//     document.write(greeting)
// }
// else{
//     document.write("Good Night");
// }

// Q7

// var time = prompt("Enter time");

// if (time >= 0000 && time < 1200){
//     alert("Goog Morning")
// }
// else if (time >= 0000 && time < 1200){
//     alert("Goog Morning");
// }
// else if (time >= 1200 && time < 1700){
//     alert("Goog Aternoon");
// }
// else if (time >= 1700 && time < 2100){
//     alert("Goog Evening");
// }
// else if (time >= 2100 && time < 2359){
//     alert("Goog Night")
// }


// Ch 13,15

// Q1

//var objectA = {} //This is an object literal


// Q2

// var objectB = new Object() //This is the object constructor

// Q3

// var cities = ["karachi", "islamabad", "Lahore","Peshawar"];

// Q4
 
// var arrNumbers = [2, 56, 45, 76, 94];

// Q5

// var myArr = [];
// var value = 2;
// for(var i = 0; i < value; i++) {
// myArr.push(false);
// }
// alert(myArr);

// Q6

// var mixedArray = [1, "Ghoud", "Ali", true];

// Q7

// var eduArry = ["SSC", "HSC", "BCS", "BS", "MSC", "M.PHIL", "PHD"];
// document.write("<h1>Qualification</h1>" + "<ul> <li> " + eduArry[0] + "<br>" +"<li>"+ eduArry[1] + "<br>" +"<li>" + eduArry[2] + "<br>"  + eduArry[3] + "<br>"  
//                 + eduArry[4] + "<br>"  + eduArry[5] + "<br>"  + eduArry[6]+"</ul>");

// Q8

// var arrNames = ["Tony", "Jhonny","Ronnie"]
// var arrPercentage = [250/500*100, 300/500*100, 150/500*100,]
// document.write("Score of"  + " "+ arrNames[0] + " 250" + " Percentage% is " + arrPercentage[0] + "<br>");
// document.write("Score of"  + " "+ arrNames[1] + " 300" + " Percentage% is " + arrPercentage[1] + "<br>");
// document.write("Score of"  + " "+ arrNames[2] + " 150"+ " Percentage% is " + arrPercentage[2]);

// Q9

// var arryColors = ["Red","Yellow","Green","Black"];
// arryColors [4] = "White";
// arryColors [5] = "Pink";
// arryColors.shift();
// arryColors.pop()
// var inpUt = prompt("which color you Want At first");
// arryColors.unshift(inpUt);
// var inpUt2 = prompt("which color you Want At Last");
// arryColors.push(inpUt2)
// document.write(arryColors);

// Task # f

// var arryColors = ["Red","Yellow","Green","Black"];
// var inPut1 = prompt("which colur you want to add");
// var inPut2 = prompt("At which index you want to add");
// arryColors[inPut2] = inPut1;
// document.write(arryColors);

// Task # g

// var arryColors = ["Red","Yellow","Green","Black"];
// var inPut1 = prompt("At which index you want to delete");
// var inPut2 = prompt("how many colors wants to delete");
// arryColors.splice(inPut1, inPut2)
// document.write(arryColors);


// Q10

// var arr1 = [234, 466, 12, 45];
// arr1.sort()
// document.write(arr1)

// Q11


// var arr1 = ["Karachi", "lahore", "Islamabad", "Queta",];
// document.write("Cities List" + "<br>" + arr1 + "<br>");

// document.write("Selected Cities"+ "<br>" + arr1[0] + " " + arr1[2]);

// Q12

// var arr = ["This is  my cat"];
// document.write(arr);

// Q13

// var arr = ["zero", "one","two","three","four"];

// document.write(arr[1] + "<br>" + arr[2] + "<br>" + arr[3] + "<br>" + arr[4] );

// Q14

// var arr = ["zero", "one","two","three","four"];
// arr.reverse()
// document.write(arr + "<br>");


// Q15

// var arr = ["Samsung", "Apple","Huawei","Xaomi","Oppo"];
// document.write(arr) 

                           
                                 // CH # 17-20

// Q1

// var arr =[
//     [],[],[],[]
// ];                                 

// Q2

// var arr =[
//          [1,2,3],[4,5,6],[7,8,9]
//  ];
//  document.write(arr[0] + "<br>" + arr[1] + "<br>" + arr[2]);

// Q3

// for (a=1; a<=10; a++){
//     document.write(a +"<br>");
// }

// Q4

// var j = prompt("Enter Your Number to Show Multiplication");
// var k = prompt("Enter lenght");
// for(i = 1; i <= k; i++){   
// document.write(j + "x" + i + "=" + j*i + "<br>")
// };

// Q5

// var arr$ = ['apple', 'banana', 'mango', 'orange', 'strawberry'];

    
// for(arr$ = 1 ; arr$ <= arr$.length; arr$++){

// document.write("Element at index " + "0"+ "is" + arr$);


// for(fruits = 0; fruits <= 5; fruits++)
   

// }    

// Q6

// for (var a = 1; a<=15; a++){
//     document.write(a + " ");
// }

// for (var a = 10; a>=1; a--){
//        document.write(a + " ");
// }

// for ( a = 2; a<=16; a+=2){
//     document.write(a + " ");
// }

// for ( a = 1; a<=16; a+=2){
//     document.write(a + " ");
// }

// for ( a = 1; a<=100; a++){
//     document.write(a + " ");
// }

// Q7

// var items_ = prompt("Search for Your Favorite Sweets");
// var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
// for(var a = 0; a<arr.length; a++){
//     if(arr[a] === items_){
//         alert("available");
//     }
//     else{
//         alert("Not Available");
//     }
// }

// Q10

// var j = 5;
// var k = 100;
// for(i = 1; i <= k; i++){   
// document.write(j + "x" + i + "=" + j*i + "<br>")
// };