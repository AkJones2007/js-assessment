exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {
    var counter = {
      current: start,
      max: end,

      set: function() {
        console.log(start);
        this.current += 1;
        this.print();
      },

      print: function() {
        this.timer = window.setTimeout(function() {
          console.log(this.current);
          if (this.current < this.max) {
            this.current += 1;
            this.print();
          }
        }.bind(this), 100);
      },

      cancel: function() {
        window.clearTimeout(this.timer);
      }
    };

    counter.set();
    return counter;
  }
};
