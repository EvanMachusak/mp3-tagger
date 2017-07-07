import { Mp3TaggerPage } from './app.po';

describe('mp3-tagger App', () => {
  let page: Mp3TaggerPage;

  beforeEach(() => {
    page = new Mp3TaggerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
