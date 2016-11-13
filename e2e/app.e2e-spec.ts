import { HttpyoutubePage } from './app.po';

describe('httpyoutube App', function() {
  let page: HttpyoutubePage;

  beforeEach(() => {
    page = new HttpyoutubePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
