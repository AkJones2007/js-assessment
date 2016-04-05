exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn.apply(this, arr);
  },

  speak : function(fn, obj) {
    return fn.apply(obj);
  },

  functionFunction : function(str) {
    return function(str2) {
      return str + ', ' + str2;
    }
  },

  makeClosures : function(arr, fn) {
    return arr.map(function(num) {
      return function() {
        return fn(num);
      }
    });
  },

  partial : function(fn, str1, str2) {
    return function(str3) {
      return fn(str1, str2, str3);
    }
  },

  useArguments : function() {
    var total = 0;
    for (var num in arguments) {
      total += arguments[num];
    }
    return total;
  },

  callIt : function(fn) {
    var args = [];

    for (var index in arguments) {
      if (index !== '0') {
        args.push(arguments[index]);
      }
    };

    return fn.apply(this, args);
  },

  partialUsingArguments : function(fn) {
    var args = [];
    for (var index in arguments) {
      if (index !== '0') {
        args.push(arguments[index]);
      }
    }

    return function() {
      for (var index in arguments) {
        args.push(arguments[index]);
      }
      return fn.apply(this, args);
    }
  },

  curryIt : function(fn) {
    var args = [];
    var collect = function(arg) {
      args.push(arg);

      if (args.length < 3) {
        return collect;
      } else {
        return fn.apply(this, args);
      }
    };
    return collect;
  }
};
