export default class BasePage {
    constructor() {

    }

    open(path) {
        browser.url(path);
    }
}