describe('Protractor Synchronization', function() {
	it('NonAngularSyncTestCase', function() {

		browser.waitForAngularEnabled(false);
		browser.driver.manage().window().maximize(); // browser.manage().window().maximize() this is same as protractor is a wrapper of webdriver . see the return type in both cases. 
		browser.get("http://www.itgeared.com/demo/1506-ajax-loading.html");
		element(by.css("a[href*='loadAjax']")).click();
		var EC = protractor.ExpectedConditions;		
		browser.wait(EC.invisibilityOf(element(by.id("loader"))),8000);

		element(by.id("results")).getText().then(function(text) {
			console.log("The ajax text after expectedConditions wait is --> "+text)
		})		

	})

})