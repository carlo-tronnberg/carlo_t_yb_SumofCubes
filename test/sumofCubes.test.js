const { carlo_t_yb_SumofCubes } = require('../src/sumofCubes');

describe('carlo_t_yb_SumofCubes', () => {
  it('Start a new sumofCubes', () => {
    const sumofCubes = new carlo_t_yb_SumofCubes();

    expect(sumofCubes.getStatus()).toEqual('running');
  });
});

describe('carlo_t_yb_SumofCubes 2', () => {
  it.each([
    [1, 'one'],
    [2, 'twos'],
  ])("Given ,      When %i,      Then  '%s'", (x, result) => {
    const sumofCubes = new carlo_t_yb_SumofCubes();
    expect(sumofCubes.getValue(x)).toEqual(result);
  });
});
