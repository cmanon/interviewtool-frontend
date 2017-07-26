import { InterviewToolAngularPage } from './app.po';

describe('interview-tool-angular App', () => {
  let page: InterviewToolAngularPage;

  beforeEach(() => {
    page = new InterviewToolAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
