exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        return i;
      }
    }
    return -1;
  },

  sum : function(arr) {
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
      total += arr[i];
    }
    return total;
  },

  remove : function(arr, item) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] !== item) {
        newArr[newArr.length] = arr[i];
      }
    }
    return newArr;
  },

  removeWithoutCopy : function(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i--;
      }
    }
    return arr;
  },

  append : function(arr, item) {
    arr[arr.length] = item;
    return arr;
  },

  truncate : function(arr) {
    arr.splice(arr.length - 1, 1);
    return arr;
  },

  prepend : function(arr, item) {
    for (var i = arr.length; i > 0; i--) {
      arr[i] = arr[i - 1];
    }
    arr[0] = item;
    return arr;
  },

  curtail : function(arr) {
    arr.splice(0, 1);
    return arr;
  },

  concat : function(arr1, arr2) {
    for (var i = 0; i < arr2.length; i++) {
      arr1[arr1.length] = arr2[i];
    }
    return arr1;
  },

  insert : function(arr, item, index) {
    for (var i = arr.length; i > index; i--) {
      arr[i] = arr[i - 1];
    }
    arr[index] = item;
    return arr;
  },

  count : function(arr, item) {
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        total++;
      }
    }
    return total;
  },

  duplicates : function(arr) {
    var occurances = {};
    var dups = [];
    for (var i = 0; i < arr.length; i++) {
      var key = arr[i];
      if (occurances[key]) {
        occurances[key]++;
        if (occurances[key] === 2) {
          dups[dups.length] = key;
        }
      } else {
        occurances[key] = 1;
      }
    }
    return dups;
  },

  square : function(arr) {
    for (var i = 0; i < arr.length; i++) {
      arr[i] *= arr[i];
    }
    return arr;
  },

  findAllOccurrences : function(arr, target) {
    var occurances = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        occurances[occurances.length] = i;
      }
    }
    return occurances;
  }
};
