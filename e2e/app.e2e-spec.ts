import { SousduinoPage } from './app.po';

describe('sousduino App', () => {
  let page: SousduinoPage;

  beforeEach(() => {
    page = new SousduinoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
