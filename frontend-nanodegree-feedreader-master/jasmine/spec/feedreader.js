/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
   //Testing suite of RSS feeds
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        //Ensures all feeds are defined and not empty
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds instanceof Array).toBeTruthy();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        // Ensures all feeds has URL defined and is not empty
        it("feeds have URL", function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
                expect(feed.url).toMatch(/^(http|https):\/\//);
            });
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        //Make sure all feeds have names and not empty
        it("feeds have names", function() {
            allFeeds.forEach(function(feed) {
            expect(feed.name).toBeDefined();
            expect(typeof feed.name).toBe('string');
            expect(feed.name.length).not.toBe(0);
            });
        });
    });


    /* TODO: Write a new test suite named "The menu" */

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        //This test suite is related to "The menu"
        describe('The menu', function() {
            //check if menu is hidden by default using hasClass function
            it('menu should be hidden by default', function() {
                expect($('body').hasClass('menu-hidden')).toBe(true);
            });
        


         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        //Test to see if the menu becomes visible upon click and hides when clicked again
        it('menu should be visible when clicked', function() {
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false);

            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });


    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

    //Test suite for "Initial Entries"
    describe('Initial Entries', function() {
    // Using Jasmine beforeEach and done() functions with loadFeed for async test
    beforeEach(function (done) {
        loadFeed(0, done);
    });

    //This test checks for a single .entry element within the .feed container
    it('a single .entry element within .feed container', function () {
        expect($('.feed .entry').length).toBeGreaterThan(0);
    });
    });

    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

    //Test suite for "New Feed Selection"
    describe('New Feed Selection', function() {
        //This test will check if content changes after loading a new feed into the loadFeed function
        let initialFeed;
        let updatedFeed;
    //This function runs initial loadFeed function with ID of 0 for (default/initial) and 1 (second)

    beforeEach(function (done) {
        loadFeed(0, function() {
            initialFeed = $('.feed').text();

        loadFeed(1, function() {
            updatedFeed = $('.feed').text();
            done();
        });
        });
    });

    //This test will check if feeds are different
    it('shows new feed', function() {
        expect(updatedFeed).not.toBe(initialFeed);
    });

    });     
}());
