function createAccount(pin, amount = 0) {
  return {
    checkBalance(userpin) {
      if (!(userpin == pin)) {
        return `Invalid PIN.`;
      }
      return `$${amount}`;
    },
    deposit(userpin, num) {
      if (!(userpin == pin)) {
        return `Invalid PIN.`;
      }
      amount = amount + num;
      return `Succesfully deposited $${num}. Current balance: $${amount}.`;
    },
    withdraw(userpin, num) {
      if (!(userpin == pin)) {
        return `Invalid PIN.`;
      }
      if (num > amount) {
        return `Withdrawal amount exceeds account balance. Transaction cancelled.`;
      } else {
        amount = amount - num;
        return `Succesfully withdrew $${num}. Current balance: $${amount}.`;
      }
    },
    changePin(userpin, newPin) {
      if (!(userpin == pin)) {
        return `Invalid PIN.`;
      }
      pin = newPin;
      return 'PIN successfully changed!';
    },
  };
}
module.exports = { createAccount };
