describe('Protractor Suite', function(){
	
	
	it('Protractor test case1' , function(){
		browser.get("https://angularjs.org");
		
	})
	
	it('Protractor test case2' , function(){
		
		
	})
	
})

// describe ('suiteName' , function with testcase/(it)blocks) - describe accepts 2 args only
//it('testCaName' , ) . Each it() block is a tree in jasmine framework
// Spec File - like testng.xml , a config file to run the script. Run as 'Spec'
// The describe and it syntax is from the Jasmine framework. browser is a global created by Protractor, which is used for browser-level commands such as navigation with browser.get.