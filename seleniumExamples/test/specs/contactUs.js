let contactUs_page=require("./pageObjects/contactUs_page.js");


brforeEach(function(){
    browser.url('/Contact-Us/contactus.html');
})

describe('Test Contact Us form WedriverUni',function(){
    

   

    function setFirstName(firstName){
        return browser.setValue(firstNameSelector,firstName);
    }

    function setLastName(lastName){
        return browser.setValue(lastNameSelector,lastName);
    }

    function setEmailAddress(emailAddress){
        return browser.setValue(emailAddressSelector,emailAddress);
    }

    function setComments(comments){
        return browser.setValue(commentsSelector,comments);
    }

    function ClickSubmitButton(){
        return browser.click(submitButtonSelector);
    }

    function confirmSuccessfulSubmission(){
        let validateSubmissionHeader=browser.waitUntill(function(){
            return browser.getText(successfulSubmissionSelector)== 'Thank you  for your Message!';
        },3000)
        expect (validateSubmissionHeader,'Successdul Submission message does not Exist!').to.be.true
    }

    function confirmUnsuccessfulSubmission(){
        let validateSubmissionHeader=browser.waitUntill(function(){
            return browser.getText(unsuccessfulsubmissionSelector)== 'Error : all fields are required'
        },3000)
        expect (browser.getText(unsuccessfulsubmissionSelector)).to.include('Error : all fields are required');
    }

    contactusDetails.brforeEach(function(contactDetails){
        it('Should be able to submit a successfull submission via contact us form',function(done){
            setFirstName('joe');
            setLastName('Blogs');
            setEmailAddress(contactusDetail.email);
            setComments(contactusDetail.body);
            ClickSubmitButton()
            confirmSuccessfulSubmission();
        });
    });
         it('Should not be able to submit a successful submission via contact us form as all fields are required',function(done){
            setFirstName('Mike');
            setLastName('Woods');
            setEmailAddress('mike_woods@gmail.com');
            ClickSubmitButton()
            confirmUnsuccessfulSubmission(); 

        });
        it('Should not be able to submit a successful submission via contact us form as all fields are required',function(done){
            setFirstName('sarah');
            setEmailAddress('sarah_woods@gmail.com');
            ClickSubmitButton();
            confirmUnsuccessfulSubmission(); 

        });

        it('Should not be able to suvmit a successful submission via contact us form as all fields are required',function(){
            setLastName('jomes');
            setEmailAddress('sarah_momes@gmail.com');
            ClickSubmitButton();
            confirmUnsuccessfulSubmission(); 

        });
})
