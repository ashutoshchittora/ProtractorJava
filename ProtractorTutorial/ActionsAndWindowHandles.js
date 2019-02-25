/*http://www.wikiwand.com/
https://www.upwork.com/o/profiles/browse/c/web-mobile-software-dev/sc/qa-testing/?q=selenium%20automation
https://www.gettyimages.in/
https://www.istockphoto.com/in
https://disneycruise.disney.go.com/
https://www.tsn.ca/
https://genius.com/
https://www.ford.com/
https://www.hopscotch.in/
https://prerender.io/
https://www.exambazaar.com/
https://ga.me/
https://goodfil.ms/
*/

/*http://www.wikiwand.com/news
https://www.upwork.com
https://disneycruise.disney.go.com/
https://www.ford.com/search/?f%3AsearchInputString=Edge&f%3Asearch=&formID=globalSearchForm
https://www.hopscotch.in/search?q=%7B%22orderRule%22:-1,%22filterQuery%22:%22productTypeId%3D951%22,%22productTypeId%22:951,%22searchBy%22:%22Baby%20Walkers%20in%20Nursery%22%7D
https://www.exambazaar.com/	
*/	
describe('Actions demo', function() {
		it(	'Open Angular website',function() {
						
/*			browser.get("https://disneycruise.disney.go.com/");
			browser.manage().window().maximize();
			browser.actions().mouseMove(element(by.model("searchBoxVm.widgetModel")).sendKeys("Paris")).perform();
			browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
			browser.actions().sendKeys(protractor.Key.ENTER).perform().then(function() {
				browser.sleep(5000);		

			})		*/
			
			browser.get("https://www.exambazaar.com");
			browser.manage().window().maximize();
			element(by.css('[ng-src="icons/header-search-white.png"]')).click().then(function() {
				browser.sleep(5000);	
			});
			browser.actions().mouseMove(element(by.id("input-2")).sendKeys("Chemistry")).perform().then(function() {
				browser.sleep(2000);	
			});
			
			browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
			browser.actions().sendKeys(protractor.Key.ENTER).perform().then(function() {
				browser.sleep(5000);
				expect(element(by.css('.pageTitleFont.margin0.textBlack.bold.paddingR10.ng-binding.flex')).getText()).toContain("Chemistry Point");
					element(by.id("reviewLink")).click().then(function() {
					browser.sleep(3000);
					browser.getAllWindowHandles().then(function(handles) {
						browser.switchTo().window(handles[1]);
						browser.getTitle().then(function(title) {
							console.log("title of the page after switching the window -> "+title);
						})
						browser.switchTo().window(handles[0]);
						browser.getTitle().then(function(title) {
							console.log("title of the page after switching the window -> "+title);
						})
					})
				});				
				
			})	
			
		})
})



/*describe('Actions demo',function() {  

	it('Open Posse website',function() {
		//	moving the mouse into that textbox ; sendkeys ; keyboard arrow ; Keyboard enter ; 
		browser.get("https://posse.com/");
		element(by.model("userInputQuery")).sendKeys("river");
		browser.actions().mouseMove(element(by.model("locationQuery")).sendKeys("london")).perform();
		browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
		browser.actions().sendKeys(protractor.Key.ENTER).perform().then(function()
				{
					browser.sleep(2000);
					expect(element.all(by.css("div[ng-mouseover*='onSearchResultOver']")).count()).toEqual(7);
					element.all(by.css("div[ng-mouseover*='onSearchResultOver']")).get(0).click();
					element(by.css("a[ng-href*='London/River Island']")).click().then(function()
					{
						browser.getAllWindowHandles().then(function(handles) {
							browser.switchTo().window(handles[1]);// result opens in new window which is handles[1] and [0] is the parent or current window. 
							browser.getTitle().then(function(title) {
								console.log("title of the page after switching the window -> "+title);
							})
						})
					})
				})
			})
		})*/