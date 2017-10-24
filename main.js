// track elements height
// when @media min-width="1200px"
// proportion each element size in a row to a ratio
//
// create element object with methods

var interface_maker = function (node) {
  var interfaceArray = document.querySelector(node);
  var interfaceSize = document.querySelector(node).getBoundingClientRect();

  return {
    get_array: function () {
      return interfaceArray;
    },
    get_size: function () {
      return interfaceSize;
    }
  };
};

var interface = interface_maker('interface');
console.log(interface.get_size());
