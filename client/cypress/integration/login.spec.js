describe("The Home Page", function() {
  it("test login", function() {
    cy.visit("/");
    cy.get('[data-testid="username"]').type("cognosos");
    cy.get('[data-testid="password"]').type("cognosos");
    cy.get('[data-testid="login"]').click();
    cy.contains("Firmware Version");
  });
  it("tests logout", function() {
    cy.visit("/");
    cy.get('[data-testid="username"]').type("cognosos");
    cy.get('[data-testid="password"]').type("cognosos");
    cy.get('[data-testid="login"]').click();
    cy.get('[data-testid="logout"]').click();
    cy.contains("Username");
  });
  it("tests login validation", function() {
    cy.visit("/");
    cy.get('[data-testid="username"]').type("C@gnosos");
    cy.get('[data-testid="password"]').type("C@gnosos");
    cy.get('[data-testid="login"]').click();
    cy.contains("User name contains invalid characters.");
  });
  it("tests login submit validation", function() {
    cy.visit("/");
    cy.get('[data-testid="login"]').click();
    cy.contains("User name must not be empty.");
  });
});
