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
      if (todoLabel.value === "") return;
      store.addTodo(todoLabel.value.trim());
      todoLabel.value = "";
    }
    return { todoLabel, addTodo };
  },
});
</script>

<style></style>
