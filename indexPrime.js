function indexPrime(param1){
  function findPrime(n){
  if (n===1 || n===0){
    return false
  }
  var primeNum = true
  for(x=2; x<n; x++){
    if (n %x === 0){
      primeNum = false
    }
  }
  return primeNum
  }

var number = 0
var firstNumber = 2;
while (number !== param1) {
  if (findPrime(firstNumber)){
    number++
  }
firstNumber++
}
  return firstNumber -1
}

console.log(indexPrime(4)) //result => 7

console.log(indexPrime(500)) //result => 3571

//console.log(indexPrime(37786)) //result => 450881
