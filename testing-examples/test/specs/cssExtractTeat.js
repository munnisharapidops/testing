describe('Test the webdriveruniversity homepage',function(){
    it('Output the height of the homepage carousel',function(){
        browser.url('http://webdriveruniversity.com/');
        browser.pause(2000);
        let divCarouselHeight=browser.getCssProperty('#udemy-promo-thumbnail','height');
        console.log(divCarouselHeight);
    })
})