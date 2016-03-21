exports.config = {
	framework: 'mocha',

	baseUrl: 'http://localhost:3000',
	seleniumAddress: 'http://127.0.0.1:4444/wd/hub',

	specs: ['../test/e2e/*.js'],

	capabilities: {
		browserName: 'chrome',
		platform: 'MAC'
	}
};