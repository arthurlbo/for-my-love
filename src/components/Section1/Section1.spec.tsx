import { Section1 } from "./Section1";

describe("<Section1 />", () => {
    it("should renders correctly", () => {
        cy.mount(<Section1 />);
        cy.get("h1").contains("Hello");
    });
});
