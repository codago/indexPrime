var isPrime = function(num){
    var numbers = num;
    if(num === 0)return false;
    if(num === 1)return false;
    while(num > 2){
        num--;
        if(numbers%num === 0)return false;
    }
    return true;
}

var indexPrime = function(index){
    var firstPrime = 2;
    var tempArr = [];
    do{
        if(isPrime(firstPrime)){
            // console.log("index prime "+count+" is "+firstPrime);
            tempArr.push(firstPrime);
        }
        firstPrime++;
    }while(tempArr.length !== index);

    return tempArr[tempArr.length-1];
}


console.log(indexPrime(4)) //result => 7
console.log(indexPrime(500)) //result => 3571
// console.log(indexPrime(37786)) //result => 450881
