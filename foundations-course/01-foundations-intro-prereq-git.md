# Foundations Course
Overview
This is where it all begins! A hands-on introduction to all of the essential tools you'll need to build real, working websites. You'll learn what web developers actually do – the foundations you'll need for later courses.

# 01 Introduction (5 training modules)
## How This Course Will Work
NA

## Introduction to Web Development
NA

## Motivation and Mindset
NA

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
	
## Identifying Help Vampires

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

# 02 Prerequisites (7 modules)

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

# 03 Git Basics (2 modules)
## Introduction to Git

## Git Basics

Changing the default message editor is a good idea in case you accidentally omit the flag, unless you prefer using Vim. There is no downside to changing it, because you will have the option to write your commit messages in the terminal or in the comfort of VS Code.

The following command will set this configuration. Type (or copy & paste) this command into your terminal and hit Enter.

git config --global core.editor "code --wait"

With that done, you can now choose to use either git commit -m \<your message here> or git commit to type your message with Visual Studio Code!
