exports = (typeof window === 'undefined') ? global : window;

exports.regexAnswers = {
  containsNumber : function(str) {
    var digit = /\d/;
    return digit.test(str);
  },

  containsRepeatingLetter : function(str) {
    var repeats = /([a-zA-Z])\1+/;
    return repeats.test(str);
  },

  endsWithVowel : function(str) {
    var vowels = /[aeiouAEIOU]$/;
    return vowels.test(str);
  },

  captureThreeNumbers : function(str) {
    var threeDigits = /\d\d\d/;
    var match = str.match(threeDigits);
    return match ? match[0] : false;
  },

  matchesPattern : function(str) {
    var validPhoneNum = /^\d\d\d-\d\d\d-\d\d\d\d$/;
    return validPhoneNum.test(str);
  },
  isUSD : function(str) {
    var validUSD = /^(\$)((\d{1,3},\d{3})|(\d{1,3}))(,\d{3})*(\.\d{2})?$/;
    return validUSD.test(str);
  }
};
