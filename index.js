function hasTargetSum(array, target) {
  const visited = new Set()

  for (const num of array) {
    const diff = target - num
    if (visited.has(diff)) {
      return true
    }
    visited.add(num)
  }

  return false
}


/* 
  //The time complexity of this algorithm is O(n) because we iterate through the array once. 
  The space complexity is also O(n) because we use a set to store visited elements, and its size can be at most the size of the input array.
*/

/* 
  //function hasTargetSum(array, target):
    initialize an empty hash set

    for each element in the array:
        calculate the difference (diff) between the target and the current element
        if diff is in the hash set:
            return true
        add the current element to the hash set

  If the loop completes without finding a valid pair, return false
    return false

*/

/*
  //The hasTargetSum function iterates through the input array, keeping track of the elements encountered in the visited set. 
  For each element, it calculates the difference between the target sum and the current element. 
  If this difference exists in the visited set, it means that we have found two elements that add up to the target sum, and the function returns true. 
  Otherwise, the current element is added to the visited set. 
  If the loop completes without finding a valid pair, the function returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));
  
  console.log("");
  
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));
  
  console.log("");
  
  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
  
  console.log("");
  
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));
  
  console.log("");
  
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 5));
  
  console.log("");
  
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([2, 2, 3, 3], 4));
  
  console.log("");
  
  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 4))
}
module.exports = hasTargetSum;
