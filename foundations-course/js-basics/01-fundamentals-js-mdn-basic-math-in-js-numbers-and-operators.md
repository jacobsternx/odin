# [MDN Basic math in js](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Math)

At this point in the course, we discuss math in JavaScript — how we can use operators and other features to successfully manipulate numbers to do our bidding.

Prerequisites:	Basic computer literacy, a basic understanding of HTML and CSS, an understanding of what JavaScript is.
Objective:	To gain familiarity with the basics of math in JavaScript.

Everybody loves math
Okay, maybe not. Some of us like math, some of us have hated math ever since we had to learn multiplication tables and long division in school, and some of us sit somewhere in between the two. But none of us can deny that math is a fundamental part of life that we can't get very far without. This is especially true when we are learning to program JavaScript (or any other language for that matter) — so much of what we do relies on processing numerical data, calculating new values, and so on, that you won't be surprised to learn that JavaScript has a full-featured set of math functions available.

This article discusses only the basic parts that you need to know now.

### Types of numbers
In programming, even the humble decimal number system that we all know so well is more complicated than you might think. We use different terms to describe different types of decimal numbers, for example:

Integers are floating-point numbers without a fraction. They can either be positive or negative, e.g. 10, 400, or -5.
Floating point numbers (floats) have decimal points and decimal places, for example 12.5, and 56.7786543.
Doubles are a specific type of floating point number that have greater precision than standard floating point numbers (meaning that they are accurate to a greater number of decimal places).
We even have different types of number systems! Decimal is base 10 (meaning it uses 0–9 in each column), but we also have things like:

Binary — The lowest level language of computers; 0s and 1s.
Octal — Base 8, uses 0–7 in each column.
Hexadecimal — Base 16, uses 0–9 and then a–f in each column. You may have encountered these numbers before when setting colors in CSS.
Before you start to get worried about your brain melting, stop right there! For a start, we are just going to stick to decimal numbers throughout this course; you'll rarely come across a need to start thinking about other types, if ever.

The second bit of good news is that unlike some other programming languages, JavaScript only has one data type for numbers, both integers and decimals — you guessed it, Number. This means that whatever type of numbers you are dealing with in JavaScript, you handle them in exactly the same way.

Note: Actually, JavaScript has a second number type, BigInt, used for very, very large integers. But for the purposes of this course, we'll just worry about Number values.

It's all numbers to me
Let's quickly play with some numbers to reacquaint ourselves with the basic syntax we need. Enter the commands listed below into your developer tools JavaScript console.

First of all, let's declare a couple of variables and initialize them with an integer and a float, respectively, then type the variable names back in to check that everything is in order:
```
const myInt = 5;
const myFloat = 6.667;
myInt;
myFloat;
```
Number values are typed in without quote marks — try declaring and initializing a couple more variables containing numbers before you move on.
Now let's check that both our original variables are of the same datatype. There is an operator called typeof in JavaScript that does this. Enter the below two lines as shown:
```
typeof myInt;
typeof myFloat;
```
You should get "number" returned in both cases — this makes things a lot easier for us than if different numbers had different data types, and we had to deal with them in different ways. Phew!

### Useful Number methods
The Number object, an instance of which represents all standard numbers you'll use in your JavaScript, has a number of useful methods available on it for you to manipulate numbers. We don't cover these in detail in this article because we wanted to keep it as a simple introduction and only cover the real basic essentials for now; however, once you've read through this module a couple of times it is worth going to the object reference pages and learning more about what's available.

For example, to round your number to a fixed number of decimal places, use the toFixed() method. Type the following lines into your browser's console:
```
const lotsOfDecimal = 1.766584958675746364;
lotsOfDecimal;
const twoDecimalPlaces = lotsOfDecimal.toFixed(2);
twoDecimalPlaces;
```
### Converting to number data types
Sometimes you might end up with a number that is stored as a string type, which makes it difficult to perform calculations with it. This most commonly happens when data is entered into a form input, and the input type is text. There is a way to solve this problem — passing the string value into the Number() constructor to return a number version of the same value.

For example, try typing these lines into your console:
```
let myNumber = "74";
myNumber += 3;
```
You end up with the result 743, not 77, because myNumber is actually defined as a string. You can test this by typing in the following:
```
typeof myNumber;
```
To fix the calculation, you can do this:
```
let myNumber = "74";
myNumber = Number(myNumber) + 3;
```
The result is then 77, as initially expected.

## Arithmetic operators
Arithmetic operators are the basic operators that we use to do sums in JavaScript:

Operator	Name	Purpose	Example
+	Addition	Adds two numbers together.	6 + 9
-	Subtraction	Subtracts the right number from the left.	20 - 15
*	Multiplication	Multiplies two numbers together.	3 * 7
/	Division	Divides the left number by the right.	10 / 5
%	Remainder (sometimes called modulo)	
Returns the remainder left over after you've divided the left number into a number of integer portions equal to the right number.

8 % 3 (returns 2, as three goes into 8 twice, leaving 2 left over).

**	Exponent	Raises a base number to the exponent power, that is, the base number multiplied by itself, exponent times.	5 ** 2 (returns 25, which is the same as 5 * 5).
Note: You'll sometimes see numbers involved in arithmetic referred to as operands.

> Note: You may sometimes see exponents expressed using the older Math.pow() method, which works in a very similar way. For example, in Math.pow(7, 3), 7 is the base and 3 is the exponent, so the result of the expression is 343. Math.pow(7, 3) is equivalent to 7**3.

We probably don't need to teach you how to do basic math, but we would like to test your understanding of the syntax involved. Try entering the examples below into your developer tools JavaScript console to familiarize yourself with the syntax.

First try entering some simple examples of your own, such as
10 + 7;
9 * 8;
60 % 3;

You can also try declaring and initializing some numbers inside variables, and try using those in the sums — the variables will behave exactly like the values they hold for the purposes of the sum. For example:
```
const num1 = 10;
const num2 = 50;
9 * num1;
num1 ** 3;
num2 / num1;
```
Last for this section, try entering some more complex expressions, such as:
```
5 + 10 * 3;
(num2 % 9) * num1;
num2 + num1 / 8 + 2;
```
Parts of this last set of calculations might not give you quite the result you were expecting; the section below might well give the answer as to why.

### Operator precedence
> Let's look at the last example from above, assuming that num2 holds the value 50 and num1 holds the value 10 (as originally stated above):
```
num2 + num1 / 8 + 2;
```
As a human being, you may read this as "50 plus 10 equals 60", then "8 plus 2 equals 10", and finally "60 divided by 10 equals 6".

But the browser does "10 divided by 8 equals 1.25", then "50 plus 1.25 plus 2 equals 53.25".

This is because of operator precedence — some operators are applied before others when calculating the result of a calculation (referred to as an expression, in programming). Operator precedence in JavaScript is the same as is taught in math classes in school — multiply and divide are always done first, then add and subtract (the calculation is always evaluated from left to right).

If you want to override operator precedence, you can put parentheses around the parts that you want to be explicitly dealt with first. So to get a result of 6, we could do this:

(num2 + num1) / (8 + 2);
Try it and see.

Note: A full list of all JavaScript operators and their precedence can be found in [Operator precedence](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence).

### Increment and decrement operators
Sometimes you'll want to repeatedly add or subtract one to or from a numeric variable value. This can be conveniently done using the increment (++) and decrement (--) operators. We used ++ in our "Guess the number" game back in our first splash into JavaScript article, when we added 1 to our guessCount variable to keep track of how many guesses the user has left after each turn.
```guessCount++;```

Let's try playing with these in your console. For a start, note that you can't apply these directly to a number, which might seem strange, but we are assigning a variable a new updated value, not operating on the value itself. The following will return an error:
```3++;```

So, you can only increment an existing variable. Try this:
```
let num1 = 4;
num1++;
```

Okay, strangeness number 2! When you do this, you'll see a value of 4 returned — this is because the browser returns the current value, then increments the variable. You can see that it's been incremented if you return the variable value again:
```num1; ```
The same is true of -- : try the following
```
let num2 = 6;
num2--;
num2;
```
Note: You can make the browser do it the other way round — increment/decrement the variable then return the value — by putting the operator at the start of the variable instead of the end. Try the above examples again, but this time use ++num1 and --num2.

### Assignment operators
Assignment operators are operators that assign a value to a variable. We have already used the most basic one, =, loads of times — it assigns the variable on the left the value stated on the right:

let x = 3; // x contains the value 3
let y = 4; // y contains the value 4
x = y; // x now contains the same value y contains, 4
But there are some more complex types, which provide useful shortcuts to keep your code neater and more efficient. The most common are listed below:

### Operator,	Name,	Purpose,	Example,	Shortcut for (Assignment Shorthand)
+=	Addition assignment;	Adds the value on the right to the variable value on the left, then returns the new variable value;	x += 4;	x = x + 4;
-=	Subtraction assignment;	Subtracts the value on the right from the variable value on the left, and returns the new variable value;	x -= 3;	x = x - 3;
*=	Multiplication assignment;	Multiplies the variable value on the left by the value on the right, and returns the new variable value;	x *= 3;	x = x * 3;
/=	Division assignment;	Divides the variable value on the left by the value on the right, and returns the new variable value;	x /= 5;	x = x / 5;
Try typing some of the above examples into your console, to get an idea of how they work. In each case, see if you can guess what the value is before you type in the second line.

```
let x = 3; // x contains the value 3
let y = 4; // y contains the value 4
x *= y; // x now contains the value 12
```
Note: There are lots of other assignment operators, but these are the basic ones.

### Active learning: sizing a canvas box
In this exercise, you will manipulate some numbers and operators to change the size of a box. The box is drawn using a browser API called the Canvas API. There is no need to worry about how this works — just concentrate on the math for now. The width and height of the box (in pixels) are defined by the variables x and y, which are initially both given a value of 50.

Open in new window
In the editable code box above, there are two lines marked with a comment that we'd like you to update to make the box grow/shrink to certain sizes, using certain operators and/or values in each case. Let's try the following:

Change the line that calculates x so the box is still 50px wide, but the 50 is calculated using the numbers 43 and 7 and an arithmetic operator.
Change the line that calculates y so the box is 75px high, but the 75 is calculated using the numbers 25 and 3 and an arithmetic operator.
Change the line that calculates x so the box is 250px wide, but the 250 is calculated using two numbers and the remainder (modulo) operator.
Change the line that calculates y so the box is 150px high, but the 150 is calculated using three numbers and the subtraction and division operators.
Change the line that calculates x so the box is 200px wide, but the 200 is calculated using the number 4 and an assignment operator.
Change the line that calculates y so the box is 200px high, but the 200 is calculated using the numbers 50 and 3, the multiplication operator, and the addition assignment operator.
Don't worry if you totally mess the code up. You can always press the Reset button to get things working again. After you've answered all the above questions correctly, feel free to play with the code some more or create your own challenges.

### Comparison operators
Sometimes we will want to run true/false tests, then act accordingly depending on the result of that test — to do this we use comparison operators.

Operator	Name	Purpose	Example
===	Strict equality	Tests whether the left and right values are identical to one another	5 === 2 + 4
!==	Strict-non-equality	Tests whether the left and right values are not identical to one another	5 !== 2 + 3
<	Less than	Tests whether the left value is smaller than the right one.	10 < 6
>	Greater than	Tests whether the left value is greater than the right one.	10 > 20
<=	Less than or equal to	Tests whether the left value is smaller than or equal to the right one.	3 <= 2
>=	Greater than or equal to Tests whether the left value is greater than or equal to the right one.	5 >= 4
Note: You may see some people using == and != in their tests for equality and non-equality. These are valid operators in JavaScript, but they differ from ===/!==. The former versions test whether the values are the same but not whether the values' datatypes are the same. The latter, strict versions test the equality of both the values and their datatypes. The strict versions tend to result in fewer errors, so we recommend you use them.

If you try entering some of these values in a console, you'll see that they all return true/false values — those booleans we mentioned in the last article. These are very useful, as they allow us to make decisions in our code, and they are used every time we want to make a choice of some kind. For example, booleans can be used to:

Display the correct text label on a button depending on whether a feature is turned on or off
Display a game over message if a game is over or a victory message if the game has been won
Display the correct seasonal greeting depending on what holiday season it is
Zoom a map in or out depending on what zoom level is selected
We'll look at how to code such logic when we look at conditional statements in a future article. For now, let's look at a quick example:

HTML
```
<button>Start machine</button>
<p>The machine is stopped.</p>
```

JS
```
const btn = document.querySelector("button");
const txt = document.querySelector("p");

btn.addEventListener("click", updateBtn);

function updateBtn() {
  if (btn.textContent === "Start machine") {
    btn.textContent = "Stop machine";
    txt.textContent = "The machine has started!";
  } else {
    btn.textContent = "Start machine";
    txt.textContent = "The machine is stopped.";
  }
}
```

You can see the equality operator being used just inside the updateBtn() function. In this case, we are not testing if two mathematical expressions have the same value — we are testing whether the text content of a button contains a certain string — but it is still the same principle at work. If the button is currently saying "Start machine" when it is pressed, we change its label to "Stop machine", and update the label as appropriate. If the button is currently saying "Stop machine" when it is pressed, we swap the display back again.

> Note: Such a control that swaps between two states is generally referred to as a toggle. It toggles between one state and another — light on, light off, etc.

Test your skills!
You've reached the end of this article, but can you remember the most important information? You can find some further tests to verify that you've retained this information before you move on — see [Test your skills: Math](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Test_your_skills:_Math).

Summary
In this article, we have covered the fundamental information you need to know about numbers in JavaScript, for now. You'll see numbers used again and again, all the way through your JavaScript learning, so it's a good idea to get this out of the way now. If you are one of those people that doesn't enjoy math, you can take comfort in the fact that this chapter was pretty short.
