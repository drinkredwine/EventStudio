import { EventStudioPage } from './app.po';

describe('event-studio App', function() {
  let page: EventStudioPage;

  beforeEach(() => {
    page = new EventStudioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Studio works!');
  });
});
