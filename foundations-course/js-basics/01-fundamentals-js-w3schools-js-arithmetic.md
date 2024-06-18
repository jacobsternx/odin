# [W3Schools JavaScriplt arithmetic](https://www.w3schools.com/js/js_arithmetic.asp)

## JavaScript Arithmetic Operators
Arithmetic operators perform arithmetic on numbers (literals or variables).

Operator	Description
+	Addition
-	Subtraction
*	Multiplication
**	Exponentiation (ES2016)
/	Division
%	Modulus (Remainder)
++	Increment
--	Decrement

### Arithmetic Operations
A typical arithmetic operation operates on two numbers.

The two numbers can be literals:
Example
let x = 100 + 50;

or variables:
Example
let x = a + b;

or expressions:
Example
let x = (100 + 50) * a;

### Operators and Operands
The numbers (in an arithmetic operation) are called operands.

The operation (to be performed between the two operands) is defined by an operator.

Operand	Operator Operand
100     +        50

### Adding
let z = x + y;

### Subtracting
let z = x - y;

### Multiplying
let z = x * y;

### Dividing
let z = x / y;

### Remainder
let z = x % y;

In arithmetic, the division of two integers produces a quotient and a remainder.
In mathematics, the result of a modulo operation is the remainder of an arithmetic division.
Arithmetic is a branch of mathematics that deals with the study of numbers and their basic operations.
Mathematics is a broad field that encompasses algebra, geometry, calculus, statistics--theory, and variables.

### Incrementing
x++;

### Decrementing
x--;
let z = x;

### Exponentiation
let z = x ** 2;

### x ** y produces the same result as Math.pow(x,y):
let z = Math.pow(x,2);

### Operator Precedence
Operator precedence describes the order in which operations are performed in an arithmetic expression.
Example
let x = 100 + 50 * 3;

Is the result of example above the same as 150 * 3, or is it the same as 100 + 150?
Is the addition or the multiplication done first?
As in traditional school mathematics, the multiplication is done first.
Multiplication (*) and division (/) have higher precedence than addition (+) and subtraction (-).
And (as in school mathematics) the precedence can be changed by using parentheses.

When using parentheses, the operations inside the parentheses are computed first:
Example
let x = (100 + 50) * 3;

When many operations have the same precedence (like addition and subtraction or multiplication and division), they are computed from left to right:
Examples
let x = 100 + 50 - 3;
let x = 100 / 50 * 3;
