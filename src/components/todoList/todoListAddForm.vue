<script>
    export default{
      name:"todoListAddForm",
      props:['todos'],
      data:function() {
        return {
          newTodo: ''
        }
      },
      methods: {
        addItem:function(){
          this.$emit('addItem', {
            text:this.newTodo,
            priority:'normal'
          });
          this.newTodo = '';
        }
      },
    }
</script>

<template>
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
</template>


