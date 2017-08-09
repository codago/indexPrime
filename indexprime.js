function indexPrime(param1){
  function cekPrime(n){
    var max = Math.sqrt(n);
    for( var i = 2; i <= max; i++ ){
      if (n % i == 0)
      return false;
    }
    return true;
  }
  var angka = 0;
  var bilanganawal = 2
  while (angka != param1 ) {
    if (cekPrime(bilanganawal)){
      angka++
    }
    bilanganawal++
  }
  return bilanganawal-1
}

console.log(indexPrime(4)); //result => 7
console.log(indexPrime(500)); //result => 3571
console.log(indexPrime(37786)); //result => 450881
