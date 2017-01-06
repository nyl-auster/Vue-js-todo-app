<template>
  <div class="todo-list--item--actions">
    <a @click.prevent="deleteItem" class="todo-list--item--actions--delete">
      <i class="fi-x medium"></i>
    </a>
  </div>
</template>

<style scoped>
    .todo-list--item--actions {
      float:right;
    }
</style>

<script>
    export default{
        name:"todoListItemActions",
        props: ['itemIndex'],
        methods:{
        deleteItem:function() {
           this.$emit('deleteItem', this.itemIndex);
        }
      },
    }
</script>
