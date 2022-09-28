describe("Organisation", () => {
  it("Login first", () => {
    cy.visit("https://staging.conference-direct.com/login");

    // Full fill form
    cy.get('input[name="email"]').type("admin@vietkentech.com");
    cy.get('input[name="password"]').type("123456aA@");

    // Click button Login
    cy.get("[type=submit]").click();
  });

  it("Edit Organisation", () => {
    cy.wait(4000);

    cy.visit(
      "https://staging.conference-direct.com/root-admin/organization/edit/6332d5e7059ce3e5590c0d55"
    );

    // Clear value 
    cy.get('input[name="name"]').clear();
    cy.get('input[name="email"]').clear();
    cy.get('input[name="capacity"]').clear();
    cy.get('input[name="eventSourceId"]').clear();

    // fill value
    cy.get('input[name="name"]').type("test name edited");
    cy.get('input[name="email"]').type("editedemail@gmail.com");
    cy.get('input[name="capacity"]').type("5");
    cy.get('input[name="eventSourceId"]').type("test eventSourceId edited");

    cy.get('.react-switch-bg').click();
    // // Click button Edit Organization
    cy.get("[type=submit]").click();
  });
});
