

function indexPrime(param1){
  function cariPrima (n){
    if (n === 1 || n === 0){
      return false
    }
    var bilanganPrima = true
    for ( x=2; x < n; x++){
      if ( n %x === 0){
        bilanganPrima = false
      }
    }
    return bilanganPrima
  }

  var angka = 0;
  var bilanganAwal = 2;
  while (angka !== param1){
    if (cariPrima(bilanganAwal)){
      angka++
    }
    bilanganAwal++
  }
  return bilanganAwal-1
}
console.log(indexPrime(4))
console.log(indexPrime(500))
console.log(indexPrime(37786))
