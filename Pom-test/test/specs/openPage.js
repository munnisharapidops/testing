function Page () {
    this.title = 'My Page';
}

Page.prototype.open = function (path) {
    browser.url('https://kalp.salesmate.io/login.html#');
}

module.exports = new Page()