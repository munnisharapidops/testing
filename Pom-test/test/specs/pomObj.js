class login_page{
    get email(){
        return $("[name='email']");
    }
    get password(){
        return $("[name='password']");
    }
   
    get submitButton(){
        return $("#login_btn");
    }
   
}

module.exports=new login_page();