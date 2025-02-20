import { LoginPage } from "../pages/loginPage";
import { users } from "../../../data/database.json";
import { HomePage } from "../pages/homePage";

describe("Transactions tests", () => {
  const loginPage = new LoginPage();
  const homePage = new HomePage();

  it("Transactions visible - Sucess", () => {
    loginPage.loginValidUser(users[2].username, "s3cret");
    homePage.checkTransactions();
  });
});
