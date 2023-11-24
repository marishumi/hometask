let arr = [7, 98, null, 6.7576]
let zeroCount = 0;
let evenCount = 0;
let oddCount = 0;
for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === "number" || isNaN(arr[i])){        
    if (arr[i] === 0) {
      zeroCount += 1;
    }else if (arr[i] % 2 === 0){
      evenCount += 1;
    } else {
      oddCount += 1;
    }
  } 
}
console.log(`В массиве: ${zeroCount} нулей, ${evenCount} чётных, ${oddCount} нечётных!`);

counter()
