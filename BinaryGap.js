var gapArray = [];
var count = 0;

function dec2bin(dec){
    return (dec >>> 0).toString(2);
}

function solution(N) {
    var inputNumber = dec2bin(N);

    if(inputNumber.indexOf(0) == -1){ //Return if no zeros are found in the binary number
        return 0;
    }
    for(i=0;i<inputNumber.length;i++){

        if(inputNumber[i] == 0){
            count += 1;
        }
        if(inputNumber[i] != 0){
            gapArray.push(count);
            count = 0;
        }
    }
  console.log(gapArray);
    var largest = Math.max.apply(null, gapArray);
    return largest;
}

console.log(solution(21500));
console.log(solution(15));