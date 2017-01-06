<template>
  <ul class="todo-list--items">
    <li v-for="(item, itemIndex) in todos">
      {{item.text}}
      <todo-list-item-actions @deleteItem="$emit('deleteItem', itemIndex)" :itemIndex="itemIndex">
      </todo-list-item-actions>
    </li>
  </ul>
</template>

<style scoped>

  ul {
    list-style-type:none;
    margin-left:0;
  }

  li {
      padding:1rem
  }

  li:nth-child(even) {
    background: #EEE;
    padding:1rem
  }
</style>

<script>
    import todoListItemActions from "./todoListItemActions.vue";
    export default{
        props: ['todos'],
        components:{
          todoListItemActions
        }
    }
</script>
