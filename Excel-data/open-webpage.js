let webdriverio = require('webdriverio');
let options = { desiredCapabilities: { browserName: 'chrome' } };
let client = webdriverio.remote(options);

it('should get the url of the current page', function () {
    browser.url('http://webdriver.io');

    var url = browser.getUrl();
    console.log(url);
    // outputs the following:
    // "http://webdriver.io"
});
   