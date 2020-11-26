/*
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]); // returns[false,1,1,2,1,3,"a",0,0]
*/

var moveZeros = function (arr) {
  let zeroCounter = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr.splice(i, 1); //remove zero @ current index
      zeroCounter++;
      i--; //you make array one element smaller, so you have to make i smaller to make up for that
    }
  }
  for (let j = 0; j < zeroCounter; j++) {
    arr.push(0);
  }
  return arr;
};
let myArray = [false, 1, 0, 1, 2, 0, 1, 3, "a"];
console.log(moveZeros(myArray));
