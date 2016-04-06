exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {

    var flatten = function(array) {
      var flattenedArray = [];

      for (var i = 0; i < array.length; i++) {
        if (array[i] instanceof Array) {
          for (var j = 0; j < array[i].length; j++) {
            flattenedArray.push(array[i][j]);
          }
        } else {
          flattenedArray.push(array[i]);
        }
      }

      return flattenedArray;
    }

    var getFiles = function(data) {
      var done = true;

      var list = data.map(function(file) {
        if (file instanceof Object) {
          done = false;
          return file.files;
        } else {
          return file;
        }
      });
      list = flatten(list);

      if (done) {
        return list;
      } else {
        return getFiles(list);
      }

    }

    var findDir = function(data, name, i) {
      i = i || 0;

      if (data[i] instanceof Object) {
        if (data[i].dir === name) {
          return data[i];
        } else {
          return findDir(data[i].files, name);
        }
      } else if (i < data.length) {
        return findDir(data, name, i + 1);
      }
    }


    if (dirName) {
      return getFiles(findDir(data.files, dirName).files);
    } else {
      return getFiles(data.files);
    }

  },

  permute: function(arr) {
    var permutes = [];

    for (var i = 0; i < arr.length; i++) {
      for (var j = 0, last = arr.length - 1; j < last; j++) {
        for (var k = 1; k < last; k++) {
          var temp = arr[last];
          arr[last] = arr[last - k];
          arr[last - k] = temp;
          permutes.push(arr.concat());
        }
      }
      arr.push(arr.shift());
    }

    return permutes;
  },

  fibonacci: function(n) {
    var fibPair = [0, 1];
    var s = false;

    for (var i = 0; i < n; i++) {
      var index = Number(s);
      fibPair[index] = fibPair[0] + fibPair[1];
      s = !s;
    }

    return fibPair[Number(s)];
  },

  validParentheses: function(n) {
    var validParens = [];

    var getParens = function(openSupply, closeSupply, string) {
      if (!(openSupply || closeSupply)) {
        return validParens.push(string);
      }
      if (openSupply) {
        getParens(openSupply - 1, closeSupply + 1, string + '(');
      }
      if (closeSupply) {
        getParens(openSupply, closeSupply - 1, string + ')');
      }
    };

    getParens(n, 0, '');

    return validParens;
  }
};
