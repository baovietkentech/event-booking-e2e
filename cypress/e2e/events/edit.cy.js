describe("Event", () => {
  it("Login first", () => {
    cy.visit("https://staging.conference-direct.com/login");

    // Full fill form
    cy.get('input[name="email"]').type("admin@vietkentech.com");
    cy.get('input[name="password"]').type("123456aA@");

    // Click button Login
    cy.get("[type=submit]").click();
  });

  it("Edit event", () => {
    cy.wait(4000);

    cy.visit(
      "https://staging.conference-direct.com/events/edit/6334441e059ce3e5590c190f"
    );

    // Clear
    cy.get('input[name="title"]').clear();
    cy.get('input[name="hotelName"]').clear();
    cy.get('input[name="address.street"]').clear();
    cy.get('input[name="address.city"]').clear();
    cy.get('input[name="address.zipCode"]').clear();

    // Full fill form
    cy.get('input[name="title"]').type("Title event 1 edited");
    cy.get('input[name="hotelName"]').type("Event hotelName edited");
    cy.get('input[name="address.street"]').type("Address street edited");
    cy.get('input[name="address.city"]').type("Test city edited");
    cy.get('input[name="address.zipCode"]').type("70123123 edited");

    cy.get('[type="radio"]').first().check();
    cy.get("select").select("GERMAN");

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

    cy.contains("Booking with Payment?").click();

    cy.contains("Send QR-Code after register?").click();

    cy.contains("Is business event?").click();

    cy.contains("Send confirmation by event organizer email?").click();

    // cy.get(".react-switch-bg").click({ multiple: true });

    cy.get('input[name="capacity"]').type(10);

    cy.get('input[name="hotelBookingUrl"]').type("hotelBookingUrl");

    cy.contains("Continue").click();

    cy.get(".jodit-wysiwyg").type("Content edited");

    cy.contains("Continue").click();

    cy.contains("Update Event").click();
  });
});
