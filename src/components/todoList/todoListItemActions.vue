<script>
    export default{
        name:"todoListItemActions",
        props: ['item', 'itemIndex'],
        data:function(){
          return {
            priority:"normal"
          }
        },
        methods:{
        deleteItem:function() {
           this.$emit('deleteItem', this.itemIndex);
        },
        changeItemPriority:function(priority) {
           this.$emit('changeItemPriority', this.itemIndex, priority);
        }
      },
    }
</script>

<template>
  <div class="todo-list--item--actions">

    <div class="todo-list--item--actions--action">
      <a @click.prevent="deleteItem" class="todo-list--item--actions--action--delete">
        <i class="fi-x medium"></i>
      </a>
    </div>

    <div class="todo-list--item--actions--action">
      <a :class="{active: item.priority == 'high'}" class="priority" id="high" @click.prevent="changeItemPriority('high')"></a>
      <a :class="{active: item.priority == 'normal'}"  class="priority" id="normal" @click.prevent="changeItemPriority('normal')"></a>
    </div>

  </div>
</template>

<style scoped>

    .todo-list--item--actions {
      float:right;
    }

    .priority {
      display: block;
      width: 1.2rem;
      border-radius:10px;
      height: 1.2rem;
      border:solid white 1px;
      float: right;
      margin-right: 1rem;
    }

    .priority.active {
      border: solid black 1px;
    }

    .todo-list--item--actions--action {
      float:right;
    }

    #high {
      background:orange;
      color:orange;
    }

    #normal {
      background: white;
    }

    #low {
      opacity:0.7;
    }

    .todo-list--item--actions--action--delete {
      padding:1rem;
    }

</style>
