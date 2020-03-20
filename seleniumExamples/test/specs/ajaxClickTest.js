describe('Test that the button is clickable once the ajax loader completes loating',function(){ 
    it('Attempt to click the button asap', function(done){
        browser.url('http://webdriveruniversity.com/Ajax-Loader/index.html');
        browser.click('#button1');
    })
    it('Attempt to click the button after 7 seconds', function(done){
        browser.url('http://webdriveruniversity.com/Ajax-Loader/index.html');
        this.timeout(20000);
        browser.pause(7000);
        browser.click('#button1');
        browser.pause(7000);
    })
})