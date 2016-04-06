exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    var reducedString = '';

    while (str) {
      var repeatsUpToLimit = new RegExp('([a-zA-Z])\\1{0,' + (amount - 1) + '}');
      var allRepeats = /([a-zA-Z])\1*/;

      reducedString += repeatsUpToLimit.exec(str)[0];
      str = str.replace(allRepeats, '');
    }

    return reducedString;
  },

  wordWrap: function(str, cols) {
    var words = str.split(' ');
    var lines = [''];

    words.forEach(function(word) {
      var last = lines.length - 1;

      if (lines[last]) {
        if (word.length <= cols - lines[last].length) {
          lines[last] += ' ' + word;
        } else {
          lines.push(word);
        }
      } else {
        if (word.length <= cols + 1) {
          lines[last] += word;
        } else {
          return false;
        }
      }
    });

    return lines.join('\n');
  },
  reverseString: function(str) {
    var reversed = '';
    for (var i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  }
};
