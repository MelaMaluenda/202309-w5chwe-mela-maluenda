import World from "./World/World.js";
import cell from "./Cell/Cell.js";

const callLength = 3;

const Cell = new Cell(false);
const grid = new World(cell);

grid.initWorld(callLength);
