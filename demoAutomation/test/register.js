describe('demoaut page',()=>{
    it('register',()=>{
        browser.url("http://newtours.demoaut.com/mercurywelcome.php");
        const registerButton=$("//*[text()='REGISTER']");
        registerButton.click();
        browser.switchWindow('Register: Mercury Tours');

        const firstName=$("[name='firstName']");
        firstName.waitForDisplayed();
        firstName.addValue('munnisha');
        browser.pause('1000');

        const lastName=$("[name='lastName']");
        lastName.waitForDisplayed();
        lastName.addValue('sheik');
        browser.pause('1000');


        const phoneNum=$("[name='phone']");
        phoneNum.waitForDisplayed();
        phoneNum.addValue('1234567899');
        browser.pause('1000');


        const email=$('#userName');
        email.waitForDisplayed();
        email.addValue('abc@gmail.com');
        browser.pause('1000');

        const address1=$("[name='address1']");
        address1.waitForDisplayed();
        address1.addValue('rapidops');
        browser.pause('1000');

        const address2=$("[name='address2']");
        address2.waitForDisplayed();
        address2.addValue('science city');
        browser.pause('1000');

        const city=$("[name='city']");
        city.waitForDisplayed();
        city.addValue('science city');
        browser.pause('1000');

        const state=$("[name='state']");
        state.waitForDisplayed();
        state.addValue('Ahmedabad');
        browser.pause('1000');

        const postalCode=$("[name='postalCode']");
        postalCode.waitForDisplayed();
        postalCode.addValue('380009');
        browser.pause('1000');

        const country=$("[name='country']");
        country.click();
        const country_name=$("//*[@value='92']");
        country_name.click();
        browser.pause('1000');
        country.click();

        const userName=$("[name='email']");
        userName.waitForDisplayed();
        userName.addValue('KalpTest');
        browser.pause('1000');

        const password=$("[name='password']");
        password.waitForDisplayed();
        password.addValue('KalpTest');
        browser.pause('1000');

        const cnfm_password=$("[name='confirmPassword']");
        cnfm_password.waitForDisplayed();
        cnfm_password.addValue('KalpTest');
        cnfm_password.pause('1000');

        const submitButton=$("[name='register']");
        submitButton.click();

        browser.switchWindow('Register: Mercury Tours');
        const title= browser.getTitle();
        console.log("registration title" + title);








    })
})