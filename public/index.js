import World from "./World/World.js";

const board = new World();

board.initWorld(3, false);

board.cell[1][1].live();
board.cell[2][0].live();
board.cell[2][1].live();
