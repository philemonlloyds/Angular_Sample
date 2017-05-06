import { MyAngAppPage } from './app.po';

describe('my-ang-app App', () => {
  let page: MyAngAppPage;

  beforeEach(() => {
    page = new MyAngAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
