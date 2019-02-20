describe('Protractor for Non-Angular website', function() {
	it('non-AngularTestCase1', function() {

		browser.waitForAngularEnabled(false);
		browser.get("http://www.trivago.in/");
		element(by.className("btn btn--primary horus-btn-search")).click();
		
		expect(element(by.className("btn-horus__type")).getText()).toBe("Check-in");
		/*console.log(element(by.className("btn-horus__type")).getText()).then(function(textOutut){
			console.log(textOutut);
		});*/

	})

})