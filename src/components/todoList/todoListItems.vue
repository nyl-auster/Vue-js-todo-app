<script>
    import todoListItemActions from "./todoListItemActions.vue";
    export default{
        props: ['todos'],
        methods:{
          changeItemPriority:function(itemIndex, priority) {
            this.$emit('changeItemPriority', itemIndex, priority);
          },
          deleteItem:function(itemIndex) {
            this.$emit('deleteItem', itemIndex);
          }
        },
        components:{
          todoListItemActions
        }
    }

</script>

<template>
  <div class="row">
    <div class="small-10 columns">
      <ul class="todo-list--items">
        <li v-for="(item, itemIndex) in todos" class="item" :class="item.priority">
          {{item.text}}
          <todo-list-item-actions
                  @deleteItem="deleteItem"
                  @changeItemPriority="changeItemPriority"
                  :item="item"
                  :itemIndex="itemIndex">
          </todo-list-item-actions>
        </li>
      </ul>
    </div>
    <div class="small-2 columns">
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

  .normal, .normal:hover {
    font-weight:normal;
    background-color:inherit;
    transition:background-color 0.4s linear;
  }

  .low, .low:hover{
    transition:all 0.4s linear;
    background-color:lightseagreen;
    color:white;
  }


</style>
