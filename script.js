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