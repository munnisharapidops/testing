function Page () {
    this.title = 'My Page';
}

Page.prototype.open = function (path) {
    browser.url('https://kalp.salesmate.io/login.html#');
}
// Page.prototype.profile_page_open = function (path) {
//     browser.url('https://kalp.salesmate.io/#/app/user/profile');
// }


module.exports = new Page();
//module.exports = new profile_page();

