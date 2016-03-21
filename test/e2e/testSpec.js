'use strict';

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;

describe('testSpec', function() {

	it('clicks the buttons and checks result', function() {
		browser.get('/src/index.html');

		var btn = $('[debugId="btn1"]');
		btn.click();

		var result = $('[debugId="result"]');

		// THIS SHOULD FAIL
		expect(result.getText()).to.eventually.equal('fail');
	});
});