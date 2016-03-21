Based on https://github.com/byverdu/BussuAngularTest

Simple angular app with protractor based e2e test.

Required external packages:
webdriver-manager: https://www.npmjs.com/package/webdriver-manager
protractor@2: https://github.com/angular/protractor

I installed both globally (npm install -g).

Install app packages:
1. npm install
2. bower install

Run the app:
1. npm start

Run e2e:
1. protractor config/protractor-conf.js

Reproducing the bug:
- Test should run and fail (because of wrong assertion).
- Putting ".only" on the "describe" part - test run and fails - OK.
- Putting ".only" on the "it" part - test doesn't run and passed.
