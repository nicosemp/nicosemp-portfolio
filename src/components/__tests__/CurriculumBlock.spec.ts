import CurriculumBlock from "../CurriculumBlock.vue";

describe("CurriculumBlock", () => {
  it("renders properly", () => {
    cy.mount(CurriculumBlock, { props: { company: "Ciao" } });
    cy.get("h3").should("contain", "Ciao");
  });
});
