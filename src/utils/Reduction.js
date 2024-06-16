// src/services/Reduction.js
class Reduction {
  constructor(name, description, discount, conditions = {}, total) {
    this.name = name;
    this.description = description;
    this.discount = discount;
    this.conditions = conditions;
    this.disabled = !this.isApplicable(total);
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
