function Account() {
  this._balance = 0;
};

Account.prototype = {
  balance: function() {
    return this._balance;
  },

  deposit: function(amount) {
    this._balance += amount;
  },

  withdraw: function(amount) {
    this._balance -= amount;
  }
};
