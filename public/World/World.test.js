import World from "./World.js";

describe("Given the method intitWorld in the class Wolrd", () => {
  describe("When it receives by argument the value 3 and false", () => {
    test("then it should return two propierties pointing 3 and false", () => {
      const expectedlength = 3;
      const isExpectedValue = false;

      const board = new World();
      const values = board.initWorld(expectedlength, isExpectedValue);

      expect(values.length).toBe(expectedlength);
      expect(values[0][0].isAlive).toBe(isExpectedValue);
    });
  });
  describe("When it receives by argument the value 3 and false", () => {
    test("then it should return two propierties pointing 7 and true", () => {
      const expectedlength = 7;
      const isExpectedValue = true;

      const board = new World();
      const values = board.initWorld(expectedlength, isExpectedValue);

      expect(values.length).toBe(expectedlength);
      expect(values[0][0].isAlive).toBe(isExpectedValue);
    });
  });
});
