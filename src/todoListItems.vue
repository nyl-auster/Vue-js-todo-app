<template>
  <table class="hover stack-for-small unstriped">
    <tbody>
    <tr v-for="(item, itemIndex) in todos">
      <td>
        {{item.text}}
        <todo-list-item-actions @deleteItem="$emit('deleteItem', itemIndex)" :todos="todos" :itemIndex="itemIndex"></todo-list-item-actions>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<style scoped>
      table td {
      border-collapse: collapse;
      border:solid silver 1px;
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
