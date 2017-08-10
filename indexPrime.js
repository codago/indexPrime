"use strict"
function indexPrime1(param1){
if (param1 > 2) {
        var i, q;
        do {
            i = 3;
            param1 += 2;
            q = Math.floor(Math.sqrt(param1));
            while (i <= q && param1 % i) {
                i += 2;
            }
        } while (i <= q);
        return param1;
    }
    return param1 == 2 ? 3 : 2;
}

function indexPrime(n){
  var param1 = 0, result = [];
  for (var i = 0; i < 50000 ; i++) {
      param1 = indexPrime1(param1);
      if(n == i+1){
        return(param1)
        //console.log(param1) ==> jgn dipake muncul undefined
      }
  }
}
//indexPrime(37786)
//console.log(param1);
console.log(indexPrime(4)) //result => 7
console.log(indexPrime(500)) //result => 3571
console.log(indexPrime(37786)) //result => 450881
