import { RolePermissionDashboardPage } from './app.po';

describe('role-permission-dashboard App', () => {
  let page: RolePermissionDashboardPage;

  beforeEach(() => {
    page = new RolePermissionDashboardPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
