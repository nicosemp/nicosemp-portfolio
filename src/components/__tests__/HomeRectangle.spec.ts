import HomeRectangle from "../HomeRectangle.vue";

describe("HomeRectangles", () => {
  it("renders properly", () => {
    expect(1).equal(1);
    cy.mount(HomeRectangle, {
      props: { height: 300, width: 500, position: "top" },
    });
    // cy.get("h1").should("contain", "Nicolò Maria Semprini");
    // cy.get("h2").should("contain", "Full Stack Software Developer");
  });
});
