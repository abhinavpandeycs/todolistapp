function lengthOfLIS(nums) {
  const subsequence = [];

  for (let num of nums) {
    let low = 0,
      high = subsequence.length;

    while (low < high) {
      let mid = Math.floor((low + high) / 2);
      if (subsequence[mid] < num) {
        low = mid + 1;
      } else {
        high = mid;
      }
    }

    if (low === subsequence.length) {
      subsequence.push(num);
    } else {
      subsequence[low] = num;
    }
  }

  return subsequence.length;
}

// Test Cases
const nums = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(lengthOfLIS(nums));
