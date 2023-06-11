import { Section1 } from "./Section1";

describe("<Section1 />", () => {
    beforeEach(() => {
        cy.mount(<Section1 />);
    });

    it("should render the greeting text correctly", () => {
        cy.contains("Olá amor da minha vida").should("be.visible");
    });

    it("should render the image correctly", () => {
        cy.get("img").should("be.visible").and("have.attr", "alt", "gatito");
    });

    it("should render the description text correctly", () => {
        cy.contains("Tem algumas coisas que eu preciso te dizer nesse dia tão especial.").should("be.visible");
    });
});
