exports = (typeof window === 'undefined') ? global : window;

exports.flowControlAnswers = {
  fizzBuzz : function(num) {
    if (typeof num === 'number') {
        var output = '';
        num % 3 === 0 ? output += 'fizz' : false;
        num % 5 === 0 ? output += 'buzz' : false;
        output ? true : output = num;
        return output;
    }
  }
};
