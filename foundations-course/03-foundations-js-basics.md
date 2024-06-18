# 07 JavaScript Basics (12 modules, 3 projects)
## Variables and Operators

### Introduction
In the previous sections you learnt how to structure webpages with HTML and style them with CSS. The next step is to make the webpage interactive, which is exactly what JavaScript is for. In this section, we will focus on the fundamentals of JavaScript and how you can use it to manipulate all the various interactions between the web page and user.

### Lesson overview
This section contains a general overview of topics that you will learn in this lesson.

How do you declare a variable?
What are three different ways to declare a variable?
Which one should you use when?
What are the rules for naming variables?
What are operators, operands, and operations?
What is concatenation and what happens when you add numbers and strings together?
What are the different types of operators in JavaScript?
What is the difference between == and ===?
What are operator precedence values?
What are the increment/decrement operators?
What is the difference between prefixing and postfixing them?
What are assignment operators?
What is the Unary Plus Operator?

### How to run JavaScript code
All JavaScript we will be writing in the majority of the Foundations course will be run via the browser. Later lessons in Foundations and the NodeJS path will show you how to run JavaScript outside of the browser environment. Outside of these lessons, for now you should always default to running your JavaScript in the browser unless otherwise specified, otherwise you may run into unexpected errors.

The simplest way to get started is to simply create an HTML file with the JavaScript code inside of it. Type the basic HTML skeleton into a file:

```
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Page Title</title>
</head>
<body>
  <script>
    // Your JavaScript goes here!
    console.log("Hello, World!")
  </script>
</body>
</html>
```

Save and open this file up in a web browser (you can use “Live Server” on Visual Studio Code to do this!) and then open up the browser’s console by right-clicking on the blank webpage and selecting “Inspect” or “Inspect Element”. In the ‘Developer Tools’ pane find and select the ‘Console’ tab, where you should see the output of our console.log statement.

console.log() is the command to print something to the developer console in your browser. You can use this to print the results from any of the following articles and exercises to the console. We encourage you to code along with all of the examples in this and future lessons.

Another way to include JavaScript in a webpage is through an external script. This is very similar to linking external CSS docs to your website.

```
  <script src="javascript.js"></script>
JavaScript files have the extension .js similar to .css for stylesheets. External JavaScript files are used for more complex scripts.
```
> Externanl js files, more complex.

### Variables
You can think of variables as simply “storage containers” for data in your code.
(Variable Box Illustration)

Until recently there was only one way to create a variable in JavaScript — the var statement. But in the newest JavaScript versions we have two more ways — let and const.
> Declare a variable using var, let, or const.

[This variable tutorial](http://javascript.info/variables) will explain everything you need to know! Be sure to do the Tasks at the end. Information won’t stick without practice!

== BEGIN This variable tutorial ==
```
let 1a; // cannot start with a digit
let my-name; // hyphens '-' aren't allowed in the name
let $ = 1; // declared a variable with the name "$"
let _ = 2; // and now a variable with the name "_"
```
> We generally use upper case for constants that are “hard-coded”. Or, in other words, when the value is known prior to execution and directly written into the code.
== END This variable tutorial ==

Let and const are both relatively new ways to declare variables in JavaScript. In many tutorials (and code) you’re likely to encounter var statements. There’s nothing inherently wrong with var, and in most cases var and let behave the same. But sometimes the behavior of var is not what you would expect. Stick to let (and const.)

### Numbers
Numbers are the building blocks of programming logic! In fact, it’s hard to think of any useful programming task that doesn’t involve at least a little basic math… so knowing how numbers work is obviously quite important. Luckily, it’s also fairly straightforward.

[This W3Schools JS Arithmetic lesson](https://www.w3schools.com/js/js_arithmetic.asp) followed by [this W3Schools JS Numbers one](https://www.w3schools.com/js/js_numbers.asp), are good introductions to what you can accomplish with numbers in JavaScript.

> When many operations have the same precedence (like addition and subtraction or multiplication and division), they are computed from left to right:

> js stores numbers in 64 bits, where the number (the fraction) is stored in bits 0 to 51, the exponent in bits 52 to 62, and the sign in bit 63:

> “Logical not or !” is meant for boolean values and “bitwise not or ~” is for integers.

> recommended to use the strict equality operator === instead of the loose equality operator ==, as js type coercion can lead to unexpected results.

> So, here are the rules for type coercion in JavaScript:

If either operand is a string, the other operand will be converted to a string.
If either operand is a number, the other operand will be converted to a number.
If either operand is a boolean, it will be converted to a number (true becomes 1 and false becomes 0).
If one operand is an object and the other is a primitive value, the object will be converted to a primitive value before the comparison is made.
If one of the operands is null or undefined, the other must also be null or undefined to return true. Otherwise it will return false.

> Integers (numbers without a decimal or exponent notation) are accurate up to 15 digits.

[This MDN article](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Math) covers the same info from a slightly different point of view, while also teaching you how to apply some basic math in JavaScript. There’s much more that you can do with numbers, but this is all you need at the moment.

Read through (and code along with!) this article about operators in Javascript. Don’t forget to do the “Tasks” at the bottom of the page! It will give you a pretty good idea of what you can accomplish with numbers (among other things!) in JavaScript.

### Assignment
Try the following exercises (and don’t forget to use console.log()!):

Add 2 numbers together! (just type console.log(23 + 97) into your html file)
Add a sequence of 6 different numbers together.
Print the solution to the following equation: (4 + 6 + 9) / 77
Answer should be approximately 0.24675

Let’s use variables!
Type this statement at the top of the script tag: let a = 10
In the console console.log(a) should print 10
Try the following in the console: 9 * a
and this: let b = 7 * a (returns undefined *) and then console.log(b)
You should be getting the hang of this by now… try this sequence:
Declare a constant variable max with the value 57
Set another variable actual to max - 13
Set another variable percentage to actual / max

#### If you type percentage in the console and press Enter you should see a value like 0.7719
Take a few minutes to keep playing around with various things in your script tag. Eventually, we will learn how to actually make those numbers and things show up on the webpage, but all of this logic will remain the same, so make sure you’re comfortable with it before moving on.

> * As you might have noticed by running Javascript code in the console, the console prints the result of the code it executes (called a return statement). You will learn more about these in the next lessons, however for now it is good to remember that a declaration with an assignment (such as let b = 7 * a) returns undefined and so you cannot declare and assign a value to a variable and read its value in the same line.

### Knowledge check
This section contains questions for you to check your understanding of this lesson on your own. If you’re having trouble answering a question, click it and review the material it links to.

Name the three ways to declare a variable
  var, let, const.
Which of the three variable declarations should you avoid and why?
  Avoid var, as non-current practice, and may behave unexpectedly in edge cases.
What rules should you follow when naming variables?
  cannot contain dashes, cannot start with a number, cannot be reserved word.
What happens when you add numbers and strings together?
  the interpreter converts your number to a string and concatenates both together.
How does the Modulo (%), or Remainder, operator work?
  returns the remainder of division operation
Explain the difference between == and ===.
  === additionally compares data type
When would you receive a NaN result?
  dividing by 0
How do you increment and decrement a number?
  ++ --, post or pre
Explain the difference between prefixing and postfixing increment/decrement operators.
  pre performs the increment/decrement before, postfix performs ind/dec after, operation.
What is operator precedence and how is it handled in JS?
  parens, mult/div, add/sub
How do you access developer tools and the console?
  vscode > live server > right click > inspect > select console
How do you log information to the console?
  console.log()
What does unary plus operator do to string representations of integers? eg. +”10”
  +x Unary Plus Convert a value into a number
  -x Unary Minus Convert a value into a number and negates it

### Additional resources
This section contains helpful links to other content. It isn’t required, so consider it supplemental.

The differences between var and let are explained in this javascript.info article titled the old “var”.

### Notes
Literals, variables, objects. 
new keyword creates objects.
never compare strings with objects.
Comparing two JavaScript objects always returns false.

## Foundations
## JavaScript Basics
## Data Types and Conditionals

Introduction
There are a few extremely common types of data that you will encounter in JavaScript, and these lessons on the fundamentals will give you a really strong foundation in all of them. However, before we start digging deep, this article will provide you with a quick overview of the most common ones.
[Javascript Info - Data Types] (http://javascript.info/types)
See javascript-info-data-types.md

Lesson overview// Converts non-numbers
alert( +true ); // 1
alert( +"" );   // 0
It actually does the same thing as Number(...), but is shorter.
This section contains a general overview of topics that you will learn in this lesson.

Name the eight data types in JavaScript.
> JavaScript has 8 Datatypes
String
Number
Bigint
Boolean
Undefined
Null
Symbol
Object

> JavaScript can "display" data in different ways:
Writing into an HTML element, using innerHTML .
Writing into the HTML output using document.write() .
Writing into an alert box, using window.alert() .
Writing into the browser console, using console.log() .

> JavaScript can "display" data in different ways:
Writing into an HTML element, using innerHTML .
  document.getElementById("demo").innerHTML = myFunction();
Writing into the HTML output using document.write() .
Writing into an alert box, using window.alert() .
  alert(objectName.propertyName)

Writing into the browser console, using console.log() .
Understand the difference between single, double, and backtick quotes.
Embed a variable/expression in a string.
Understand what a method is.
Name the three logical operators.
Understand what the comparison operators are.
Understand what conditionals are.
Understand what nesting is.
Understand what truthy and falsy values are.
Strings
Depending on what kind of work you’re doing, you might end up working more with pieces of text rather than numbers. A string is simply a piece of text… and is a fundamental building block of the language.

Read and code along with yet another MDN tutorial on the topic.
Go through this lesson to learn a bit more about what you can do with strings… be sure to take a peek at the String Reference page near the bottom, and do the exercises at the end!
Vocabulary time: a method is a bit of functionality built into the language or specific data types. In the previous W3Schools exercise, you’ve learned about a few methods that can be used on strings, such as replace and slice. An exhaustive list of methods usable on strings can be found here.
Conditionals
Now it’s time for the fun stuff… So far, we haven’t done much with our programming that you couldn’t do with simple math skills. Sure, we’ve told our computer how to do the math, which makes it quicker, but the essence of programming is teaching the computer how to make decisions to do more involved things. Conditionals are how we do that.

Step one in learning about conditionals is making sure you have a good grasp on comparisons.
This tutorial is a great first glance at conditionals in JavaScript.
This tutorial will teach you about logical operators. A little heads up regarding this reading’s tasks: there will be questions where you see alert() with a number or string inside the parenthesis. What’s happening here will be discussed later in the curriculum. Some of the answers may not make sense now, but they are accurate, and you will understand them as you progress in the curriculum. Don’t worry too much about it now!
This article reinforces the concept and provides several interesting examples of how you could use it building websites.
This article covers the same basic concept (read through it as a review!) and - more importantly - offers the usual ‘tasks’ at the bottom of the page!
This article teaches you about the switch statement, which is handy when you have multiple conditions.
Assignment
To give you a good bit of practice, we have created replit.com exercises for you to play with. We believe it’s best to practice programming on your own computer rather than in an online environment, but we’ll get to that soon enough.

Be sure to do the lessons in the order presented here. Pressing “run” at the top will run the code. Read all directions, watch the terminal, and read all the errors. Don’t forget to use ‘console.log’ extensively.

To get started, create a free replit account and click “Fork” or “Remix” to access the exercises. Note: Feel free to browse the files on the left column to gain familiarity with it.

Exercise 1
In this exercise, you will be working out of the file called troubleshooting.js
Exercise 2
You will be working out of script.js, and you will use the console in the ‘webview’ pane to check your work. To access the console, click the wrench icon, which is located on the right side of the address bar within the ‘webview’ pane.
Exercise 3
You will be working out of math.js
Exercise 4
You will be working out of follow.js
Knowledge check
This section contains questions for you to check your understanding of this lesson on your own. If you’re having trouble answering a question, click it and review the material it links to.

What are the eight data types in JavaScript?
1. number
2. bigint
3. string
4. boolean
5. null
6. undefined
7. symbol
8. object

Which data type is NOT primitive?
- object
What is the relationship between null and undefined?
> null is special value which represents “nothing”, “empty” or “value unknown”.
> undefined is “value is not assigned”--or assigned as unassigned.

What is the difference between single, double, and backtick quotes for strings?
> single or double quotes may be used for strings, and the other for substrings.
> backticks are “extended functionality” quotes that allow embedding variables and expressions into a string by wrapping them in ${…}.

What is the term for joining strings together?
- concatenation
Which type of quote lets you embed variables/expressions in a string?
- backtick
How do you embed variables/expressions in a string?
- by wrapping them in ${…}.
How do you use escape characters in a string?
> backslash indicates that the next character should be treated as a literal character rather than as a special character or string delimiter.

What is the difference between the slice/substring/substr string methods?
1. slice() extracts parts of a string and returns the extracted parts in a new string. 
2. substr() extracts parts of a string, beginning at the character at the specified position, and returns the specified number of characters. 
3. substring() extracts parts of a string and returns the extracted parts in a new string.

What are the three logical operators, and what do they stand for?
- and
- or
- not

What are the comparison operators?
- ==, equality, value
- ===, equality, value and type
- != not equal, value
- !== not equal, value and type
- \> greater than, >= greater than or equal
- < less than, <= less than or equal

What are truthy and falsy values?
- values that evaluate to true or false, note that all non-falsey values are true.

What are the falsy values in JavaScript?
- 6 falsey values in JavaScript: undefined , null , NaN , 0 , "" (empty string), and false

What are conditionals?
- if, else if, else

What is the syntax for an if/else conditional?
if (false) {
      var outcome = "if block";
} else if (true) {
      var outcome = "else if block";
} else {
      var outcome = "else block";
}

What is the syntax for a switch statement?
switch(x) {
  case 'value1':  // if (x === 'value1')
    ...
    [break]
  case 'value2':  // if (x === 'value2')
    ...
    [break]
  default:
    ...
    [break]
}

What is the syntax for a ternary operator?
let grades = prompt('Enter your grades :');
// check the condition
let result = (marks >= 40) ? 'pass' : 'fail';
console.log(`You ${result} the exam.`);

What is nesting?
- Nesting is putting a function or condition inside another function or condition.

### Additional resources
This section contains helpful links to other content. It isn’t required, so consider it supplemental.

Regular expressions, commonly known as regex, are a tool that matches or locates patterns in strings for string validation. Although it shouldn’t be your immediate solution this early on, you can still use this resource to understand how websites know that myemail@com isn’t a valid email address. On top of that, other solutions to filter out strings exist, and regex is considered a slow operation.
[The Net Ninja’s Regular Expressions Tutorial](https://www.youtube.com/playlist?list=PL4cUxeGkcC9g6m_6Sld9Q4jzqdqHd2HiD)
[When to avoid regular expressions](https://softwareengineering.stackexchange.com/questions/113237/when-you-should-not-use-regular-expressions)

Will return to regex later, want to learn more js.

## Foundations
## JavaScript Basics
## JavaScript Developer Tools

### Introduction
Knowing how to use the Developer Tools inside your browser is an important skill for any web developer. The Developer Tools are useful for running JavaScript code, editing HTML and CSS styles without having to refresh the page, and viewing performance data. They also save you lots of time. Getting started couldn’t be any easier. You should already be familiar with using them for debugging and working on HTML and CSS, so let’s take a look at how they can benefit us when writing JavaScript.

### Lesson overview
This section contains a general overview of topics that you will learn in this lesson.

- Change screen size of a website with developer tools
- View and change the DOM
- Debug JavaScript
- Use breakpoints
- View and edit HTML in the Elements tab
- View the Resources Panel to check the scripts running on a website
- Add CSS Pseudostate to a Class
- View CSS Properties in Alphabetical Order
- View and edit the Box Model of any Element in Chrome DevTools
- View a page in print mode
- Enable or Disable CSS Classes
- Simulate media queries in Device Mode

### Opening DevTools
There are three ways to open the Chrome DevTools menu:

1. From the Chrome Menu > More Tools > Developer Tools
2. Right-click anywhere on a webpage and select Inspect
3. Use the keyboard shortcut F12 or Ctrl + Shift + C (Mac: Opt + Cmd + C)
> Cmd-Alt-C on Mac: DevTools Elements 
> Cmd-Alt-I on Mac: DevTools Sources
> Cmd-Alt-J on Mac: DevTools Console

### Assignment
Google has updated some of the required sections in the below tutorials and some elements have changed or no longer exist, but you can still follow along using the same functionality and tools that they cover. For example, you may be asked to inspect a button that is no longer on the page- you can still follow along and inspect existing elements without issue.

1. Head to the [Chrome DevTools Documentation](https://developer.chrome.com/docs/devtools/) by Google. The following subsections cover what you’ll be using the Developer Tools for 95% of the time. Feel free to skip the elements you are already familiar with, and only read these:
CSS
- 1. [View and change CSS](https://developer.chrome.com/docs/devtools/css/)
- 2. [CSS features reference](https://developer.chrome.com/docs/devtools/css/reference/)
- 3. [Get Started With Viewing And Changing The DOM](https://developer.chrome.com/docs/devtools/dom/)
Mobile Simulation
- 1. [Simulate mobile devices with Device Mode](https://developer.chrome.com/docs/devtools/device-mode/)
JavaScript
- 1. [Debug JavaScript](https://developer.chrome.com/docs/devtools/javascript/)
- 2. [Pause your code with breakpoints](https://developer.chrome.com/docs/devtools/javascript/breakpoints/)
2. Then, watch the [console overview video and read through the page](https://developer.chrome.com/docs/devtools/console/) to familiarize yourself with the console and its usage.

..............
### Knowledge check
This section contains questions for you to check your understanding of this lesson on your own. If you’re having trouble answering a question, click it and review the material it links to.

[How do you open developer tools?](https://www.theodinproject.com/lessons/foundations-javascript-developer-tools#opening-dev-tools)
[How do you change screen size of a website using developer tools?](https://developer.chrome.com/docs/devtools/device-mode/)
[What is a breakpoint?](https://developer.chrome.com/docs/devtools/javascript/breakpoints/)
[How do you set a breakpoint?](https://developer.chrome.com/docs/devtools/javascript/breakpoints/#loc)

### Additional resources
This section contains helpful links to other content. It isn’t required, so consider it supplemental.

Learn 14 tips and tricks in this [JavaScript 30](https://www.youtube.com/watch?v=xkzDaKwinA8) Video by Wes Bos

## Fundamentals Part 3

### Introduction
Things are about to get *really* exciting. So far you have been writing an impressive amount of code to solve various problems, but that code has not been as useful as it could be. Imagine taking one of your scripts and bundling it into a little package that you could use over and over again without having to rewrite or change the code. That’s the power of functions, and they’re used *constantly* in JavaScript.

### Lesson overview
This section contains a general overview of topics that you will learn in this lesson.

- How to define and invoke different kinds of functions.
- How to use the return value.
- What function scope is.

### Functions

1. [This lengthy MDN article](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions) is a good place to start. Don’t worry as there may be some functions that can be beyond the reach of this particular lesson, but do pay special attention to the sections on ‘Function Scope’. Scope is a topic that commonly trips up both beginner and intermediate coders, so it pays to spend some time with it upfront. Note that this article also has its own exercises attached, which you should not do, as they involve knowledge we haven’t touched yet.

2. Read this article about [return values (https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Return_values).

3. Let’s discuss parameters and arguments in the context of the following example function:
```
 function favoriteAnimal(animal) {
   return animal + " is my favorite animal!"
 }

 console.log(favoriteAnimal('Goat'))
 ```
In JavaScript, parameters are the items listed between the parentheses in the function declaration. Function arguments are the actual values we decide to pass to the function. In the example above, the function definition is written on the first line: ```function favoriteAnimal(animal)```. The parameter, ```animal```, is found inside the parentheses. We could just as easily replace ```animal``` with ```pet```, ```x```, or ```blah```. But in this case, naming the parameter ```animal``` gives someone reading our code a bit of context so that they don’t have to guess what ```animal``` may eventually contain. By putting ```animal``` inside the parentheses of the ```favoriteAnimal()``` function, we are telling JavaScript that we will send some value to our ```favoriteAnimal``` function. This means that ```animal``` is just a placeholder for some future value. But what value are we sending? The last line, ```favoriteAnimal('Goat')```, is where we are calling our ```favoriteAnimal``` function and passing the value ```'Goat'``` inside that function. Here, ```'Goat'``` is our argument. We are telling the ```favoriteAnimal``` function, “Please send ```'Goat'``` to the ```favoriteAnimal``` function and use ```'Goat'``` wherever the ```‘animal’``` placeholder is.” Because of the flexibility that using a parameter provides, we can declare any ```animal``` to be our favorite.

Make note of the fact that by calling ```favoriteAnimal()``` inside of ```console.log()``` with the argument ```'Goat'``` we get the return value of the function, string of ```"Goat is my favorite animal!"```, printed to the console. We’re passing in a function call ```favoriteAnimal('Goat')``` as an argument in a different function call ```- log()```. Keep this possibility in mind because you’ll be passing in function calls as arguments somewhat often. If we just called the function without console.logging what it returns, nothing would appear in the console but nonetheless the function would return that string.

Feel free to experiment with the code on your own and replace ```'Goat'``` with your favorite animal. Notice how we can change the argument to anything we like? Try changing ```animal``` in the function declaration and in the function body, too. What happens when you do?

4. Next, read [this article](http://javascript.info/function-basics) from Javascript.info. We’ve mentioned this before, but JavaScript has changed a bit over the years and functions have recently received some innovation. This article covers one of the more useful new abilities: ‘default parameters’. (NOTE: The last “task” at the end of this lesson uses loops, which you will learn about in the next lesson. Don’t worry about that one.)

5. Now, read [this article](http://javascript.info/function-expressions) about functions in JavaScript to give you a little more context, and read [this article] (http://javascript.info/arrow-functions-basics) for an introduction to a relatively new feature in modern JavaScript called the ```arrow function```. Arrow functions are useful but not crucial, so don’t worry about them too much just yet. We include them here because you are likely to encounter them as you move forward, and it’s better that you have at least some idea of what you’re looking at whenever they crop up.

6. Finally, read [this article](https://www.javascripttutorial.net/javascript-call-stack/) about call stacks and how ```return``` works in the context of chained function calls. Don’t worry if you don’t fully understand this yet, but it’s important to keep in mind where your returned values are going. This doubles as a bit of early computer science as well.

### Assignment
Let’s write some functions! Write these in the ```script``` tag of a skeleton HTML file. If you’ve forgotten how to set it up, review the instructions from [Fundamentals Part 1](https://www.theodinproject.com/lessons/foundations-fundamentals-part-1#how-to-run-javascript-code).

For now, just write each function and test the output with ```console.log```.

1. Write a function called ```add7``` that takes one number and returns that number + 7.
2. Write a function called ```multiply``` that takes 2 numbers and returns their product.
3. Write a function called ```capitalize``` that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.
4. Write a function called ```lastLetter``` that takes a string and returns the very last letter of that string:

- ```lastLetter("abcd")``` should return ```"d"```

### Knowledge check
This section contains questions for you to check your understanding of this lesson on your own. If you’re having trouble answering a question, click it and review the material it links to.

What are functions useful for?
How do you invoke a function?
What are anonymous functions?
What is function scope?
What are return values?
What are arrow functions?

### Additional resources
This section contains helpful links to other content. It isn’t required, so consider it supplemental.

[What’s the difference between using “let” and “var”? - stackoverflow](https://stackoverflow.com/questions/762011/whats-the-difference-between-using-let-and-var#:~:text=The%20main%20difference%20is%20scoping,(hence%20the%20block%20scope))
[How JavaScript Code is executed?](https://youtu.be/iLWTnMzWtj4)

## Problem Solving

## Understanding Errors

## Project: Rock Paper Scissors

## Clean Code

## Installing Node.js

## Fundamentals Part 4

## DOM Manipulation and Events

## Revisiting Rock Paper Scissors

## Project: Etch-a-Sketch

## Fundamentals Part 5

## Project: Calculator

# 08 Conclusion
## Choose Your Path Forward
