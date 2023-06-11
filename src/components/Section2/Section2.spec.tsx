import { Section2 } from "./Section2";

describe("<Section2 />", () => {
    beforeEach(() => {
        cy.mount(<Section2 />);
    });

    it("should render the greeting text correctly", () => {
        cy.contains("Hoje faz").should("be.visible");
    });

    it("should render the counter component", () => {
        cy.get("[data-testid=counter]").should("exist");
    });

    it("should render the description text correctly", () => {
        cy.contains("A partir desse momento, tudo mudou !").should("be.visible");
    });

    it("should render the Lottie animation", () => {
        cy.get("[data-testid=lottie]").should("exist");
    });

    it("should render the images with the correct attributes", () => {
        cy.get("img")
            .should("have.length", 6) // Verifica se existem 4 imagens
            .each(($img) => {
                expect($img).to.have.attr("alt"); // Verifica se todas as imagens têm o atributo "alt"
            });
    });

    it("should render the final love declaration", () => {
        cy.contains("eu te amo infinitamente").should("be.visible");
    });
});
