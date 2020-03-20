class contactUs_page{
    get firstName(){
        return $("[name='first_name']");
    }
    get lastName(){
        return $("[name='last_name']");
    }
    get emailAddress(){
        return $("[name='email']");
    }
    get comments(){
        return $("textarea");
    }
    get submitButton(){
        return $("[type='submit']");
    }
    get successfulSubmissionHeader(){
        return $("#contact_reply h1");
    }
    get unsuccessfulSubmissionHeader(){
        return $("body");
    }
}

module.exports=new contactUs_page();