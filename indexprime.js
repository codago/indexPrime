
function indexPrime(param1){
  var counter = 0;
  var bilanganPrima = 2;
  while (counter !== param1) {

     var isPrime = true;
     for (var i = 2; i<bilanganPrima; i++){
       if (bilanganPrima %i === 0) {
         isPrime = false;
       }
     }
     if(bilanganPrima === 0 || bilanganPrima === 1){
         isPrime = false
     }

    if(isPrime){
      counter++
    }
    bilanganPrima++;
  }

  return bilanganPrima - 1;

}
console.log(indexPrime(4)) //result => 7
console.log(indexPrime(500)) //result => 3571
//console.log(indexPrime(37786)) //result => 450881
