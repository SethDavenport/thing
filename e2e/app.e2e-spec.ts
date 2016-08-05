import { ThingPage } from './app.po';

describe('thing App', function() {
  let page: ThingPage;

  beforeEach(() => {
    page = new ThingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
