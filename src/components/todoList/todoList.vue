<!-- composant root de la todolist -->
<script>

    import todoListAddForm from "./todoListAddForm.vue";
    import todoListItems from "./todoListItems.vue";

    export default {
        data:function() {
          return {
            todos:[
              {
                text:"Une tâche d'exemple",
                priority:"normal"
              }
            ]
          }
        },
        methods: {
          addItem:function(item) {
            this.todos.push(item)
          },
          deleteItem:function(itemIndex) {
            this.todos.splice(itemIndex, 1);
          },
          changeItemPriority:function(itemIndex, priority) {
            this.todos[itemIndex].priority = priority;
          }
        },
        components: {
          todoListAddForm,
          todoListItems
        }
    }

</script>

<template>
  <div class="todo-list">
    <div class="row">
      <div class="col-sm-12">
        <!-- formulaire d'ajout d'une tâche -->
        <todo-list-add-form @addItem="addItem"></todo-list-add-form>
      </div>
    </div>

    <div class="row todo-list">
      <div class="col-sm-12">
        <!-- list des tâches -->
        <todo-list-items
                :todos="todos"
                @changeItemPriority="changeItemPriority"
                @deleteItem="deleteItem">

        </todo-list-items>
      </div>
    </div>
  </div>
</template>

<style scoped>

  ul {
    list-style-type:none;
    margin-left:0;
  }

  li {
     padding:0.5rem
  }

  li:nth-child(even) {
    /*background: #EEE;*/
  }

  .item:hover{
    background-color: #EEE;
    transition:background-color 0.2s linear;
  }

  .item {
    background-color:inherit;
  }

  .high, .high:hover {
    background-color: gold;
    transition:background-color 0.4s linear;
  }

  .normal,.normal:hover {
    font-weight:normal;
    background-color:inherit;
    transition:background-color 0.4s linear;
  }

  .low, .low:hover{
    background-color:lightseagreen;
    transition:background-color 0.4s linear;
  }

</style>
