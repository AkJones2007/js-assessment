exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
    var promise = new Promise(function(resolve, reject) {
      if (value) {
        resolve(value);
      }
    });
    return promise;
  },

  manipulateRemoteData : function(url) {
    var promise = new Promise(function(resolve, reject) {
      $.ajax({
        url: url,
        method: 'GET',
        dataType: 'json'
      }).done(function(data) {
        var names = data.people.map(function(person) {
          return person.name;
        }).sort();
        resolve(names);
      });
    });
    return promise;
  }
};
