angular.module('todoApp.main')
.controller('TodoListController', function() {
    var todoList = this;
    todoList.todos = [
      {text:'learn AngularJS', done:true},
      {text:'build an AngularJS app', done:false}];
 
    todoList.addTodo = function() {
      todoList.todos.push({text:todoList.todoText, done:false});
      todoList.todoText = '';
    };
 
    todoList.remaining = function() {
      var count = 0;
      angular.forEach(todoList.todos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };
 
    todoList.archive = function() {
      var oldTodos = todoList.todos;
      todoList.todos = [];
      angular.forEach(oldTodos, function(todo) {
        if (!todo.done) todoList.todos.push(todo);
      });
    };
  })
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4vbWFpbi5jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImNvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSgndG9kb0FwcC5tYWluJylcbi5jb250cm9sbGVyKCdUb2RvTGlzdENvbnRyb2xsZXInLCBmdW5jdGlvbigpIHtcbiAgICB2YXIgdG9kb0xpc3QgPSB0aGlzO1xuICAgIHRvZG9MaXN0LnRvZG9zID0gW1xuICAgICAge3RleHQ6J2xlYXJuIEFuZ3VsYXJKUycsIGRvbmU6dHJ1ZX0sXG4gICAgICB7dGV4dDonYnVpbGQgYW4gQW5ndWxhckpTIGFwcCcsIGRvbmU6ZmFsc2V9XTtcbiBcbiAgICB0b2RvTGlzdC5hZGRUb2RvID0gZnVuY3Rpb24oKSB7XG4gICAgICB0b2RvTGlzdC50b2Rvcy5wdXNoKHt0ZXh0OnRvZG9MaXN0LnRvZG9UZXh0LCBkb25lOmZhbHNlfSk7XG4gICAgICB0b2RvTGlzdC50b2RvVGV4dCA9ICcnO1xuICAgIH07XG4gXG4gICAgdG9kb0xpc3QucmVtYWluaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgY291bnQgPSAwO1xuICAgICAgYW5ndWxhci5mb3JFYWNoKHRvZG9MaXN0LnRvZG9zLCBmdW5jdGlvbih0b2RvKSB7XG4gICAgICAgIGNvdW50ICs9IHRvZG8uZG9uZSA/IDAgOiAxO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gY291bnQ7XG4gICAgfTtcbiBcbiAgICB0b2RvTGlzdC5hcmNoaXZlID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgb2xkVG9kb3MgPSB0b2RvTGlzdC50b2RvcztcbiAgICAgIHRvZG9MaXN0LnRvZG9zID0gW107XG4gICAgICBhbmd1bGFyLmZvckVhY2gob2xkVG9kb3MsIGZ1bmN0aW9uKHRvZG8pIHtcbiAgICAgICAgaWYgKCF0b2RvLmRvbmUpIHRvZG9MaXN0LnRvZG9zLnB1c2godG9kbyk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9KSJdfQ==
