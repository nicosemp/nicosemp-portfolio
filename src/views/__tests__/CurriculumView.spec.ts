import CurriculumView from "../CurriculumView.vue";

describe("CurriculumView", () => {
  it("renders properly", () => {
    cy.mount(CurriculumView);
    cy.get("h1").should("contain", "Nicolò Maria Semprini");
    cy.get("h2").should("contain", "Professional Experience");
  });
});
