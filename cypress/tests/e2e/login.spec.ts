import { LoginPage } from "../pages/loginPage";
import { users } from "../../../data/database.json";
import { HomePage } from "../pages/homePage";

describe("Login tests", () => {
  const loginPage = new LoginPage();
  const homePage = new HomePage();

  it("Login - Sucess", () => {
    loginPage.loginValidUser(users[2].username, "s3cret");
    homePage.checkHomePage();
  });

  it("Login - Failure", () => {
    loginPage.loginInvalidUser(users[1].username, users[1].password);
    loginPage.checkAlertMessage();
  });
});
