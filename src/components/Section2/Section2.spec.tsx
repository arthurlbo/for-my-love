import { Section2 } from "./Section2";

describe("<Section2 />", () => {
    it("should renders correctly", () => {
        cy.mount(<Section2 />);
        cy.get("h1").contains("Hello");
    });
});
