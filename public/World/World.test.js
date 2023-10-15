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

describe("Given the method countNeighbours in the cass World", () => {
  describe("When it receives by argument the value 2 and 2", () => {
    test("then it should return the number of neighbours alive, that's 2", () => {
      const indexRow = 2;
      const indexColumn = 2;
      const expectedValue = 2;

      const board = new World();
      board.initWorld(3, false);
      board.cell[1][1].live();
      board.cell[2][0].live();
      board.cell[2][1].live();
      board.countNeighbours(indexRow, indexColumn);

      expect(board.cell[2][2].neighbours).toBe(expectedValue);
    });
  });
});
