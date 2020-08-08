describe("This is the automation of homepage", function () {

    function selectProduct(product) {
        element.all(by.css("div[class='card-body']")).then(function (products) {
            products.element(by.tagName("h4")).getText().then(function (productName) {
                if (productName.toEqual(product)) {
                    products.element(by.css("button[class*='btn-info']")).click();
                }
            })
        })
    }

    it("This is to validate the form", function () {

        browser.get("https://qaclickacademy.github.io/protocommerce/");
        element(by.css("input[name='name']")).sendKeys("Student1");
        element(by.css("input[name='email']")).sendKeys("student1@mail.com");
        element(by.css("input[id='exampleInputPassword1']")).sendKeys("Password");
        element(by.css("[id='exampleCheck1']")).click();
        element(by.cssContainingText("select[id='exampleFormControlSelect1'] option", "Female")).click();
        element.all(by.name("inlineRadioOptions")).first().click();
        element(by.css("input[type='submit']")).click();
        expect(element(by.css("div[class*='alert-dismissible']")).getText()).toContain("Success! The Form has been submitted successfully!.")
        element(by.css("input[name='name']")).sendKeys("S")
        expect(element(by.css("[class*='alert-danger']")).getText()).toContain("Name should be at least 2 characters");
        element(by.css("a[class='nav-link']")).click();
        selectProduct("iphone X");
        selectProduct("Nokia Edge");
        element(by.css("a[class*='btn-primary']")).getText().then(function(checkoutValue){
            

        })
    })

})