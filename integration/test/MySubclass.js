const Parse = require('../../node');

class MySubclass extends Parse.Object {
  constructor() {
    super('MySubclass');
    this.mySimpleProp = 'foo';
    this.myArrayProp = [1, 2, 3];
  }

  get mySimpleProp() { return this.get('mySimpleProp'); }
  set mySimpleProp(val) { this.set('mySimpleProp', val); }

  get myArrayProp() { return this.get('myArrayProp'); }
  set myArrayProp(val) { this.set('myArrayProp', val); }
}

Parse.Object.registerSubclass('MySubclass', MySubclass);

module.exports = MySubclass;
