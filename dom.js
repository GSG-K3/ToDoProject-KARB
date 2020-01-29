// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(function () {
  // This is the dom node where we will keep our todo
  var container = document.getElementById('todo-container');
  var addTodoForm = document.getElementById('add-todo');

  var state = [
    { id: -3, description: 'first todo' },
    { id: -2, description: 'second todo' },
    { id: -1, description: 'third todo' },
  ]; // this is our initial todoList

  // This function takes a todo, it returns the DOM node representing that todo
  var createTodoNode = function (todo) {
    var todoNode = document.createElement('li');
    // you will need to use addEventListener

    // add span holding description

    // this adds the delete button
    var text = todo.description;
    var spanElement = document.createElement("span");
    spanElement.appendChild(document.createTextNode(text));
    todoNode.appendChild(spanElement);

    var deleteButtonNode = document.createElement('button');
    deleteButtonNode.addEventListener('click', function (event) {
      var newState = todoFunctions.deleteTodo(state, todo.id);
      update(newState);
    });
    todoNode.appendChild(deleteButtonNode);
    deleteButtonNode.appendChild(document.createTextNode("Delete"));

    // add markTodo button
   var markTodobtn =document.createElement("button");
   markTodobtn.addEventListener('click', function(event){
     var newstate =todoFunctions.markTodo(state, todo.id);
     state = newstate;
     // Add Color class 
     todoNode.classList.add("mark");
   });
   todoNode.appendChild(markTodobtn);
   markTodobtn.appendChild(document.createTextNode("Mark"));


   if(todo.done == true){
    todoNode.classList.add("mark")
   }
    // add classes for css


    return todoNode;
  };

  // bind create todo form
  if (addTodoForm) {
    addTodoForm.addEventListener('submit', function (event) {
      // https://developer.mozilla.org/en-US/docs/Web/Events/submit
      // what does event.preventDefault do?
      // what is inside event.target?
      event.preventDefault();
      var description = event.target.elements["description"].value;// event.target ....
      var newTask = { id: 0, description: description, done: false }
      var newState = todoFunctions.addTodo(state, newTask);// ?? change this!
      update(newState);
    });
  }

  // you should not need to change this function
  var update = function (newState) {
    state = newState;
    renderState(state);
  };

  // you do not need to change this function
  var renderState = function (state) {
    var todoListNode = document.createElement('ul');

    state.forEach(function (todo) {
      todoListNode.appendChild(createTodoNode(todo));
    });

    // you may want to add a class for css
    container.replaceChild(todoListNode, container.firstChild);
  };

  if (container) renderState(state);
})();