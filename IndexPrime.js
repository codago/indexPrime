function cekPrima(num) {
  if(num == 0 || num == 1){
    return false
  }
  var isPrime = true;
  for (var x = 2; x<num; x++){
    if (num %x === 0) {
      isPrime = false;
    }
  }
  return isPrime;
}
////////////////////////////////
function indexPrime(param1){
  //write your code here
  var counter = 0;
  var bilanganPrima = 2;
  // result = [];
  while (counter !== param1) {
    if(cekPrima(bilanganPrima)){
      counter++
    }
    bilanganPrima++;
  }

  return bilanganPrima - 1;

}
console.log(indexPrime(4)) //result => 7
console.log(indexPrime(500)) //result => 3571
console.log(indexPrime(37786)) //result => 450881
