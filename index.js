var PersonBuilder = require('./PersonBuilder');

// Employees
var sue = new PersonBuilder('Sue').makeEmployee().makeManager(60).build();
var bill = new PersonBuilder('Bill').makeEmployee().makePartTime().build();
var phil = new PersonBuilder('Phil').makeEmployee().build();
// var sue = new Person('Sue', true, true, 60);
// var bill = new Person('Bill', true, false, 20);
// var phil = new Person('Phil', true, false);

// Shoppers
var charles = new PersonBuilder('Charles')
    .withMoney(500)
    .withList(['jeans', 'sunglasses'])
    .build();

var tabbitha = new PersonBuilder('Tabbitha').withMoney(1000).build();

// var charles = new Person('Charles', false, false, 0, 500, ['jeans', 'sunglasses']);
// var tabbitha = new Person('Tabbitha', false, false, 0, 1000);
