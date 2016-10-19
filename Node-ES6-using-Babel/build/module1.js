'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var x = 10;

console.log(x);

// Example 1: Creating a new class (declaration-form)
// ===============================================================

// A base class is defined using the new reserved 'class' keyword

var Polygon = function () {
  // ..and an (optional) custom class constructor. If one is
  // not supplied, a default constructor is used instead:
  // constructor() { }
  function Polygon(height, width) {
    _classCallCheck(this, Polygon);

    this.name = 'Polygon';
    this.height = height;
    this.width = width;
  }

  // Simple class instance methods using short-hand method
  // declaration


  _createClass(Polygon, [{
    key: 'sayName',
    value: function sayName() {
      console.log('Hi, I am a ', this.name + '.');
    }
  }, {
    key: 'sayHistory',
    value: function sayHistory() {
      console.log('"Polygon" is derived from the Greek polus (many) ' + 'and gonia (angle).');
    }

    // We will look at static and subclassed methods shortly

  }]);

  return Polygon;
}();

// Classes are used just like ES5 constructor functions:


var p = new Polygon(300, 400);
p.sayName();