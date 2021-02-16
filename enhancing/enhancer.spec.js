const { repair, succeed, fail, get } = require("./enhancer.js");
// test away!

describe("enhancement functions", () => {
  describe("repair()", () => {
    it("should return an item with durability: 100", () => {
      const item = { name: "sword", durability: 50 };

      expect(repair(item)).toEqual({ name: "sword", durability: 100 });
    });

    it.todo("should throw an exception if item type is not an object");
  });

  describe("succeed()", () => {
    it("should increase enhancement by 1", () => {
      const item = {
        name: "sword",
        durability: 80,
        enhancement: 5,
      };

      const expected = {
        name: "sword",
        durability: 80,
        enhancement: 6,
      };
      expect(succeed(item)).toEqual(expected);
    });

    it("should not increase if enhancement is already at 20", () => {
      const item = {
        name: "sword",
        durability: 80,
        enhancement: 20,
      };

      const expected = {
        name: "sword",
        durability: 80,
        enhancement: 20,
      };

      expect(succeed(item)).toEqual(expected);
    });
  });

  describe("fail()", () => {
    it("shouuld decrease enhancement by one and inccrease durabiility by 10 when enhancement is over 16", () => {
      const item = {
        name: "sword",
        durability: 80,
        enhancement: 20,
      };

      const expected = {
        name: "sword",
        durability: 90,
        enhancement: 19,
      };

      expect(fail(item)).toEqual(expected);
    });

    it("should should decrease durability by 5 when enhancement is less than 15", () => {
      const item = {
        name: "sword",
        durability: 80,
        enhancement: 14,
      };

      const expected = {
        name: "sword",
        durability: 85,
        enhancement: 14,
      };

      expect(fail(item)).toEqual(expected);
    });

    it("should increase durability by 10 if enhancement is greater than or equal to 15", () => {
      const item = {
        name: "sword",
        durability: 80,
        enhancement: 17,
      };

      const expected = {
        name: "sword",
        durability: 90,
        enhancement: 16,
      };

      expect(fail(item)).toEqual(expected);
    });
  });
});