---
Markdown Quick Guide
# H1 Heading 1
## H2 Heading 2
### H3 Heading 3
**bold text** Bold
*italicized text* Italic
> blockquote Blockquote (> must be first character of line)
``` code block ``` Code Block
==highlighted text== Highlighted text
: definition list Definition List
H~2~O subscript Subscript
X^2^ superscript Superscript
[title](https://www.example.com) Link
~~The world is flat.~~ Strikethrough
Ordered List
1. First item
2. Second item
3. Third item
Unordered List
- First item
- Second item
- Third item
notes:
1. outside of code snippets, \<h1> must be escaped with a backslash
2. outside of code snippets, lines beginning with \# must be escaped with backslash
Horizontal Rule
---

# 07 JavaScript Basics (12 modules, 3 projects)
## Fundamentals Part 1

### Introduction
Let’s dive right into JavaScript!

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

The simplest way to get started is to simply create an HTML file with the JavaScript code inside of it. Type the basic HTML skeleton into a file on your computer somewhere:

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
== END This variable tutorial ==

The above tutorial mentioned this, but it’s important enough to note again: let and const are both relatively new ways to declare variables in JavaScript. In many tutorials (and code) across the internet you’re likely to encounter var statements. Don’t let it bother you! There’s nothing inherently wrong with var, and in most cases var and let behave the same way. But sometimes the behavior of var is not what you would expect. Just stick to let (and const) for now.

### Numbers
Numbers are the building blocks of programming logic! In fact, it’s hard to think of any useful programming task that doesn’t involve at least a little basic math… so knowing how numbers work is obviously quite important. Luckily, it’s also fairly straightforward.

[This W3Schools JS Arithmetic lesson](https://www.w3schools.com/js/js_arithmetic.asp) followed by [this W3Schools JS Numbers one](https://www.w3schools.com/js/js_numbers.asp), are good introductions to what you can accomplish with numbers in JavaScript.

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
  action overflow menu > More Tools > Developer Tools
How do you log information to the console?
  console.log()
What does unary plus operator do to string representations of integers? eg. +”10”
  +x Unary Plus Convert a value into a number
  -x Unary Minus Convert a value into a number and negate it

### Additional resources
This section contains helpful links to other content. It isn’t required, so consider it supplemental.

The differences between var and let are explained in this javascript.info article titled the old “var”.

### Notes
Literals, variables, objects. 
new keyword creates objects.
never compare strings with objects.
Comparing two JavaScript objects always returns false.

## Fundamentals Part 2

Introduction
There are a few extremely common types of data that you will encounter in JavaScript, and these lessons on the fundamentals will give you a really strong foundation in all of them. However, before we start digging deep, this article will provide you with a quick overview of the most common ones.
http://javascript.info/types
See javascript-info-data-types.md

Lesson overview
This section contains a general overview of topics that you will learn in this lesson.

Name the eight data types in JavaScript.
> JavaScript has 8 Datatypes
String.
Number.
Bigint.
Boolean.
Undefined.
Null.
Symbol.
Object.

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
Which data type is NOT primitive?
What is the relationship between null and undefined?
What is the difference between single, double, and backtick quotes for strings?
What is the term for joining strings together?
Which type of quote lets you embed variables/expressions in a string?
How do you embed variables/expressions in a string?
How do you use escape characters in a string?
What is the difference between the slice/substring/substr string methods?
What are the three logical operators, and what do they stand for?
What are the comparison operators?
What are truthy and falsy values?
What are the falsy values in JavaScript?
What are conditionals?
What is the syntax for an if/else conditional?
What is the syntax for a switch statement?
What is the syntax for a ternary operator?
What is nesting?
Additional resources
This section contains helpful links to other content. It isn’t required, so consider it supplemental.

Regular expressions, commonly known as regex, are a tool that matches or locates patterns in strings for string validation. Although it shouldn’t be your immediate solution this early on, you can still use this resource to understand how websites know that myemail@com isn’t a valid email address. On top of that, other solutions to filter out strings exist, and regex is considered a slow operation.
The Net Ninja’s Regular Expressions Tutorial.
When to avoid regular expressions.

## JavaScript Developer Tools

## Fundamentals Part 3

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
