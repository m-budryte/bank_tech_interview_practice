describe('Transaction', function() {
  beforeEach(function() {
    var transaction = new Transaction();
  })

  it('returns a deposit type', function() {
    transaction = new Transaction('14/01/2012', 'deposit');
    expect(transaction.type()).toEqual(jasmine.any(Symbol));
    expect(transaction.type().toString()).toEqual('Symbol(deposit)');
  })

  it('returns a withdrawal type', function() {
    transaction = new Transaction('13/01/2012', 'withdrawal');
    expect(transaction.type()).toEqual(jasmine.any(Symbol));
    expect(transaction.type().toString()).toEqual('Symbol(withdrawal)');
  })

  it('returns a date', function() {
    transaction = new Transaction('14/01/2012', 'deposit');
    expect(transaction.date()).toEqual('14/01/2012')
  })
});
