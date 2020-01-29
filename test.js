
var test = require('tape');
var logic = require('./logic');
let expect = [
    {id: 1, description: "abood", done: false} ]
    let expect1 = [
        {id: 1, description: "abood", done: false} ]
    let expect2 = [ {id: 1, description: "abood", done: false} ,
        {id: 2, description: "banan", done: false} ]
let expect3= [
      {id: 3, description: "abood", done: true} ]


test('Refactor our add',function(t){
t.deepEqual(logic.addTodo(), "undefined", " ")
t.deepEqual(logic.addTodo([],''),'the new todo must be object')
t.deepEqual(logic.addTodo('',expect),'the new todo must be array')
t.deepEqual(logic.addTodo([], {id: 1, description: "abood", done: false}),expect,'this is the first task added');
t.deepEqual(logic.addTodo(expect1, {id: 1, description: "banan", done: false}),expect2,'this is the second task added');

t.end();
})
    
test('Refactor our add',function(t){
t.deepEqual(logic.markTodo(), "you should put arg", " unde");
t.deepEqual(logic.markTodo(expect, 1),[{id: 1, description: "abood", done: true} ],'changed false to true ');
t.deepEqual(logic.markTodo(expect3, 3),[{id: 3, description: "abood", done: false} ],'changed  true to false ');
t.end();
})
