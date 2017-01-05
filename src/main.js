import Vue from "vue";
import todoList from "./todoList.vue";

new Vue({
  el: '#todo-list-app',
  render:h => h(todoList)
});

