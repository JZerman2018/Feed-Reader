/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
/* This is our first test - it tests to make sure that the
 * allFeeds variable has been defined and that it is not
 * empty. Experiment with this before you get started on
 * the rest of this project. What happens when you change
 * allFeeds in app.js to be an empty array and refresh the
 * page?
 */
$(function() {
	//Testing suite of RSS feeds
	describe('RSS Feeds', function() {
		//Ensures all feeds are defined and not empty
		it('are defined and not empty', function() {
			expect(allFeeds).toBeDefined();
			expect(allFeeds.length).not.toBe(0);
		});
		
		// Ensures all feeds have URL defined and is not empty 
		it("feeds have URL defined and are not empty", function() {
			allFeeds.forEach(function(feed) {
				expect(feed.url).toBeDefined();
				expect(feed.url.length).not.toBe(0);
			});
		});
		
		//Make sure all feeds have names and not empty
		it("feeds have names and are not empty", function() {
			allFeeds.forEach(function(feed) {
				expect(feed.name).toBeDefined();
				expect(typeof feed.name).toBe('string');
				expect(feed.name.length).not.toBe(0);
			});
		});
	});
	
	//This test suite is related to "The menu"
	describe('The menu', function() {
		//check if menu is hidden by default using hasClass function
		it('menu should be hidden by default', function() {
			expect($('body').hasClass('menu-hidden')).toBe(true);
		});
		
		//Test to see if the menu becomes visible upon click and hides when clicked again
		it('menu should be visible when clicked', function() {
			$('.menu-icon-link').trigger('click'); //show the menu
			expect($('body').hasClass('menu-hidden')).toBe(false);
			$('.menu-icon-link').trigger('click'); //hides the menu again
			expect($('body').hasClass('menu-hidden')).toBe(true);
		});
	});
	
	//Test suite for "Initial Entries"
	describe('Initial Entries', function() {
		// Using Jasmine beforeEach and done() functions for callback with loadFeed for async test
		beforeEach(function(done) {
			loadFeed(0, done);
		});
		//This test checks for a single .entry element within the .feed container after loadFeed function
		it('has a single .entry element within .feed container', function() {
			expect($('.feed .entry').length).toBeGreaterThan(0);
		});
	});
	
	//Test suite for "New Feed Selection"
	describe('New Feed Selection', function() {
		//This test will check if content changes after loading a new feed into the loadFeed function
		let initialFeed;
		let updatedFeed;
		//This function runs initial loadFeed function with ID of 0 for default/initial list and 1 for second list
		beforeEach(function(done) {
			loadFeed(0, function() {
				initialFeed = $('.feed').html();
				loadFeed(1, function() {
					updatedFeed = $('.feed').html();
					done();
				});
			});
		});
		//This test will check if feeds are different
		it('shows new feed', function(done) {
			expect(updatedFeed).not.toBe(initialFeed);
			done();
		});
	});
}());