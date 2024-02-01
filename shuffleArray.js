const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// randomly shuffle an array
//Method1
function shuffle(arr) {
  let appearedIndex = [];
  let shuffledArray = [];
  let i = 0;
  while (i < arr.length) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    if (!appearedIndex.includes(randomIndex)) {
      shuffledArray.push(arr[randomIndex]);
      appearedIndex.push(randomIndex);
      i++;
    }
  }
  console.log("shu", shuffledArray);
  return shuffledArray;
}
shuffle(arr);

//method2
function shuffle2(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements at i and j
  }
  console.log("arr", arr);
  return arr;
}

const array2 = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(shuffle2(array2));
