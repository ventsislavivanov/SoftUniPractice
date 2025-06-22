import { expect } from "chai";
import { artGallery } from "./artGallery.js";

describe("artGallery", function () {
    describe("addArtwork", function () {
        it("should throw an error if title is not a string", function () {
            expect(() => artGallery.addArtwork(123, "30 x 40", "Van Gogh")).to.throw("Invalid Information!");
        });

        it("should throw an error if artist is not a string", function () {
            expect(() => artGallery.addArtwork("Starry Night", "30 x 40", 123)).to.throw("Invalid Information!");
        });

        it("should throw an error if dimensions are not in the correct format", function () {
            expect(() => artGallery.addArtwork("Starry Night", "30x40", "Van Gogh")).to.throw("Invalid Dimensions!");
        });

        it("should throw an error if artist is not allowed", function () {
            expect(() => artGallery.addArtwork("Starry Night", "30 x 40", "Da Vinci")).to.throw("This artist is not allowed in the gallery!");
        });

        it("should return a success message when input is valid", function () {
            expect(artGallery.addArtwork("Starry Night", "30 x 40", "Van Gogh"))
                .to.equal("Artwork added successfully: 'Starry Night' by Van Gogh with dimensions 30 x 40.");
        });
    });

    describe("calculateCosts", function () {
        it("should throw an error if exhibitionCosts is not a number", function () {
            expect(() => artGallery.calculateCosts("100", 200, true)).to.throw("Invalid Information!");
        });

        it("should throw an error if insuranceCosts is not a number", function () {
            expect(() => artGallery.calculateCosts(100, "200", true)).to.throw("Invalid Information!");
        });

        it("should throw an error if sponsor is not a boolean", function () {
            expect(() => artGallery.calculateCosts(100, 200, "yes")).to.throw("Invalid Information!");
        });

        it("should return total cost with 10% discount if sponsored", function () {
            expect(artGallery.calculateCosts(1000, 500, true))
                .to.equal("Exhibition and insurance costs are 1350$, reduced by 10% with the help of a donation from your sponsor.");
        });

        it("should return total cost without discount if not sponsored", function () {
            expect(artGallery.calculateCosts(1000, 500, false))
                .to.equal("Exhibition and insurance costs are 1500$.");
        });
    });

    describe("organizeExhibits", function () {
        it("should throw an error if artworksCount is not a number", function () {
            expect(() => artGallery.organizeExhibits("10", 2)).to.throw("Invalid Information!");
        });

        it("should throw an error if displaySpacesCount is not a number", function () {
            expect(() => artGallery.organizeExhibits(10, "2")).to.throw("Invalid Information!");
        });

        it("should throw an error if artworksCount or displaySpacesCount is negative or zero", function () {
            expect(() => artGallery.organizeExhibits(-10, 2)).to.throw("Invalid Information!");
            expect(() => artGallery.organizeExhibits(10, 0)).to.throw("Invalid Information!");
        });

        it("should return message if artworks per space is less than 5", function () {
            expect(artGallery.organizeExhibits(8, 3))
                .to.equal("There are only 2 artworks in each display space, you can add more artworks.");
        });

        it("should return message if artworks per space is 5 or more", function () {
            expect(artGallery.organizeExhibits(15, 3))
                .to.equal("You have 3 display spaces with 5 artworks in each space.");
        });
    });
});
