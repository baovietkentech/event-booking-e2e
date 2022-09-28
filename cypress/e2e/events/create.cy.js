describe("Event", () => {
  it("Login first", () => {
    cy.visit("https://staging.conference-direct.com/login");

    // Full fill form
    cy.get('input[name="email"]').type("admin@vietkentech.com");
    cy.get('input[name="password"]').type("123456aA@");

    // Click button Login
    cy.get("[type=submit]").click();
  });

  it("Create event", () => {
    cy.wait(4000);

    cy.visit("https://staging.conference-direct.com/events/create");

    // Full fill form
    cy.get('input[name="title"]').type("Title event 1");
    cy.get('input[name="hotelName"]').type("Event hotelName");
    cy.get('input[name="address.street"]').type("Address street");
    cy.get('input[name="address.city"]').type("Test city");
    cy.get('input[name="address.zipCode"]').type("70123123");

    cy.get('[type="radio"]').first().check();
    cy.get("select").select("ENGLISH");

    cy.get(".react-datepicker-wrapper .react-datepicker__input-container")
      .find("input")
      .eq(0)
      .type("20202-09-28", { forces: true });
    cy.get(".react-datepicker__time-list").find("li:first-child").click();

    cy.get(".react-datepicker-wrapper .react-datepicker__input-container")
      .find("input")
      .eq(1)
      .type("20202-09-30", { forces: true });
    cy.wait(1000);
    cy.get(".react-datepicker__week:nth-child(5)")
      .find(".react-datepicker__day:nth-child(5)")
      .click();
    cy.get(".react-datepicker__time-list").find("li:first-child").click();

    cy.get(".css-1wy0on6").click();
    cy.wait(1000);

    // Choose options
    cy.get("#react-select-2-option-1").click();

    cy.get(".jodit-wysiwyg").type("Content");

    cy.get("[type=submit]").click();

    cy.wait(1000);

    cy.get(".react-switch-bg").click({ multiple: true });

    cy.get('input[name="price"]').type(100);

    cy.get('input[name="capacity"]').type("capacity");

    cy.get('input[name="hotelBookingUrl"]').type("hotelBookingUrl");

    cy.contains("Continue").click();

    cy.get(".jodit-wysiwyg").type("Content");

    cy.contains("Continue").click();

    cy.contains("Create Event").click();
  });
});
