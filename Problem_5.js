// Problem - 5 :
// Create a simple polyfill for the Array.includes method by the name of customIncludes.

if (!Array.prototype.customIncludes) {
  Array.prototype.customIncludes = function (element, fromIndex = 0) {
    if (fromIndex < 0) {
      fromIndex = Math.max(this.length + fromIndex, 0);
    }

    for (let i = fromIndex; i < this.length; i++) {
      if (this[i] === element || (this[i] !== this[i] && element !== element)) {
        return true;
      }
    }

    return false;
  };
}

const arr = [1, 2, 3, NaN];

console.log(arr.customIncludes(2)); // Output: true
console.log(arr.customIncludes(4)); // Output: false
console.log(arr.customIncludes(NaN)); // Output: true
console.log(arr.customIncludes(NaN, 3)); // Output: true
console.log(arr.customIncludes(2, 3)); // Output: false
