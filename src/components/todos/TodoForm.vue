<template>
  <form @submit.prevent="addTodo" class="todo-form">
    <input type="text" v-model="todoLabel" required />
    <button type="submit">Add</button>
  </form>
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
      if (todoLabel.value === "") return;
      store.addTodo(todoLabel.value.trim());
      todoLabel.value = "";
    }
    return { todoLabel, addTodo };
  },
});
</script>

<style scoped>
.todo-form {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
}
</style>
