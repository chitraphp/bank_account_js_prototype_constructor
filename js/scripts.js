function BankAccount(firstName, lastName, initialDeposit) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.balance = initialDeposit;

}

BankAccount.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

BankAccount.prototype.withdrawMoney = function(withdrawAmount) {
  return this.balance -= withdrawAmount;
}

BankAccount.prototype.depositMoney = function(depositAmount) {
  return this.balance += depositAmount;
}



function resetFields() {
    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#initial-balance").val("");
}

jQuery(document).ready(function() {
  $("#new-first-name").focus();
  resetFields();

  $("#new-account").submit(function(event) {
    event.preventDefault();
    var firstName = $("#new-first-name").val();
    var lastName = $("#new-last-name").val();
    var initialDeposit = parseInt($("#initial-deposit").val());
    var newBankAccount = new BankAccount(firstName, lastName, initialDeposit);

    //var newAccount = [{newBankAccount.fullname(): newBankAccount.balance}];
    $("#account-form").hide();
    $("#accounts,#new-account-btn").show();

    $("ul#accounts").append("<li><span class='account'>" + newBankAccount.fullName() + "</span></li>");

    $("#new-first-name").val("");
    $("#new-last-name").val("");
    $("#initial-deposit").val("");

    $(".account").last().click(function(){
      $("#accounts").hide();
      $(".balance").remove();
      $("#account-details,#all-accounts-btn,#withdraw-btn, #deposit-btn").show();
      $("#header").text(newBankAccount.fullName());
      $("#account-details").append("<li class='balance'>Balance:$" + newBankAccount.balance + "</li>");
    });

    $("#withdraw-btn").click(function(e) {
      e.preventDefault();
      $("#withdraw").show();
      $("#deposit").hide();
    });

    $("#deposit-btn").click(function(e) {
      e.preventDefault();
      $("#withdraw").hide();
      $("#deposit").show();
    });

    $("button#new-account-btn").click(function() {
      $("#account-form").show();
      $("#accounts, #account-details,#new-account-btn").hide();
    });

    $("button#all-accounts-btn").click(function() {
      $("#account-form, #account-details, #withdraw, #deposit,#withdraw-btn,#deposit-btn").hide();
      $("#accounts").show();
    });

    $("#withdraw-form").submit(function(event) {
      var amount = $("#withdraw-money").val();
      var balanceInAccount = newBankAccount.withdrawMoney(amount);
      $(".balance").text(balanceInAccount);
      event.preventDefault();
    });

    $("#deposit-form").submit(function(event) {
      var amount = parseInt($("#deposit-money").val());
      var balanceInAccount = newBankAccount.depositMoney(amount);
      $(".balance").text(balanceInAccount);
      event.preventDefault();
    });

  });






});
