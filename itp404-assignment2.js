//part 1
//class declaration of string with the function method
function string() {}

string.prototype.pluralize = function(input) {
  if (input.endsWith("y")) {
    var pluralized = input.substring(0, input.length - 1);
    pluralized += "ies";
    return pluralized;
  }
  else {
    input += "s";
    return input;
  }
}

//declaring new test objects as strings
var test = new string();
console.log(test.pluralize("baby"));
console.log(test.pluralize("cat"));
//outputs "babies" and "cats"





//part 2
function Book(inputval) {
  this.title = inputval.title;
  this.quantity = inputval.quantity;
  this.price = inputval.price;
}

Book.prototype.getSubtotal = function() {
  return this.quantity*this.price;
}


var oojsBook = new Book({ title: 'Object Oriented JavaScript', quantity: 2, price: 10 });
console.log(oojsBook.title); // Object Oriented JavaScript
console.log(oojsBook.quantity); // 2
console.log(oojsBook.price); // 10
console.log(oojsBook.getSubtotal()); // 20


function ShoppingCart(inputval) {
  this.items = inputval;
}

ShoppingCart.prototype.add = function(bookname) {
  this.items.push(bookname);
}

ShoppingCart.prototype.getTotal = function() {
  var cost = this.items.reduce(function(sum, book) {
    //reduce all the books (this.items) in the shopping cart
    return sum + book.getSubtotal();
  }, 0);
  //book is each individual object
  return cost;
}

var book1 = new Book({ title: 'Object Oriented JavaScript', quantity: 1, price: 10 });
var book2 = new Book({ title: 'JavaScript Web Applications', quantity: 2, price: 15 });
var book3 = new Book({ title: 'PHP Object Oriented Solutions', quantity: 1, price: 20 });
var book4 = new Book({ title: 'Head First Java', quantity: 5, price: 20 });

var cart = new ShoppingCart([book1, book2]);
cart.add(book3);
cart.add(book4);
var subtotal = cart.getTotal();
console.log(subtotal); // 160







//part 3
Array.prototype.map2 = function(callbackFunction) {
  var results = [];
  this.forEach(function(element) {
    var newval = callbackFunction(element);
    results.push(newval);
  });
  return results;
}
//map2 takes in a function that defines what it should do with each element

var numbers = [1, 2, 3, 4, 5];
var numbersDoubled = numbers.map2(function(number) {
  return number * 2;
});
console.log(numbersDoubled); // should equal [2, 4, 6, 8, 10]
