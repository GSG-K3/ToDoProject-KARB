var test = require('tape');
var logic = require('./logic');
let expect = [
    {id: 1, description: "abood", done: false} ]
    let expect1 = [
        {id: 1, description: "abood", done: false} ]
    let expect2 = [ {id: 1, description: "abood", done: false} ,
        {id: 2, description: "banan", done: false} ]

test('Refactor our add',function(t){
t.deepEqual(logic.addTodo(), "undefined", " ")
t.deepEqual(logic.addTodo([],''),'the new todo must be object')
t.deepEqual(logic.addTodo('',expect),'the new todo must be array')
t.deepEqual(logic.addTodo([], {id: 1, description: "abood", done: false}),expect,'this is the first task added');
t.deepEqual(logic.addTodo(expect1, {id: 1, description: "banan", done: false}),expect2,'this is the second task added');

t.end();
})

// test('Refactor our delete task',function(t){
//   t.equal(logic.deleteTodo(),'delete first task','this is the first deleted task');
// t.end();
// })

// test('Refactor our mark',function(t){
// t.equal(logic.markTodo(2),true,'mark task');

// t.end();
// })

