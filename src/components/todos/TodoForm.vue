<template>
  <div class="todo-form">
    <input type="text" v-model="todoLabel" />
    <button @click.stop="addTodo">Add</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { TodoStore } from "@/stores/TodoStore";
export default defineComponent({
  name: "TodoForm",
  setup() {
    const todoLabel = ref("");
    const store = TodoStore();

    function addTodo() {
      store.addTodo(todoLabel.value);
      console.log(todoLabel.value);
    }
    return { todoLabel, addTodo };
  },
});
</script>

<style></style>
