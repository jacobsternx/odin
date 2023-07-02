Foundations Course

Overview
This is where it all begins! A hands-on introduction to all of the essential tools you'll need to build real, working websites. You'll learn what web developers actually do – the foundations you'll need for later courses.

# 01 Introduction
## How This Course Will Work

## Introduction to Web Development

## Motivation and Mindset

## Asking For Help

Always Provide Your Code and the Surrounding Context

The XY problem is asking about your attempted solution rather than your actual problem. This leads to enormous amounts of wasted time and energy, both on the part of people asking for help, and on the part of those providing help.

    User wants to do X.
    User doesn't know how to do X, but thinks they can fumble their way to a solution if they can just manage to do Y.
    User doesn't know how to do Y either.
    User asks for help with Y.

If your question is not on-topic for Stack Overflow, it may be on topic for another Stack Exchange site. If your question would be of interest to…

    Computer enthusiasts and power users, ask on Super User
    Professional system and network administrators, ask on Server Fault
    Operating and managing your own website, including questions about SEO, domain names, and web/email hosting, ask on Webmasters
    Users of Apple hardware, software, services, and associated products, ask on Ask Different
    Users of Linux, FreeBSD, and other Unix-like operating systems, ask on Unix & Linux
    Database administrators and professionals, ask on Database Administrators Stack Exchange
    Statisticians, data analysts, and data miners, ask on Cross Validated 
	
	Identifying Help Vampires

Identifying Help Vampires can be tricky, because they look like any ordinary person. But by closely observing an individual’s behavior using this handy checklist, you too can identify Help Vampires in the field:

    Does he (repeatedly) ask the same, tired questions others ask?
    Does he clearly lack the ability or inclination to ask the almighty Google?
    Does he refuse to take the time to ask coherent, specific questions?
    Does he think helping him must be the high point of your day?
    Does he get offensive, as if you need to prove to him why he should use Ruby on Rails?
    Is he obviously just waiting for some poor, well-intentioned person to do all his thinking for him?
    Can you tell he really isn’t interested in having his question answered, so much as getting someone else to do his work?

Always try these avenues first:

    Keep troubleshooting. Often we learn that it’s easier to give up and ask for help rather than persisting 10 minutes. 
    Google, of course. Google partial error messages, add software names to your queries, and generally try at least 3 or 4 searches before you give it up as hopeless.
    Docs. Sometimes they seem impenetrable, but give it a whack. 
    Ask your question—but phrase it differently. 

When you do ask a question, try to provide as much background detail as possible. Ask yourself these questions first, so that others don’t have to:

    What version of the software are you running?
    What’s your operating system?
    What are you trying to do that won’t work?
    Is the problem uniform or erratic?
    What’s the error message?
    When did it arise?
    What don’t you “get”?
    Can you provide sample code, ideally with error line #s?

## Join the Odin Community

# 02 Prerequisites
## Computer Basics

## How Does the Web Work?

## Installation Overview

## Installations

## Text Editors

## Command Line Basics

## Setting up Git

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

# 03 Git Basics
## Introduction to Git

## Git Basics

Changing the default message editor is a good idea in case you accidentally omit the flag, unless you prefer using Vim. There is no downside to changing it, because you will have the option to write your commit messages in the terminal or in the comfort of VS Code.

The following command will set this configuration. Type (or copy & paste) this command into your terminal and hit Enter.

git config --global core.editor "code --wait"

With that done, you can now choose to use either git commit -m <your message here> or git commit to type your message with Visual Studio Code!

# 04 HTML Foundations
## Introduction to HTML and CSS

## Elements and Tags

## HTML Boilerplate

type ! in blank vs-code html file:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>

The doctype’s purpose is to tell the browser what version of HTML it should use to render the document.
The lang attribute specifies the language of the text content in that element and is mainly used for improving accessibility
The <head> element is where we put important meta-information about our webpages 
The meta tag for the charset encoding in the head element: <meta charset="utf-8"> ensures special characters display correctly.
If we didn’t include a title element, the webpage’s title would default to its file name.

## Working with Text

Paragraphs: <p></p>
Headings: <h#></h#>, 1-6
Bold text: <strong></strong>
Italicized text: <em></em>, emphasis
Nesting Elements is indent any elements that are within other elements, creating a parent and child relationship between them.
Elements at the same level of nesting are considered to be siblings.
Relationship among html elements: Newlines compressed into single space.
Html comments: <!-- ... -->
CSS comments: // and /* ... */
Unordered lists: <ul><li></li></ul>, bullets
Ordered lists: <ol><li></li></ol>, numbers

Create folder odin-links-and-images with index.html to practice (I may've used another file.)
Relative and absolute links and images
Anchor to create links: <a> text </a>
Absolute links: <a href="protocol://domain/path">text</a>
Relative links: <a href="pages/about.html">text</a>
Embedded Image links: <img src="images/image.jpg">, see alt text below
Singleton or void elements are self-closing: <br>, <img>, ...
Parent directories: ../
Every image element must also have an alt (alternative text) attribute, in case it cannot be loaded.
alt attribute: <img src="image.png" alt="Odin Project">
css inline: <h1 style="color: red; font-size: 40px;">text</h1>
hexadecimal colors: red = #FF0000, blue = #0000FF
<body style="background-color: #000; color: #FFFF;">
<html lang='en'>
<meta charset='UTF-8'>
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
    Back in the index.html file, add a link to the recipe page you just created. Example: Under the <h1>Odin Recipes</h1> heading, write out the link like so: <a href="recipes/recipename.html">Recipe Title</a>. The text of the link should again be the recipe name.

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

# 05 CSS Foundations
## Intro to CSS

The next step is to make that structure look good with some style, which is exactly what CSS is for.
Many CSS properties take "length" values, such as width, margin, padding, font-size, etc.

Length is a number followed by a length unit, such as 10px, 2em, etc.
Note: Whitespace cannot appear between the number and the unit. However, if the value is 0, the unit can be omitted.

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

<!-- Image Height and Width -->
By default, an <img> element’s height and width values will be the same as the actual image file’s height and width. If you wanted to adjust the size of the image without causing it to lose its proportions, you would use a value of “auto” for the height property and adjust the width value:

img {
  height: auto;
  width: 500px; 
}
For example, if an image’s original size was 500px height and 1000px width, using the above CSS would result in a height of 250px. It’s best to include both of these properties for <img> elements, even if you don’t plan on adjusting the values from the image file’s original ones. When these values aren’t included, if an image takes longer to load than the rest of the page contents, the image won’t take up any space on the page at first, but will suddenly cause a drastic shift of the other page contents once it does load in. Explicitly stating a height and width prevents this from happening, as space will be “reserved” on the page and will just appear as a blank space until the image loads.

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
<div class="main">
  <div class="list subsection"></div>
</div>

/* rule 1 */
.subsection {
  color: blue;
}
/* rule 2 */
.main .list {
  color: red;
}

In the example above, both rules are using only class selectors, but rule 2 is more specific because it is using more class selectors, so the color: red; declaration would take precedence.

Now, let’s change things a little bit:

<!-- index.html -->
<div class="main">
  <div class="list" id="subsection"></div>
</div>

/* rule 1 */
#subsection {
  color: blue;
}

/* rule 2 */
.main .list {
  color: red;
}

In the example above, despite rule 2 having more class selectors than ID selectors, rule 1 is more specific because ID beats class. In this case, the color: blue; declaration would take precedence.

/* rule 1 */
#subsection .list {
  background-color: yellow;
  color: blue;
}

/* rule 2 */
#subsection .main .list {
  color: red;
}

In this final example, both rules are using ID and class selectors, so neither rule is using a more specific selector than the other. The cascade then checks the amounts of each selector type. Both rules only have one ID selector, but rule 2 has more class selectors, so rule 2 has a higher specificity!

While the color: red declaration would take precedence, the background-color: yellow declaration would still be applied since there’s no conflicting declaration for it.
Not everything adds to specificity

When comparing selectors, you may come across special symbols for the universal selector (*) as well as combinators (+, ~, >, and an empty space). These symbols do not add any specificity in and of themselves.

/* rule 1 */
.class.second-class {
  font-size: 12px;
}

/* rule 2 */
.class .second-class {
  font-size: 24px;
}

Here both rule 1 and rule 2 have the same specificity. Rule 1 uses a chaining selector (no space) and rule 2 uses a descendant combinator (the empty space). But both rules have two classes and the combinator symbol itself does not add to the specificity.

/* rule 1 */
.class.second-class {
  font-size: 12px;
}

/* rule 2 */
.class > .second-class {
  font-size: 24px;
}

This example shows the same thing. Even though rule 2 is using a child combinator (>), this does not change the specificity value. Both rules still have two classes so they have the same specificity values.

/* rule 1 */
* {
  color: black;
}

/* rule 2 */
h1 {
  color: orange;
}

In this example, rule 2 would have higher specificity and the orange value would take precedence for this element. Rule 2 uses a type selector, which has the lowest specificity value. But rule 1 uses the universal selector (*) which has no specificity value.
Inheritance

Inheritance refers to certain CSS properties that, when applied to an element, are inherited by that element’s descendants, even if we don’t explicitly write a rule for those descendants. Typography based properties (color, font-size, font-family, etc.) are usually inherited, while most other properties aren’t.

The exception to this is when directly targeting an element, as this always beats inheritance:

<!-- index.html -->

<div id="parent">
  <div class="child"></div>
</div>

/* styles.css */

#parent {
  color: red;
}

.child {
  color: blue;
}

Despite the parent element having a higher specificity with an ID, the child element would have the color: blue style applied since that declaration directly targets it, while color: red from the parent is only inherited.
Rule Order

The final factor, the end of the line, the tie-breaker of the tie-breaker. Let’s say that after every other factor has been taken into account, there are still multiple conflicting rules targeting an element. How does the cascade determine which rule to apply?

Really simply, actually. Whichever rule was the last defined is the winner.

/* styles.css */

.alert {
  color: red;
}

.warning {
  color: yellow;
}

For an element that has both the alert and warning classes, the cascade would run through every other factor, including inheritance (none here) and specificity (neither rule is more specific than the other). Since the .warning rule was the last one defined, and no other factor was able to determine which rule to apply, it’s the one that gets applied to the element.

**Assignment

    Go back to our CSS exercises repository and finish the last exercise 06-cascade-fix.

    Remember the Recipe page you created as practice from the HTML Foundations section? Well, it’s rather plain looking, isn’t it? Let’s fix that by adding some CSS to it!

    How you actually style it is completely open, but you should use the external CSS method (for this practice and moving forward). You should also try to use several of the properties mentioned in the previous lesson (color, background color, typography properties, etc). Take some time to play around with the various properties to get a feel for what they do. For now, don’t worry at all about making it look good. This is just to practice and get used to writing CSS, not to make something to show off on your resume.

    We haven’t covered how to use a custom font for the font-family property yet, so for now take a look at CSS Fonts for a list of generic font families to use, and CSS Web Safe Fonts for a list of fonts that are web safe. Web safe means that these are fonts that are installed on basically every computer or device (but be sure to still include a generic font family as a fallback).

**Knowledge Check

This section contains questions for you to check your understanding of this lesson on your own. If you’re having trouble answering a question, click it and review the material it links to.

    Between a rule that uses one class selector and a rule that uses three type selectors, which rule has the higher specificity?

Additional Resources

This section contains helpful links to related content. It isn’t required, so consider it supplemental.

    The CSS Cascade is a great, interactive read that goes a little more in detail about other factors that affect what CSS rules actually end up being applied.
    Changing the Font Family describes a few different approaches to using custom fonts.
    CSS Specificity from W3Schools goes over how you can calculate the specificity of rules. This page mentions some selectors that we will go over in a later lesson, so don’t worry about what they are or how to use them right now.
    Mozilla CSS Properties Reference can be used to learn if a particular CSS property is inherited or not; simply look for the Inherited field inside the Formal Definition section. Here’s an example for the CSS color property.

Adding CSS to HTML

Okay, we went over quite a bit so far. The only thing left for now is to go over how to add all this CSS to our HTML. There are three methods to do so.
External CSS

External CSS is the most common method you will come across, and it involves creating a separate file for the CSS and linking it inside of an HTML’s opening and closing <head> tags with a self-closing <link> element:

<!-- index.html -->
<head>
  <link rel="stylesheet" href="styles.css">
</head>

/* styles.css */
div {
  color: white;
  background-color: black;
}

p {
  color: red;
}

First, we add a self-closing <link> element inside of the opening and closing <head> tags of the HTML file. The href attribute is the location of the CSS file, either an absolute URL or, what you’ll be utilizing, a URL relative to the location of the HTML file. In our example above, we are assuming both files are located in the same directory. The rel attribute is required, and it specifies the relationship between the HTML file and the linked file.

Then inside of the newly created styles.css file, we have the selector (the div and p), followed by a pair of opening and closing curly braces, which create a “declaration block”. Finally, we place any declarations inside of the declaration block. color: white; is one declaration, with color being the property and white being the value, and background-color: black; is another declaration.

A note on file names: styles.css is just what we went with as the file name here. You can name the file whatever you want as long as the file type is .css, though “style” or “styles” is most commonly used.

A couple of the pros to this method are:

    It keeps our HTML and CSS separated, which results in the HTML file being smaller and making things look cleaner.
    We only need to edit the CSS in one place, which is especially handy for websites with many pages that all share similar styles.

Internal CSS

Internal CSS (or embedded CSS) involves adding the CSS within the HTML file itself instead of creating a completely separate file. With the internal method, you place all the rules inside of a pair of opening and closing <style> tags, which are then placed inside of the opening and closing <head> tags of your HTML file. Since the styles are being placed directly inside of the <head> tags, we no longer need a <link> element that the external method requires.

Besides these differences, the syntax is exactly the same as the external method (selector, curly braces, declarations):

<head>
  <style>
    div {
      color: white;
      background-color: black;
    }

    p {
      color: red;
    }
  </style>
</head>
<body>...</body>

This method can be useful for adding unique styles to a single page of a website, but it doesn’t keep things separate like the external method, and depending on how many rules and declarations there are it can cause the HTML file to get pretty big.
Inline CSS

Inline CSS makes it possible to add styles directly to HTML elements, though this method isn’t as recommended:

<body>
  <div style="color: white; background-color: black;">...</div>
</body>

The first thing to note is that we don’t actually use any selectors here, since the styles are being added directly to the opening <div> tag itself. Next, we have the style= attribute, with its value within the pair of quotation marks being the declarations.

If you need to add a unique style for a single element, this method can work just fine. Generally, though, this isn’t exactly a recommended way for adding CSS to HTML for a few reasons:

    It can quickly become pretty messy once you start adding a lot of declarations to a single element, causing your HTML file to become unnecessarily bloated.
    If you want many elements to have the same style, you would have to copy + paste the same style to each individual element, causing lots of unnecessary repetition and more bloat.
    Any inline CSS will override the other two methods, which can cause unexpected results. (While we won’t dive into it here, this can actually be taken advantage of).

###Assignment

    Go to our CSS exercises repository, read the README, and only do the exercises in the foundations directory in the order they’re listed, starting with 01-css-methods and ending with 06-cascade-fix.

    Remember the Recipe page you created as practice from the previous lesson? Well, it’s rather plain looking, isn’t it? Let’s fix that by adding some CSS to it!

    How you actually style it is completely open, but you should use the external CSS method (for this practice and moving forward). You should also try to use several of the properties mentioned in the section above (color, background color, typography properties, etc). Take some time to play around with the various properties to get a feel for what they do. For now, don’t worry at all about making it look good. This is just to practice and get used to writing CSS, not to make something to show off on your resume, so feel free to go a little crazy for now.

    We haven’t covered how to use a custom font for the font-family property yet, so for now take a look at CSS Fonts for a list of generic font families to use, and CSS Web Safe Fonts for a list of fonts that are web safe. Web safe means that these are fonts that are installed on basically every computer or device (but be sure to still include a generic font family as a fallback).

###Knowledge Check

This section contains questions for you to check your understanding of this lesson on your own. If you’re having trouble answering a question, click it and review the material it links to.

**  What are the main differences between external, internal, and inline CSS?

inline: least maintainable, ugliest, highest selectability precedence.
internal: css in html header, so does not separate style from content.
external: most maintainable, separates style from content, best.

**  What is the syntax for class and ID selectors?

<!-- styles.css -->
#top {
    background-color: #ccc;
}
.intro {
    color: red;
}
/* index.html */
<div id="top">
<p class="intro">This is my recipe for chocolate</p>


** How would you apply a single rule to two different selectors?

div, p { color: #f00; }

In this context, a comma means "and," so this selector applies to all paragraph elements and all division elements. If the comma were missing, the selector would instead apply to all paragraph elements that are a child of a division. That is a different kind of selector, so the comma is important.

You can group any form of selector with any other selector. This example groups a class selector with an ID selector:

p.red, #sub { color: #f00; }

This style applies to any paragraph with the class attribute of red and any element (because the kind is not specified) with an ID attribute of sub.

You can group any number of selectors.

**  Given an element with an id of title and a class of primary, how would you use both attributes for a single rule?

#title, .primary { key:value }


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

Assignment
Go through the following sections of the official Chrome DevTools docs:
https://developers.google.com/web/tools/chrome-devtools

Overview: don’t navigate to any other pages linked here; just get familiar with what tools are available in the DevTools, rather than how to use all of them right now.
Open Chrome DevTools: similar to what we went over above, but with some nice extras.
https://developer.chrome.com/docs/devtools/open/
Get Started With Viewing And Changing The DOM: skip through any part that uses the JavaScript console.
https://developer.chrome.com/docs/devtools/dom/
View and change CSS: be sure to follow along with any interactive instructions!
Knowledge Check
This section contains questions for you to check your understanding of this lesson on your own.

How do you select a specific element on your page with your browser’s developer tools?
right click > inspect

What does a strikethrough in a CSS declaration mean in your browser’s developer tools?
value is being overridden

How do you change CSS in real time on specific elements of a web page with your browser’s developer tools?
Inspece > Elements > Style, then modify as desired

Additional Resources
This section contains helpful links to related content. It isn’t required, so consider it supplemental.

This article about how we can utilize css overview in the developer tools to check the colors, font styles, media-queries, etc. used on a particular webpage.
https://www.freecodecamp.org/news/how-to-use-css-overview-in-chrome-developer-tools/

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
* {
  border: 2px solid red;
}
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

Assignment
This video is a straightforward overview of the box model, padding and margin. Go ahead and watch this now; it informs everything else.
https://www.youtube.com/watch?v=rIO5326FgPE
Because the box model concept is so incredibly fundamental, let’s dig a bit deeper with this lesson from MDN. It covers the same material as the video above and will introduce you to inline boxes that we will explore in the next lesson. Pay close attention to the examples and take the time to experiment with their in-browser editor!
https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model
This CSS Tricks page has some further information about the margin property that you’ll find useful. Specifically, the sections about auto and margin collapsing contain things you’ll want to know.
https://css-tricks.com/almanac/properties/m/margin/
Knowledge Check
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

.box { <!-- standard box model, content-box -->
    height: 500px;
    width: 800px;
    border: 1px solid red;
    padding: 15px;
    margin: 25px;
}
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
.box {
  margin-top: 20px;
  margin-right: 10px;
  margin-bottom: 20px;
  margin-left: 10px;
}

Would you use margin or padding to create more space between 2 elements?
Margin

Would you use margin or padding to create more space between the contents of an element and its border?
Padding

Would you use margin or padding if you wanted two elements to overlap each other?
Margin

How do you set the alternative box model for all of your elements?
* {
    box-sizing: border-box;
}

How do you center an element horizontally?
p { 
  text-align: center;
}

Margin Collapse
In the box model margins between two different elements will collapse. This means that if two elements that are siblings in the HTML both have a margin they will collapse so that only the largest of the two margins is used between the elements. 

Remember comments in html: <!-- comment -->
Remember comments in css: /* comment */

## Block and Inline

# 06 Flexbox
## Introduction to Flexbox

## Growing and Shrinking

## Axes

## Alignment

## Project: Landing Page

# 07 JavaScript Basics
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

# 08 Conclusion
## Choose Your Path Forward
<<<<<<< HEAD:foundations/foundations-course.md
=======











>>>>>>> 70426037ef7581403bc81cf1b68ca56b1397388f:full-stack/odin-foundations-course.md
