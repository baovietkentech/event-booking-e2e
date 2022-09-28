describe("User", () => {
  it("Login first", () => {
    cy.visit("https://staging.conference-direct.com/login");

    // Full fill form
    cy.get('input[name="email"]').type("admin@vietkentech.com");
    cy.get('input[name="password"]').type("123456aA@");

    // Click button Login
    cy.get("[type=submit]").click();
  });

  it("Create User", () => {
    cy.wait(4000);

    cy.visit("https://staging.conference-direct.com/admin/users/create");

    // Full fill form
    cy.get('input[name="firstName"]').type("First name test 1");
    cy.get('input[name="lastName"]').type("Last name test 1");
    cy.get('input[name="email"]').type("usertes66@gmail.com");
    cy.get('input[name="password"]').type("usertest123");
    cy.get('input[name="password"]').type("usertest123");
    // click react select
    cy.get(".css-1wy0on6").click();
    cy.wait(1000);
    // Choose options
    cy.get("#react-select-2-option-1").click();

    cy.get('input[type="checkbox"]').check({ force: true });

    // Click button Create User
    cy.get("[type=submit]").click();

    cy.wait(2000);

    cy.visit("https://staging.conference-direct.com/admin/users");

    cy.get('.pagination button:nth-child(4)').click()
  });
});
