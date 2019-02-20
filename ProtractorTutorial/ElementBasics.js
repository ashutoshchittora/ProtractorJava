describe('Protractor Element Basics', function(){
	
	

	it('Locators' , function(){
		
		console.log("TestCaseName - Locators");
		browser.get('http://juliemr.github.io/protractor-demo/').then(function() {
			browser.sleep(5000);
			browser.driver.manage().window().maximize();
		});
		element(by.model("first")).sendKeys("3").then(function() {
			browser.sleep(5000);			
		});
		element(by.model("second")).sendKeys("5").then(function() {
			browser.sleep(5000);
		});
		element(by.id("gobutton")).click().then(function() {
			browser.sleep(5000);
		});
		element(by.css("h2[class = 'ng-binding']")).getText().then(function(textOfh2CssClass){
			console.log(textOfh2CssClass);		
			// if then() not used here then the getText() will return all the promises instead of value - 
		});
			// below then() is not needed because expect() is  a jasmine method which takes care of promises
		expect(element(by.css("h2[class = 'ng-binding']")).getText()).toBe("8");
	})	
	
	
})

