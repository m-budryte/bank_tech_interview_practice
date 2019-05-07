function TransactionList () {
  this._list = [];
}

TransactionList.prototype = {
  showList: function(){
    return this._list;
  },

  add: function(transaction){
    this._list.push(transaction)
  }
};
