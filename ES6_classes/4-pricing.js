import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    if (!(currency instanceof Currency)) {
      throw new TypeError('currency must be an instance of Currency');
    }
    this.amount = amount;
    this.currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(num) {
    if (typeof num !== 'number') {
      throw new TypeError('Amout must be a number');
    }
    this._amount = num;
  }

  get currency() {
    return this._currency;
  }

  set currency(inst) {
    if (!(inst instanceof Currency)) {
      throw new TypeError('currency must be an instance of Currency');
    }
    this._currency = inst;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    return (amount * conversionRate);
  }
}
