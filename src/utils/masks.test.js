import Masks from './masks'

describe('Mask tests', () => {
  it('onlyNumber method', () => {
    const result = Masks.onlyNumber('ascjaeoi13')
    expect(result).toBe('13');
  });

  it('onlyRomans method', () => {
    const result = Masks.onlyRomans('13412ViII')
    expect(result).toBe('VIII')
  })
});