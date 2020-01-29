
var test = require('tape');
var logic = require('./logic');
let expect = [
    {id: 1, description: "abood", done: false} ]
    let expect3= [
      {id: 3, description: "abood", done: true} ]
    
test('Refactor our add',function(t){
t.deepEqual(logic.markTodo(), "you should put arg", " unde");
t.deepEqual(logic.markTodo(expect, 1),[{id: 1, description: "abood", done: true} ],'changed false to true ');
t.deepEqual(logic.markTodo(expect3, 3),[{id: 3, description: "abood", done: false} ],'changed  true to false ');
t.end();
})