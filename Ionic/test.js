describe("Sample test", function () {

    it("skip on welcome", function () {

        browser.get("https://qa-assignment.firebaseapp.com/tutorial");
        var skip = element(by.css("ion-button[class*='hydrated']"));
        if ((skip.isDisplayed()).toEquals(true)) {
            skip.click();

        }

    })
    it("Click hamburger menu", function () {
        var menu=element(by.css("button[type='button']"));
        if ((menu.isDisplayed()).toEquals(true)){
            menu.click();
        }
        var firstMenuSet=element(by.css("ion-list[class='list list-md hydrated']:nth-child(1)"))
        
    }
    )
})