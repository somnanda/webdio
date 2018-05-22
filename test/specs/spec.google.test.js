import GooglePage from '../../src/pageobjects/google.page';
import reporter from 'wdio-allure-reporter';


describe('Google Home Page Loading and Searching', () => {
    it('Should load Google Home Page', () => {
        reporter.feature('Feature')
        GooglePage.open();
        GooglePage.search('Maple Syrup Yum');
        GooglePage.currentPageTitle().should.equal('Maple Syrup Yum - Google Search');
        GooglePage.getGridDetails();
    });
})