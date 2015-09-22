describe('BankAccount', function() {
  it("creates a new account", function() {
    var testBankAccount = new BankAccount("chitra", "atmakuru", 200);
    expect(testBankAccount.firstName).to.equal("chitra");
    expect(testBankAccount.lastName).to.equal("atmakuru");
    expect(testBankAccount.balance).to.equal(200);
  });

  it("subtract the withdraw amount from the current balance", function() {
    var testBankAccount = new BankAccount("chitra", "atmakuru", 200);

    expect(testBankAccount.withdrawMoney(100)).to.equal(100);
  });

  it("adds the deposit money to the current balance", function() {
    var testBankAccount = new BankAccount("chitra", "atmakuru", 200);

    expect(testBankAccount.depositMoney(100)).to.equal(300);
  });

});
