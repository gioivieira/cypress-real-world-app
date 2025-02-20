export class SignUpPage {
  selectorsList() {
    const selectors = {
      firstNameField: "#firstName",
      lastNameField: "#lastName",
      usernameField: "#username",
      passwordField: "#password",
      confirmPasswordField: "#confirmPassword",
      signUpButton: "[data-test='signup-submit']",
    };

    return selectors;
  }

  signUpValidInfos(
    firstName: string,
    lastName: string,
    username: string,
    password: string,
    passwordConfirmation: string
  ) {
    cy.visit("/signup");
    cy.get(this.selectorsList().firstNameField).type(firstName);
    cy.get(this.selectorsList().lastNameField).type(lastName);
    cy.get(this.selectorsList().usernameField).type(username);
    cy.get(this.selectorsList().passwordField).type(password);
    cy.get(this.selectorsList().confirmPasswordField).type(passwordConfirmation);
    cy.get(this.selectorsList().signUpButton).click();
  }

  signUpIncompleteInfos(firstName: string, lastName: string, username: string, password: string) {
    cy.visit("/signup");
    cy.get(this.selectorsList().firstNameField).type(firstName);
    cy.get(this.selectorsList().lastNameField).type(lastName);
    cy.get(this.selectorsList().usernameField).type(username);
    cy.get(this.selectorsList().passwordField).type(password);
    cy.get(this.selectorsList().signUpButton).should("be.disabled");
  }
}
