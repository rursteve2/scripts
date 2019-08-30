// let h = {}
// h.one = 1
// h.two = 2
// h.three = 3

// for (let k in h) {
//     if( h.hasOwnProperty(k)) {
//         console.log("key: " + k + ", value: ", h[k])
//     }
// }
// hard coded hashtable

// function HashTable(obj) {
//     this.length = 0;
//     this.items = {};
//     for(let p in obj) {
//         if (obj.hasOwnProperty(p)) {
//             this.items[p] = obj[p];
//             this.length++
//         }
//     }

//     this.setItem = function(key, value) {
//         let previous = undefined
//         if (this.has(key)) {
//             previous = this.items[key]
//         } else {
//             this.length++
//         }
//         this.items[key] = value
//         return previous
//     }

//     this.getItem = function(key) {
//         return this.has(key) ? this.items[key] : undefined;
//     }

//     this.hasItem = function(key) {
//         return this.items.hasOwnProperty(key)
//     }

//     this.removeItem = function(key) {
//         if (this.has(key)) {
//             previous = this.items[key]
//             this.length--
//             delete this.items[key]
//             return previous
//         } else {
//             return undefined
//         }
//     }

//     this.keys = function() {
//         let keys = [];
//         for(let k in this.items) {
//             if (this.has(k)) {
//                 keys.push(k)
//             }
//         }
//         return keys
//     }

//     this.values = function() {
//         let values = []
//         for(let k in this.items) {
//             if (this.has(k)) {
//                 values.push(this.items[k])
//             }
//         }
//         return values
//     }

//     this.each = function(fn) {
//         for(let k in this.items) {
//             if (this.has(k)) {
//                 fn(k, this.items[k])
//             }
//         }
//     }

//     this.clear = function() {
//         this.items = {}
//         this.length = 0
//     }

// }

// let hs = new HashTable({one: 1, two: 2, three: 3, "i'm no 4": 4})

// find duplicates in hash table format


function duplicates(arr) {
  
    // our hash table to store each element
    // in the array as we pass through it
    var hashTable = [];
    
    // store duplicates
    var dups = [];
    
    // check each element in the array
    for (var i = 0; i < arr.length; i++) {
      
      // if element does not exist in hash table
      // then insert it
      if (hashTable[arr[i].toString()] === undefined) {
        hashTable[arr[i].toString()] = true;
      } 
      
      // if element does exist in hash table
      // then we know it is a duplicate
      else { dups.push(arr[i]); }
      
    }
    console.log(dups)
    return dups;
    
  }
  
  duplicates([1, 21, -4, 103, 21, 4, 1]);