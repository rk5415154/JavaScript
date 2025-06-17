const accountId = 124455
let accountEmail ="rk5415154@google.com"
var accountPassword="12345"
accountCity = "Kushinagar"
let accountState;
// accountId = 2  not allowed
accountEmail ="ak5415154@google.com"
accountPassword="54367"
accountCity="Gorakhpur"

console.log(accountEmail);

/*
Prefer not to use var
Becouse of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword, accountCity,accountState])
