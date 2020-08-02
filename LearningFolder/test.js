describe('This is a test program Suit', function () {

    function addition(a, b) {
        element(by.css("input[ng-model='first']")).sendKeys(a);
        element(by.css("select[ng-model='operator']")).element(by.css("option[value='ADDITION']")).click();
        element(by.css("input[ng-model='second']")).sendKeys(b);
        element(by.css("button[ng-click='doAddition()']")).click();
    }
    function subtraction(a, b) {
        element(by.css("input[ng-model='first']")).sendKeys(a);
        element(by.css("select[ng-model='operator']")).element(by.css("option[value='SUBTRACTION']")).click();
        element(by.css("input[ng-model='second']")).sendKeys(b);
        element(by.css("button[ng-click='doAddition()']")).click();
    }
    function multiplication(a, b) {
        element(by.css("input[ng-model='first']")).sendKeys(a);
        element(by.css("select[ng-model='operator']")).element(by.css("option[value='MULTIPLICATION']")).click();
        element(by.css("input[ng-model='second']")).sendKeys(b);
        element(by.css("button[ng-click='doAddition()']")).click();
    }
    function division(a, b) {
        element(by.css("input[ng-model='first']")).sendKeys(a);
        element(by.css("select[ng-model='operator']")).element(by.css("option[value='DIVISION']")).click();
        element(by.css("input[ng-model='second']")).sendKeys(b);
        element(by.css("button[ng-click='doAddition()']")).click();
    }
    function modulo(a, b) {
        element(by.css("input[ng-model='first']")).sendKeys(a);
        element(by.css("select[ng-model='operator']")).element(by.css("option[value='MODULO']")).click();
        element(by.css("input[ng-model='second']")).sendKeys(b);
        element(by.css("button[ng-click='doAddition()']")).click();
    }



    it('This is equivalent of a test case which is called as spec', function () {
        browser.get('http://juliemr.github.io/protractor-demo/');

    });

    it('This is second test case.', function () {
        addition(3, 5);
        subtraction(0, 10);
        multiplication(39, 22);
        modulo(34, 9);
        division(99, 10);
        element.all(by.css("tr[ng-repeat='result in memory']")).each(function(item){
            item.element(by.css("td:nth-child(3)")).getText().then(function(result){

                console.log(result);
            })
        })
    });
});