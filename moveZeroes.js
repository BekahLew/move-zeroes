const moveZeroes = arr => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr.push(arr[i]);
      arr.splice(i, 1);
    }
  }
  return arr;
};

console.log(moveZeroes([1, 0, 3, 0, 5, null, false, [], "r"]));

export default moveZeroes;