import { AngularMusicBoxDemoPage } from './app.po';

describe('angular-music-box-demo App', () => {
  let page: AngularMusicBoxDemoPage;

  beforeEach(() => {
    page = new AngularMusicBoxDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
