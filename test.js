var test = require('tape');
var logic = require('./logic');

test('Refactor our add',function(t){
t.equal(logic.addTodo(),'first task','this is the first task added');
t.end();
})

test('Refactor our delete task',function(t){
  t.equal(logic.deleteTodo(),'delete first task','this is the first deleted task');
t.end();
})

test('Refactor our mark',function(t){
t.equal(logic.markTodo(2),true,'mark task');

t.end();
})

