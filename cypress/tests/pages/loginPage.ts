export class LoginPage {
  selectorsList() {
    const selectors = {
      usernameField: "[name='username']",
      passwordField: "[name='password']",
      signInButton: "[data-test='signin-submit']",
      alertMessage: ".MuiAlert-message",
    };
    return selectors;
  }

  loginValidUser(username: string, password: string) {
    cy.visit("/signin");
    cy.get(this.selectorsList().usernameField).type(username);
    cy.get(this.selectorsList().passwordField).type(password);
    cy.get(this.selectorsList().signInButton).click();
  }

  loginInvalidUser(username: string, password: string) {
    cy.visit("/signin");
    cy.get(this.selectorsList().usernameField).type(username);
    cy.get(this.selectorsList().passwordField).type(password);
    cy.get(this.selectorsList().signInButton).click();
  }

  checkAlertMessage() {
    cy.get(this.selectorsList().alertMessage).should("be.visible");
  }
}
