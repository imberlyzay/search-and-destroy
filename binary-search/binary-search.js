'use strict';

// Complete this algo
// THIS DOESN"T WORK LOL
const binarySearch = (array, target, start = 0, end = array.length - 1) => {
	if (start > end) return false;

	else {
		let midpoint = Math.floor(start + end / 2);

		if (array[start] === target || array[end] === target) return true;
		else if (array[midpoint] === target) return true;

		else if (target < array[midpoint]) {
				return binarySearch(array, target, start + 1, midpoint - 1);
		}
		else if (target > array[midpoint]) {
				return binarySearch(array, target, midpoint + 1, end + 1);
		} else {
			return false
		}
	}
}

// This does work! We just trying to do recursion
// const binarySearch = (array, target) => {
// 	if (array.length === 0) {
// 		return false;
// 	}
// 	let pointer = 0;
// 	let midpoint = Math.floor(array.length / 2);
// 	if (target < array[midpoint]) {
// 		while (pointer <= midpoint) {
// 			if (array[pointer] === target || array[midpoint] === target) {
// 				return true;
// 			}
// 			pointer++;
// 			midpoint--;
// 		}
// 	} else {
// 		pointer = array.length - 1;
// 		while (pointer >= midpoint) {
// 			if (array[pointer] === target || array[midpoint] === target) {
// 				return true;
// 			}
// 			pointer--;
// 			midpoint++;
// 		}
// 	}
// 	return false;
// };

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch
