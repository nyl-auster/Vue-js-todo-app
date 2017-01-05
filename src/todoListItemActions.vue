<template>

  <div class="todo-list--item--actions">
    <a @click.prevent="deleteItem" class="todo-list--item--actions--delete">
      <i class="fi-x medium"></i>
    </a>
  </div>

</template>

<style>
    .todo-list--item--actions {
      float:right;
    }
    .todo-list--item--actions--delete {
      color: red;
    }
</style>

<script>
    export default{
        name:"todoListItemActions",
        props: ['todos', 'itemIndex'],
        methods:{
        deleteItem:function() {
           this.$emit('deleteItem', this.itemIndex);
        }
      },
    }
</script>
