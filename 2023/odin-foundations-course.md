Foundations Course

Overview
This is where it all begins! A hands-on introduction to all of the essential tools you'll need to build real, working websites. You'll learn what web developers actually do – the foundations you'll need for later courses.

# Introduction
## How this Course Will Work


## Introduction to Web Development


## Motivation and Mindset


## Asking For Help


## Join the Odin Community


# Prerequisites
## Computer Basics


## How Does the Web Work?


## Installation Overview


## Installations


## Text Editors


## Command Line Basics


## Setting Up Git

GitHub Email Settings

Step 2.2: Setup Git

git config --global user.email "123456789+odin@users.noreply.github.com" 
(use quotation marks)

To enable colorful output with git, type
git config --global color.ui auto

You’ll also likely want to set your default branch reconciliation behavior to merging. 
git config --global pull.rebase false

To verify working properly, verify output matches your name and email address.
git config --get user.name
git config --get user.email

macOS Users: Run these two commands to tell git to ignore .DS_Store files, which are automatically created when you use Finder to look into a folder.
echo .DS_Store >> ~/.gitignore_global
git config --global core.excludesfile ~/.gitignore_global

Step 2.3: Create an SSH Key

If your email address is odin@theodinproject.com type 
ssh-keygen -t ed25519 -C odin@theodinproject.com.
    When it prompts you for a location to save the generated key, just push Enter.
    Next, it will ask you for a password; enter one if you wish, but it’s not required.

Step 2.4: Link Your SSH Key with GitHub
Log into GitHub and click on your profile picture in the top right corner. Then, click on Settings in the drop-down menu. Next, on the left-hand side, click SSH and GPG keys. Then, click the green button in the top right corner that says New SSH Key. Name your key something that is descriptive enough for you to remember where it came from. Leave this window open while you do the next steps. Now you need to copy your public SSH key. To do this, we’re going to use a command called cat to read the file to the console. (Note that the .pub file extension is important in this case.)
cat ~/.ssh/id_ed25519.pub

Highlight and copy the output, which starts with ssh-ed25519 and ends with your email address. Now, go back to GitHub in your browser window and paste the key you copied into the key field. Keep the key type as Authentication Key and then, click Add SSH key.You’ve successfully added your SSH key!

# Git Basics
## Introduction to Git


## Git Basics


# HTML Foundations
## Introduction to HTML and CSS


# Elements and Tags

## HTML Boilerplate


## Working with Text

## Paragraphs: <p></p>

Headings: <h#></h#>
Bold text: <strong></strong>
Italicized text: <em></em>
Relationship among html elements: Newlines compressed into single space.
Html comments: // and /* ... */
Unordered lists: <ul><li></li></ul>
Ordered lists: <ol><li></li></ol>

Relative and absolute links and images
Anchor: <a> text </a>
Absolute links: <a href="protocol://domain/path">text</a>
Relative links: <a href="pages/about.html">text</a>
Image links: <img src="images/image.jpg">
Singleton or void elements are self-closing: <br>, <img>, ...
Parent directories: ../
alt attribute: <img src="image.png" alt="Odin Project">
css inline: <h1 style="color: red; font-size: 40px;">text</h1>
hexadecimal colors: red = #FF0000, blue = #0000FF
<body style="background-color: #000; color: #FFFF;">
<html lang='en'>
<meta charset='UTF-8'>
3 reserved characters in HTML: &lt; &gt; and &amp;


## Lists


## Links and Images


## Commit Messages


## Project: Recipes


# CSS Foundations
## CSS Foundations
div.bold-text  font-weight: 700; }

Universal Selector
* {	color: purple; } //applies to all elems

Type Selectors
Type (element) selector will select all elements of the given element type:
div { color: white} //applies to all divs

Class selectors select all elements with the given class, HTML element attribute.
<div class="alert-text"> Text </div>
.alert-text { color: red; } //applies to all alert-text class elems
Note syntax for class selectors: a period followed by value of class attribute. 
You can also add multiple classes to a single element as a space-separated list, such as class="alert-text severe-alert". 

ID Selectors
Similar to class selectors, select an element with given ID, another HTML attribute:
<div id="title">My Awesome 90's Page</div>
/* styles.css */
#title {  background-color: red; }
Instead of a period, use a hashtag followed by the value of the ID attribute. 
The main difference between classes and IDs is that an element can only have one ID

Grouping Selector
Two groups of elements share some of their style declarations.
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

Both our .read and .unread selectors share the color: white; and background-color: black; declarations, but otherwise have several of their own unique declarations. To reduce repetition, can group these two selectors together as a comma-separated list:

.read,
.unread {
  color: white;
  background-color: black;}

.read {  /* several unique declarations */}

.unread {  /* several unique declarations */}

Chaining Selectors
Can also chain selectors as a list without any separation:

<div>
  <div class="subsection header">Latest Posts</div>
  <p class="subsection preview">This is where a preview for a post might go.</p>
</div>

Two elements with the subsection class that have some sort of unique styles. If we only want to apply a separate rule to the element that also has header as a second class, we could chain both the class selectors together in our CSS like so:
.subsection.header { color: red; }
Selects any element that has both the subsection and header classes. Notice how there isn’t any space between the .subsection and .header class selectors. This syntax basically works for chaining any combination of selectors, except for chaining more than one type selector.

This can also be used to chain a class and an ID, as shown below:
<div>
  <div class="subsection header">Latest Posts</div>
  <p class="subsection" id="preview">This is where a preview for a post might go.</p>
</div>

You can take the two elements above and combine them with the following:
.subsection.header { color: red; }
.subsection#preview { color: blue; }

In general, you can’t chain more than one type selector since an element can’t be two different types at once. For example, chaining two type selectors like div and p would give us the selector divp, which wouldn’t work since the selector would try to find a literal <divp> element, which doesn’t exist.

Descendant Combinator

Combinators allow us to combine multiple selectors differently than either grouping or chaining them, as they show a relationship between the selectors. There are four types of combinators in total, but for right now we’re going to only show you the descendant combinator, which is represented in CSS by a single space between selectors. A descendant combinator will only cause elements that match the last selector to be selected if they also have an ancestor (parent, grandparent, etc) that matches the previous selector.

So something like .ancestor .child would select an element with the class child if it has an ancestor with the class ancestor. Another way to think of it is child will only be selected if it is nested inside of ancestor, no matter how deep. Take a quick look at the example below and see if you can tell which elements would be selected based on the CSS rule provided:

<div class="ancestor"> <!-- A -->
  <div class="contents"> <!-- B -->
    <div class="contents"> <!-- C -->
    </div>
  </div>
</div>

<div class="contents"></div> <!-- D -->

.ancestor .contents {  /* some declarations */ }

In the above example, the first two elements with the contents class (B and C) would be selected, but that last element (D) won’t be. 
There’s no limit to how many combinators you can add to a rule, so .one .two .three .four would be totally valid. This would just select an element that has a class of four if it has an ancestor with a class of three, and if that ancestor has its own ancestor with a class of two, and so on. You generally want to avoid trying to select elements that need this level of nesting, though, as it can get pretty confusing and long, and it can cause issues when it comes to specificity.

Color and Background-Color
The color property sets an element’s text color, while background-color sets, well, the background color of an element. Both of these properties can accept one of several kinds of values. A common one is a keyword, such as an actual color name like red or the transparent keyword. They also accept HEX, RGB, and HSL values, which you may be familiar with if you’ve ever used a photoshop program or a site where you could customize your profile colors.

Following shows using colors and transparency, or alpha channel, or opacity.
#p1 {background-color: #ff0000;}   /* HEX red */
#p1a {background-color: #ff000080;}   /* HEX red transparency */
#p2 {background-color: rgb(0, 255, 0);}   /* RGB green */
#p2a {background-color: rgba(0, 255, 0, 0.3);}   /* RGB green with opacity */
#p3 {background-color: hsl(120, 100%, 50%);}   /* HSL green */
#p3a {background-color: hsla(120, 100%, 50%, 0.3);}   /*HSL green with opacity */

Typography Basics and Text-Align
font-family: "DejaVu Sans", sans-serif;
font-size: 22px
font-weight: 700
text-align: center

Image Height and Width
By default, an <img> element’s height and width values will be the same as the actual image file’s height and width. If you wanted to adjust the size of the image without causing it to lose its proportions, you would use a value of “auto” for the height property and adjust the width value:

img {
  height: auto;
  width: 500px; }
For example, if an image’s original size was 500px height and 1000px width, using the above CSS would result in a height of 250px. It’s best to include both of these properties for <img> elements, even if you don’t plan on adjusting the values from the image file’s original ones. When these values aren’t included, if an image takes longer to load than the rest of the page contents, the image won’t take up any space on the page at first, but will suddenly cause a drastic shift of the other page contents once it does load in. Explicitly stating a height and width prevents this from happening, as space will be “reserved” on the page and will just appear as a blank space until the image loads.

### The Cascade of CSS
Sometimes we may have rules that conflict with one another, and we end up with some unexpected results.

Specificity

A CSS declaration that is more specific will take precedence over less specific ones. Inline styles, which we will go over more in the Adding CSS to HTML section towards the end of the lesson, have the highest specificity compared to selectors, while each type of selector has its own specificity level that contributes to how specific a declaration is. Other selectors contribute to specificity, but we’re focusing only on the ones mentioned: 
id (most specific)
class 
type (lease specific)
Specificity will only be taken into account when an element has multiple, conflicting declarations targeting it. When no declaration has a selector with a higher specificity, a larger amount of a single selector will beat a smaller amount of that same selector.


## Inspecting HTML and CSS

## The Box Model


## Block and Inline


# Flexbox
## Introduction to Flexbox


## Growing and Shrinking


## Axes


## Alignment


## Project: Landing Page


# JavaScript Basics
## Fundamentals Part 1


## Fundamentals Part 2


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


The Back End
## Introduction to the Back End


## Introduction to Frameworks


# Conclusion
## Choose Your Path Forward




























