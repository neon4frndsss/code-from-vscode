describe("This is the automation of homepage",function(){

it("This is to validate the form", function(){

    browser.get("https://qaclickacademy.github.io/protocommerce/");
    element(by.css("input[name='name']")).sendKeys("Student1");
    element(by.css("input[name='email']")).sendKeys("student1@mail.com");
    element(by.css("input[id='exampleInputPassword1']")).sendKeys("Password");
    element(by.css("[id='exampleCheck1']")).click();
    element(by.cssContainingText("select[id='exampleFormControlSelect1'] option","Female")).click();
    element.all(by.name("inlineRadioOptions")).first().click();
    element(by.css("input[type='submit']")).click();
    expect(element(by.css("div[class*='alert-dismissible']")).getText()).toContain("Success! The Form has been submitted successfully!.")
    element(by.css("input[name='name']")).sendKeys("S")
    expect(element(by.css("[class*='alert-danger']")).getText()).toContain("Name should be at least 2 characters");


})

})