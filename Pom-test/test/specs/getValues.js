var Page = require('./openPage')

var LoginPage = Object.create(Page, {
    /**
     * define elements
     */
    email: { get: function () { return browser.$('#email'); } },
    password: { get: function () { return browser.$('#password'); } },
    form:     { get: function () { return browser.$('#login_btn'); } },
    profile_btn:{ get : function () {return browser.$("//*[text()='MS']")}},
    my_account :{ get : function () {return browser.$("//*[text()='My Account']")}},
    firstname:{ get : function () {return browser.$("#firstName")}},
    /**
     * define or overwrite page methods
     */
    open: { value: function() {
        Page.open.call(this, 'login');
    } },

    submit: { value: function() {
        this.form.click();
    } },

    profile: { value: function() {
         this.profile_btn.click();
    } },

    my_account_click: { value: function() {
        this. my_account.click();
    } },
    firstname_click: { value: function() {
        this. firstname.click();
    } }

});
    
module.exports = LoginPage;