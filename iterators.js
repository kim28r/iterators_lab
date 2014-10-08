var iterators = {
    max: function (numList) {
      var max = -Infinity;
      for (var i = 0; i < numList.length; i++) {
        if (numList[i] > max) {
          max = numList[i];
        }
      }
      return max;
    },

    min: function (numList) {
      var min = Infinity;
      for (var i = 0; i < numList.length; i++) {
        if (numList[i] < min) {
          min = numList[i];
        }
      }
      return min;
    },

    each: function(items,myFunction) {
      for (var i =0; i < items.length; i++) {
        myFunction(items[i]);
      }
    },

    map: function (myArray, callback){
      var newArray = [];
      for (var i = 0; i < myArray.length; i++) {
        newArray.push(callback(myArray[i]));
      }
      return newArray;
    },

    filter: function (arr, callback) {
      var newArray = []; 
      for (var i = 0; i < arr.length; i++) {
        newArray.push(callback(arr[i])); 
      }
      return newArray; 
    }

};

module.exports = iterators;
