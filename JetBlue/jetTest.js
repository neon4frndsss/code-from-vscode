describe('Testsuite for jetBlue website', function () {

    it('Opening the website', function () {

        browser.get("https://www.jetblue.com/")
    })

    it('Send details', function () {

        element(by.css("input[placeholder='Where from?']")).click().sendKeys("Dublin"+ protractor.Key.ENTER);
        element(by.css("input[placeholder='Where to?']")).click().sendKeys("Boston" + protractor.Key.chord(protractor.Key.ARROW_DOWN, protractor.Key.ENTER));
        browser.sleep(5000);
        /*browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
    
        browser.actions().sendKeys(protractor.Key.ENTER).perform();*/
    })

}) 