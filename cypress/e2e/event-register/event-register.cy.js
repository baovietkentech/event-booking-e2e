describe("Register event", () => {
  it("Verify event", () => {
    // Go to link event
    cy.visit(
      "https://staging.conference-direct.com/events/6191471417952a4f090c8ed0"
    );

    // Click button Register
    cy.get("[type=submit]").click();

    // cy.wait(3000)

    // Full fill form
    cy.get('input[name="firstName"]').type("first name test");
    cy.get('input[name="lastName"]').type("last name test");
    cy.get('input[name="address.street"]').type("street test");
    cy.get('input[name="address.city"]').type("city test");
    cy.get('input[name="address.zipCode"]').type("zip test");

    // click react select
    cy.get(".css-1wy0on6").click();
    cy.wait(1000);
    // Choose options
    cy.get("#react-select-2-option-0").click();

    cy.get('input[name="email"]').type("email@gmail.com");
    cy.get('input[type="checkbox"]').check({ force: true });

    // Click button Continue
    cy.get("[type=submit]").click();
  });
});
