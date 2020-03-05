var Page = require('./openPage')

var LoginPage = Object.create(Page, {
    /**
     * define elements
     */
    username: { get: function () { return browser.$('#email'); } },
    password: { get: function () { return browser.$('#password'); } },
    form:     { get: function () { return browser.$('#login_btn'); } },
   
    /**
     * define or overwrite page methods
     */
    open: { value: function() {
        Page.open.call(this, 'login');
    } },

    submit: { value: function() {
        this.form.click();
    } }
});

module.exports = LoginPage;