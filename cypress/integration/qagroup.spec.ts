describe("Qa Group", { browser: "firefox" }, () => {
  beforeEach(() => {
    cy.visit("https://qagroup.com.ua/");
  });

  it("Shows home page", () => {
    cy.contains(
      "Освітня IT спільнота. Простір для обміну знаннями та досвідом."
    ).should("be.visible");
  });

  it("Open webinar page", () => {
    cy.contains(
      "Вокршоп: Тестова стратегія як інструмент досягнення цілей QA (Online)"
    ).click();
  });

  it("Searches for webinar", () => {
    cy.get("input[name=q]").type("Тестова стратегія як інструмент");
    cy.contains("button", "Шукати").click();

    cy.contains(
      "a",
      "Вокршоп: Тестова стратегія як інструмент досягнення цілей QA (Online)"
    ).click();
  });

  it("can type into search", () => {
    cy.get("input[name=q]").click();
    cy.realPress("Tab");
    cy.realPress("Space");
  });
});
