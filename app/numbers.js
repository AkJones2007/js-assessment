exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    var binaryString = num.toString(2);
    var bitAtPosition = binaryString[binaryString.length - bit];
    return parseInt(bitAtPosition, 10);
  },

  base10: function(str) {
    return parseInt(str, 2);
  },

  convertToBinary: function(num) {
    var binaryString = num.toString(2);
    for (var i = binaryString.length; i < 8; i++) {
      binaryString = '0' + binaryString;
    }
    return binaryString;
  },

  multiply: function(a, b) {
    var precision = b.toString().split('.')[1].length;
    return parseFloat((a * b).toFixed(precision), 10);
  }
};
