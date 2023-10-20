// Variables:
var x = 3
x
3
// Problem: Write a JavaScript function that declares a variable using var and returns its value.
function vrbls(n) {
    var n = n
    return n 
}
undefined
vrbls(9)
9
// Problem: Create a function that takes two arguments and checks if they are equal. Return true if they are and false if they are not.
function areEqual(n1,n2) {
    if (n1 === n2) {
        return 'True'
    }
    return 'False'
}
undefined
areEqual(2,2)
'True'
areEqual(2,1)
'False'
// Problem: Implement a function that declares a "constant" variable using var (even though var variables are not constant) and attempts to reassign it. Handle any resulting errors.

function cnstnt() {
    var x = 77
}
undefined
function cnstnt() {
    var y = 77
}
undefined
y
VM524:1 Uncaught ReferenceError: y is not defined
    at <anonymous>:1:1
// Problem: Create a function that defines a variable using var within its scope. Try to access the variable outside of the function and explain the result.

function cnstnt() {
    var x = 77
}
undefined
function cnstnt() {
    var y = 77
}
undefined
y
VM524:1 Uncaught ReferenceError: y is not defined
    at <anonymous>:1:1
this is not possible cause we made a variable inside an function (local scope) , so it works only in that function , but if it was created outside the function (global scope) it will be working inside and out side the function.
// Problem: Write a function that takes a variable as an argument and returns its data type.

// Conditional Statements:

// Problem: Create a function that takes an age as an argument and returns a message based on whether the person is a child, a teenager, an adult, or a senior citizen.
function ageOfPerson(age) {        
    if (age<0) {
        return 'how is that possible!?'
    }
    if (age<12 && age>0) { 
    return 'child'        
   }    
     else if (age>12 && age<20) { 
        return 'teenager'
             } 
     else if (age>19 && age<36){ 
                return 'adult'        
            } 
                else return 'senior citizen'    
}
undefined
ageOfPerson(7)
'child'
ageOfPerson(17)
'teenager'
ageOfPerson(27)
'adult'
ageOfPerson(37)
'senior citizen'
ageOfPerson(-37)
'how is that possible!?'
// Problem: Write a function that checks if a given number is even or odd and returns an appropriate message.
function evenOdd(nmbr) {
    if (nmbr%2===0) {
        return 'Even'
    }
    return 'Odd'
}
undefined
evenOdd(9)
'Odd'
evenOdd(90)
'Even'
// Problem: Create a function that simulates a basic login system. It takes a username and password as arguments and returns true if  "Login successful" if they match, or false if  "Login failed" if they don't.
function loginSys(username,password) {
    if (username==='Bahaa_Mahjouby' && password===123456789) {
        return 'Login successful'
    }
    return 'Login failed'
}
loginSys('Bahaa_Mahjouby',123456789)
'Login successful'
loginSys('Bahaa_Mahjouby',987654321)
'Login failed'
// Problem: Write a function that calculates the grade for a given test score. The function should return "A," "B," "C," "D," or "F" based on the score.
function testScore(marks) {
    if (marks >= 0 && marks < 21) {
        return 'F'
    }
    else if (marks > 20 && marks < 41) {
    return 'D'
    }
    else if (marks > 40 && marks < 61) {
        return 'C'
    }
    else if (marks > 60 && marks < 81) {
        return 'B'
    }
    else if (marks > 80 && marks <= 100) {
        return 'A'
    } else return 'These marks are not available'
}
undefined
testScore(15)
'F'
testScore(35)
'D'
testScore(55)
'C'
testScore(75)
'B'
testScore(85)
'A'
testScore(100)
'A'
// Problem: Create a function that takes a day of the week as an argument and returns whether it's a weekday or a weekend day.
