describe('Protractor dropDown list Demo', function() {

	function Calculate(a, b, c) {
		element(by.model("first")).sendKeys(a);
		element(by.model("second")).sendKeys(b);
		element(by.model("operator")).element(by.css("option:nth-child(3)")).getText().then(function(text) {
			console.log("using model -> "+text);
		})
		element.all(by.tagName("option")).each(function(item) {
			item.getAttribute("value").then(function(values) {
				if (values == c) {
					item.click();
				}
			})
		})

		element(by.id("gobutton")).click();

	}

	it('Locators', function() {
		browser.get('http://juliemr.github.io/protractor-demo/');
		browser.manage().window().maximize();

		Calculate(15, 5, "MULTIPLICATION");
		Calculate(15, 5, "DIVISION");
		Calculate(15, 5, "ADDITION");
		Calculate(15, 5, "SUBTRACTION");
		Calculate(15, 5, "MODULO");

		element.all(by.repeater("result in memory")).count().then(
				function(value) {
					console.log(value);
				})

		element.all(by.repeater("result in memory")).each(
				function(item) {
					item.element(by.css("td:nth-child(3)")).getText().then(
							function(textValue) {
								console.log(textValue);
							})
				})
	})
})