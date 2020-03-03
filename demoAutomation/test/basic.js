//const request = require('sync-request');
describe('demoaut page',()=>{
    it('sign in ',()=>{
         browser.url('http://newtours.demoaut.com/');
        const title =  browser.getTitle();
        console.log('title is'+ ' - ' +title);
        const userName=$("[name='userName']");
        userName.waitForDisplayed();
        userName.addValue('kalptest');
        browser.pause('2000');
        const password=$("[name='password']");
        password.waitForDisplayed();
        password.addValue('kalptest');
        browser.pause('2000');
        const loginButton=$("[name='login']");
        loginButton.click();

        browser.switchWindow('Find a Flight: Mercury Tours:');

        const radioButton=$("//*[@value='roundtrip']");
        radioButton.click();
        browser.pause('1000');

        const passengers=$("[name='passCount']");
        passengers.click();
        const pass_count=$("//*[@value='1']");
        pass_count.click();
        browser.pause('1000');
        passengers.click();
        browser.pause('2000');


        const departingFrom=$("[name='fromPort']");
        departingFrom.click();
        const departingFrom_value=$("//*[@value='London']");
        departingFrom_value.click();
        browser.pause('1000');
        departingFrom.click();
       // browser.pause('2000');

        const month=$("[name='toMonth']");
        month.click();
        const month_on=$("//*[@value='7']");
        month_on.click();
        browser.pause('1000');
        month.click();
       // browser.pause('2000');

        const date=$("[name='toDay']");
        date.click();
        const date_on=$("//*[@value='11']");
        date_on.click();
        browser.pause('1000');
        date.click();
        //browser.pause('2000');

        const arriving=$("[name='toPort']");
        arriving.click();
        const arriving_on=$("//*[@value='Paris']");
        arriving_on.click();
        browser.pause('1000');
        arriving.click();
        //browser.pause('2000');

        const return_month=$("[name='toMonth']");
        return_month.click();
        const return_month_on=$("//*[@value='10']");
        return_month_on.click();
        browser.pause('1000');
        return_month.click();
       // browser.pause('2000');

        const return_date=$("[name='toDay']");
        return_date.click();
        const return_date_on=$("//*[@value='2']");
        return_date_on.click();
        browser.pause('1000');
        return_date.click();
       // browser.pause('2000');

        const service_class=$("//*[@value='Coach']");
        service_class.click();
       // browser.pause('2000');

        const airline=$("[name='airline']");
        airline.click();
        const airline_value=$("//*[text()='Blue Skies Airlines']");
        airline_value.click();
        browser.pause('1000');
        airline.click();
        //browser.pause('2000');

        const continue_button=$("[name='findFlights']");
        continue_button.click();

        browser.switchWindow('Select a Flight: Mercury Tours');

        const continue_button2=$("[name='reserveFlights']");
        continue_button2.click();

        browser.switchWindow('Book a Flight: Mercury Tours');

        const firstName=$("[name='passFirst0']");
        firstName.waitForDisplayed();
        firstName.addValue('kalp');
       // browser.pause('2000');

        const lastName=$("[name='passLast0']");
        lastName.waitForDisplayed();
        lastName.addValue('shah');
       // browser.pause('2000');

        const meal=$("[name='pass.0.meal']");
        meal.click();
        const meal_name=$("//*[@value='HNML']");
        meal_name.click();
        browser.pause('1000');
        meal.click();
        //browser.pause('2000');

        const card_type=$("[name='creditCard']");
        card_type.click();
        const card_type_value=$("//*[@value='BA']");
        card_type_value.click();
        browser.pause('1000');
        card_type.click();
        //browser.pause('2000');

        const card_number=$("[name='creditnumber']");
        card_number.waitForDisplayed();
        card_number.addValue('00123654789');
        //browser.pause('2000');

        const expire_month=$("[name='cc_exp_dt_mn']");
        expire_month.click();
        const expire_month_name=$("//option[contains(text(),'04')]");
        expire_month_name.click();
        browser.pause('1000');
        expire_month.click();
        //browser.pause('2000');

        const expire_date=$("[name='cc_exp_dt_yr']");
        expire_date.click();
        const expire_date_value=$("//*[@value='2008']");
        expire_date_value.click();
        browser.pause('1000');
        expire_date.click();
       // browser.pause('2000');

        const cc_firstName=$("[name='cc_frst_name']");
        cc_firstName.waitForDisplayed();
        cc_firstName.addValue('kalp');
        //browser.pause('2000');


       const cc_middleName=$("[name='cc_mid_name']");
       cc_middleName.waitForDisplayed();
       cc_middleName.addValue('shah');
       // browser.pause('2000');

       const cc_lastName=$("[name='cc_last_name']");
       cc_lastName.waitForDisplayed();
       cc_lastName.addValue('jain');
       // browser.pause('2000');

        const billing_address=$("[name='ticketLess']");
        billing_address.click();
       // browser.pause('2000');

        const billingAddress=$("[name='billAddress1']");
        billingAddress.waitForDisplayed();
        billingAddress.addValue('rapidops');
       // browser.pause('2000');

        const billingAddress2=$("[name='billAddress2']");
        billingAddress2.waitForDisplayed();
        billingAddress2.addValue('science city');
       // browser.pause('2000');

        const billing_city=$("[name='billCity']");
        billing_city.waitForDisplayed();
        billing_city.addValue('ahmedabad');
       // browser.pause('2000');

        const billing_state=$("[name='billCity']");
        billing_state.waitForDisplayed();
        billing_state.addValue('gujarat');
       // browser.pause('2000');

        const billing_postalcode=$("[name='billZip']");
        billing_postalcode.waitForDisplayed();
        billing_postalcode.addValue('38009');
       // browser.pause('2000');

        const billing_country=$("[name='billCountry']");
        billing_country.click();
        const billing_country_name=$("//*[@value='92']");
        billing_country_name.click();
       // browser.pause('1000');
        billing_country.click();
        //browser.pause('2000');

      const deli_button=$("[name='buyFlights']");
      deli_button.click();

      browser.switchWindow('Flight Confirmation: Mercury Tours');

      const logout_button=$("//a[@href='mercurysignoff.php']");
      logout_button.click();
      


        



        





    })
})