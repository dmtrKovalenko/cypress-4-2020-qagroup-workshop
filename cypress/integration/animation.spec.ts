describe("Animation", () => {
  beforeEach(() => {
    cy.visit("https://framer-demo.dmtr-kovalenko.vercel.app/")
  })

  it("Shows animation", () => {
    cy.get("[data-testid=motion]").should("have.css", "border-radius", "50%")
    cy.get("[data-testid=motion]").should("have.css", "border-radius", "20%")
  })
})