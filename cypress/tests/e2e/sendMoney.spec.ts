import { HomePage } from "../pages/homePage";
import { LoginPage } from "../pages/loginPage";
import { users } from "../../../data/database.json";

describe("Send money tests", () => {
  const homePage = new HomePage();
  const loginPage = new LoginPage();

  it("Send money - Sucess", () => {
    loginPage.loginValidUser(users[2].username, "s3cret");
    homePage.sendMoney("100", "Oiiii");
  });
});
