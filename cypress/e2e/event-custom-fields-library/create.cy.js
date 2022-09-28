describe("Custom fields Library", () => {
  it("Login first", () => {
    cy.visit("https://staging.conference-direct.com/login");

    // Full fill form
    cy.get('input[name="email"]').type("admin@vietkentech.com");
    cy.get('input[name="password"]').type("123456aA@");

    // Click button Login
    cy.get("[type=submit]").click();
  });

  it("Verify event", () => {
     cy.wait(4000)

    // Go to link event
    cy.visit(
      "https://staging.conference-direct.com/admin/custom-field/create?orgId=6251879495d4d68467860f15"
    );


   
    // Full fill form
    cy.get('input[name="title"]').type("test title");

    // click react select
    cy.get(".css-1wy0on6").click();
    cy.wait(1000);
     // Choose options
     cy.get("#react-select-2-option-0").click();
     

    // Choose options
    cy.get('input[type="checkbox"]').check({ force: true });

    // Click button Continue
    cy.get("[type=submit]").click();
  });
});
