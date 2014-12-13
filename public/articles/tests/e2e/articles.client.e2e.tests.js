describe('Articles E2E Tests:', function () {
    describe('New Article Page', function () {
        it('should not be able to creat a new article', function () {
            browser.get('http://localhost:3000/#!/articles/create');
            element(by.css('button[type=submit]')).click();
            element(by.binding('error')).getText().then(function (errorText) {
                expect(errorText).toBe('User is not logged in');
            });
        });
    });
});