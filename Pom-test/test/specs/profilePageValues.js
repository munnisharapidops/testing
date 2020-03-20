var profile_Page = require('./openPage')

var ProfilePage = Object.create(profile_Page, {
    /**
     * define elements
     */
   
    profile_btn:{get : function () {return browser.$("//*[text()='MS']")}},
    my_account :{ get : function () {return browser.$("//*[text()='My Account']")}},
   
    /**
     * define or overwrite page methods
     */
    profile_Page: { value: function() {
        Page.open.call(this, 'login');
    } },

    profile: { value: function() {
         this.profile_btn.click();
    } },
    
    my_account_click: { value: function() {
        this. my_account.click();
    } }

});
    
module.exports = ProfilePage;