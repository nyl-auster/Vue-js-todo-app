import Vue from "vue";
import todoList from "./components/todoList/todoList.vue";

new Vue({
  el: '#todo-list-app',
  render:h => h(todoList)
});

