import HomeView from "../HomeView.vue";

describe("HomeView", () => {
  it("renders properly", () => {
    cy.mount(HomeView);
    cy.get("h1").should("contain", "Nicolò Maria Semprini");
    cy.get("p").should("contain", "Drag me!");
  });
});
