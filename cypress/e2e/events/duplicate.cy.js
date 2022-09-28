describe("Event", () => {
  it("Login first", () => {
    cy.visit("https://staging.conference-direct.com/login");

    // Full fill form
    cy.get('input[name="email"]').type("admin@vietkentech.com");
    cy.get('input[name="password"]').type("123456aA@");

    // Click button Login
    cy.get("[type=submit]").click();
  });

  it("Duplicate event", () => {
    cy.wait(5000);

    cy.contains('5 people').find('~div').click();

    cy.wait(3000)

    cy.contains('Duplicate Event').click();
    
  });
});
