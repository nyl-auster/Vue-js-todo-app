<!-- composant root de la todolist -->
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
        <todo-list-items :todos="todos" @deleteItem="deleteItem"></todo-list-items>
      </div>
    </div>
  </div>
</template>

<script>
    import todoListAddForm from "./todoListAddForm.vue";
    import todoListItems from "./todoListItems.vue";
    export default {
        data:function() {
          return {
            todos:[
              {
                text:"Une tâche d'exemple",
                status:"todo"
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
        },
        components: {
          todoListAddForm,
          todoListItems
        }
    }
</script>