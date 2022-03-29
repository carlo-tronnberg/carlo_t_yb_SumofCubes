class carlo_t_yb_SumofCubes {
  constructor() {
    this.status = 'running';
  }

  getStatus() {
    return this.status;
  }

  getValue(x) {
    if (x == 1) return 'one';
    return 'twos';
  }
}

module.exports = { carlo_t_yb_SumofCubes };
