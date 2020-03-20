const assert = require('assert');
   describe('waitForCommands', () => {
     it('waitForDisplayed', ()=> {
         browser.url('https://the-internet.herokuapp.com/dynamic_loading/1');
         $('#start button').click();
         $('#finish').waitForDisplayed();  //will wait for text present under ID finish to display.
         assert.equal( ($('#finish h4').getText()),'Hello World!');
     });
});