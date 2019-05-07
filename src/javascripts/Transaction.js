function Transaction (date, type) {
  this._type = Symbol(type)
  this._date = date;
}

Transaction.prototype = {
  type: function() {
    return this._type
  },

  date: function() {
    return this._date
  }
}
