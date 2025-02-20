import { SignUpPage } from "../pages/signUpPage";

describe("Sign up tests", () => {
  const signUpPage = new SignUpPage();
  it("Sign up - Sucess", () => {
    signUpPage.signUpValidInfos("Giovana", "Vieira", "gioivieira", "Awma*(54", "Awma*(54");
  });

  it("Sign up - Incomplete information", () => {
    signUpPage.signUpIncompleteInfos("Giovana", "Vieira", "gioivieira", "Awma*(54");
  });
});
