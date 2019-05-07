describe('TransactionList', function() {
  describe('#showList', function() {
    it('returns an array with transactions', function() {
      var transactionList = new TransactionList();
      var transaction = new Transaction('13/01/2012', 'withdrawal');
      expect(transactionList.showList()).toEqual(jasmine.any(Array))
    })
  })

  describe('#add', function() {
    it('adds a transaction to the list', function() {
      var transactionList = new TransactionList();
      var transaction = new Transaction('13/01/2012', 'withdrawal');
      transactionList.add(transaction);
      expect(transactionList.showList()).toContain(transaction)
    })
  })
});
