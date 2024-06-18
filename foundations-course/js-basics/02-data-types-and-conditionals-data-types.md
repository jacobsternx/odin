[JavaScript Fundamentals; Data types]()

[The JavaScript language, JavaScript Fundamentals; Data types](https://javascript.info/types)
### Number
The number type represents both integer and floating point numbers.

> Infinity represents ∞. It is a value that’s greater than any number.
alert( 1 / 0 ); // Infinity
alert( Infinity ); // Infinity

> NaN represents a computational error. 
> Any further mathematical operation on NaN returns NaN
(there’s only one exception to that: NaN ** 0 is 1).

> The “number” type cannot safely represent integer values larger than (2^53-1) 
(that’s 9007199254740991), or less than -(2^53-1) for negatives.

To be really precise, the “number” type can store larger integers (up to 1.7976931348623157 * 10308), but outside of the safe integer range ±(253-1) there’ll be a precision error, because not all digits fit into the fixed 64-bit storage. So an “approximate” value may be stored.
For example, these two numbers (right above the safe range) are the same:
```
console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 9007199254740992
```

### BigInt
BigInt value is created by appending n to the end of an integer:
// the "n" at the end means it's a BigInt
```const bigInt = 1234567890123456789012345678901234567890n;
```

### String
n JavaScript, there are 3 types of quotes.
Double and single quotes are “simple” quotes. There’s practically no difference.
Backticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string by wrapping them in ${…}, for example:

let name = "John";
// embed a variable
alert( `Hello, ${name}!` ); // Hello, John!
// embed an expression
alert( `the result is ${1 + 2}` ); // the result is 3

> There is no character type.
> The boolean type has only two values: true and false.

> The special null value does not belong to any type described above.
> It forms a separate type of its own which contains only the null value:
> Null is a special value which represents “nothing”, “empty” or “value unknown”.

> The special value undefined also stands apart. It makes a type of its own, just like null.
> The meaning of undefined is “value is not assigned”.
> If a variable is declared, but not assigned, then its value is undefined:
> Also, it is possible to explicitly assign undefined to a variable:
```
let age = 100;
age = undefined;
alert(age); // "undefined"
```

### Objects and Symbols
The object type is special.
All other types are called “primitive” because their values can contain only a single thing. In contrast, objects are used to store collections of data and more complex entities.

The symbol type is used to create unique identifiers for objects. We have to mention it here for the sake of completeness, but also postpone the details till we know objects.

### The typeof operator
The typeof operator returns the type of the operand. It’s useful when we want to process values of different types differently or just want to do a quick check.

A call to typeof x returns a string with the type name:
```
typeof undefined // "undefined"
typeof 0 // "number"
typeof 10n // "bigint"
typeof true // "boolean"
typeof "foo" // "string"
typeof Symbol("id") // "symbol"
typeof Math // "object"  (1)
typeof null // "object"  (2)
typeof alert // "function"  (3)
```

The last three lines may need additional explanation:
> Math is a built-in object that provides mathematical operations.
> The result of typeof null is "object". That’s an officially recognized error in typeof, coming from very early days of JavaScript and kept for compatibility. Definitely, null is not an object. It is a special value with a separate type of its own.

You may also come across another syntax: typeof(x). It’s the same as typeof x.
To put it clear: typeof is an operator, not a function. The parentheses here aren’t a part of typeof. It’s the kind of parentheses used for mathematical grouping.

### Summary
There are 8 basic data types in JavaScript.

Seven primitive data types:
* number for numbers of any kind: integer or floating-point, integers are limited by ±(253-1).
* bigint for integer numbers of arbitrary length.
* string for strings. A string may have zero or more characters, there’s no separate single-character type.
* boolean for true/false.
* null for unknown values – a standalone type that has a single value null.
* undefined for unassigned values – a standalone type that has a single value undefined.
* symbol for unique identifiers.
And one non-primitive data type:
* object for more complex data structures.

## Tasks
String quotes

What is the output of the script?

> Backticks embed the expression inside ${...} into the string.
```
let name = "Ilya";

alert( `hello ${1}` ); // ?
// the expression is a number 1
alert( `hello ${1}` ); // hello 1

alert( `hello ${"name"}` ); // ?
// the expression is a string "name"
alert( `hello ${"name"}` ); // hello name

alert( `hello ${name}` ); // ?
// the expression is a variable, embed it
alert( `hello ${name}` ); // hello Ilya
```
