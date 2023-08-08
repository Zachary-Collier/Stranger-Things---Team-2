Block 30:  Assignment called Stranger Things

Requirements - Make sure you have met all of the following requirements:

Project Management Requirements: GitHub Project
  - Detailed planning tickets with task descriptions for each one
  - Demonstration that each team member made some contribution on the planning of tickets.
  - Each student in the pair must have at least one commit towards the final result, in separate branches

# A Github repository containing all relevant code for the project
  - Updated Github repository with new commits

# Functionality Requirements
  - Routes via React Router (This is a minimum; you could have more than just these routes. These routes may be named as you wish.)
       - /posts
       - /profile (with messages)
       - /login and /register (this could alternatively be displayed in the profile instead of living in its own route)
 
  - Unauthenticated Users should be able to:
       - See a list of all posts
       - Sign up for an account with username and password
       - Sign in with correct username/password combination

  - Unauthenticated Users should not be able to:
       - Create a new post
       - Delete any post
       - Send a message to the author of any post
 
  - Authenticated Users should be able to:
       - Create a new post
       - Delete a post for which they are the author
       - Send a message to the author of any post for which they are not the author
       - See all messages for any post for which they are the author
       - See all messages they've received in a special view

  - Authenticated Users should not be able to:
       - Delete posts for which they are not the author
       - Send a message to themselves

  - All users should be able to:
       - Filter posts with a simple text matcher (no fetch call needed here)

# Implementation Requirements
  -Javascript Basics
       - variable declaration (correct use of let and const)
       - loop usage (map, forEach, for or while loops)
       - control structures (if, else, else if, ternaries)
       - function declaration
       - function invocation
       - usage of basic data types
       - usage of complex data types, like arrays and objects

  - AJAX Basics
       - usage of HTTP Methods (GET/POST/PATCH/DELETE)
       - handling of asychronous coding for requests
       - usage of try/catch blocks within async functions
       - updating the DOM with results of data requests

  - Front-End Basics including:
       - Well developed React components
       - proper usage of props to share data & functions between components=
       - proper usage of event listeners on React components
       - proper usage of state and effects
       - Well implemented routes (React Router)

  - CSS Basics including:
       - proper use of Flex / Grid for creating layouts
       - proper use of cascading and specificity to prevent bleed into unrelated elements

  - Good User Experience (UX) through a clean interface
 
  - Code
       - is cleanly written
       - has no unused functions or variables
       - has expressive variable, function, and CSS class names
       - is organized into a coherent flow
         
# Stretch Goals:
As time allows, complete the following stretch goals:

Authenticated users can edit a post for which they are the author
Utilize Google FontsLinks to an external site. to add a few to 
your project, or to find fonts hosted elsewhere.

Add icons. Icon fonts allow you to add icons to your application, 
and common icons increase your user's ability to onboard to your 
application much more quickly. Check out Material IconsLinks to 
an external site. (used by adding <link rel="stylesheet" 
href="https://fonts.googleapis.com/icon?family=Material+Icons" /> 
to your <head>), or Font AwesomeLinks to an external site..

 
