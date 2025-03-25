export default class Bulding {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw new TypeError('sqft must be a number');
    }
    this.sqft = sqft;

    if (this.constructor !== Bulding
        && this.evacuationWarningMessage === Bulding.prototype.evacuationWarningMessage) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(num) {
    if (typeof num !== 'number') {
      throw new TypeError('sqft must be a number');
    }
    this._sqft = num;
  }

  // eslint-disable-next-line class-methods-use-this
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
