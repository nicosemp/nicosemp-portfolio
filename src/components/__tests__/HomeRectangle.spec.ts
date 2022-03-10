import { mount } from "@cypress/vue";
import HomeRectangle from "@/components/HomeRectangle.vue";

describe("HomeRectangle", () => {
  // it("playground", () => {
  //   mount(HomeRectangle, { props: { msg: "Hello Cypress" } });
  // });

  it("renders properly", () => {
    mount(HomeRectangle, { props: { msg: "Hello Cypress" } });
    cy.get("h1").should("contain", "Nicolò Maria Semprini");
    cy.get("h2").should("contain", "Full Stack Software Developer");
  });
});
