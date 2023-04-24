<template>
  <div class="todo-list-view">
    <h1>Todo List View</h1>
    <TodoForm />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TodoForm from "../components/todos/TodoForm.vue";
export default defineComponent({
  name: "TodoView",
  components: {
    TodoForm,
  },
  setup() {
    return {};
  },
});
</script>

<style></style>
