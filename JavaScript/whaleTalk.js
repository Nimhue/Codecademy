const input = 'Carla si Alexandra sunt cele mai tari';
let vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];

for( let inputIndex = 0; inputIndex < input.length; inputIndex++){
 // console.log(`inputIndex is ${inputIndex}`);
  for(vowelsIndex = 0; vowelsIndex < vowels.length; vowelsIndex++){
 // console.log(`vowelsIndex is ${vowelsIndex}`);
    if(input[inputIndex] === vowels[vowelsIndex]){
      resultArray.push(input[inputIndex]);
    }
  } if(input[inputIndex] === 'e'){
    resultArray.push(input[inputIndex]);
  }
  if(input[inputIndex] === 'u'){
    resultArray.push(input[inputIndex]);
  }
}
;
console.log(resultArray.join('').toUpperCase());
