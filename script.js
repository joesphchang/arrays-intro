const strings = ['a', 'b', 'c', 'd'];

// Get a certain index
strings[2]
// Grabs 'c'

// push
strings.push('e') ; // O(1)
// pushes 'e' to the end of the array.

// pop
strings.pop(); // O(1)
// pops last key-item at the end of an array. 

// unshift
strings.unshift('x'); // O(n);
// unshift adds to the beginning of the array.


// splice
strings.splice(2, 0, ' alien'); // O(N / 2)
//Adds the word 'Alien' to the index of 2 in the array.

class MyArray {
    constructor() {
         this.length = 0;
         this.data = {};
    }
    // getting the index of the array
    get(index) {
        return this.data[index]
    }
    // pushing in a new item
    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length
    }
    // pop gets no parameters
    pop() {
        // last item in the data array and minus it
        const lastItem = this.data[this.length - 1];
        // 'delete' javascript
        delete this.data[this.length];
        this.length--;
        return lastItem;
    }
    // index parameter to determine what item to delete
    delete(index) {
        // create variable of what this.data index
        const item = this.data[index];
        this.shiftItems(index);
        return item;
    }

    shiftItems(index) {
        // Looping through the index. Iterate untiil the end.
        for (let i = index; i < this.length - 1; i++) {
            // take each item in the data. 
            // Add the data right next to it + 1. 
            // shifting the items to the left by ' 1 '
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }
}

const newArray = new MyArray();
newArray.push('hi');
newArray.push('you');
newArray.push('!');
newArray.delete(0);
newArray.push('are');
newArray.push('nice');
newArray.delete(1);
console.log(newArray);

const newStr = 'Master the Coding Interview'

function reverse(str) {
    // Create string variable
    let revStr = ''; // O(1)
    // Loop through strings
    // Decrement string since we want to reverse
    for (let i = str.length - 1; i >=0; i--) { // O(N)
        // add and equal the string index to the reverse string
        revStr += str[i];
    }
    //return string
    return revStr;
}

console.log(reverse(newStr));

// The Big O Notation for this solution is O(N).

function reverse(str) {
    if (!str || str.length < 2 || typeof str !== 'string') {
        return 'hmm that is not good';
    }

    const backwards = [];
    const length = str.length - 1;

    for (let i = length; i >= 0; i--) {
        backwards.push(str[i]);
    }
    return backwards.join('');
}

function mergeSortedArrays(arr1, arr2) {
    const mergeArray = [];
    let arr1Item = arr1[0];
    let arr2Item = arr2[0];
    let i = 1;
    let j = 1;

    // Check Input
    if (arr1.length === 0){
        return arr2;
    } 

    if (arr2.length === 0) {
        return arr1;
    }

    while (arr1Item || arr2Item) {
        if (!arr2Item || arr1Item < arr2Item) {
            mergeArray.push(arr1Item)
            arr1Item = arr1[i];
            i++;
        }  else {
            mergeArray.push(arr2Item) 
            arr2Item = arr2[j];
            j++;
        }
    } 
    return mergeArray;
}

console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]))


var containsDuplicate = function (nums) {
	// create new hashmap set
	const newSet = new Set();
	// loop through nums.length
	for (let i = 0; i < nums.length; i++) {
		// create a variable that holds the index of nums
		let count = nums[i];
		// Check if newSet has count index
		if (newSet.has(count)) {
			// If it does, return true
			return true;
		} else {
			// else add it to the hashSet
			newSet.add(count);
		}
	}
	// return false
	return false;
};

var twoSum = function (nums, target) {
	// lets think about this for a second
	// This is going to be brute force and the Big O Notation will be O(N^2)
	// It will solve the problem but it won't be linear.

	// Loop through nums array
	for (let i = 0; i < nums.length; i++) {
		// loop through nums array again, but plus the index + 1
		for (let j = i + 1; j < nums.length; j++)
			// Check if nums[i] & nums[j] === target
			if (nums[i] + nums[j] === target) {
				// return index i & j
				return [i, j];
			}
	}
};

var moveZeroes = function (nums) {
	// create count variable and have it equal to 0
	let count = 0;
	// loop through nums.length
	for (let i = 0; i < nums.length; i++) {
		// check if nums index is not equal to 0
		if (nums[i] !== 0) {
			// add count to the index
			nums[count++] = nums[i];
		}
	}

	// While count is < then nums.length
	while (count < nums.length) {
		// add count when its equal to 0;
		nums[count++] = 0;
	}
	// return nums
	return nums;
};
