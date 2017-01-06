<!-- composant root de la todolist -->
<template>
  <div class="todo-list">
    <div class="row">
      <div class="col-sm-12">

        <form>
          <div class="row">
            <div class="small-12 medium-10 columns">
              <input type="text" v-model="newTodo"/>
            </div>
            <div class="small-12 medium-2 columns">
              <button :disabled="!this.newTodo" type="submit" class="button primary" @click.prevent="addItem">
                Ajouter
              </button>
            </div>
          </div>
        </form>

      </div>
    </div>

    <div class="row todo-list">
      <div class="col-sm-12">

        <div class="row">
          <div class="small-10 columns">
            <ul class="todo-list--items">
              <li v-for="(item, itemIndex) in todos" class="item" :class="item.priority">

                {{item.text}}
                <div class="todo-list--item--actions">

                  <div class="todo-list--item--actions--action">
                    <a @click.prevent="deleteItem(itemIndex)" class="todo-list--item--actions--action--delete">
                      <i class="fi-x medium"></i>
                    </a>
                  </div>

                  <div class="todo-list--item--actions--action">
                    <a :class="{active: item.priority == 'high'}" class="priority" id="high" @click.prevent="changeItemPriority(itemIndex, 'high')"></a>
                    <a :class="{active: item.priority == 'normal'}"  class="priority" id="normal" @click.prevent="changeItemPriority(itemIndex, 'normal')"></a>
                    <a :class="{active: item.priority == 'low'}"  class="priority" id="low" @click.prevent="changeItemPriority(itemIndex, 'low')"></a>
                  </div>

                </div>

              </li>
            </ul>
          </div>
          <div class="small-2 columns">
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data:function() {
    return {
      newTodo: '',
      todos:[
        {
          text:"Une tâche d'exemple",
          priority:"normal"
        }
      ]
    }
  },
  methods: {
    addItem:function() {
      this.todos.push({text:this.newTodo, priority:'normal'});
      this.newTodo = '';
    },
    deleteItem:function(itemIndex) {
      this.todos.splice(itemIndex, 1);
    },
    changeItemPriority:function(itemIndex, priority) {
      this.todos[itemIndex].priority = priority;
    }
  }
}
</script>

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

    .todo-list--item--actions {
      position:relative;
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
      right:0;

    }

    .priority.active {
      border:solid black 1px;
      right:-50px;
      transition:all 0.4s ease-in-out;
    }

    .todo-list--item--actions--action {
      float:right;
    }

    .priority#high {
      background:orange;
      color:orange;
    }

    .priority#normal {
      background: white;
    }

    .priority#low {
      opacity:0.7;
      background:lightseagreen;
    }

    .todo-list--item--actions--action--delete {
      padding:1rem;
    }

</style>