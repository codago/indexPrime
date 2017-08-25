function indexPrime(param1) {
  var primeNumber = 2;
  var counter = 0;

function primeCheck (n) {
  for (var i=2; i<n; i++) {
    if (n % i === 0) {
      return false;
        }
  }
  counter++
}


  while(counter !== param1) {
    primeCheck (primeNumber)
      primeNumber++
    }
return primeNumber-1;
  }



console.log(indexPrime(4));
console.log(indexPrime(500));
console.log(indexPrime(37786));
