// https://posse.com , https://immi.homeaffairs.gov.au , https://book.flytap.com
describe('Actions demo', function() {
		it(	'Open Ryanair website',function() {
			// moving the mouse into that textbox
			// sendkeys
			// keyboard arrow
			// Keyboard enter

	/*		browser.get("https://posse.com");
			element(by.model("userInputQuery")).sendKeys("river");
			browser.actions().mouseMove(element(by.model("locationQuery")).sendKeys("london")).perform();
			browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
			browser.actions().sendKeys(protractor.Key.ENTER).perform().then(function() {
				browser.sleep(2000);
				expect(element.all(	by.css("div[ng-mouseover*='onSearchResultOver']")).count()).toEqual(7);
				element.all(by.css("div[ng-mouseover*='onSearchResultOver']")).get(0).click();
				element(by.css("a[ng-href*='London/River Island']")).click().then(function() {
					browser.sleep(2000);
				})
			})*/
			
			browser.get("https://rooms.ryanair.com");
			browser.manage().window().maximize();
			element.all(by.tagName("input")).count().then(function(value) {
				console.log("input tage count is  : "+value)
			})
			
			element(by.css("input[data-ref='destination-input']")).sendKeys("New");
			//browser.actions().mouseMove(element(by.css("input[class='destination__input ng-star-inserted']")).sendKeys("New")).perform();
			browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
			browser.actions().sendKeys(protractor.Key.ENTER).perform().then(function() {
				browser.sleep(5000);
			});
			
			
		})
})