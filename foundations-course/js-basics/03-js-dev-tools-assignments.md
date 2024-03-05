## Foundations
## JavaScript Basics
## JavaScript Developer Tools
View and change CSS 
[View and change CSS](https://developer.chrome.com/docs/devtools/css/)

Complete these interactive tutorials to learn the basics of viewing and changing a page's CSS using Chrome DevTools.

View an element's CSS
Right-click the Inspect me! text below and select Inspect. The Elements panel of DevTools opens.

Inspect me!
Observe the Inspect me! element highlighted blue in the DOM Tree.

Highlighted element.

In the DOM Tree, find the value of the data-message attribute for the Inspect me! element.

Enter the attribute's value in the text box below.

In the Elements > Styles pane, find the aloha class rule.

The Styles pane lists the CSS rules being applied to whatever element is currently selected in the DOM Tree, which should still be the Inspect me! element.

The aloha class is declaring a value for padding. Enter this value and its unit without spaces in the text box below.

If you'd like to dock your DevTools window to the right of your viewport, like on the screenshot in step one, see Change DevTools placement.

Add a CSS declaration to an element
Use the Styles pane when you want to change or add CSS declarations to an element.

Right-click the Add a background color to me! text below and select Inspect.

Add a background color to me!
Click element.style near the top of the Styles pane.

Type background-color and press Enter.

Type honeydew and press Enter. In the DOM tree, you can see that an inline style declaration was applied to the element.

Adding a CSS declaration to the element via the Styles pane.

Add a CSS class to an element
Use the Styles pane to see how an element looks when a CSS class is applied to or removed from an element.

Right-click the Add a class to me! element below and select Inspect.

Add a class to me!
Click .cls. DevTools reveals a text box where you can add classes to the selected element.

Type color_me in the Add new class text box and then press Enter. A checkbox appears below the Add new class text box, where you can toggle the class on and off. If the Add a class to me! element had any other classes applied to it, you'd also be able to toggle them from here.

Applying the color_me class to the element.

Add a pseudostate to a class
Use the Styles pane to permanently apply a CSS pseudostate to an element. DevTools supports :active, :focus, :hover, :visited, and others.

Hover over the Hover over me! text below. The background color changes.

Hover over me!
Right-click the Hover over me! text and select Inspect.

In the Styles pane, click :hov.

Check the :hover checkbox. The background color changes like before, even though you're not actually hovering over the element.

Toggling the hover pseudostate on an element.

Change the dimensions of an element
Use the Box Model interactive diagram in the Styles pane to change the width, height, padding, margin, or border length of an element.

Right-click the Change my margin! element below and select Inspect.

Change my margin!
To see the Box Model, click the Show sidebar. Show sidebar button in the action bar on the Styles pane. The Show sidebar button.

In the Box Model diagram in the Styles pane, hover over padding. The element's padding is highlighted in the viewport. Element's padding.

Double-click the left margin in the Box Model. The element currently doesn't have margins, so the left-margin has a value of -.

Type 100 and press Enter. Changing the element's left-margin,

The Box Model defaults to pixels, but it also accepts other values, such as 25%, or 10vw.

Key point: Alternatively, in rule declarations in the Styles pane, you can change length properties and their units with your pointer.
Was this helpful?

Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License, and code samples are licensed under the Apache 2.0 License. For details, see the Google Developers Site Policies. Java is a registered trademark of Oracle and/or its affiliates.

== END DevTools - View and change CSS ==

## Foundations
## JavaScript Basics
## JavaScript Developer Tools
CSS features reference 
[CSS features reference](https://developer.chrome.com/docs/devtools/css/reference/)

Discover new workflows in this comprehensive reference of Chrome DevTools features related to viewing and changing CSS.

See View and change CSS to learn the basics.

Select an element
The Elements panel of DevTools lets you view or change the CSS of one element at a time.

An example of a selected element.

On the screenshot, the h1 element that's highlighted blue in the DOM Tree is the selected element. To the right, the element's styles are shown in the Styles pane. To the left, the element is highlighted in the viewport, but only because the mouse is hovering over it in the DOM Tree.

See View an element's CSS for a tutorial.

There are many ways to select an element:

In your viewport, right-click the element and select Inspect.
In DevTools, click Select an element Select an element or press Command+Shift+C (Mac) or Control+Shift+C (Windows, Linux), and then click the element in the viewport.
In DevTools, click the element in the DOM Tree.
In DevTools, run a query like document.querySelector('p') in the Console, right-click the result, and then select Reveal in Elements panel.
View CSS
Use the Elements > Styles and Computed panes to view CSS rules and diagnose CSS issues.

Navigate with links
The Styles pane displays links in various places to various other places, including but not limited to:

Next to CSS rules, to style sheets and CSS sources. Such links open the Sources panel. If the style sheet is minified, see Make a minified file readable.
In the Inherited from ... sections, to parent elements.
In var() calls, to custom property declarations.
In animation shorthand properties, to @keyframes.
Learn more links in documentation tooltips.
And more.
Here are some of them highlighted:

Various links highlighted.

Links may be styled differently. If you're not sure if something is a link, try clicking it to find out.

View tooltips with CSS documentation, specificity, and custom property values
Elements > Styles shows tooltips with useful information when you hover over specific elements.

View CSS documentation
To see a tooltip with a short CSS description, hover over the property name in the Styles pane.

Note: DevTools pulls the descriptions for tooltips from VS Code Custom Data.
The tooltip with documentation on a CSS property.

Click Learn more to go to an MDN CSS Reference on this property.

To turn the tooltips off, check Checkbox. Don't show.

To turn them back on, check Settings. Settings > Preferences > Elements > Checkbox. Show CSS documentation tooltip.

View selector specificity
Hover over a selector to see a tooltip with its specificity weight.

The tooltip with specificity weight of a matched selector.

View the values of custom properties
Hover over a --custom-property to see its value in a tooltip.

The value of a custom property in a tooltip.

View invalid, overridden, inactive, and other CSS
The Styles pane recognizes many kinds of CSS issues and highlights them in different ways.

See Understand CSS in the Styles pane.

View only the CSS that's actually applied to an element
The Styles pane shows you all of the rules that apply to an element, including declarations that have been overridden. When you're not interested in overridden declarations, use the Computed tab to view only the CSS that's actually being applied to an element.

Select an element.
Go to the Computed pane in the Elements panel.
The Computed tab.

Check the Show All checkbox to see all properties.

See Understand CSS in the Computed pane.

View CSS properties in alphabetical order
Use the Computed pane. See View only the CSS that's actually applied to an element.

View inherited CSS properties
Check the Show All checkbox in the Computed pane. See View only the CSS that's actually applied to an element.

Alternatively, scroll the Styles pane and find sections named Inherited from <element_name>.

View the Inherited from... section of the Styles pane.

View CSS at-rules
At-rules are CSS statements that let you control CSS behavior. Elements > Styles shows the following at-rules in dedicated sections:

@property
@supports
@scope
@font-palette-values
View @property at-rules
The @property CSS at-rule lets you define CSS custom properties explicitly and register them in a style sheet without running any JavaScript.

Hover over the name of such property in the Styles pane, to see a tooltip with the property's value, descriptors, and a link to its registration in the collapsible @property section at the bottom of the Styles pane.

To edit an @property rule, double-click its name or value.

View @supports at-rules
The Styles pane shows you the @supports CSS at-rules if they are applied to an element. For example, inspect the following element:

View @supports at-rules.

If your browser supports the lab() function, the element is green, otherwise it's purple.

Note: At the time of writing, only Safari supports the CIELAB color space.
View @scope at-rules
The Styles pane shows you CSS @scope at-rules if they are applied to an element.

The new @scope at-rules are a part of the CSS Cascading and Inheritance Level 6 specification. These rules allow you to scope CSS styles, in other words, explicitly apply styles to specific elements.

Note: The @scope at-rule feature is experimental. To test it, enable the Experimental Web Platform features flag in chrome://flags/#enable-experimental-web-platform-features. Otherwise, the next preview doesn't work.
View the @scope rule in the following preview:

Inspect the text on the card in the preview.
On the Styles pane, find the @scope rule.
The @scope rule.

In this example, the @scope rule overrides the global CSS background-color declaration for all <p> elements inside elements with a card class.

To edit the @scope rule, double-click it.

View @font-palette-values at-rules
The @font-palette-values CSS at-rule lets you customize the default values of the font-palette property. Elements > Styles shows this at-rule in a dedicated section.

View the @font-palette-values section in the next preview:

Inspect the second line of text in the preview.
In Styles, find the @font-palette-values section.
The @font-palette-values rule.

In this example, the --New font palette values override the default ones of the colored font.

To edit your custom values, double-click them.

View an element's box model
To view the box model of an element, go to the Styles pane and click the Show sidebar. Show sidebar button in the action bar.

he Box Model diagram.

To change a value, double-click on it.

Search and filter an element's CSS
Use the Filter box on the Styles and Computed panes to search for specific CSS properties or values.

Filtering the Styles pane.

To also search inherited properties in the Computed pane, check the Show All checkbox.

Filtering inherited properties in the Computed pane.

To navigate the Computed pane, group the filtered properties in collapsible categories by checking Group.

Grouping filtered properties.

Toggle a pseudo-class
To toggle a pseudo-class like :active, :focus, :hover, :visited, :focus-within or focus-visible:

Select an element.
On the Elements panel, go to the Styles pane.
Click :hov.
Check the pseudo-class that you want to enable.
Toggling the hover pseudostate on an element.

In the viewport, you can see that DevTools applies the background-color declaration to the element, even though the element is not actually hovered over.

See Add a pseudostate to a class for an interactive tutorial.

View inherited highlight pseudo-elements
Pseudo-elements let you style specific parts of elements. Highlight pseudo-elements are document portions with a "selected" status and they are styled as "highlighted" to indicate this status to the user. For example, such pseudo-elements are ::selection, ::spelling-error, ::grammar-error, and ::highlight.

As mentioned in the specification, when multiple styles conflict, cascade determines the winning style.

Note: To enable this feature, run Chrome with the --enable-blink-features=HighlightInheritance flag.
To better understand the inheritance and priority of the rules, you can view the inherited highlight pseudo-elements:

Inspect the text below.

I inherited the style of my parent's highlight pseudo-element. Select me!
Select a portion of the text above.

In the Styles pane, scroll down to find the Inherited from ::selection pseudo of... section.

View the Inherited section of the Styles pane.

View cascade layers
Cascade layers enable more explicit control of your CSS files to prevent style-specificity conflicts. This is useful for large codebases, design systems, and when managing third-party styles in applications.

To view cascade layers, inspect the next element and open Elements > Styles.

In the Styles pane, view the 3 cascade layers and their styles: page, component and base.

Cascade layers.

To view the layer order, click the layer name or the Toggle layers. Toggle CSS layers view button.

The page layer has the highest specificity, therefore the element's background is green.

View a page in print mode
To view a page in print mode:

Open the Command Menu.
Start typing Rendering and select Show Rendering.
For the Emulate CSS Media drop-down, select print.
View used and unused CSS with the Coverage tab
The Coverage tab shows you what CSS a page actually uses.

Press Command+Shift+P (Mac) or Control+Shift+P (Windows, Linux, ChromeOS) while DevTools is in focus to open the Command Menu.
Start typing coverage.

Opening the Coverage tab from the Command Menu.

Select Show Coverage. The Coverage tab appears.

The Coverage tab.

Click Start Instrumenting Coverage And Reload Page. Reload. The page reloads and the Coverage tab provides an overview of how much CSS (and JavaScript) is used from each file that the browser loads.

An overview of how much CSS (and JavaScript) is used and unused.

Green represents used CSS. Red represents unused CSS.

Click a CSS file to see a line-by-line breakdown of what CSS it uses in the preview above.

A line-by-line breakdown of used and unused CSS.

On the screenshot, lines 55 to 57 and 65 to 67 of devsite-google-blue.css are unused, whereas lines 59 to 63 are used.

Force print preview mode
See Force DevTools Into Print Preview Mode.

Copy CSS
From a single drop-down menu in the Styles pane, you can copy separate CSS rules, declarations, properties, values

Additionally, you can copy CSS properties in JavaScript syntax. This option is handy if you're using CSS-in-JS libraries.

To copy CSS:

Select an element.
In the Elements > Styles pane, right-click a CSS property. Copy CSS drop-down menu.
Select one of the following options from the drop-down menu:

Copy declaration. Copies the property and its value in CSS syntax: css property: value;
Copy property. Copies only the property name.
Copy value. Copies only the value.
Copy rule. Copies the entire CSS rule: css selector[, selector] { property: value; property: value; ... }
Copy declaration as JS. Copies the property and its value in JavaScript syntax: js propertyInCamelCase: 'value'
Copy all declarations. Copies all properties and their values in the CSS rule: css property: value; property: value; ...
Copy all declarations as JS. Copies all properties and their values in JavaScript syntax: ```js propertyInCamelCase: 'value', propertyInCamelCase: 'value', ...

Copy all CSS changes. Copies the changes you make in the Styles pane across all declarations.

View computed value. Takes you to the Computed pane.

Change CSS
This section lists all the ways you can change CSS in Elements > Styles.

Additionally, you can:

Override CSS across page loads.
Save modified CSS to your local sources in a workspace.
Add a CSS declaration to an element
Since the order of declarations affects how an element is styled, you can add declarations in different ways:

Add a inline declaration. Equivalent to adding a style attribute to the element's HTML.
Add a declaration to a style rule.
What workflow should you use? For most scenarios, you probably want to use the inline declaration workflow. Inline declarations have higher specificity than external ones, so the inline workflow ensures that the changes take effect in the element as you'd expect. See Selector Types for more on specificity.

If you're debugging an element's styles and you need to specifically test what happens when a declaration is defined in different places, use the other workflow.

Add an inline declaration
To add an inline declaration:

Select an element.
In the Styles pane, click between the brackets of the element.style section. The cursor focuses, allowing you to enter text.
Enter a property name and press Enter.
Enter a valid value for that property and press Enter. In the DOM Tree, you can see that a style attribute has been added to the element.

Adding inline declarations.

On the screenshot, the margin-top and background-color properties have been applied to the selected element. In the DOM Tree you can see the declarations reflected in the element's style attribute.

Add a declaration to a style rule
To add a declaration to an existing style rule:

Select an element.
In the Styles pane, click between the brackets of the style rule to which you want to add the declaration. The cursor focuses, allowing you to enter text.
Enter a property name and press Enter.
Enter a valid value for that property and press Enter.
Changing the value of a declaration.

On the screenshot, a style rule gets the new border-bottom-style:groove declaration.

Change a declaration name or value
Double-click a declaration's name or value to change it. See Change enumerable values with keyboard shortcuts for shortcuts for quickly incrementing or decrementing a value by 0.1, 1, 10, or 100 units.

Change enumerable values with keyboard shortcuts
While editing an enumerable value of a declaration, for example, font-size, you can use the following keyboard shortcuts to increment the value by a fixed amount:

Option+Up (Mac) or Alt+Up (Windows, Linux) to increment by 0.1.
Up to change the value by 1, or by 0.1 if the current value is between -1 and 1.
Shift+Up to increment by 10.
Shift+Command+Up (Mac) or Control+Shift+Page Up (Windows, Linux) to increment the value by 100.
Decrementing also works. Just replace each instance of Up mentioned earlier with Down.

Add a class to an element
To add a class to an element:

Select the element in the DOM Tree.
Click .cls.
Enter the name of the class in the Add New Class box.
Press Enter.
The Element Classes pane.

Emulate light and dark theme preferences and enable automatic dark mode
To toggle automatic dark mode or emulate the user's preference of light or dark themes:

On the Elements > Styles pane, click Toggle common rendering emulations.Toggle common rendering emulations. Toggle common rendering emulations.
Select one of the following from the drop-down list:

prefers-color-scheme: light. Indicates that the user prefers the light theme.
prefers-color-scheme: dark. Indicates that the user prefers the dark theme.
Automatic dark mode. Displays your page in dark mode even if you didn't implement it. Additionally, sets prefers-color-scheme to dark automatically.
This drop-down is a shortcut for Emulate CSS media feature prefers-color-scheme and Enable automatic dark mode options of the Rendering tab.

Toggle a class
To enable or disable a class on an element:

Select the element in the DOM Tree.
Open the Element Classes pane. See Add a class to an element. Below the Add New Class box are all of the classes that are being applied to this element.
Toggle the checkbox next to the class that you want to enable or disable.
Add a style rule
To add a new style rule:

Select an element.
Click New Style Rule New Style Rule.. DevTools inserts a new rule beneath the element.style rule.
Adding a new style rule.

On the screenshot, DevTools adds the h1.devsite-page-title style rule after clicking New Style Rule.

Choose which style sheet to add a rule to
When adding a new style rule, click and hold New Style Rule New Style Rule. to choose which style sheet to add the style rule to.

Choosing a style sheet.

Toggle a declaration
To toggle a single declaration on or off:

Select an element.
In the Styles pane, hover over the rule that defines the declaration. Checkboxes appear next to each declaration.
Check or clear the checkbox next to the declaration. When you clear a declaration, DevTools crosses it out to indicate that it's no longer active.
Toggling a declaration.

On the screenshot, the color property for the currently-selected element is toggled off.

Edit the ::view-transition pseudo-elements during an animation
See the corresponding section in Animations.

For more information, see Smooth and simple transitions with the View Transitions API.

Align grid items and their content with the Grid Editor
See the corresponding section in Inspect CSS grid.

Change colors with the Color Picker
See Inspect and debug HD and non-HD colors with the Color Picker.

Change angle value with the Angle Clock
The Angle Clock provides a GUI for changing <angle>s in CSS property values.

To open the Angle Clock:

Select an element with angle declaration.
In the Styles pane, find the transform or background declaration that you want to change. Click the Angle Preview box next to the angle value.

Angle preview.

The small clocks to the left of -5deg and 0.25turn are the angle previews.

Click the preview to open the Angle Clock.

Angle clock.

Change the angle value by clicking on the Angle Clock circle or scroll your mouse to increase / decrease the angle value by 1.

There are more keyboard shortcuts to change the angle value. Find out more in the Styles pane keyboard shortcuts.

Change box and text shadows with the Shadow Editor

The Shadow Editor provides a GUI for changing text-shadow and box-shadow CSS declarations.

To change shadows with the Shadow Editor:

Select an element with a shadow declaration. For example, select the next element.

In the Styles pane, find a shadow Shadow. icon next to the text-shadow or box-shadow declaration.

Shadow icons.

Click the shadow icon to open the Shadow editor.

Shadow editor.

Change the shadow properties:

Type (only for box-shadow). Pick Outset or Inset.
X and Y offsets. Drag the blue dot or specify values.
Blur. Drag the slider or specify a value.
Spread (only for box-shadow). Drag the slider or specify a value.
Observe the changes applied to the element.

Edit animation and transition timings with the Easing Editor
The Easing Editor provides a GUI for changing the values of transition-timing-function and animation-timing-function.

To open the Easing Editor:

Select an element with a timing function declaration, like the <body> element on this page.
In the Styles tab, find the purple Ease. icon next to the transition-timing-function, animation-timing-function declarations, or the transition shorthand property. The Easing Editor icon.
Click the icon to open the Easing Editor: The Easing Editor.
Use presets to adjust timings
To adjust timings with a click, use the presets in the Easing Editor:

In the Easing Editor, to set a keyword value, click one of the picker buttons:
linear The linear button.
ease-in-out The ease-in-out button.
ease-in The ease-in button.
ease-out The ease-out button.
In the Presets switcher, click Left. or Right. buttons to pick one of the following presets:

Linear presets: elastic, bounce, or emphasized.
Cubic Bezier presets:
Timing keyword	Preset	Cubic Bezier
ease-in-out	In Out, Sine	cubic-bezier(0.45, 0.05, 0.55, 0.95)
In Out, Quadratic	cubic-bezier(0.46, 0.03, 0.52, 0.96)
In Out, Cubic	cubic-bezier(0.65, 0.05, 0.36, 1)
Fast Out, Slow In	cubic-bezier(0.4, 0, 0.2, 1)
In Out, Back	cubic-bezier(0.68, -0.55, 0.27, 1.55)
ease-in	In, Sine	cubic-bezier(0.47, 0, 0.75, 0.72)
In, Quadratic	cubic-bezier(0.55, 0.09, 0.68, 0.53)
In, Cubic	cubic-bezier(0.55, 0.06, 0.68, 0.19)
In, Back	cubic-bezier(0.6, -0.28, 0.74, 0.05)
Fast Out, Linear In	cubic-bezier(0.4, 0, 1, 1)
ease-out	Out, Sine	cubic-bezier(0.39, 0.58, 0.57, 1)
Out, Quadratic	cubic-bezier(0.25, 0.46, 0.45, 0.94)
Out, Cubic	cubic-bezier(0.22, 0.61, 0.36, 1)
Linear Out, Slow In	cubic-bezier(0, 0, 0.2, 1)
Out, Back	cubic-bezier(0.18, 0.89, 0.32, 1.28)
Configure custom timings
To set custom values for timing functions, use the control points on the lines:

For linear functions, click anywhere on the line to add a control point and drag it. Double-click to remove the point.

Dragging a control point of a linear function.

For Cubic Bezier functions, drag one of the control points.

Dragging the control points of a Cubic Bezier function.

Any change triggers a ball animation in the Preview at the top of editor.

(Experimental) Copy CSS changes
Note: To enable this experimental feature, check Sync CSS changes in the Styles pane under Settings. Settings > Experiments and reload DevTools.
With this experiment enabled, the Styles pane highlights your CSS changes in green.

To copy a single CSS declaration change, hover over the highlighted declaration and click the Copy. Copy button.

Copy a CSS declaration change.

To copy all CSS changes across declarations at once, right-click on any declaration and select Copy all CSS changes.

Copy all CSS changes.

Additionally, you can track changes you make with the Changes tab.

Was this helpful?

Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License, and code samples are licensed under the Apache 2.0 License. For details, see the Google Developers Site Policies. Java is a registered trademark of Oracle and/or its affiliates.

== END DevTools - CSS features reference ==

## Foundations
## JavaScript Basics
## JavaScript Developer Tools
Get started with viewing and changing the DOM 
[Get Started With Viewing And Changing The DOM](https://developer.chrome.com/docs/devtools/dom/)

This tutorial assumes that you know the difference between the DOM and HTML. See Appendix: HTML versus the DOM for an explanation.

View DOM nodes
The DOM Tree of the Elements panel is where you do all DOM-related activities in DevTools.

Inspect a node
When you're interested in a particular DOM node, Inspect is a fast way to open DevTools and investigate that node.

Right-click Michelangelo below and select Inspect.
Michelangelo
Raphael Inspecting a node The Elements panel of DevTools opens. <li>Michelangelo</li> is highlighted in the DOM Tree. Highlighting the Michelangelo< node
Click the Inspect icon in the top-left corner of DevTools. The Inspect icon
Click the Tokyo text below.

Tokyo
Beirut

Now, <li>Tokyo</li> is highlighted in the DOM Tree.

Inspecting a node is also the first step towards viewing and changing a node's styles. See Get Started With Viewing And Changing CSS.

Navigate the DOM Tree with a keyboard
Once you've selected a node in the DOM Tree, you can navigate the DOM Tree with your keyboard.

Right-click Ringo below and select Inspect. <li>Ringo</li> is selected in the DOM Tree.

George
Ringo
Paul
John

Inspecting the Ringo node

Press the Up arrow key 2 times. <ul> is selected.

Inspecting the ul node

Press the Left arrow key. The <ul> list collapses.

Press the Left arrow key again. The parent of the <ul> node is selected. In this case it's the <li> node containing the instructions for step 1.

Press the Down arrow key 3 times so that you've re-selected the <ul> list that you just collapsed. It should look like this: <ul>...</ul>

Press the Right arrow key. The list expands.

Scroll into view
When viewing the DOM Tree, sometimes you'll find yourself interested in a DOM node that's not currently in the viewport. For example, suppose that you scrolled to the bottom of the page, and you're interested in the <h1> node at the top of the page. Scroll into view lets you quickly reposition the viewport so that you can see the node.

Right-click Magritte below and select Inspect.

Magritte
Soutine
Go to the Appendix: Scroll into view section at the bottom of this page. The instructions continue there.

After completing the instructions at the bottom of the page you should jump back up to here.

Show rulers
With rulers above and to the left of your viewport, you can measure the width and height of an element when you hover over it in the Elements panel.

Rulers.

Enable the rulers in one of two ways:

Press Control+Shift+P or Command+Shift+P (Mac) to open the Command menu, type Show rulers on hover, and press Enter.
Check Settings. Settings > Preferences > Elements > Show rulers on hover.
The sizing unit of the rulers is pixels.

Search for nodes
You can search the DOM Tree by string, CSS selector, or XPath selector.

Focus your cursor on the Elements panel.
Press Control+F or Command+F (Mac). The Search bar opens at the bottom of the DOM Tree.
Type The Moon is a Harsh Mistress. The last sentence is highlighted in the DOM Tree.

Highlighting the query in the Search bar

As mentioned above, the Search bar also supports CSS and XPath selectors.

The Elements panel selects the first matching result in the DOM tree and rolls it into view in the viewport. By default, this happens as you type. If you always work with long search queries, you can make DevTools run search only when you press Enter.

To avoid unnecessary jumps between nodes, clear the Settings. Settings > Preferences > Global > Search as you type checkbox.

Cleared Search as you type checkbox in Settings.

Edit the DOM
You can edit the DOM on the fly and see how those changes affect the page.

Edit content
To edit a node's content, double-click the content in the DOM Tree.

Right-click Michelle below and select Inspect.

Fry
Michelle
In the DOM Tree, double-click Michelle. In other words, double-click the text between <li> and </li>. The text is highlighted blue to indicate that it's selected.

Editing the text

Delete Michelle, type Leela, then press Enter to confirm the change. The text above changes from Michelle to Leela.

Edit attributes
To edit attributes, double-click the attribute name or value. Follow the instructions below to learn how to add attributes to a node.

Right-click Howard below and select Inspect.

Howard
Vince
Double-click <li>. The text is highlighted to indicate that the node is selected.

Editing the node

Press the Right arrow key, add a space, type style="background-color:gold", and then press Enter. The background color of the node changes to gold.

Adding a style attribute to the node

You can also use the Edit attribute right-click option.

Right-click options with edit attribute highlighted.

Edit node type
To edit a node's type, double-click the type and then type in the new type.

Right-click Hank below and select Inspect.

Dean
Hank
Thaddeus
Brock
Double-click <li>. The text li is highlighted.

Delete li, type button, then press Enter. The <li> node changes to a <button> node.

Changing the node type to button

Edit as HTML
To edit nodes as HTML with syntax highlighting and autocomplete, select Edit as HTML from the node's drop-down menu.

Right-click Leonard below and select Inspect.

Penny
Howard
Rajesh
Leonard
In the Elements panel, right-click the current node and select Edit as HTML from the drop-down menu.

The drop-down menu of a node.

Press Enter to start a new line and start typing <l. DevTool highlights HTML syntax and autocompletes tags for you.

Autocompletion of HTML tags.

Note: Additionally, DevTools can autocomplete DOM properties.
Select the li element from the autocomplete menu and type >. DevTools automatically adds the closing </li> tag after the cursor.

DevTools closes the tag automatically.

Type Sheldon inside the tag and press Control / Command + Enter to apply changes.

Applying changes.

Duplicate a node
You can duplicate an element using the Duplicate element right-click option.

Right-click Nana below and select Inspect.

Bonfire of the Vanities
Nana
Orlando
White Noise
In the Elements panel, right-click <li>Nana</li> and select Duplicate element from the drop-down menu.

The Duplicate element option highlighted in the drop-down.

Return to the page. The list item has been instantly duplicated.

You can also use the keyboard shortcuts: Shift + Alt + Down arrow (Windows and Linux) and Shift + Option + Down arrow (MacOS).

Capture a node screenshot
You can screenshot any individual node in the DOM Tree using Capture node screenshot.

Right-click any image on this page and select Inspect.

In the Elements panel, right-click the image URL and select Capture node screenshot from the drop-down menu.

A node screenshot being captured.

The screenshot will be saved to your downloads.

Node screenshot saved to downloads.

Reorder DOM nodes
Drag nodes to reorder them.

Right-click Elvis Presley below and select Inspect. Notice that it's the last item in the list.

Stevie Wonder
Tom Waits
Chris Thile
Elvis Presley
In the DOM Tree, drag <li>Elvis Presley</li> to the top of the list.

Dragging the node to the top of the list

Force state
You can force nodes to remain in states like :active, :hover, :focus, :visited, and :focus-within.

Hover over The Lord of the Flies below. The background color becomes orange.

The Lord of the Flies
Crime and Punishment
Moby Dick
Right-click The Lord of the Flies above and select Inspect.

Right-click <li class="demo--hover">The Lord of the Flies</li> and select Force State > :hover. See Appendix: Missing options if you don't see this option. The background color remains orange even though you're not actually hovering over the node.

Hide a node
Press H to hide a node.

Right-click The Stars My Destination below and select Inspect.

The Count of Monte Cristo
The Stars My Destination
Press the H key. The node is hidden. You can also right-click the node and use the Hide element option.

What the node looks like in the DOM Tree after it's hidden

Press the H key again. The node is shown again.

Delete a node
Press Delete to delete a node.

Right-click Foundation below and select Inspect.

The Illustrated Man
Through the Looking-Glass
Foundation
Press the Delete key. The node is deleted. You can also right-click the node and use the Delete element option.

Press Control+Z or Command+Z (Mac). The last action is undone and the node reappears.

Access nodes in the Console
DevTools provides a few shortcuts for accessing DOM nodes from the Console, or getting JavaScript references to them.

Reference the currently-selected node with $0
When you inspect a node, the == $0 text next to the node means that you can reference this node in the Console with the variable $0.

Right-click The Left Hand of Darkness below and select Inspect.

The Left Hand of Darkness
Dune
Press the Escape key to open the Console Drawer.

Type $0 and press the Enter key. The result of the expression shows that $0 evaluates to <li>The Left Hand of Darkness</li>.

The result of the first $0 expression in the Console

Hover over the result. The node is highlighted in the viewport.

Click <li>Dune</li> in the DOM Tree, type $0 in the Console again, and then press Enter again. Now, $0 evaluates to <li>Dune</li>.

The result of the second $0 expression in the Console

Store as global variable
If you need to refer back to a node many times, store it as a global variable.

Right-click The Big Sleep below and select Inspect.

The Big Sleep
The Long Goodbye
Right-click <li>The Big Sleep</li> in the DOM Tree and select Store as global variable. See Appendix: Missing options if you don't see this option.

Type temp1 in the Console and then press Enter. The result of the expression shows that the variable evaluates to the node.

The result of the temp1 expression

Copy JS path
Copy the JavaScript path to a node when you need to reference it in an automated test.

Right-click The Brothers Karamazov below and select Inspect.

The Brothers Karamazov
Crime and Punishment
Right-click <li>The Brothers Karamazov</li> in the DOM Tree and select Copy > Copy JS Path. A document.querySelector() expression that resolves to the node has been copied to your clipboard.

Press Control+V or Command+V (Mac) to paste the expression into the Console.

Press Enter to evaluate the expression.

The result of the Copy JS Path expression

Break on DOM changes
DevTools allows you to pause a page's JavaScript when the JavaScript modifies the DOM. See DOM change breakpoints.

Next steps
That covers most of the DOM-related features in DevTools. You can discover the rest of them by right-clicking nodes in the DOM Tree and experimenting with the other options that weren't covered in this tutorial. See also Elements panel keyboard shortcuts.

Check out the Chrome DevTools homepage to discover everything else you can do with DevTools.

See Community if you want to contact the DevTools team or get help from the DevTools community.

Appendix: HTML versus the DOM
This section quickly explains the difference between HTML and the DOM.

When you use a web browser to request a page like https://example.com the server returns HTML like this:

<!doctype html>
<html>
  <head>
    <title>Hello, world!</title>
  </head>
  <body>
    <h1>Hello, world!</h1>
    <p>This is a hypertext document on the World Wide Web.</p>
    <script src="/script.js" async></script>
  </body>
</html>
The browser parses the HTML and creates a tree of objects like this:

html
  head
    title
  body
    h1
    p
    script
This tree of objects, or nodes, representing the page's content is called the DOM. Right now it looks the same as the HTML, but suppose that the script referenced at the bottom of the HTML runs this code:

const h1 = document.querySelector('h1');
h1.parentElement.removeChild(h1);
const p = document.createElement('p');
p.textContent = 'Wildcard!';
document.body.appendChild(p);
That code removes the h1 node and adds another p node to the DOM. The complete DOM now looks like this:

html
  head
    title
  body
    p
    script
    p
The page's HTML is now different than its DOM. In other words, HTML represents initial page content, and the DOM represents current page content. When JavaScript adds, removes, or edits nodes, the DOM becomes different than the HTML.

See Introduction to the DOM to learn more.

Appendix: Scroll into view
This is a continuation of the Scroll into view section. Follow the instructions below to complete the section.

The <li>Magritte</li> node should still be selected in your DOM Tree. If not, go back to Scroll into view and start over.
Right-click the <li>Magritte</li> node and select Scroll into view. Your viewport scrolls back up so that you can see the Magritte node. See Appendix: Missing options if you can't see the Scroll into view option.

Scroll into view

Appendix: Missing options
Many of the instructions in this tutorial instruct you to right-click a node in the DOM Tree and then select an option from the context menu that pops up. If you don't see the specified option in the context menu, try right-clicking away from the node text.

Where to click if you're not seeing all the options

Was this helpful?

Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License, and code samples are licensed under the Apache 2.0 License. For details, see the Google Developers Site Policies. Java is a registered trademark of Oracle and/or its affiliates.

== END DevTools - Get started with viewing and changing the DOM ==

## Foundations
## JavaScript Basics
## JavaScript Developer Tools
Simulate mobile devices with device mode 
[Simulate mobile devices with Device Mode](https://developer.chrome.com/docs/devtools/device-mode/)

Use device mode to approximate how your page looks and performs on a mobile device.

Device mode is the name for a collection of features in Chrome DevTools that help you simulate mobile devices. These features include:

Simulating a mobile viewport
Throttling the CPU
Throttling the network
Key point: Alternatively, you can throttle connection speed in the Network panel.
Additionally, in the Sensors tab:
Simulating geolocation
Setting orientation
Limitations
Think of device mode as a first-order approximation of how your page looks and feels on a mobile device. With device mode you don't actually run your code on a mobile device. You simulate the mobile user experience from your laptop or desktop.

There are some aspects of mobile devices that DevTools will never be able to simulate. For example, the architecture of mobile CPUs is very different than the architecture of laptop or desktop CPUs. When in doubt, your best bet is to actually run your page on a mobile device. Use Remote Debugging to view, change, debug, and profile a page's code from your laptop or desktop while it actually runs on a mobile device.

Simulate a mobile viewport
Click devices Toggle device toolbar to open a toolbar that lets you simulate a mobile viewport.

The device toolbar.

By default, the device toolbar opens in viewport with Dimensions set to Responsive.

Responsive Viewport Mode
Drag the handles to resize the viewport to whatever dimensions you need. Or, enter specific values in the width and height boxes. In this example, the width is set to 480 and the height is set to 415.

The handles for changing the viewport's dimensions when in Responsive Viewport Mode.

Alternatively, use the width presets bar to set the width with a click to one of the following:

The width presets bar.

Mobile S	Mobile M	Mobile L	Tablet	Laptop	Laptop L	4K
320px	375px	425px	768px	1024px	1440px	2560px
Show media queries
To show media query breakpoints above your viewport, click More options. More options > Show media queries.

Show media queries.

DevTools now displays two additional bars above the viewport:

The blue bar with max-width breakpoints.
The orange bar with min-width breakpoints.
Click between breakpoints to change the viewport's width so that the breakpoint gets triggered.

Click between breakpoints to change the viewport's width.

To find the corresponding @media declaration, right-click between breakpoints and select Reveal in source code. DevTools opens the Sources panel at the corresponding line in the Editor.

Reveal in source code drop-down menu.

Set device pixel ratio
Device pixel ratio (DPR) is the ratio between physical pixels on the hardware screen and logical (CSS) pixels. In other words, DPR tells Chrome how many screen pixels to use to draw a CSS pixel. Chrome uses the DPR value when drawing on HiDPI (High Dots Per Inch) displays.

To set a DPR value:

Click More options More options. > Add device pixel ratio.

Add device pixel ratio.

In the action bar at the top of the viewport, select a DPR value from the new DPR drop-down menu.

Setting the DPR value.

Set the device type
Use the Device Type list to simulate a mobile device or desktop device.

The Device Type list.

If you can't see the list on the action bar at the top, select More options More options. > Add device type.

The next table describes the differences between the options. Rendering method refers to whether Chrome renders the page as a mobile or desktop viewport. Cursor icon refers to what type of cursor you see when you hover over the page. Events fired refers to whether the page fires touch or click events when you interact with the page.

Option	Rendering method	Cursor icon	Events fired
Mobile	Mobile	Circle	touch
Mobile (no touch)	Mobile	Normal	click
Desktop	Desktop	Normal	click
Desktop (touch)	Desktop	Circle	touch
Device-specific mode
To simulate the dimensions of a specific mobile device, select the device from the Dimensions list.

The Dimensions list.

For more information, see Add a custom mobile device.

Rotate the viewport to landscape orientation
Click screen_rotation Rotate to rotate the viewport to landscape orientation.

Landscape orientation.

Note that the Rotate Rotate. button disappears if your Device toolbar is narrow.

The device toolbar.

See also Set orientation.

Toggle dual-screen mode
Some devices, for example, Surface Duo, have two screens and two ways to use them: with one or both screens active.

To toggle between dual and single screen, click the devices_fold Toggle dual-screen mode in the toolbar.

The dual-screen mode turned on.

Set device posture
Some devices, for example, Asus Zenbook Fold, have foldable screens. Such screens have a posture: continuous or folded. The continuous posture refers to a "flat" position and folded forms an angle between sections of the display.

To set the device posture, select Continuous or Folded from the corresponding drop-down menu in the toolbar.

Posture set to folded.

Show device frame
When simulating the dimensions of a specific mobile device like a Nest Hub, select More options More options. > Show device frame to show the physical device frame around the viewport.

Show device frame.

Note: If you don't see a device frame for a particular device, it probably means that DevTools just doesn't have art for that specific option.
In this example, DevTools shows the frame for the Nest Hub.

The device frame for the Nest Hub.

Add a custom mobile device
To add a custom device:

Click the Device list and then select Edit.

Edit.

On the Settings > Devices tab, either choose a device from the list of supported ones or click Add custom device to add your own.

If you're adding your own, enter a name, width, and height for the device, then click Add.

Creating a custom device.

The device pixel ratio, user agent string, and device type fields are optional. The device type field is the list that is set to Mobile by default.

Back in the viewport, select the newly added device from the Dimensions list.

Show rulers
Click More options More options. > Show rulers to see rulers. The sizing unit of the rulers is pixels.

Show rulers.

DevTools shows rulers at the top and to the left of the viewport.

Rulers above and to the left of the viewport.

Click the rulers at specific marks to set the viewport's width and height.

Zoom the viewport
Use the Zoom list to zoom in or out.

Zoom.

Capture a screenshot
To capture a screenshot of what you see in the viewport, click More options. More options > Capture screenshot.

The Capture screenshot option in the More options menu.

To capture a screenshot of the whole page including the content that isn't visible in the viewport, select Capture a full size screenshot from the same menu.

Throttle the network and CPU
To throttle both the network and CPU, select Mid-tier mobile or Low-end mobile from the Throttle list.

The Throttle list.

Mid-tier mobile simulates fast 3G and throttles your CPU so that it is 4 times slower than normal. Low-end mobile simulates slow 3G and throttles your CPU 6 times slower than normal. Keep in mind that the throttling is relative to the normal capability of your laptop or desktop.

Note that the Throttle list will be hidden if your Device toolbar is narrow.

Throttle the CPU only
To throttle the CPU only and not the network, go to the Performance panel, click Capture Settings Capture settings., and then select 4x slowdown or 6x slowdown from the CPU list.

The CPU list.

Throttle the network only
To throttle the network only and not the CPU, go the Network panel and select Fast 3G or Slow 3G from the Throttle list.

The Throttle list.

Or press Command+Shift+P (Mac) or Control+Shift+P (Windows, Linux, ChromeOS) to open the Command Menu, type 3G, and select Enable fast 3G throttling or Enable slow 3G throttling.

The Command Menu.

You can also set network throttling from the Performance panel. Click Capture Settings Capture settings. and then select Fast 3G or Slow 3G from the Network list.

Setting network throttling from the Performance panel.

Emulate sensors
Use the Sensors tab to override geolocation, simulate device orientation, force touch, and emulate idle state.

The next sections provide a quick look on how to override geolocation and set device orientation. For a complete list of features, see Emulate device sensors.

Override geolocation
To open the geolocation overriding UI, click Customize and control DevTools Customize and control DevTools. and then select More tools > Sensors.

Sensors

Or press Command+Shift+P (Mac) or Control+Shift+P (Windows, Linux, ChromeOS) to open the Command Menu, type Sensors, and then select Show Sensors.

Show Sensors

Select one of the presets from the Location list, or select Other... to enter your own coordinates, or select Location unavailable to test out how your page behaves when geolocation is in an error state.

Geolocation

Set orientation
To open the orientation UI, click Customize and control DevTools Customize and control DevTools. and then select More tools > Sensors.

Sensors

Or press Command+Shift+P (Mac) or Control+Shift+P (Windows, Linux, ChromeOS) to open the Command Menu, type Sensors, and then select Show Sensors.

Show Sensors

Select one of the presets from the Orientation list or select Custom orientation to set your own alpha, beta, and gamma values.

Orientation

Was this helpful?

Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License, and code samples are licensed under the Apache 2.0 License. For details, see the Google Developers Site Policies. Java is a registered trademark of Oracle and/or its affiliates.

== END DevTools - Simulate mobile devices with device mode ==

## Foundations
## JavaScript Basics
## JavaScript Developer Tools
Debug JavaScript
[Debug JavaScript](https://developer.chrome.com/docs/devtools/javascript/) 

This tutorial teaches you the basic workflow for debugging any JavaScript issue in DevTools. Read on, or watch the video version of this tutorial, below.

Step 1: Reproduce the bug
Finding a series of actions that consistently reproduces a bug is always the first step to debugging.

Open this demo in a new tab.
Enter 5 in the Number 1 text box.
Enter 1 in the Number 2 text box.
Click Add Number 1 and Number 2. The label below the button says 5 + 1 = 51. The result should be 6. This is the bug you're going to fix.
The result of 5 + 1 is 51. It should be 6.

In this example, the result of 5 + 1 is 51. It should be 6.

Step 2: Get familiar with the Sources panel UI
DevTools provides a lot of different tools for different tasks, such as changing CSS, profiling page load performance, and monitoring network requests. The Sources panel is where you debug JavaScript.

Open DevTools by pressing Command+Option+J (Mac) or Control+Shift+J (Windows, Linux). This shortcut opens the Console panel.

The Console panel.

Click the Sources tab.

The Sources panel.

The Sources panel UI has 3 parts:

The 3 parts of the Sources panel UI.

The File Navigator pane. Every file that the page requests is listed here.
The Code Editor pane. After selecting a file in the File Navigator pane, the contents of that file are displayed here.
The JavaScript Debugging pane. Various tools for inspecting the page's JavaScript. If your DevTools window is wide, this pane is displayed to the right of the Code Editor pane.
Step 3: Pause the code with a breakpoint
A common method for debugging a problem like this is to insert a lot of console.log() statements into the code, in order to inspect values as the script executes. For example:

function updateLabel() {
  var addend1 = getNumber1();
  console.log('addend1:', addend1);
  var addend2 = getNumber2();
  console.log('addend2:', addend2);
  var sum = addend1 + addend2;
  console.log('sum:', sum);
  label.textContent = addend1 + ' + ' + addend2 + ' = ' + sum;
}
The console.log() method may get the job done, but breakpoints can get it done faster. A breakpoint lets you pause your code in the middle of its execution, and examine all values at that moment in time. Breakpoints have a few advantages over the console.log() method:

With console.log(), you need to manually open the source code, find the relevant code, insert the console.log() statements, and then reload the page in order to see the messages in the Console. With breakpoints, you can pause on the relevant code without even knowing how the code is structured.
In your console.log() statements you need to explicitly specify each value that you want to inspect. With breakpoints, DevTools shows you the values of all variables at that moment in time. Sometimes there are variables affecting your code that you're not even aware of.
In short, breakpoints can help you find and fix bugs faster than the console.log() method.

If you take a step back and think about how the app works, you can make an educated guess that the incorrect sum (5 + 1 = 51) gets computed in the click event listener that's associated to the Add Number 1 and Number 2 button. Therefore, you probably want to pause the code around the time that the click listener executes. Event Listener Breakpoints let you do exactly that:

In the JavaScript Debugging pane, click Event Listener Breakpoints to expand the section. DevTools reveals a list of expandable event categories, such as Animation and Clipboard.
Next to the Mouse event category, click Expand Expand. DevTools reveals a list of mouse events, such as click and mousedown. Each event has a checkbox next to it.
Check the click checkbox. DevTools is now set up to automatically pause when any click event listener executes.

The click checkbox is enabled.

Back on the demo, click Add Number 1 and Number 2 again. DevTools pauses the demo and highlights a line of code in the Sources panel. DevTools should be paused on this line of code:

function onClick() {
If you're paused on a different line of code, press Resume Script Execution ALT_TEXT_HERE until you're paused on the correct line.

Note: If you paused on a different line, you have a browser extension that registers a click event listener on every page that you visit. You were paused in the extension's click listener. If you use Incognito Mode to browse in private, which disables all extensions, you can see that you pause on the correct line of code every time.
Event Listener Breakpoints are just one of many types of breakpoints available in DevTools. It's worth memorizing all the different types, because each type ultimately helps you debug different scenarios as quickly as possible. See Pause Your Code With Breakpoints to learn when and how to use each type.

Step 4: Step through the code
One common cause of bugs is when a script executes in the wrong order. Stepping through your code enables you to walk through your code's execution, one line at a time, and figure out exactly where it's executing in a different order than you expected. Try it now:

On the Sources panel of DevTools, click Step into next function call Step into next function call to step through the execution of the onClick() function, one line at a time. DevTools highlights the following line of code:

if (inputsAreEmpty()) {
Click Step over next function call Step over next function call.. DevTools executes inputsAreEmpty() without stepping into it. Notice how DevTools skips a few lines of code. This is because inputsAreEmpty() evaluated to false, so the if statement's block of code didn't execute.

That's the basic idea of stepping through code. If you look at the code in get-started.js, you can see that the bug is probably somewhere in the updateLabel() function. Rather than stepping through every line of code, you can use another type of breakpoint to pause the code closer to the probable location of the bug.

Step 5: Set a line-of-code breakpoint
Line-of-code breakpoints are the most common type of breakpoint. When you've got a specific line of code that you want to pause on, use a line-of-code breakpoint:

Look at the last line of code in updateLabel():

label.textContent = addend1 + ' + ' + addend2 + ' = ' + sum;
To the left of the code you can see the line number of this particular line of code, which is 32. Click on 32. DevTools puts a blue icon on top of 32. This means that there is a line-of-code breakpoint on this line. DevTools now always pauses before this line of code is executed.

Click Resume script execution Resume Script Execution. The script continues executing until it reaches line 32. On lines 29, 30, and 31, DevTools shows the values of addend1, addend2, and sum inline next to their declarations.

DevTools pauses on the line-of-code breakpoint on line 32.

In this example, DevTools pauses on the line-of-code breakpoint on line 32.

Step 6: Check variable values
The values of addend1, addend2, and sum look suspicious. They're wrapped in quotes, which means that they're strings. This is a good hypothesis for the explaining the cause of the bug. Now it's time to gather more information. DevTools provides a lot of tools for examining variable values.

Method 1: The Scope pane
When you're paused on a line of code, the Scope pane shows you what local and global variables are currently defined, along with the value of each variable. It also shows closure variables, when applicable. Double-click a variable value to edit it. When you're not paused on a line of code, the Scope pane is empty.

The Scope pane.

Method 2: Watch Expressions
The Watch Expressions tab lets you monitor the values of variables over time. As the name implies, Watch Expressions aren't just limited to variables. You can store any valid JavaScript expression in a Watch Expression. Try it now:

Click the Watch tab.
Click Add Expression Add Expression.
Type typeof sum.
Press Enter. DevTools shows typeof sum: "string". The value to the right of the colon is the result of your Watch Expression.
The Watch Expression pane

The screenshot above shows the Watch Expression pane (bottom-right) after creating the typeof sum watch expression. If your DevTools window is large, the Watch Expression pane is on the right, above the Event Listener Breakpoints pane.

As suspected, sum is being evaluated as a string, when it should be a number. You've now confirmed that this is the cause of the bug.

Method 3: The Console
In addition to viewing console.log() messages, you can also use the Console to evaluate arbitrary JavaScript statements. In terms of debugging, you can use the Console to test out potential fixes for bugs. Try it now:

If you don't have the Console drawer open, press Escape to open it. It opens at the bottom of your DevTools window.
In the Console, type parseInt(addend1) + parseInt(addend2). This statement works because you are paused on a line of code where addend1 and addend2 are in scope.
Press Enter. DevTools evaluates the statement and prints out 6, which is the result you expect the demo to produce.
The Console drawer, after evaluating variables that are in scope.

The screenshot above shows the Console drawer after evaluating parseInt(addend1) + parseInt(addend2).

Step 7: Apply a fix
You've found a fix for the bug. All that's left is to try out your fix by editing the code and re-running the demo. You don't need to leave DevTools to apply the fix. You can edit JavaScript code directly within the DevTools UI. Try it now:

Click Resume script execution Resume Script Execution.
In the Code Editor, replace line 31, var sum = addend1 + addend2, with var sum = parseInt(addend1) + parseInt(addend2).
Press Command + S (Mac) or Control + S (Windows, Linux) to save your change.
Click Deactivate breakpoints Deactivate breakpoints. Its color changes to blue to indicate that it's active. While this is set, DevTools ignores any breakpoints you've set.
Try out the demo with different values. The demo now calculates correctly.
Caution: This workflow only applies a fix to the code that is running in your browser. It won't fix the code for all users that visit your page. To do that, you need to fix the code that's on your servers. You can, however, edit files in DevTools and save them to your sources with Workspaces.
Key point: Starting from Chrome version 105, you can Edit a paused function live.
Next steps
Congratulations! You now know how to make the most of Chrome DevTools when debugging JavaScript. The tools and methods you learned in this tutorial can save you countless hours.

This tutorial only showed you two ways to set breakpoints. DevTools offers many other ways, including:

Conditional breakpoints that are only triggered when the condition that you provide is true.
Breakpoints on caught or uncaught exceptions.
XHR breakpoints that are triggered when the requested URL matches a substring that you provide.
See Pause Your Code With Breakpoints to learn when and how to use each type.

There's a couple of code stepping controls that weren't explained in this tutorial. See Step over line of code to learn more.

Was this helpful?

Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License, and code samples are licensed under the Apache 2.0 License. For details, see the Google Developers Site Policies. Java is a registered trademark of Oracle and/or its affiliates.

== END DevTools - Debug JavaScript ==

## Foundations
## JavaScript Basics
## JavaScript Developer Tools
Pause your code with breakpoints
[Pause your code with breakpoints](https://developer.chrome.com/docs/devtools/javascript/breakpoints/)

Use breakpoints to pause your JavaScript code. This guide explains each type of breakpoint that's available in DevTools, as well as when to use and how to set each type. For an interactive tutorial of the debugging process, see Get Started with Debugging JavaScript in Chrome DevTools.

Overview of when to use each breakpoint type
The most well-known type of breakpoint is line-of-code. But line-of-code breakpoints can be inefficient to set, especially if you don't know exactly where to look, or if you are working with a large codebase. You can save yourself time when debugging by knowing how and when to use the other types of breakpoints.

Breakpoint Type	Use this when you want to ...
Line-of-code	Pause on an exact region of code.
Conditional line-of-code	Pause on an exact region of code, but only when some other condition is true.
Logpoint	Log a message to the Console without pausing the execution.
DOM	Pause on the code that changes or removes a specific DOM node, or its children.
XHR	Pause when an XHR URL contains a string pattern.
Event listener	Pause on the code that runs after an event, such as click, is fired.
Exception	Pause on the line of code that is throwing a caught or uncaught exception.
Function	Pause whenever a specific function is called.
Trusted Type	Pause on Trusted Type violations.
Line-of-code breakpoints
Use a line-of-code breakpoint when you know the exact region of code that you need to investigate. DevTools always pauses before this line of code is executed.

To set a line-of-code breakpoint in DevTools:

Click the Sources tab.
Open the file containing the line of code you want to break on.
Go to the line of code.
To the left of the line of code is the line number column. Click it. A blue icon appears on top of the line number column.
A line-of-code breakpoint.

This example shows a line-of-code breakpoint set on line 29.

Line-of-code breakpoints in your code
Call debugger from your code to pause on that line. This is equivalent to a line-of-code breakpoint, except that the breakpoint is set in your code, not in the DevTools UI.

console.log('a');
console.log('b');
debugger;
console.log('c');
Conditional line-of-code breakpoints
Use a conditional line-of-code breakpoint when you want to stop the execution but only when some condition is true.

Such breakpoints are useful when you want to skip breaks that are irrelevant to your case, especially in a loop.

To set a conditional line-of-code breakpoint:

Open the Sources tab.
Open the file containing the line of code you want to break on.
Go to the line of code.
To the left of the line of code is the line number column. Right-click it.
Select Add conditional breakpoint. A dialog displays underneath the line of code.
Enter your condition in the dialog.
Press Enter to activate the breakpoint. An orange icon with a question mark appears on top of the line number column.
A conditional line-of-code breakpoint.

This example shows a conditional line-of-code breakpoint that fired only when the x exceeded 10 in a loop at iteration i=6.

Log line-of-code breakpoints
Use log line-of-code breakpoints (logpoints) to log messages to the Console without pausing the execution and without cluttering up your code with console.log() calls.

To set a logpoint:

Open the Sources tab.
Open the file containing the line of code you want to break on.
Go to the line of code.
To the left of the line of code is the line number column. Right-click it.
Select Add logpoint. A dialog displays underneath the line of code.
Enter your log message in the dialog. You can use the same syntax as you would with a console.log(message) call.

For example, you can log:

"A string " + num, str.length > 1, str.toUpperCase(), obj
In this case, the logged message is:

// str = "test"
// num = 3
// obj = {attr: "x"}
A string 42 true TEST {attr: 'x'}
Press Enter to activate the breakpoint. A pink icon with two dots appears on top of the line number column.

A logpoint that logs a string and a variable value to the Console.

This example shows a logpoint at line 30 that logs a string and a variable value to the Console.

Edit line-of-code breakpoints
Use the Breakpoints pane to disable, edit, or remove line-of-code breakpoints.

Edit groups of breakpoints
The Breakpoints pane groups the breakpoints by file and orders them by line and column numbers. You can do the following with groups:

To collapse or expand a group, click its name.
To enable or disable a group or breakpoint individually, click Checkbox. next to the group or the breakpoint.
To remove a group, hover over it and click Close..
This video shows how to collapse groups and disable or enable breakpoints one by one or by groups. When you disable a breakpoint, the Sources panel makes its marker next to the line number transparent.

Groups have context menus. In the Breakpoints pane, right-click a group and choose:

The context menu of a group.

Remove all breakpoints in file (group).
Disable all breakpoints in file.
Enable all breakpoints in file.
Remove all breakpoints (in all files).
Remove other breakpoints (in other groups).
Edit breakpoints
To edit a breakpoint:

Click Checkbox. next to a breakpoint to enable or disable it. When you disable a breakpoint, the Sources panel makes its marker next to the line number transparent.
Hover over a breakpoint and click Edit. to edit and Close. to remove it.
When editing a breakpoint, change its type from the drop-down list in the inline editor.

Changing the type of a breakpoint.

Right-click a breakpoint to see its context menu and choose one of the options:

The context menu of a breakpoint.

Remove breakpoint.
Edit condition or logpoint.
Reveal location.
Remove all breakpoints (in all files).
Remove other breakpoints (in other files).
Watch the video to see various breakpoint edits in action: disable, remove, edit condition, reveal location from the menu, and change type.

DOM change breakpoints
Use a DOM change breakpoint when you want to pause on the code that changes a DOM node or its children.

To set a DOM change breakpoint:

Click the Elements tab.
Go to the element that you want to set the breakpoint on.
Right-click the element.
Hover over Break on then select Subtree modifications, Attribute modifications, or Node removal.
The context menu for creating a DOM change breakpoint.

This example shows the context menu for creating a DOM change breakpoint.

You can find a list of DOM change breakpoints in:

Elements > DOM Breakpoints pane.
Sources > DOM Breakpoints side pane.
Lists of DOM Breakpoints in the Elements and Sources panels.

There you can:

Enable or disable them with Checkbox..
Right-click > Remove or Reveal them in the DOM.
Types of DOM change breakpoints
Subtree modifications. Triggered when a child of the currently-selected node is removed or added, or the contents of a child are changed. Not triggered on child node attribute changes, or on any changes to the currently-selected node.
Attributes modifications: Triggered when an attribute is added or removed on the currently-selected node, or when an attribute value changes.
Node Removal: Triggered when the currently-selected node is removed.
XHR/fetch breakpoints
Use an XHR/fetch breakpoint when you want to break when the request URL of an XHR contains a specified string. DevTools pauses on the line of code where the XHR calls send().

One example of when this is helpful is when you see that your page is requesting an incorrect URL, and you want to quickly find the AJAX or Fetch source code that is causing the incorrect request.

To set an XHR/fetch breakpoint:

Click the Sources tab.
Expand the XHR Breakpoints pane.
Click Add. Add breakpoint.
Enter the string which you want to break on. DevTools pauses when this string is present anywhere in an XHR's request URL.
Press Enter to confirm.
Creating an XHR/fetch breakpoint.

This example shows how to create an XHR/fetch breakpoint in the XHR/fetch Breakpoints for any request that contains org in the URL.

Event listener breakpoints
Use event listener breakpoints when you want to pause on the event listener code that runs after an event is fired. You can select specific events, such as click, or categories of events, such as all mouse events.

Click the Sources tab.
Expand the Event Listener Breakpoints pane. DevTools shows a list of event categories, such as Animation.
Check one of these categories to pause whenever any event from that category is fired, or expand the category and check a specific event.
Creating an event listener breakpoint.

This example shows how to create an event listener breakpoint for deviceorientation.

Additionally, the Debugger pauses on events that happen in web workers or worklets of any type, including the Shared Storage Worklets.

The Debugger paused on a service worker's event.

This example shows the Debugger paused on a setTimer event that happened in a service worker.

You can also find a list of event listeners in the Elements > Event Listeners pane.

Exception breakpoints
Use exception breakpoints when you want to pause on the line of code that's throwing a caught or uncaught exception. You can pause on both such exceptions independently in any debug session other than Node.js.

Key point: Currently, in a Node.js debug session, you can pause on caught exceptions only if you also pause on uncaught ones. See Chromium bug #1382762 for details.
In the Breakpoints pane of the Sources tab, enable one of the following options or both, then execute the code:

Check Checkbox. Pause on uncaught exceptions.

Paused on an uncaught exception when the corresponding checkbox is enabled.

In this example, the execution is paused on an uncaught exception.

Check Checkbox. Pause on caught exceptions.

Paused on a caught exception when the corresponding checkbox is enabled.

In this example, the execution is paused on a caught exception.

Exceptions in asynchronous calls
With either or both caught and uncaught checkboxes turned on, the Debugger attempts to pause on the corresponding exceptions in both synchronous and asynchronous calls. In the asynchronous case, the Debugger looks for rejection handlers across promises to determine when to stop.

Caught exceptions and ignored code
With Ignore List turned on, the Debugger pauses on exceptions caught either in non-ignored frames or passing through such a frame in the call stack.

The next example shows the Debugger paused on a caught exception thrown by the ignored library.js that passes through non-ignored mycode.js.

Paused on a caught exception that passes through a non-ignored frame in the call stack.

To learn more about Debugger behavior in edge cases, test a collection of scenarios on this demo page.

Function breakpoints
Call debug(functionName), where functionName is the function you want to debug, when you want to pause whenever a specific function is called. You can insert debug() into your code (like a console.log() statement) or call it from the DevTools Console. debug() is equivalent to setting a line-of-code breakpoint on the first line of the function.


function sum(a, b) {
  let result = a + b; // DevTools pauses on this line.
  return result;
}
debug(sum); // Pass the function object, not a string.
sum();
Make sure the target function is in scope
DevTools throws a ReferenceError if the function you want to debug is not in scope.


(function () {
  function hey() {
    console.log('hey');
  }
  function yo() {
    console.log('yo');
  }
  debug(yo); // This works.
  yo();
})();
debug(hey); // This doesn't work. hey() is out of scope.
Ensuring the target function is in scope can be tricky if you're calling debug() from the DevTools Console. Here's one strategy:

Set a line-of-code breakpoint somewhere where the function is in scope.
Trigger the breakpoint.
Call debug() in the DevTools Console while the code is still paused on your line-of-code breakpoint.
Trusted Type breakpoints
The Trusted Type API provides protection against security exploits known as cross-site scripting (XSS) attacks.

Key term: DOM-based cross-site scripting happens when data from a user controlled source (like username, or redirect URL taken from the URL fragment) reaches a sink, which is a function like eval() or a property setter like .innerHTML, that can execute arbitrary JavaScript code.
In the Breakpoints pane of the Sources tab, go to the CSP Violation Breakpoints section and enable one of the following options or both, then execute the code:

Check Checkbox. Sink Violations.

Paused on a sink violation when the corresponding checkbox is enabled.

In this example, the execution is paused on a sink violation.

Check Checkbox. Policy Violations.

Paused on a policy violation when the corresponding checkbox is enabled.

In this example, the execution is paused on a policy violation. Trusted Type policies are set up using trustedTypes.createPolicy.

You can find more information about using the API:

To further your security aims, visit Prevent DOM-based cross-site scripting vulnerabilities with Trusted Types.
For debugging, visit Implementing CSP and Trusted Types debugging in Chrome DevTools.

== END DevTools - Pause your code with breakpoints ==
