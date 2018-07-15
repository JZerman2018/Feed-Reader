# Project Overview

This project will enhance skills relevant to testing during the development process. During "test-driven development" developers write tests first, before they start developing their application. All the tests initially fail and then they start writing application code to make these tests pass. This project entails a web-based application that reads RSS feeds.

## What will I learn?

I will learn how to use Jasmine to write a number of tests against a pre-existing application. These will test the underlying business logic of the application as well as the event handling and DOM manipulation.


## How will this help my career?

* Writing effective tests requires analyzing multiple aspects of an application including the HTML, CSS and JavaScript - an extremely important skill when changing teams or joining a new company.
* Good tests give you the ability to quickly analyze whether new code breaks an existing feature within your codebase, without having to manually test all of the functionality.


# The following steps will need to be taken to complete this project?

The starter code is provided by Udacity and forked from: (http://github.com/udacity/frontend-nanodegree-feedreader).

Review the functionality of the application within your browser.

Explore the application's HTML (**./index.html**), CSS (**./css/style.css**) and JavaScript (**./js/app.js**) to gain an understanding of how it works.

Explore the Jasmine spec file in **./jasmine/spec/feedreader.js** and review the [Jasmine documentation](http://jasmine.github.io).

Edit the `allFeeds` variable in **./js/app.js** to make the provided test fail and see how Jasmine visualizes this failure in your application.

Return the `allFeeds` variable to a passing state.

Write a test that loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.

Write a test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.

Write a new test suite named `"The menu"`.

Write a test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.

Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.

Write a test suite named `"Initial Entries"`.

Write a test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.

Write a test suite named `"New Feed Selection"`.

Write a test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.

No test should be dependent on the results of another.

Callbacks should be used to ensure that feeds are loaded before they are tested.

Implement error handling for undefined variables and out-of-bound array access.

When complete - all of your tests should pass. 
 
##Testing the Feed Reader Project

How to run this test:

Visit this publicly hosted site: 


How to run the this locally
Option-1 - Easy:

Click "Clone in Desktop" / "Download ZIP" in the repository at https://github.com/JZerman2018/frontend-nanodegree-feedreader.git
Open the folder
Open index.html in your preferred browser
There will be several test results at the bottom of the screen that says "~ specs, ~ failures"


Option-2 Using Terminal and Node.js:

Pre-requisite : Install node.js, npm, and git
Clone the repository. Open your terminal and run git clone https://github.com/JZerman2018/frontend-nanodegree-feedreader.git
Install http-server by npm install -g http-server
Then run http-server in terminal inside the root of the cloned repo.
Go to the URL http://localhost:8080/ in browser.

##Dependencies:

JavaScript
Jasmine 2.1.2
JQuery 2.1.1
Handlebars 2.0.0
