import Bulding from './5-building';

class SkyHighBuilding extends Bulding {
  constructor(sqft, floors) {
    super(sqft);

    if (typeof floors !== 'number') {
      throw new TypeError('floors must be a number');
    }
    this.floors = floors;
  }

  get floors() {
    return this._floors;
  }

  set floors(num) {
    if (typeof num !== 'number') {
      throw new TypeError('floors must be a number');
    }
    this._floors = num;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
export default SkyHighBuilding;
