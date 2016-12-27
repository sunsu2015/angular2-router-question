import { TestLazyloadPage } from './app.po';

describe('test-lazyload App', function() {
  let page: TestLazyloadPage;

  beforeEach(() => {
    page = new TestLazyloadPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
