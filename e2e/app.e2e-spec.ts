import { MyFirstApp2Page } from './app.po';

describe('my-first-app2 App', () => {
  let page: MyFirstApp2Page;

  beforeEach(() => {
    page = new MyFirstApp2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
