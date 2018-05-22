import BasePage from './base.page';

class GooglePage extends BasePage {

    get searchInput() {
        return browser.element('body #lst-ib');
    }

    open() {
        super.open('http://google.ca');
    }

    search(value) {
        this.searchInput.setValue(value);
        // browser.keys('\uE007');
        browser.submitForm('body #tsf');
        console.log(browser.getTitle());
    }

    currentPageTitle() {
        console.log(browser.getTitle());
        return browser.getTitle();
    }

    getGridDetails() {
        console.log(browser.getGridNodeDetails());
    }
}

export default new GooglePage();