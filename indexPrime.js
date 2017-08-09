  function isPrime(num){
  if(num < 2){
    return false;
  }
  for(var i=2,l=Math.sqrt(num); i<=l; i++){
    if(num % i === 0){
      return false;
    }
  }
  return true;
}
function indexPrime(param1){
  var num= 0;
  var numawal=2;
  while(num !== param1){
    if (isPrime(numawal)){
      num++
    }
    numawal++
  }
  return numawal-1
}
console.log(indexPrime(4)) //result => 7
console.log(indexPrime(500)) //result => 3571
console.log(indexPrime(37786)) //result => 450881
