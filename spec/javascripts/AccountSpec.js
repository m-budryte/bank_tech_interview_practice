describe('Account', function() {
  var account

  beforeEach(function() {
    account = new Account();
  });

  it('returns the balance', function() {
    expect(account.balance()).toEqual(0);
  });

  it('deposit increases the balance', function() {
    account.deposit(5);
    expect(account.balance()).toEqual(5);
  });

  it('withdrawal decreases the balance', function() {
    account.deposit(5);
    account.withdraw(3);
    expect(account.balance()).toEqual(2);
  })
});
