describe("Organisation", () => {
  it("Login first", () => {
    cy.visit("https://staging.conference-direct.com/login");

    // Full fill form
    cy.get('input[name="email"]').type("admin@vietkentech.com");
    cy.get('input[name="password"]').type("123456aA@");

    // Click button Login
    cy.get("[type=submit]").click();
  });

  it("Create Organisation", () => {
    cy.wait(4000);

    cy.visit(
      "https://staging.conference-direct.com/root-admin/organization/create"
    );

    // Full fill form
    cy.get('input[name="name"]').type("test 3");
    cy.get('input[name="email"]').type("test3@gmail.com");
    cy.get('input[name="capacity"]').type("10");
    cy.get('input[name="eventSourceId"]').type("test eventSourceId");

    cy.get('.react-switch-bg').click();
    // Click button Create Organization
    cy.get("[type=submit]").click();
  });
});
