import Vue from "vue";
//import todoList from "./components/todoList/todoList.vue";
import simpleTodoList from "./components/simpleTodoList/simpleTodoList.vue";

new Vue({
  el: '#todo-list-app',
  render:h => h(simpleTodoList)
});

