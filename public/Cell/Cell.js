class cell {
  isAlive;
  neighbours;

  constructor(isAlive) {
    this.isAlive = isAlive;
  }

  state() {
    return this.isAlive;
  }

  die() {
    this.isAlive = false;
  }

  live() {
    this.isAlive = true;
  }

  numberNeighbours() {}
}

export default cell;
