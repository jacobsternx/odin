# Foundations Course
# 04 HTML Foundations (7 modules, 1 project)
## Introduction to HTML and CSS

## Elements and Tags

## HTML Boilerplate

type ! in blank vs-code html file:
```
\<!DOCTYPE html>
\<html lang="en">
\<head>
    \<meta charset="UTF-8">
    \<meta name="viewport" content="width=device-width, initial-scale=1.0">
    \<title>Document</title>
\</head>
\<body>
    
\</body>
\</html>
```

The doctype’s purpose is to tell the browser what version of HTML it should use to render the document.
The lang attribute specifies the language of the text content in that element and is mainly used for improving accessibility
The <head> element is where we put important meta-information about our webpages 
The meta tag for the charset encoding in the head element: <meta charset="utf-8"> ensures special characters display correctly.
If we didn’t include a title element, the webpage’s title would default to its file name.

## Working with Text

Paragraphs: \<p></p>
Headings: \<h#> \</h#> 1-6
Bold text: \<strong> \</strong>
Italicized text: <em></em>, emphasis
Nesting Elements is indent any elements that are within other elements, creating a parent and child relationship between them.
Elements at the same level of nesting are considered to be siblings.
Relationship among html elements: Newlines compressed into single space.
Html comments: <!-- ... -->
CSS comments: // and /* ... */
Unordered lists: \<ul> \<li> \</li> \</ul>, bullets
Ordered lists: \<ol> \<li> \</li> \</ol>, numbers

Create folder odin-links-and-images with index.html to practice (I may've used another file.)
Relative and absolute links and images
Anchor to create links: \<a> text \</a>
Absolute links: \<a href="protocol://domain/path">text \</a>
Relative links: \<a href="pages/about.html">text \</a>
Embedded Image links: \<img src="images/image.jpg">, see alt text below
Singleton or void elements are self-closing: \<br>, \<img>, ...
Parent directories: ../
Every image element must also have an alt (alternative text) attribute, in case it cannot be loaded.
alt attribute: \<img src="image.png" alt="Odin Project">
css inline: \<h1 style="color: red; font-size: 40px;">text\</h1>
hexadecimal colors: red = #FF0000, blue = #0000FF
\<body style="background-color: #000; color: #FFFF;">
\<html lang='en'>
\<meta charset='UTF-8'>
3 reserved characters in HTML: &lt; &gt; and &amp;

## Commit Messages

Basic rules of commit messages
	Spell correctly.
	Use an active voice: “Fix card generator”
	Avoid using vague commit messages such as “saved” or “updated”
	Commit early and often!

The seven rules of a great Git commit message (Advanced)
https://cbea.ms/git-commit/

    Separate subject from body with a blank line
    Limit the subject line to 50 characters
    Capitalize the subject line
    Do not end the subject line with a period
    Use the imperative mood in the subject line
    Wrap the body at 72 characters
    Use the body to explain what and why vs. how

## Project: Recipes

    Create a new repo for this project on GitHub.com and named odin-recipes.

    Move that repository onto your local machine, inside the repos folder that you previously created in the Git Basics lesson. 
    The command should look like git clone git@github.com:username/odin-recipes.git (use SSH).
    Now cd into the odin-recipes project directory on your local machine.
    Set up your README.md file and write a brief introduction describing what the current project is and what skills you will have demonstrated once you have completed it. (You can also do this as a self-reflection at the end of the project, which is a good way to review what you have learned.)
    
Iteration 1: Initial Structure
    Within the odin-recipes directory, create an index.html file.
    Fill it out with the usual boilerplate HTML and add an h1 heading “Odin Recipes” to the body.

Iteration 2: Recipe Page
    Create a new directory within the odin-recipes directory and name it recipes.
    Create a new HTML file within the recipes directory and name it after the recipe it will contain. For example lasagna.html. You can use the name of your favorite dish or, if you need some inspiration, you can find a recipe to use here.
    For now, just include an h1 heading with the recipe’s name as its content.
    Back in the index.html file, add a link to the recipe page you just created. Example: Under the \<h1>Odin Recipes \</h1> heading, write out the link like so: \<a href="recipes/recipename.html">Recipe Title \</a>. The text of the link should again be the recipe name.

Iteration 3: Recipe Page Content
Your new recipe page should have the following content:
    An image of the finished dish under the h1 heading that you added earlier. You can find images of the dish on Google or the recipe site we linked to earlier.
    Under the image, it should have an appropriately sized “Description” heading followed by a paragraph or two describing the recipe.
    Under the description, add an “Ingredients” heading followed by an unordered list of the ingredients needed for the recipe.
    Finally, under the ingredients list, add a “Steps” heading followed by an ordered list of the steps needed for making the dish.

Iteration 4: Add More Recipes
    Add two more recipes with identical page structures to the recipe page you’ve already created.
    Don’t forget to link to the new recipes on the index page. Also, consider putting all the links in an unordered list so they aren’t all on one line.

To see some solutions, visit and scroll to the bottom to see links: https://www.theodinproject.com/lessons/foundations-recipes


# 05 CSS Foundations (5 modules)
## Intro to CSS

The next step is to make that structure look good with some style, which is exactly what CSS is for.
Many CSS properties take "length" values, such as width, margin, padding, font-size, etc.

Length is a number followed by a length unit, such as 10px, 2em, etc.
Note: Whitespace cannot appear between the number and the unit. However, if the value is 0, the unit can be omitted.

div.bold-text  font-weight: 700;

Universal Selector
```
* {	color: purple; } //applies to all elems
```

Type Selectors
Type (element) selector will select all elements of the given element type:
div { color: white} //applies to all divs

Class selectors select all elements with the given class, HTML element attribute.
\<div class="alert-text"> Text \</div>
.alert-text { color: red; } //applies to all alert-text class elems
Note syntax for class selectors: a period followed by value of class attribute. 
You can also add multiple classes to a single element as a space-separated list, such as class="alert-text severe-alert". 

## ID Selectors
Similar to class selectors, select an element with given ID, another HTML attribute:
```
<div id="title">My Awesome 90's Page</div>
```
/* styles.css */
```
#title {  background-color: red; }
```
Instead of a period, use a hashtag followed by the value of the ID attribute. 
The main difference between classes and IDs is that an element can only have one ID

### Grouping Selector
Two groups of elements share some of their style declarations.
```
.read {
  color: white;
  background-color: black;
  /* several unique declarations */
}

.unread {
  color: white;
  background-color: black;
  /* several unique declarations */
}
```
Both our .read and .unread selectors share the color: white; and background-color: black; declarations, but otherwise have several of their own unique declarations. To reduce repetition, can group these two selectors together as a comma-separated list:
```
.read,
.unread {
  color: white;
  background-color: black;}

.read {  /* several unique declarations */}

.unread {  /* several unique declarations */}
```
### Chaining Selectors
Can also chain selectors as a list without any separation:
```
\<div>
  \<div class="subsection header">Latest Posts</div>
  \<p class="subsection preview">This is where a preview for a post might go.</p>
\</div>
```
Two elements with the subsection class that have some sort of unique styles. If we only want to apply a separate rule to the element that also has header as a second class, we could chain both the class selectors together in our CSS like so:
```
.subsection.header { color: red; }
```
Selects any element that has both the subsection and header classes. Notice how there isn’t any space between the .subsection and .header class selectors. This syntax basically works for chaining any combination of selectors, except for chaining more than one type selector.

This can also be used to chain a class and an ID, as shown below:
```
\<div>
  \<div class="subsection header">Latest Posts</div>
  \<p class="subsection" id="preview">This is where a preview for a post might go.</p>
\</div>
```
You can take the two elements above and combine them with the following:
```
.subsection.header { color: red; }
.subsection#preview { color: blue; }
```

In general, you can’t chain more than one type selector since an element can’t be two different types at once. For example, chaining two type selectors like div and p would give us the selector divp, which wouldn’t work since the selector would try to find a literal <divp> element, which doesn’t exist.

Descendant Combinator

Combinators allow us to combine multiple selectors differently than either grouping or chaining them, as they show a relationship between the selectors. There are four types of combinators in total, but for right now we’re going to only show you the descendant combinator, which is represented in CSS by a single space between selectors. A descendant combinator will only cause elements that match the last selector to be selected if they also have an ancestor (parent, grandparent, etc) that matches the previous selector.

So something like .ancestor .child would select an element with the class child if it has an ancestor with the class ancestor. Another way to think of it is child will only be selected if it is nested inside of ancestor, no matter how deep. Take a quick look at the example below and see if you can tell which elements would be selected based on the CSS rule provided:

.ancestor .contents {  /* some declarations */ }
```
\<div class="ancestor"> <!-- A -->
  \<div class="contents"> <!-- B -->
    \<div class="contents"> <!-- C -->
    \</div>
  \</div>
\</div>

\<div class="contents"></div> <!-- D -->
```
In the above example, the first two elements with the contents class (B and C) would be selected, but that last element (D) won’t be. 
There’s no limit to how many combinators you can add to a rule, so .one .two .three .four would be totally valid. This would just select an element that has a class of four if it has an ancestor with a class of three, and if that ancestor has its own ancestor with a class of two, and so on. You generally want to avoid trying to select elements that need this level of nesting, though, as it can get pretty confusing and long, and it can cause issues when it comes to specificity.

Color and Background-Color
The color property sets an element’s text color, while background-color sets, well, the background color of an element. Both of these properties can accept one of several kinds of values. A common one is a keyword, such as an actual color name like red or the transparent keyword. They also accept HEX, RGB, and HSL values, which you may be familiar with if you’ve ever used a photoshop program or a site where you could customize your profile colors.

Following shows using colors and transparency, or alpha channel, or opacity.
```
#p1 {background-color: #ff0000;}   /* HEX red */
#p1a {background-color: #ff000080;}   /* HEX red transparency */
#p2 {background-color: rgb(0, 255, 0);}   /* RGB green */
#p2a {background-color: rgba(0, 255, 0, 0.3);}   /* RGB green with opacity */
#p3 {background-color: hsl(120, 100%, 50%);}   /* HSL green */
#p3a {background-color: hsla(120, 100%, 50%, 0.3);}   /*HSL green with opacity */
```
Typography Basics and Text-Align
font-family: "DejaVu Sans", sans-serif;
font-size: 22px
font-weight: 700
text-align: center

<!-- Image Height and Width -->
By default, an <img> element’s height and width values will be the same as the actual image file’s height and width. If you wanted to adjust the size of the image without causing it to lose its proportions, you would use a value of “auto” for the height property and adjust the width value:
```
img {
  \height: auto;
  \width: 500px; 
}
```
For example, if an image’s original size was 500px height and 1000px width, using the above CSS would result in a height of 250px. It’s best to include both of these properties for <img> elements, even if you don’t plan on adjusting the values from the image file’s original ones. When these values aren’t included, if an image takes longer to load than the rest of the page contents, the image won’t take up any space on the page at first, but will suddenly cause a drastic shift of the other page contents once it does load in. Explicitly stating a height and width prevents this from happening, as space will be “reserved” on the page and will just appear as a blank space until the image loads.

https://www.w3schools.com/cssref/css_selectors.php

```
element	p	Selects all <p> elements
element.class  p.intro  Selects all <p> elements with class="intro"
element,element  div, p  Selects all <div> elements and all <p> elements
element element  div p  Selects all <p> elements inside <div> elements
element>element  div > p  Selects all <p> elements where the parent is a <div> element
element+element	 div + p  Selects first <p> element following <div> elements
element1~element2  p ~ ul  Selects every <ul> element that is preceded by a <p> element
```

## The Cascade of CSS
Sometimes we may have rules that conflict with one another, and we end up with some unexpected results.

Specificity

A CSS declaration that is more specific will take precedence over less specific ones. Inline styles, which we will go over more in the Adding CSS to HTML section towards the end of the lesson, have the highest specificity compared to selectors, while each type of selector has its own specificity level that contributes to how specific a declaration is. Other selectors contribute to specificity, but we’re focusing only on the ones mentioned: 

id (most specific)
class 
type (lease specific)

/* ========== SPECIFICITY ========== //
//
// Type selectors   | value: 1      | e.g. img
// Class selectors  | value: 10     | e.g. .recipe-card
// Id selectors     | value: 100    | e.g. #container
*/

Specificity will only be taken into account when an element has multiple, conflicting declarations targeting it. When no declaration has a selector with a higher specificity, a larger amount of a single selector will beat a smaller amount of that same selector.

Let’s take a look at a few quick examples to visualize how specificity works. Consider the following HTML and CSS code:

<!-- index.html -->
```
<div class="main">
  <div class="list subsection"></div>
</div>
```

/* rule 1 */
```
.subsection {
  color: blue;
}
```
* rule 2 */
```
.main .list {
  color: red;
}
```

In the example above, both rules are using only class selectors, but rule 2 is more specific because it is using more class selectors, so the color: red; declaration would take precedence.

Now, let’s change things a little bit:
```
<!-- index.html -->
\<div class="main">
  \<div class="list" id="subsection"></div>
\</div>
```
/* rule 1 */
```
#subsection {
  color: blue;
}
```
/* rule 2 */
```
.main .list {
  color: red;
}
```
In the example above, despite rule 2 having more class selectors than ID selectors, rule 1 is more specific because ID beats class. In this case, the color: blue; declaration would take precedence.
```
/* rule 1 */
#subsection .list {
  background-color: yellow;
  color: blue;
}
```
/* rule 2 */
```
#subsection .main .list {
  color: red;
}
```
In this final example, both rules are using ID and class selectors, so neither rule is using a more specific selector than the other. The cascade then checks the amounts of each selector type. Both rules only have one ID selector, but rule 2 has more class selectors, so rule 2 has a higher specificity!

While the color: red declaration would take precedence, the background-color: yellow declaration would still be applied since there’s no conflicting declaration for it.
Not everything adds to specificity

When comparing selectors, you may come across special symbols for the universal selector (*) as well as combinators (+, ~, >, and an empty space). These symbols do not add any specificity in and of themselves.
```
/* rule 1 */
```
.class.second-class {
  font-size: 12px;
}
```
/* rule 2 */
```
.class .second-class {
  font-size: 24px;
}
```
Here both rule 1 and rule 2 have the same specificity. Rule 1 uses a chaining selector (no space) and rule 2 uses a descendant combinator (the empty space). But both rules have two classes and the combinator symbol itself does not add to the specificity.

/* rule 1 */
```
.class.second-class {
  font-size: 12px;
}
```
/* rule 2 */
```
.class > .second-class {
  font-size: 24px;
}
```
This example shows the same thing. Even though rule 2 is using a child combinator (>), this does not change the specificity value. Both rules still have two classes so they have the same specificity values.

/* rule 1 */
```
* {
  color: black;
}
```
/* rule 2 */
```
h1 {
  color: orange;
}
```
In this example, rule 2 would have higher specificity and the orange value would take precedence for this element. Rule 2 uses a type selector, which has the lowest specificity value. But rule 1 uses the universal selector (*) which has no specificity value.

#### Inheritance

Inheritance refers to certain CSS properties that, when applied to an element, are inherited by that element’s descendants, even if we don’t explicitly write a rule for those descendants. Typography based properties (color, font-size, font-family, etc.) are usually inherited, while most other properties aren’t.

The exception to this is when directly targeting an element, as this always beats inheritance:

<!-- index.html -->
```
<div id="parent">
  <div class="child"></div>
</div>
```
/* styles.css */
```
\#parent {
  \color: red;
}

.child {
  \color: blue;
}
```
Despite the parent element having a higher specificity with an ID, the child element would have the color: blue style applied since that declaration directly targets it, while color: red from the parent is only inherited.

#### Rule Order

The final factor, the end of the line, the tie-breaker of the tie-breaker. Let’s say that after every other factor has been taken into account, there are still multiple conflicting rules targeting an element. How does the cascade determine which rule to apply?

Really simply, actually. Whichever rule was the last defined is the winner.
```
/* styles.css */
```
.alert {
  color: red;
}

.warning {
  color: yellow;
}
```
For an element that has both the alert and warning classes, the cascade would run through every other factor, including inheritance (none here) and specificity (neither rule is more specific than the other). Since the .warning rule was the last one defined, and no other factor was able to determine which rule to apply, it’s the one that gets applied to the element.

### Assignment

    Go back to our CSS exercises repository and finish the last exercise 06-cascade-fix.

    Remember the Recipe page you created as practice from the HTML Foundations section? Well, it’s rather plain looking, isn’t it? Let’s fix that by adding some CSS to it!

    How you actually style it is completely open, but you should use the external CSS method (for this practice and moving forward). You should also try to use several of the properties mentioned in the previous lesson (color, background color, typography properties, etc). Take some time to play around with the various properties to get a feel for what they do. For now, don’t worry at all about making it look good. This is just to practice and get used to writing CSS, not to make something to show off on your resume.

    We haven’t covered how to use a custom font for the font-family property yet, so for now take a look at CSS Fonts for a list of generic font families to use, and CSS Web Safe Fonts for a list of fonts that are web safe. Web safe means that these are fonts that are installed on basically every computer or device (but be sure to still include a generic font family as a fallback).

### Knowledge Check

This section contains questions for you to check your understanding of this lesson on your own. If you’re having trouble answering a question, click it and review the material it links to.

    Between a rule that uses one class selector and a rule that uses three type selectors, which rule has the higher specificity?

### Additional Resources

This section contains helpful links to related content. It isn’t required, so consider it supplemental.

    The CSS Cascade is a great, interactive read that goes a little more in detail about other factors that affect what CSS rules actually end up being applied.
    Changing the Font Family describes a few different approaches to using custom fonts.
    CSS Specificity from W3Schools goes over how you can calculate the specificity of rules. This page mentions some selectors that we will go over in a later lesson, so don’t worry about what they are or how to use them right now.
    Mozilla CSS Properties Reference can be used to learn if a particular CSS property is inherited or not; simply look for the Inherited field inside the Formal Definition section. Here’s an example for the CSS color property.

#### Adding CSS to HTML

Okay, we went over quite a bit so far. The only thing left for now is to go over how to add all this CSS to our HTML. There are three methods to do so.
External CSS

External CSS is the most common method you will come across, and it involves creating a separate file for the CSS and linking it inside of an HTML’s opening and closing <head> tags with a self-closing <link> element:

<!-- index.html -->
```
\<head>
  \<link rel="stylesheet" href="styles.css">
\</head>
```
/* styles.css */
```
div {
  color: white;
  background-color: black;
}

p {
  color: red;
}
```
First, we add a self-closing \<link> element inside of the opening and closing \<head> tags of the HTML file. The href attribute is the location of the CSS file, either an absolute URL or, what you’ll be utilizing, a URL relative to the location of the HTML file. In our example above, we are assuming both files are located in the same directory. The rel attribute is required, and it specifies the relationship between the HTML file and the linked file.

Then inside of the newly created styles.css file, we have the selector (the div and p), followed by a pair of opening and closing curly braces, which create a “declaration block”. Finally, we place any declarations inside of the declaration block. color: white; is one declaration, with color being the property and white being the value, and background-color: black; is another declaration.

A note on file names: styles.css is just what we went with as the file name here. You can name the file whatever you want as long as the file type is .css, though “style” or “styles” is most commonly used.

A couple of the pros to this method are:

    It keeps our HTML and CSS separated, which results in the HTML file being smaller and making things look cleaner.
    We only need to edit the CSS in one place, which is especially handy for websites with many pages that all share similar styles.

### Internal CSS

Internal CSS (or embedded CSS) involves adding the CSS within the HTML file itself instead of creating a completely separate file. With the internal method, you place all the rules inside of a pair of opening and closing \<style> tags, which are then placed inside of the opening and closing \<head> tags of your HTML file. Since the styles are being placed directly inside of the \<head> tags, we no longer need a \<link> element that the external method requires.

Besides these differences, the syntax is exactly the same as the external method (selector, curly braces, declarations):
```
<head>
  <style>
    div {
      color: white;
      background-color: black;
    }
    p {
      \color: red;
    }
  </style>
</head>
<body>...</body>
```

This method can be useful for adding unique styles to a single page of a website, but it doesn’t keep things separate like the external method, and depending on how many rules and declarations there are it can cause the HTML file to get pretty big.
Inline CSS

Inline CSS makes it possible to add styles directly to HTML elements, though this method isn’t as recommended:
```
\<body>
  \<div style="color: white; background-color: black;">...</div>
\</body>
```

The first thing to note is that we don’t actually use any selectors here, since the styles are being added directly to the opening <div> tag itself. Next, we have the style= attribute, with its value within the pair of quotation marks being the declarations.

If you need to add a unique style for a single element, this method can work just fine. Generally, though, this isn’t exactly a recommended way for adding CSS to HTML for a few reasons:

    It can quickly become pretty messy once you start adding a lot of declarations to a single element, causing your HTML file to become unnecessarily bloated.
    If you want many elements to have the same style, you would have to copy + paste the same style to each individual element, causing lots of unnecessary repetition and more bloat.
    Any inline CSS will override the other two methods, which can cause unexpected results. (While we won’t dive into it here, this can actually be taken advantage of).

### Assignment

    Go to our CSS exercises repository, read the README, and only do the exercises in the foundations directory in the order they’re listed, starting with 01-css-methods and ending with 06-cascade-fix.

    Remember the Recipe page you created as practice from the previous lesson? Well, it’s rather plain looking, isn’t it? Let’s fix that by adding some CSS to it!

    How you actually style it is completely open, but you should use the external CSS method (for this practice and moving forward). You should also try to use several of the properties mentioned in the section above (color, background color, typography properties, etc). Take some time to play around with the various properties to get a feel for what they do. For now, don’t worry at all about making it look good. This is just to practice and get used to writing CSS, not to make something to show off on your resume, so feel free to go a little crazy for now.

    We haven’t covered how to use a custom font for the font-family property yet, so for now take a look at CSS Fonts for a list of generic font families to use, and CSS Web Safe Fonts for a list of fonts that are web safe. Web safe means that these are fonts that are installed on basically every computer or device (but be sure to still include a generic font family as a fallback).

### Knowledge Check

This section contains questions for you to check your understanding of this lesson on your own. If you’re having trouble answering a question, click it and review the material it links to.

> What are the main differences between external, internal, and inline CSS?

inline: least maintainable, ugliest, highest selectability precedence.
internal: css in html header, so does not separate style from content.
external: most maintainable, separates style from content, best.

>  What is the syntax for class and ID selectors?

<!-- styles.css -->
```
#top {
    background-color: #ccc;
}
.intro {
    color: red;
}
```
/* index.html */
```
<div id="top">
<p class="intro">This is my recipe for chocolate</p>
```

> How would you apply a single rule to two different selectors?
```
div, p { color: #f00; }
```
In this context, a comma means "and," so this selector applies to all paragraph elements and all division elements. If the comma were missing, the selector would instead apply to all paragraph elements that are a child of a division. That is a different kind of selector, so the comma is important.

You can group any form of selector with any other selector. This example groups a class selector with an ID selector:
```
p.red, #sub { color: #f00; }
```
This style applies to any paragraph with the class attribute of red and any element (because the kind is not specified) with an ID attribute of sub.

You can group any number of selectors.

> Given an element with an id of title and a class of primary, how would you use both attributes for a single rule?
```
#title, .primary { key:value }
```

Additional Resources

This section contains helpful links to related content. It isn’t required, so consider it supplemental.

    The CSS Cascade
    https://wattenberger.com/blog/css-cascade
    is a great, interactive read that goes a little more in detail about other factors that affect what CSS rules actually end up being applied.
    
    Changing the Font Family 
    https://www.digitalocean.com/community/tutorials/how-to-load-and-use-custom-fonts-with-css#finding-and-loading-a-font-file-from-a-hosted-service
    describes a few different approaches to using custom fonts.
    
    CSS Specificity from W3Schools 
    https://www.digitalocean.com/community/tutorials/how-to-load-and-use-custom-fonts-with-css#finding-and-loading-a-font-file-from-a-hosted-service
    goes over how you can calculate the specificity of rules. This page mentions some selectors that we will go over in a later lesson, so don’t worry about what they are or how to use them right now.
    
    Mozilla CSS Properties Reference 
    https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference
    Learn about inheritance and the various types of keys, values, units possible in absolute or relative terms.
    [Typography based properties (color, font-size, font-family, etc.) are usually inherited, while most other properties aren’t.]
        
    Chromium’s default set of styles
    https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/core/html/resources/html.css

## Inspecting HTML and CSS

Being able to inspect and debug your HTML and CSS is critical to frontend development. This lesson will take us through the Chrome Dev Tools, which allow you to see detailed information about your elements and CSS rules, as well as assist you in finding and fixing problems in your code.

Lesson Overview
This section contains a general overview of topics that you will learn in this lesson.

You will know how to access the element inspector.
You will know how to select and inspect specific elements.
You will know how to test out HTML and CSS in the inspector.
The Inspector
To open up the inspector, you can right-click on any element of a webpage and click “Inspect” or press F12. Go ahead and do that right now to see the HTML and CSS used on this page.

Don’t get overwhelmed with all the tools you’re now seeing! For this lesson, we want to focus on the Elements and Styles panes.

Inspecting Elements
In the Elements pane, you can see the entire HTML structure of your page. You can click on any of the elements in this pane to select that specific element. Alternatively, you can click the blue-highlighted icon shown below on the left, and hover over any element on the page.

Inspector Icon

When an element is selected, the Styles tab will show all the currently applied styles, as well as any styles that are being overwritten (indicated by a strikethrough of the text). For example, if you use the inspector to click on the “Your Career in Web Development Starts Here” header on the TOP homepage, on the right-hand side you’ll see all the styles that are currently affecting the element, as seen below:

Overwritten style

Testing Styles in the Inspector
The Styles pane also allows you to edit styles directly in the browser. You can click inside of any individual selector to add a new rule or click on an existing attribute or value to alter it. When doing so, the webpage responds with the changes in real-time. This won’t affect the source code in your text editor, but it is extremely useful for quickly testing out various attributes and values without needing to reload the page over and over again.

### Assignment
Go through the following sections of the official Chrome DevTools docs:
https://developers.google.com/web/tools/chrome-devtools

Overview: don’t navigate to any other pages linked here; just get familiar with what tools are available in the DevTools, rather than how to use all of them right now.

Open Chrome DevTools: similar to what we went over above, but with some nice extras.
https://developer.chrome.com/docs/devtools/open/

Get Started With Viewing And Changing The DOM: skip through any part that uses the JavaScript console.
https://developer.chrome.com/docs/devtools/dom/

View and change CSS: be sure to follow along with any interactive instructions!

### Knowledge Check
This section contains questions for you to check your understanding of this lesson on your own.

How do you select a specific element on your page with your browser’s developer tools?
right click > inspect

What does a strikethrough in a CSS declaration mean in your browser’s developer tools?
style is being overridden

How do you change CSS in real time on specific elements of a web page with your browser’s developer tools?
Inspece > Elements > Style, then modify as desired

Additional Resources
This section contains helpful links to related content. It isn’t required, so consider it supplemental.

This article about how we can utilize css overview in the developer tools to check the colors, font styles, media-queries, etc. used on a particular webpage.
https://www.freecodecamp.org/news/how-to-use-css-overview-in-chrome-developer-tools/

#### Notes:
Open Chrome Dev Tools: Ctrl-Shift-I or F12 or Right click > Inspect
Open Drawer: Esc
Open More tools: click 3 dots
Select CSS Overview
Click on Capture overview
Open Elements: Ctrl-Shift-C (C for CSS)
Open Console: Ctrl-Shift-J (J for js)
Open Inspect Element Inspector (top left arrow)

## The Box Model

The most important skills you need to master with CSS are positioning and layout. Changing fonts and colors is a crucial skill, but being able to put things exactly where you want them on a webpage is even more crucial. After all, how many webpages can you find where absolutely every element is just stacked one on top of another?

Learning to position elements on a webpage is not that difficult once you understand just a few key concepts. Unfortunately, many learners race through learning HTML and CSS to get to JavaScript and end up missing these fundamental concepts. This leads to frustration, pain, (and funny gifs) because all the JavaScript skills in the world are meaningless if you can’t stick your elements on the page where you need them to be.

Lesson Overview
This section contains a general overview of topics that you will learn in this lesson.

You’ll learn all about the box model.
You’ll learn how to make sure elements are just the right size with margin, padding, and borders
For a more interactive explanation and example, try the following Scrim (let us know what you think of these):


The Box Model
The first important concept that you need to understand to be successful in CSS is the box model. It isn’t complicated, but skipping over it now will cause you much frustration down the line.

Every single thing on a webpage is a rectangular box. These boxes can have other boxes in them and can sit alongside one another. You can get a rough idea of how this works by sticking a border on every item on the page like this:
Notice how on border there are 3 different key-values.
```
* {
  border: 2px solid red;
}
```
boxes

You can use the browser’s inspector to add the CSS above to this web page if you want. Boxes in boxes!

lines

OK, so there might be some circles in the above image… but when it comes to layout, they fit together like rectangular boxes and not circles. In the end, laying out a webpage and positioning all its elements is deciding how you are going to nest and stack these boxes.

The only real complication here is that there are many ways to manipulate the size of these boxes, and the space between them, using padding, margin, and border. The assigned articles go into more depth on this concept, but to sum it up briefly:

padding increases the space between the border of a box and the content of the box.
margin increases the space between the borders of a box and the borders of adjacent boxes.
border adds space (even if it’s only a pixel or two) between the margin and the padding.
Be sure to study the diagrams carefully.

the box model

### Assignment
This video is a straightforward overview of the box model, padding and margin. Go ahead and watch this now; it informs everything else.
https://www.youtube.com/watch?v=rIO5326FgPE
Because the box model concept is so incredibly fundamental, let’s dig a bit deeper with this lesson from MDN. It covers the same material as the video above and will introduce you to inline boxes that we will explore in the next lesson. Pay close attention to the examples and take the time to experiment with their in-browser editor!
https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model
This CSS Tricks page has some further information about the margin property that you’ll find useful. Specifically, the sections about auto and margin collapsing contain things you’ll want to know.
https://css-tricks.com/almanac/properties/m/margin/

### Knowledge Check
This section contains questions for you to check your understanding of this lesson on your own. If you’re having trouble answering a question, click it and review the material it links to.

From inside to outside, what is the order of box-model properties?
content, padding, border, margin

What does the box-sizing CSS property do?
sets how the total width and height of an element is calculated. 

What is the difference between the standard and alternative box model?
Standard box model, default, the size of the border and padding is added to the width and height of the box. 
But it is inconvenient to calculate the box size after adding the border and padding to the content box. 
That’s why the alternative box model, the height and width are applied to the box, including the border and padding. 
Note that the margin is outside the box.
```
.box { <!-- standard box model, content-box -->
    height: 500px;
    width: 800px;
    border: 1px solid red;
    padding: 15px;
    margin: 25px;
}
```
The height and width of the above box as calculated by the standard model is:
Height = 500 + 15 + 15 + 1 + 1 = 532px
Width  = 800 + 15 + 15 + 1 + 1 = 832px

The height and width of the above content box as calculated by the alternative model is:
Height = 500 - 15 - 15 - 1 - 1 = 468px
Width  = 800 - 15 - 15 - 1 - 1 = 768p

To convert same box size from box-sizing: content-box to border box,
add 2x padding + 2x border to border-box:
content-box width: 240px
content-box height: 100px
content-box padding: 20px
content-box border: 2 px
border-box width: 240 + 2x20 + 2x2 = 284px
border-box height 100 + 2x20 + 2x2 = 144px

Regarding margins, if only one value is defined, this sets all four margins to the same value. 
If two values are declared, it is [top-and-bottom] [left-and-right];.
If three values are declared, it is: [top] [left-and-right] [bottom];.
If four values are declared, it is [top]] [right] [bottom] [left];.

Any of the individual margins can be declared using longhand, in which case you would define only one value per property:
```
.box {
  margin-top: 20px;
  margin-right: 10px;
  margin-bottom: 20px;
  margin-left: 10px;
}
```

Would you use margin or padding to create more space between 2 elements?
Margin

Would you use margin or padding to create more space between the contents of an element and its border?
Padding

Would you use margin or padding if you wanted two elements to overlap each other?
Margin

How do you set the alternative box model for all of your elements?
```
* {
    box-sizing: border-box;
}

How do you center an element horizontally?
p { 
  text-align: center;
}
```

Margin Collapse
In the box model margins between two different elements will collapse. This means that if two elements that are siblings in the HTML both have a margin they will collapse so that only the largest of the two margins is used between the elements. 
Two positive margins will combine to become one margin. Its size will be equal to the largest individual margin.
Two negative margins will collapse and the smallest (furthest from zero) value will be used.
If one margin is negative, its value will be subtracted from the total.

Remember comments in html: <!-- comment -->
Remember comments in css: /* comment */

Absolute Units
Pixels (px)

Relative Units:
Percentages (%)
Viewport-based units (vw, wh)
Rems (rem) vs ems (em)
Character units (ch)

Rarely used Absolute:
Centimeters (cm)
Millimeter (mm)
Inches (in)
Point (pt)
Pica (pc)

Rarely used Relative:
Relative to x-height of current font
Relative to width of the "0" (zero) character ((ex))
Relative to 1% of viewport smaller dimension (vmin)
Relative to 1% of viewport larger dimension (vmax)

ch as a unit really only makes sense in most cases if you are dealing with a monospaced font - then 75ch max-width really would mean dont let the width go beyond 75 characters. But with non monospaced fonts CSS isn't going to count the characters it's going to use what it deems the width ch to mean (see e.g. https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units If your text is lots of i characters it will have a different number of characters in the element than if it has lots of M.

em is relative to the font-size of its direct or nearest parent and may lead to a compounding effect
rem is relative to the HTML (root) font-size and does not lead to a compounding effect

> You can however get a sort of responsive font size by defining it in terms of vw and your element width in terms of vw too. It wont gaurantee how many characters you get in a line (unless you go back to the monospaced idea) though.

> Could you make some sample code in Codepen or jsFiddle to illustrate your question?

## Block and Inline

Introduction
In the previous lesson, we discovered that different display types have unique box models, and we can modify the box calculation by changing the display property. CSS has two box types: block and inline boxes, which determine element behavior and interaction. The display property controls how HTML elements appear on the webpage. We will explore its various options further in this lesson.

#### Lesson Overview
This section contains a general overview of topics that you will learn in this lesson.

You’ll learn about “Normal flow”.
You’ll learn the difference between block and inline elements.
You’ll learn which elements default to block and which elements default to inline.
You’ll learn what divs and spans are.
For a more interactive explanation and example, try the following Scrim (let us know what you think of these):

### Block vs Inline
Most of the elements that you have learned about so far are block elements. In other words, their default style is display: block. By default, block elements will appear on the page stacked atop each other, each new element starting on a new line.

Inline elements, however, do not start on a new line. They appear in line with whatever elements they are placed beside. A clear example of an inline element is a link, or \<a> tag. If you stick one of these in the middle of a paragraph of text, it will behave like a part of the paragraph. (Like this…) The link’s text will sit alongside other words in that paragraph. Additionally, padding and margin behave differently on inline elements. In general, you do not want to try to put extra padding or margin on inline elements.

### The middle ground inline-block
Inline-block elements behave like inline elements, but with block-style padding and margin. display: inline-block is a useful tool to know about, but in practice, you’ll probably end up reaching for flexbox more often if you’re trying to line up a bunch of boxes. Flexbox will be covered in-depth in the next lesson.

Another common display value is none. Some specialized elements such as script use this as their default. It is commonly used with JavaScript to hide and show elements without really deleting and recreating them.

Also, display-type: flex will be discussed later, and there are many more.

### Divs and Spans
We can’t talk about block and inline elements without discussing divs and spans. All the other HTML elements we have encountered so far give meaning to their content. For example, paragraph elements tell the browser to display the text it contains as a paragraph. Strong elements tell the browser which texts within are important and so on. Yet, divs and spans give no particular meaning to their content. They are just generic boxes that can contain anything.

Having elements like this available to us is a lot more useful than it may first appear. We will often need elements that serve no other purpose than to be “hook” elements. We can give an id or class to target them for styling with CSS. Another use case we will face regularly is grouping related elements under one parent element to correctly position them on the page. Divs and spans provide us with the ability to do this.

\<div> is a block-level element by default. It is commonly used as a container element to group other elements. Divs allow us to divide the page into different blocks and apply styling to those blocks.

\<span> is an inline-level element by default. It can be used to group text content and inline HTML elements for styling and should only be used when no other semantic HTML element is appropriate.

### Assignment

The concept of “Normal flow” is implied in the box-model resources, but isn’t laid out very specifically. Read “Normal Flow” from MDN to make sure you understand how elements lay themselves out by default.

W3 schools’ “HTML Block and Inline Elements” has a description and a list of all the default block and inline elements.
https://www.w3schools.com/html/html_blocks.asp
A block-level element always takes up the full width available (stretches out to the left and right as far as it can).
Some commonly used block elements are: \<h1> \<p> \<header> \<footer> and \<div>.
An inline element does not start on a new line.
An inline element only takes up as much width as necessary.
Some commonly used inline elements are: \<a> \<button> \<code> \<em> \<img> \<span> and \<script>.

> An inline element cannot contain a block-level element!

> You have left and right margin defined at auto so it's currently centered. You can set margin-left: auto; for it to be right-aligned, and do the opposite for it to be left-aligned.

> Units do not need to be placed on 0 values.

The Digital Ocean tutorial “Inline vs Inline-block Display in CSS” has a couple of great examples that clarify the difference between inline and inline-block.
https://www.digitalocean.com/community/tutorials/css-display-inline-vs-inline-block
Compared to display: inline, the major difference is that inline-block allows to set a width and height on the element. Also, with display: inline, top and bottom margins & paddings are not respected, and with display: inline-block they are.
Now, the difference between display: inline-block and display: block is that, with display: block, a line break happens after the element, so a block element doesn’t sit next to other elements.

Go to our CSS exercises repository and do “01-margin-and-padding-1” and “02-margin-and-padding-2” in the margin-and-padding directory.
https://github.com/TheOdinProject/css-exercises

Apply what you learned about the box model to improve the look of your Recipe page’s index.html homepage. Currently, it’s just a plain list, so get creative with layouts, colors, and styles to make your page uniquely captivating.

### Knowledge Check
This section contains questions for you to check your understanding of this lesson on your own. If you’re having trouble answering a question, click it and review the material it links to.

What is the difference between a block element and an inline element?
block element takes up all of width and respects padding, border, and line break comes after the block.
What is the difference between an inline element and an inline-block element?
Inline-block element respects padding, margin, height and width, while inline does not.
Is an h1 block or inline?
inline
Is button block or inline?
block
Is div block or inline?
inline
Is span block or inline?
inline

### Additional Resources
I've learned and practiced enough to move forward but need to review:
display: inline
display: block 
display: inline-block 
particularly their effects.
Also, how divs and spans relate to display models
Also, Assignment #1 MDN Normal Flow was hard to follow

# 06 Flexbox (4 modules, 1 project)
## Introduction to Flexbox

As you’ll learn, there are many ways to move elements around on a web page. New methods have been developed over the years and older things have fallen out of style. Flexbox is a relatively new way of manipulating elements in CSS, and its debut was revolutionary.

Many resources put it near the end of their curriculum because it is somewhat new as a technology. But at this point, it has become the default way of positioning elements for many developers. Flexbox will be one of the most used tools in your toolbox, so why not learn it first?

#### Lesson Overview
This section contains a general overview of topics that you will learn in this lesson.

You will learn how to position elements using flexbox.
You will learn about flex containers and flex items.
You will learn how to create useful components and layouts that go beyond just stacking and centering items.
Before We Get Started
Flexbox layouts can get a little complicated. In a previous lesson, you learned how to inspect and debug things using your browser’s developer tools. Those tools will be crucial for you in the following lessons. If something isn’t behaving the way you expect, inspecting it in the developer tools should be your first step every time.

Flexbox isn’t necessarily any more difficult than the other concepts that we’ve covered so far, but it does have a few more moving parts. It is going to be somewhat difficult to make use of any of the things you’re learning in these first lessons until you get to the end and can put it all together. As we go, do yourself a favor and play with all of the code examples.

You will almost definitely need to come back and reference these lessons (or a couple of the resources we share with you) when you get to the assignments at the end of the section, but if you take your time and experiment with all the code examples we provide, you’ll know better where to look when that time comes.

### Let’s Flex!
Flexbox is a way to arrange items into rows or columns. These items will flex (i.e. grow or shrink) based on some simple rules that you can define. To get started, let’s look at a simple demonstration.

We’ve embedded a lot of interactive examples in these lessons. Take your time to experiment with them as you go to cement the concepts in your mind!


We’ll get into exactly what’s going on here soon enough. But for now, let’s uncomment the two flex related CSS declarations in the above Codepen by removing the /* and */ tags surrounding them, then check out the result.

Comments prevent the browser from interpreting lines as code, and are wrapped between specific tags. CSS uses /*as an opening comment tag and */ as a closing comment tag, while HTML and JavaScript have their own syntax. Commented out lines of code can be ‘re-enabled’ simply by removing the comment tags surrounding the code.

All 3 divs should now be arranged horizontally. If you resize the results frame with the “1x”, “.5x” and “.25x” buttons you’ll also see that the divs will ‘flex’. They will fill the available area and will each have equal width.

If you add another div to the HTML, inside of .flex-container, it will show up alongside the others, and everything will flex to fit within the available area.

If it’s hard to see what’s going on in the small embedded CodePen, feel free to click the “Edit on CodePen” or “Fork on CodePen” button. This will bring the example into a full-sized environment. Some of the later examples might especially benefit from doing this.

For a more interactive explanation and example, try the following Scrim (let us know what you think of these):

### Flex Containers and Flex Items
As you’ve seen, flexbox is not just a single CSS property but a whole toolbox of properties that you can use to put things where you need them. Some of these properties belong on the flex container, while some go on the flex items. This is a simple yet important concept.

A flex container is any element that has display: flex on it. A flex item is any element that lives directly inside of a flex container.

==container-vs-child==

Somewhat confusingly, any element can be both a flex container and a flex item. Said another way, you can also put display: flex on a flex item and then use flexbox to arrange its children.

==nesting flex containers==

Creating and nesting multiple flex containers and items is the primary way we will be building up complex layouts. The following image was achieved using only flexbox to arrange, size, and place the various elements. Flexbox is a very powerful tool.

==complex example==

### Knowledge Check
This section contains questions for you to check your understanding of this lesson on your own. If you’re having trouble answering a question, click it and review the material it links to.

What’s the difference between a flex container and a flex item?
A flex container is any element that has display: flex on it. A flex item is any element that lives directly inside of a flex container. Any element can be both a flex container and a flex item.

How do you create a flex item?
Put element inside of a flex container

flex property is a shorthand for flex-grow, flex-shrink, flex-basis. Its default value is 0 1 auto, which means
flex-grow: 0;
flex-shrink: 1;
flex-basis: auto;

flex:1 is equivalent to flex: 1 1 0

flex-basis: It specifies the ideal size for the items. Ideal means "assuming there is neither any extra space, nor any shortages of the space". 0% means we have no ideal size for them, we want them to be sized truely flexibly. We want them to be sized automatically(thus the word "flexible") based on the available space.

flex-grow: After taking the flex-basis into consideration, if there's remaining extra space, it specifies how "that extra space"(notice we're not talking about the whole space) must be divided between the items. The ones with higher flex-grow will eat up more of the extra space. It makes sense to use an equal flex-grow on all items by default so that all items will have the same share of the extra space. When flex-basis is 0%, a flex-grow of 1 on all items makes them divide "the whole space of the container"(since flex-basis used no space, the extra space equals the whole space of the container).

flex-shrink: After taking the flex-basis into consideration, if the available space is not enough, it specifies how "the shortage of space"(and again, not the whole space) must be divided(imposed on) among the items. The ones with higher flex-shrink will have to "endure" more of that shortage.

### Additional Resources

This Flexbox tutorial is a friendly tutorial for modern CSS layouts by Interneting Is Hard.
https://internetingishard.netlify.app/html-and-css/flexbox/index.html

summary
Flexbox gave us a ton of amazing new tools for laying out a web page. Compare these techniques to what we were able to do with floats, and it should be pretty clear that flexbox is a cleaner option for laying out modern websites:

Use display: flex; to create a flex container.
Use justify-content to define the horizontal alignment of items.
Use align-items to define the vertical alignment of items.
Use flex-direction if you need columns instead of rows.
Use the row-reverse or column-reverse values to flip item order.
Use order to customize the order of individual elements.
Use align-self to vertically align individual items.
Use flex to create flexible boxes that can stretch and shrink.

Remember that these flexbox properties are just a language that lets you tell browsers how to arrange a bunch of HTML elements. The hard part isn’t actually writing the HTML and CSS code, it’s figuring out, conceptually (on a piece of paper), the behavior of all the necessary boxes to create a given layout.

When a designer hands you a mockup to implement, your first task is to draw a bunch of boxes on it and determine how they’re supposed to stack, stretch, and shrink to achieve the desired design. Once you’ve got that done, it should be pretty easy to code it up using these new flexbox techniques.

The flexbox layout mode should be used for most of your web pages, but there are some things it’s not-so-good at, like gently tweaking element positions and preventing them from interacting with the rest of the page. After covering these kinds of advanced positioning techniques in the next chapter, you’ll be an HTML and CSS positioning expert.

Files for this lesson in
code/odin/flex/flexbox-is-hard
Chrome dev tools flexbox editor/inspector


## Growing and Shrinking

Let’s look a little closer at what actually happened when you put flex: 1 on those flex items in the last lesson.

### Lesson Overview
This section contains a general overview of topics that you will learn in this lesson.

You’ll learn the 3 properties that are defined by the flex shorthand, and how to use them individually.

#### The Flex Shorthand
The flex declaration is actually a shorthand for 3 properties that you can set on a flex item. These properties affect how flex items size themselves within their container. You’ve seen some shorthand properties before, but we haven’t officially defined them yet.

Shorthand properties are CSS properties that let you set the values of multiple other CSS properties simultaneously. Using a shorthand property, you can write more concise (and often more readable) stylesheets, saving time and energy.

Source: Shorthand properties on MDN

In this case, flex is actually a shorthand for flex-grow, flex-shrink and flex-basis.

flex shorthand

In the above screenshot, flex: 1 equates to: flex-grow: 1, flex-shrink: 1, flex-basis: 0.

Very often you see the flex shorthand defined with only one value. In that case, that value is applied to flex-grow. So when we put flex: 1 on our divs, we were actually specifying a shorthand of flex: 1 1 0.

For an interactive explanation and demo of the flex shorthand, check out this Scrim:

#### Flex-Grow
flex-grow expects a single number as its value, and that number is used as the flex-item’s “growth factor”. When we applied flex: 1 to every div inside our container, we were telling every div to grow the same amount. The result of this is that every div ends up the exact same size. If we instead add flex: 2 to just one of the divs, then that div would grow to 2x the size of the others.

In the following example the flex shorthand has values for flex-shrink and flex-basis specified with their default values.

#### Flex-Shrink
flex-shrink is similar to flex-grow, but sets the “shrink factor” of a flex item. flex-shrink only ends up being applied if the size of all flex items is larger than their parent container. For example, if our 3 divs from above had a width declaration like: width: 100px, and .flex-container was smaller than 300px, our divs would have to shrink to fit.

The default shrink factor is flex-shrink: 1, which means all items will shrink evenly. If you do not want an item to shrink then you can specify flex-shrink: 0;. You can also specify higher numbers to make certain items shrink at a higher rate than normal.

Here’s an example. Note that we’ve also changed the flex-basis for reasons that will be explained shortly. If you shrink your browser window you’ll notice that .two never gets smaller than the given width of 250px, even though the flex-grow rule would otherwise specify that each element should be equally sized.

An important implication to notice here is that when you specify flex-grow or flex-shrink, flex items do not necessarily respect your given values for width. In the above example, all 3 divs are given a width of 250px, but when their parent is big enough, they grow to fill it. Likewise, when the parent is too small, the default behavior is for them to shrink to fit. This is not a bug, but it could be confusing behavior if you aren’t expecting it.

#### Flex-Basis
flex-basis simply sets the initial size of a flex item, so any sort of flex-growing or flex-shrinking starts from that baseline size. The shorthand value defaults to flex-basis: 0%. The reason we had to change it to auto in the flex-shrink example is that with the basis set to 0, those items would ignore the item’s width, and everything would shrink evenly. Using auto as a flex-basis tells the item to check for a width declaration (width: 250px).

Important Note About Flex-Basis:
> There is a difference between the default value of flex-basis and the way the flex shorthand defines it if no flex-basis is given. The actual default value for flex-basis is auto, but when you specify flex: 1 on an element, it interprets that as flex: 1 1 0. If you want to only adjust an item’s flex-grow you can simply do so directly, without the shorthand. Or you can be more verbose and use the full 3 value shorthand flex: 1 1 auto, which is also equivalent to using flex: auto.

What is flex: auto?
> If you noticed, we mentioned a new flex shorthand flex: auto in the previous note. However we didn’t fully introduce it. flex: auto is one of the shorthands of flex. When auto is defined as a flex keyword it is equivalent to the values of flex-grow: 1, flex-shrink: 1 and flex-basis: auto or to flex: 1 1 auto using the flex shorthand. Note that flex: auto is not the default value when using the flex shorthand despite the name being “auto” which may be slightly confusing at first. You will encounter and learn more about flex: auto and its potential use-cases when reading through the assignment section.

#### In Practice…
In practice you will likely not be using complex values for flex-grow, flex-shrink or flex-basis. Generally, you’re most likely to use declarations like flex: 1; to make divs grow evenly and flex-shrink: 0 to keep certain divs from shrinking.

It is possible to get fancy, and set up layouts where some columns relate to each other in a specific ratio, so it’s useful to know that you can use other values, but those are relatively rare.

### Assignment
Read W3C’s flex section to understand the basic values of common flex shorthand values.
https://www.w3.org/TR/css-flexbox-1/#flex-common

This MDN Doc summarizes the entire flex shorthand values as well as introduces some new syntax that hasn’t been covered in the previous article.
https://developer.mozilla.org/en-US/docs/Web/CSS/flex

Watch this interactive Scrim for an alternative explanation and demo of using flex-grow, flex-shrink and flex-basis in a real world scenario:

### Knowledge Check
This section contains questions for you to check your understanding of this lesson on your own. If you’re having trouble answering a question, click it and review the material it links to.

What are the 3 values defined in the shorthand flex property (e.g. flex: 1 1 auto)?
What are the 3 defined values for the flex shorthand flex:auto?
Additional Resources
This section contains helpful links to related content. It isn’t required, so consider it supplemental.

Check out this video explaining how flexbox works and why.
https://www.youtube.com/watch?v=u044iM9xsWU&t=1s&pp=ugMICgJhchABGAE%3D

### Notes
Hide the \<h1> element. It should still take up the same space as before.
```
h1 {
visibility: hidden;
}
```
Hide the \<h1> element. It should NOT take up any space.
```
h1 { 
display: none;
}
```

Position the \<h1> element 50px from the top, relative to the HTML page.
```
<style>
h1 {  
position: absolute;
top: 50px;
}
```

Position the \<h1> element 50px from the top, relative to its normal position.
```
h1 {  
position: relative;
top: 50px;}
</style>
```
Position the \<h1> element 50px from the top, relative to the HTML page.
```
<style>
h1 {  
position: absolute;
top: 50px;
}
```

Position the \<h1> element 50px from the top, relative to its normal position.
```
h1 {  
position: relative;
top: 50px;}
</style>
```
Position the \<h1> element to always be 50px from the top, and 10px from the right, relative to the window/frame edges.
```
h1 {
position: fixed;
top: 50px;
right: 10px;
}
```
Position the \<h1> element 50px from the top, relative to its normal position.
```
h1 {
position: relative;
top: 50px;
}
```
Position the \<h1> element 50px from the top, by referring to its class name.
```
.myheader {
  position: relative;
  top: 50px;
}
```
Use inline styles to set the width of the table to "100%".
```
<table style="width:100%">
```
Display the list items as inline elements.
```
li {  
display: inline;
}
```
Specify that the background image should be shown once, in the top right corner.
```
body {
background-image: url("img_tree.png");
background-repeat: no-repeat;  
background-position: top right;
}
```
Add an external style sheet with the URL: "mystyle.css".
```
<head>
<link rel="stylesheet" href="mystyle.css">
</head>
```
Set the page's background color to red.
```
body {  
background-color:
 red;
}
```
Set the page's background color to red, by using an inline style.
```
<body style="background-color: red">
```

## Axes
Let’s see how the orientation of items within a flex container can be controlled using the flex-direction property.

### Lesson Overview
This section contains a general overview of topics that you will learn in this lesson.

You’ll learn about the 2 “axes” of a flex container.
You’ll learn how to change those axes to arrange your content in columns instead of rows.
The most confusing thing about flexbox is that it can work either horizontally or vertically, and some rules change a bit depending on which direction you are working with.

The default direction for a flex container is horizontal, or row, but you can change the direction to vertical, or column. The direction can be specified in CSS like so:

.flex-container {
  flex-direction: column;
}
### Axes
No matter which direction you’re using, you need to think of your flex-containers as having 2 axes: the main axis and the cross axis. It is the direction of these axes that changes when the flex-direction is changed. In most circumstances, flex-direction: row puts the main axis horizontal (left-to-right), and column puts the main axis vertical (top-to-bottom).

In other words, in our very first example, we put display: flex on a div and it arranged its children horizontally. This is a demonstration of flex-direction: row, the default setting. The following example is very similar. If you uncomment the line that says flex-direction: column, those divs will stack vertically.

One thing to note is that in this example, flex-direction: column would not work as expected if we used the shorthand flex: 1. Try it out now (i.e. go change the flex value on the flex: 1 1 auto; line). Can you figure out why it does not work if flex: 1 is used? The divs collapse, even though they clearly have a height defined there.

The reason for this is that the flex shorthand expands flex-basis to 0, which means that all flex-growing and flex-shrinking would begin their calculations from 0. Empty divs by default have 0 height, so for our flex items to fill up the height of their container, they don’t actually need to have any height at all.

The example above fixed this by specifying flex: 1 1 auto, telling the flex items to default to their given height. We could also have fixed it by putting a height on the parent .flex-container, or by using flex-grow: 1 instead of the shorthand.

Another detail to notice: when we changed the flex-direction to column, flex-basis refers to height instead of width. Given the context this may be obvious, but it’s something to be aware of.

We’ve strayed from the point slightly… We were talking about flex-direction and axes. To bring it back home, the default behavior is flex-direction: row which arranges things horizontally. The reason this often works well without changing other details in the CSS is because block-level elements default to the full width of their parent. Changing things to vertical using flex-direction: column adds complexity because block-level elements default to the height of their content, and in this case there is no content.

There are situations where the behavior of flex-direction could change if you are using a language that is written top-to-bottom or right-to-left, but you should save worrying about that until you are ready to start making a website in Arabic or Hebrew.

For an interactive demo of how axes work with flexbox, check out this Scrim:

### Knowledge Check
This section contains questions for you to check your understanding of this lesson on your own. If you’re having trouble answering a question, click it and review the material it links to.

How do you make flex items arrange themselves vertically instead of horizontally?
https://www.theodinproject.com/lessons/foundations-axes#flex-vertical

In a column flex-container, what does flex-basis refer to?
https://www.theodinproject.com/lessons/foundations-axes#column-flex-basis
flex-direction: column, flex-basis refers to height.

In a row flex-container, what does flex-basis refer to?
https://www.theodinproject.com/lessons/foundations-axes#row-flex-basis
flex-direction: row, flex-basis refers to width.

Why do the previous two questions have different answers?
https://www.theodinproject.com/lessons/foundations-axes#flex-axes
The main axis shifts from horizontal to vertical between row and column basis.

### Additional Resources
This section contains helpful links to related content. It isn’t required, so consider it supplemental.

This flexbox visual cheatsheet has some useful references to flex and its properties.
https://flexbox.malven.co/
The Chrome Flexbox Inspector also visually provides this.

### Notes:
flex:1 is equivalent to flex: 1 1 0.
flex: auto; This is equivalent to flex: 1 1 auto.
flex: none; This is equivalent to flex: 0 0 auto.
flex-grow: 0 - the item will not expand to fill free space. 
flex-shrink: 1 - it will shrink just as all other items. 
flex-basis: auto - it will take up space defined by its own content.
flex: 1. Can you figure out why it does not work if flex: 1 is used? The divs collapse, even though they clearly have a height defined there.

One thing to note is that in this example, flex-direction: column would not work as expected if we used the shorthand flex: 1. Try it out now (i.e. go change the flex value on the flex: 1 1 auto; line). Can you figure out why it does not work if flex: 1 is used? The divs collapse, even though they clearly have a height defined there. The reason for this is that the flex shorthand expands flex-basis to 0, which means that all flex-growing and flex-shrinking would begin their calculations from 0. Empty divs by default have 0 height, so for our flex items to fill up the height of their container, they don’t actually need to have any height at all. The example above fixed this by specifying flex: 1 1 auto

## Alignment

### Introduction
So far everything we’ve touched with flexbox has used the rule flex: 1 on all flex items, which makes the items grow or shrink equally to fill all of the available space. Very often, however, this is not the desired effect. Flex is also very useful for arranging items that have a specific size.

### Lesson Overview
This section contains a general overview of topics that you will learn in this lesson.

You’ll learn how to align items inside a flex container both vertically and horizontally.

### Alignment
Let’s look at an example.

You should be able to predict what happens if you put flex: 1 on the .item by now. Give it a shot before we move on!

Adding flex: 1 to .item makes each of the items grow to fill the available space, but what if we wanted them to stay the same width, but distribute themselves differently inside the container? We can do this!

Remove flex: 1 from .item and add justify-content: space-between to .container. Doing so should give you something like this:

#### space between

justify-content aligns items across the main axis. There are a few values that you can use here. You’ll learn the rest of them in the reading assignments, but for now try changing it to center, which should center the boxes along the main axis.

To change the placement of items along the cross axis use align-items. Try getting the boxes to the center of the container by adding align-items: center to .container. The desired result looks like this:

#### centered

Because justify-content and align-items are based on the main and cross axis of your container, their behavior changes when you change the flex-direction of a flex-container. For example, when you change flex-direction to column, justify-content aligns vertically and align-items aligns horizontally. The most common behavior, however, is the default, i.e. justify-content aligns items horizontally (because the main axis defaults to horizontal), and align-items aligns them vertically. One of the biggest sticking points that beginners have with flexbox is confusion when this behavior changes.

Check out this Scrim for an interactive demo of how justify-content and its different properties behave:

This next Scrim covers the behavior of align-items, how to perfectly center an element on a page using flexbox and much more:

### Gap
One very useful feature of flex is the gap property. Setting gap on a flex container simply adds a specified space between flex items, similar to adding a margin to the items themselves. gap is a new property so it doesn’t show up in many resources yet, but it works reliably in all modern browsers, so it is safe to use and very handy! Adding gap: 8px to the centered example above produces the result below.

There’s more for you to learn in the reading below, but at this point you can surely see how immensely useful flexbox is. With just the properties we’ve already covered, you could already put together some impressive layouts!

Take your time going through the reading. There will be some review of the items we’ve already covered here, but it goes into more depth and touches on a few things that haven’t been mentioned yet. Don’t stress too much about trying to memorize every little detail yet; just code along with the examples and do your best to internalize everything that is possible with flexbox. You’ll have to reach for these resources again once you get to the practice exercises, but that’s perfectly acceptable. The more you use this stuff the better it will stick in your mind… and you will be using it constantly. Have fun!

### Assignment
#### This beautiful Interactive Guide to Flexbox covers everything you need to know. It will help reinforce concepts we’ve already touched on with some really fun and creative examples. Spend some time here, some of it should be review at this point, but the foundations here are important!
https://www.joshwcomeau.com/css/interactive-guide-to-flexbox/

We can change how children are distributed along the primary axis using the justify-content property:
When it comes to the primary axis, we don't generally think in terms of aligning a single child. Instead, it's all about the distribution of the group.
We can bunch all the items up in a particular spot (with flex-start, center, and flex-end), or we can spread them apart (with space-between, space-around, and space-evenly).
For the cross axis, things are a bit different. We use the align-items property:
It's interesting… With align-items, we have some of the same options as justify-content, but there isn't a perfect overlap.

justify-content (main axis)
space-between
space-around
space-evenly

align-items (cross-axis)
stretch
baseline

both (main and cross axis)
flex-start
center
flex-end

Unlike justify-content and align-items, align-self is applied to the child element, not the container. It allows us to change the alignment of a specific child along the cross axis:

align-self has all the same values as align-items. In fact, they change the exact same thing. align-items is syntactic sugar, a convenient shorthand that automatically sets the alignment on all the children at once.

When we're talking about alignment in the cross axis, each item can do whatever it wants. In the primary axis, though, we can only think about how to distribute the group.
justify — to position something along the primary axis.
align — to position something along the cross axis.
content — a group of “stuff” that can be distributed.
items — single items that can be positioned individually.

We have justify-content to control the distribution of the group along the primary axis, and we have align-items to position each item individually along the cross axis. These are the two main properties we use to manage layout with Flexbox.

flex-basis
To put it simply: In a Flex row, flex-basis does the same thing as width. In a Flex column, flex-basis does the same thing as height.
flex-basis is more of a suggestion than a hard constraint.

Wrapping
So far, all of our items have sat side-by-side, in a single row/column. The flex-wrap property allows us to change that.

When we set flex-wrap: wrap, items won't shrink below their hypothetical size. At least, not when wrapping onto the next row/column is an option!df

With flex-wrap: wrap, we no longer have a single primary axis line that can skewer each item. Effectively, each row acts as its own mini flex container.

#### Typical use cases of Flexbox is an MDN article that covers some more practical tips. Don’t skip the interactive sections! Playing around with this stuff is how you learn it!
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Typical_Use_Cases_of_Flexbox

 Flex-basis of 0 allowing all of the space to be distributed evenly.

#### The CSS Tricks “Guide to Flexbox” is a classic. There isn’t any new information for you here, but the images and examples are super helpful. This one is a great cheat sheet that you’ll probably return to often. (Keep it handy for the practice exercises!)
https://css-tricks.com/snippets/css/a-guide-to-flexbox/


defines a flex container; inline or block depending on the given value, and enables flex context for all its direct children.
  display: flex; /* or inline-flex */

the order property controls the order in which they appear in the flex container.
.item {
  order: 5; /* default is 0 */

Think of flex items as primarily laying out in horizontal rows or vertical columns.
.container {
  flex-direction: row | row-reverse | column | column-reverse;
}

Go back to our CSS exercises repository (don’t forget that the instructions are in the README). Do the exercises in the ‘flex’ directory in the order that they are listed. It may take you a while to get through all of them, and the difficulty ramps up as you progress. Stick with it! If you can get through all of them, then you will be in really good shape moving forward.
https://github.com/TheOdinProject/css-exercises
01-flex-center
02-flex-header
03-flex-header-2
04-flex-information
05-flex-modal
06-flex-layout
07-flex-layout-2

### Knowledge Check
This section contains questions for you to check your understanding of this lesson on your own. If you’re having trouble answering a question, click it and review the material it links to.

What is the difference between justify-content and align-items?
How do you use flexbox to completely center a div inside a flex container?
What’s the difference between justify-content: space-between and justify-content: space-around?
Additional Resources
This section contains helpful links to related content. It isn’t required, so consider it supplemental.

Flexbox Froggy is a funny little game for practicing moving things around with flexbox.
https://flexboxfroggy.com/

Flexbox Zombies is another gamified take on flexbox. Free, but requires an account.
https://mastery.games/flexboxzombies/

The Basic Concepts of Flexbox article on MDN is another good starting point. There are helpful examples and interactive sections.
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox

Aligning Items in a Flex Container goes into more depth on the topic of axes and align-items vs justify-content.
This Flexbox Tutorial from freecodecamp is another decent resource.
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container

Flexbox Crash Course is a nice resource by Traversy Media.
https://www.youtube.com/watch?v=3YW65K6LcIA

```
a {
  text-decoration: none; /* removes underline */
  color: inherit; /* inherit color from parent */
}

ul {
  display: flex;
  margin-top: 0;
  padding-left: 0;
  list-style: none; /* remove dots */
}
```

Background properties do not inherit, but the parent element's background will shine through by default because of the initial 'transparent' value on 'background-color'.

```
ul {
  height: 100%;
}

li {
  display: flex;
  justify-content: center;
  /* align-self: center;    <---- REMOVE */
  align-items: center;   /* <---- NEW    */
}
```

The align-self property applies to flex items. Except your li is not a flex item because its parent – the ul – does not have display: flex or display: inline-flex applied.

Therefore, the ul is not a flex container, the li is not a flex item, and align-self has no effect.

The align-items property is similar to align-self, except it applies to flex containers.

Since the li is a flex container, align-items can be used to vertically center the child elements.

```
#container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 200px;
}
 ```

justify-content aligns flex items along the main axis.

align-items aligns flex items along the cross axis, which is always perpendicular to the main axis.

Depending on the flex-direction, the main axis may be horizontal or vertical.

Since flex-direction:column means the main axis is vertical, you need to use justify-content not align-items to center the flex items.

## Project: Landing Page

see:
C:\Code\odin\foundations-course\css-exercises\landing-page\
C:\Code\odin\foundations-course\css-exercises\landing-page\index.html
C:\Code\odin\foundations-course\css-exercises\landing-page\style.css
