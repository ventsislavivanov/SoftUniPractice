import { expect } from "chai";
import { homeGardener } from "./homeGardener.js";



describe("homeGardener", function () {
    describe("plantCareInstructions", function () {
        it("If the plantType is succulent", function () {
            expect(homeGardener.plantCareInstructions("succulent")).to.equal(
                "Succulents require minimal watering, indirect sunlight, and well-draining soil."
            );
        });

        it("If the plantType is vegetable", function () {
            expect(homeGardener.plantCareInstructions("vegetable")).to.equal(
                "Vegetables need full sun, regular watering, and nutrient-rich soil."
            );
        });

        it("If the plantType is flowering", function () {
            expect(homeGardener.plantCareInstructions("flowering")).to.equal(
                "Flowering plants require moderate watering, occasional fertilization, and pruning."
            );
        });

        it("If the plantType is tree", function () {
            expect(homeGardener.plantCareInstructions("tree")).to.equal(
                "Trees need deep watering, proper spacing, and regular mulching."
            );
        });

        it("If the value of the string plantType is different from succulent, vegetable, flowering, tree", function () {
            expect(() => homeGardener.plantCareInstructions("bush")).to.throw("Invalid plant type!");
        });
    });

    describe("availablePlants", function () {
        it("return the correct count of suitable plants", function () {
            expect(homeGardener.availablePlants([10, 20, 30, 40], 25)).to.equal(
                "There are 2 plants suitable for your garden height criteria!"
            );
        });

        it("return 0 when no plants match the criteria", function () {
            expect(homeGardener.availablePlants([50, 60, 70], 30)).to.equal(
                "There are 0 plants suitable for your garden height criteria!"
            );
        });

        it("error if plantSizes is not an array", function () {
            expect(() => homeGardener.availablePlants("not an array", 30)).to.throw("Invalid Information!");
        });

        it("error if maxHeight is not a number", function () {
            expect(() => homeGardener.availablePlants([10, 20, 30], "high")).to.throw("Invalid Information!");
        });

        it("error if plantSizes is an empty array", function () {
            expect(() => homeGardener.availablePlants([], 30)).to.throw("Invalid Information!");
        });

        it("error if maxHeight is less than 1", function () {
            expect(() => homeGardener.availablePlants([10, 20, 30], 0)).to.throw("Invalid Information!");
        });
    });

    describe("gardenExpenses", function () {
        it("without discount", function () {
            expect(homeGardener.gardenExpenses(["shovel", "rake"], ["vegetable seeds"], false)).to.equal(
                "You spent $45.00 on tools and seeds!"
            );
        });

        it("with discount", function () {
            expect(homeGardener.gardenExpenses(["shovel", "watering can"], ["flower seeds"], true)).to.equal(
                "You spent $38.70 on tools and seeds with a 10% discount!"
            );
        });

        it("error if tools is not an array", function () {
            expect(() => homeGardener.gardenExpenses("shovel", ["vegetable seeds"], false)).to.throw("Invalid Information!");
        });

        it("error if seeds is not an array", function () {
            expect(() => homeGardener.gardenExpenses(["shovel"], "vegetable seeds", false)).to.throw("Invalid Information!");
        });

        it("error if discount is not a boolean", function () {
            expect(() => homeGardener.gardenExpenses(["shovel"], ["vegetable seeds"], "yes")).to.throw("Invalid Information!");
        });
        it("should calculate total cost correctly with discount", function () {
            expect(homeGardener.gardenExpenses(["shovel", "watering can"], ["flower seeds"], true)).to.equal(
                "You spent $38.70 on tools and seeds with a 10% discount!"
            );
        });

        it("should calculate total cost with multiple items correctly", function () {
            expect(homeGardener.gardenExpenses(["shovel", "rake", "watering can"], ["vegetable seeds", "flower seeds", "herb seeds"], false)).to.equal(
                "You spent $66.00 on tools and seeds!"
            );
        });

        it("should calculate total cost with multiple items and discount correctly", function () {
            expect(homeGardener.gardenExpenses(["shovel", "rake", "watering can"], ["vegetable seeds", "flower seeds", "herb seeds"], true)).to.equal(
                "You spent $59.40 on tools and seeds with a 10% discount!"
            );
        });

        it("should return zero cost when no items are purchased", function () {
            expect(homeGardener.gardenExpenses([], [], false)).to.equal(
                "You spent $0.00 on tools and seeds!"
            );
        });

        it("should apply discount correctly when no items are purchased", function () {
            expect(homeGardener.gardenExpenses([], [], true)).to.equal(
                "You spent $0.00 on tools and seeds with a 10% discount!"
            );
        });

        it("should throw an error if tools is not an array", function () {
            expect(() => homeGardener.gardenExpenses("shovel", ["vegetable seeds"], false)).to.throw("Invalid Information!");
        });

        it("should throw an error if seeds is not an array", function () {
            expect(() => homeGardener.gardenExpenses(["shovel"], "vegetable seeds", false)).to.throw("Invalid Information!");
        });

        it("error if discount is not a boolean", function () {
            expect(() => homeGardener.gardenExpenses(["shovel"], ["vegetable seeds"], "yes")).to.throw("Invalid Information!");
        });

        it("apply discount correctly when no items are purchased", function () {
            expect(homeGardener.gardenExpenses([], [], true)).to.equal(
                "You spent $0.00 on tools and seeds with a 10% discount!"
            );
        });

        it("error if tools is not an array", function () {
            expect(() => homeGardener.gardenExpenses("shovel", ["vegetable seeds"], false)).to.throw("Invalid Information!");
        });

        it("error if seeds is not an array", function () {
            expect(() => homeGardener.gardenExpenses(["shovel"], "vegetable seeds", false)).to.throw("Invalid Information!");
        });

        it("error if discount is not a boolean", function () {
            expect(() => homeGardener.gardenExpenses(["shovel"], ["vegetable seeds"], "yes")).to.throw("Invalid Information!");
        });
    });
});
