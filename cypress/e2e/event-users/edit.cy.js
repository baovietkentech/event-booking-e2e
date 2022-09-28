describe("User", () => {
    it("Login first", () => {
      cy.visit("https://staging.conference-direct.com/login");
  
      // Full fill form
      cy.get('input[name="email"]').type("admin@vietkentech.com");
      cy.get('input[name="password"]').type("123456aA@");
  
      // Click button Login
      cy.get("[type=submit]").click();
    });
  
    it("Edit User", () => {
      cy.wait(4000);
  
      cy.visit("https://staging.conference-direct.com/admin/users/edit/6334078f059ce3e5590c1206");
  
      //Clear
      cy.get('input[name="firstName"]').clear();
      cy.get('input[name="lastName"]').clear();
      cy.get('input[name="company"]').clear();

      // Full fill form
      cy.get('input[name="firstName"]').type("Edited first name");
      cy.get('input[name="lastName"]').type("Edited last name");
      cy.get('input[name="company"]').type("vietkentech");
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
  