export class HomePage {
  selectorsList() {
    const selectors = {
      homePageContainer: ".MuiTabs-flexContainer",
      buttonNew: ".NavBar-newTransactionButton",
      amountInput: "#amount",
      addANoteInput: "#transaction-create-description-input",
      payButton: "[data-test='transaction-create-submit-payment']",
      contactField: "[data-test='user-list-item-uBmeaz5pX']",
      paidField: ".TransactionCreateStepThree-paper",
      mineField: "[href='/personal']",
      transactionsField: "[data-test='main']",
    };

    return selectors;
  }

  sendMoney(amount: string, note: string) {
    cy.get(this.selectorsList().buttonNew).click();
    cy.get(this.selectorsList().contactField).click();
    cy.get(this.selectorsList().amountInput).type(amount);
    cy.get(this.selectorsList().addANoteInput).type(note);
    cy.get(this.selectorsList().payButton).click();
    cy.get(this.selectorsList().paidField).should("be.visible");
    cy.get(this.selectorsList().paidField).should("contain.text", `Paid $${amount}.00 for ${note}`);
  }

  checkHomePage() {
    cy.location("pathname").should("equal", "/");
    cy.get(this.selectorsList().homePageContainer).should("be.visible");
  }

  checkTransactions() {
    cy.get(this.selectorsList().mineField).click();
    cy.get(this.selectorsList().transactionsField).should("be.visible");
  }
}
