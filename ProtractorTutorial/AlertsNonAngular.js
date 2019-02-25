describe('Protractor Suite', function(){
	
	
	it('Alert handling for NonAngular websites' , function(){
		browser.waitForAngularEnabled(false);
		browser.get("http://qaclickacademy.com/practice.php");
		browser.manage().window().maximize();
		element(by.id("confirmbtn")).click().then(function() {
			browser.sleep(5000);
		});
		browser.switchTo().alert().accept().then(function() {
			browser.sleep(2000);
			console.log("Alert is accepted using accept() and cancelled using dismiss() ... ")
		})
	})	
	
})
