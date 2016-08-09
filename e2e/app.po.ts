export class EventStudioPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('Studio-root h1')).getText();
  }
}
