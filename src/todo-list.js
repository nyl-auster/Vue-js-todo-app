import Vue from "vue";

/**
 * Notre composant pour afficher la todo list
 * C'est lui qui manipule les données de la todo-list
 */
Vue.component('todo-list', {
  data:function(){
    return {
      todos:[
        {
          text:"Une tâche d'exemple",
          status:"todo"
        }
      ]
    }
  },
  methods:{
    addItem:function(item) {
      this.todos.push(item)
    },
    deleteItem:function(itemIndex) {
      this.todos.splice(itemIndex, 1);
    },
  },
  template:`
  <div class="todo-list">
    <div class="row">
      <div class="col-sm-12">
        <todo-list-add-form @addItem="addItem"></todo-list-add-form>
      </div>
    </div>

    <div class="row todo-list">
      <div class="col-sm-12">
        <todo-list-items :todos="todos" @deleteItem="deleteItem"></todo-list-items>
      </div>
    </div>
  </div>`
});

/**
 * Formulaire d'ajout d'une tâche
 */
Vue.component('todo-list-add-form', {
  props:['todos'],
  data:function() {
    return {
      newTodo: ''
    }
  },
  methods: {
    addItem:function(){
      this.$emit('addItem', {text:this.newTodo});
      this.newTodo = '';
    }
  },
  template:`
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
  </form>`
});

/**
 * Liste des tâches
 */
Vue.component('todo-list-items', {
  props: ['todos'],
  // le template de notre composant
  template: `
  <table class="hover stack-for-small unstriped">
    <tbody>
     <tr v-for="(item, itemIndex) in todos">
       <td> 
         {{item.text}} 
         <todo-list-item-actions @deleteItem="$emit('deleteItem', itemIndex)" :todos="todos" :itemIndex="itemIndex"></todo-list-item-actions>
       </td>
     </tr>
    </tbody>
  </table>`
});

/**
 * Boutons d'action pour une tâche
 */
Vue.component('todo-list-item-actions', {
  props: ['todos', 'itemIndex'],
  methods:{
    deleteItem:function() {
      this.$emit('deleteItem', this.itemIndex);
    }
  },
  template:`
  <div class="todo-list--item--actions">
    <a @click.prevent="deleteItem" class="todo-list--item--actions--delete">
      <i class="fi-x medium"></i>
    </a>
  </div>
  `
});

new Vue({
  el: '#todo-list-app'
});

