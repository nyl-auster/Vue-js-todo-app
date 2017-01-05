<template>

  <div class="todo-list--item--actions">
    <a @click.prevent="deleteItem" class="todo-list--item--actions--delete">
      <i class="fi-x medium"></i>
    </a>
  </div>

</template>

<style>

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
