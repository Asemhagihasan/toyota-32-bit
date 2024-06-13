// src/services/Reduction.js
class Reduction {
  constructor(name, description, discount, conditions = {}) {
    this.name = name;
    this.description = description;
    this.discount = discount;
    this.conditions = conditions;
  }

  isApplicable(total) {
    const { minPurchase, dayOfWeek } = this.conditions;

    if (minPurchase && total < minPurchase) {
      return false;
    }

    if (dayOfWeek !== undefined && new Date().getDay() !== dayOfWeek) {
      return false;
    }

    return true;
  }
}

export default Reduction;
