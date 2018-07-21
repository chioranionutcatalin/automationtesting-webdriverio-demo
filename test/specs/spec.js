var assert = require('assert');


 describe('action:', function() {
    it('save a user and a pasword and see if link changes after the submit', function () {
        
        browser.url('http://thedemosite.co.uk/addauser.php');
        browser.setValue('input[name="username"]', 'admin');
        browser.setValue('input[name="password"]', 'adminpass');
        browser.submitForm('input[name="FormsButton2"]');
        var pageUrl = browser.getUrl();
        console.log("The page url is: ", pageUrl);
        assert.notEqual(pageUrl, 'http://thedemosite.co.uk/addauser.php');
        assert.equal(pageUrl, 'http://thedemosite.co.uk/savedata.php'); 
    });
});
describe('action:', function() {
    it('login test cu date gresite ', function () {
        browser.url('http://thedemosite.co.uk');
        browser.url('http://thedemosite.co.uk/login.php');
        browser.setValue('input[name="username"]', 'aaaaaa');
        browser.setValue('input[name="password"]', 'aaaaa');
        browser.submitForm('input[name="FormsButton2"]');
        var pageUrl = browser.getUrl();
        console.log("The page url is: ", pageUrl);
       
        browser.element('b*=**Failed Login**');
    });
});
describe('action:', function() {
    it('login test success ', function () {
        browser.url('http://thedemosite.co.uk');
        browser.url('http://thedemosite.co.uk/login.php');
        browser.setValue('input[name="username"]', 'admin');
        browser.setValue('input[name="password"]', 'adminpass');
        browser.submitForm('input[name="FormsButton2"]');
        var pageUrl = browser.getUrl();
        console.log("The page url is: ", pageUrl);
       
        browser.element('b*=**Successful Login**');
    });
}); 

describe('seach ac on google', function() {
    it('should be able to click the right page', function () {
        
        //var expect = require('chai').expect;
        
        browser.url('http://google.ro');

        // filtering property commands
        $('*[name="q"]').setValue('Automatica si calculatoare cluj');
        //browser.click('*[name="btnK"]');
        browser.keys('Enter');
        browser.element('a*=Facultatea de Automatica si Calculatoare: Acasa').click();
        var pageUrl = browser.getUrl();
        
        assert.notEqual(pageUrl, 'www.google.ro');
        assert.equal(pageUrl, 'https://ac.utcluj.ro/'); 
        
    });
});


//in testautomation

  //$ selenium-standalone start
  //$ ./node_modules/.bin/wdio wdio.conf.js