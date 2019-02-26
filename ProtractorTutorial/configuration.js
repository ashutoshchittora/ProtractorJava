exports.config = {
		seleniumAddress:'http://localhost:4444/wd/hub',
		// seleniumAddress parameter is not mandatory . you can comment above and script will run seamless.For firefox execution, start selenium sever.
		// protractor will take the configuration from Appdata>npm>selenium>
		specs:['Frames.js',],
		capabilities: {
			 	browserName: 'chrome',
			    acceptSslCerts: true,
			    shardTestFiles: false,
			    maxInstances: 1
		}
	// default browser is chrome if you do not explicitly provide capabilities.
};