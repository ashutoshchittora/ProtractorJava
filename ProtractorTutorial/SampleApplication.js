describe('Protractor Sample Application Automation', function() {
	it('SampleApplicationTestCase', function() {
		
		function selectItemFunction(product){
			
			/*
			 * take the 4 card* tagNames into list
			 * match each element with the product received . if matched -- do something .
			*/
			element.all(by.tagName("app-card")).each(function(item) {
				item.element(by.css("h4[class='card-title'] a")).getText().then(function(text) {
					if(text==product.toString()){
						element(by.css("button[class='btn btn-info']")).click().then(function(){
							browser.sleep(5000);
						});
					}
				})
			})			
		}
		
		browser.get("https://qaclickacademy.github.io/protocommerce/");
		browser.driver.manage().window().maximize();
		element(by.name("name")).sendKeys("AutomatorAsh");
		element(by.css("input[name='email']")).sendKeys("pqr@pqr.pqr");
		element(by.id("exampleInputPassword1")).sendKeys("youcannotcrackme");
		element(by.css("input[type='checkbox']")).click();
		element(by.cssContainingText("[id='exampleFormControlSelect1'] option","Female")).click();
		element.all(by.name("inlineRadioOptions")).first().click();
		element(by.buttonText("Submit")).click().then(function() {
			element(by.css("div[class*='success']")).getText().then(function(text) {
				console.log(text);
			})
			
			element(by.name("name")).clear();
			element(by.name("name")).sendKeys("A").then(function() {
				element(by.css("[class='alert alert-danger']")).getText().then(function(text) {
					console.log(text);
				})
			})
			
			element(by.linkText("Shop")).click();
			
			/* add two items in the cart*/
			selectItemFunction("Blackberry");
			selectItemFunction("iphone X");				
			
			element(by.partialLinkText("Checkout")).getText().then(function(text) {
				var splitText = text.split("(");
				var x = Number(splitText[1].trim().charAt(0));
				var y = x+15;
				console.log("coverted a string number to integer using NUMBER class --> "+y);
				expect(x).toBeLessThan(y);
			})
			
			
		})
		
	})
})
