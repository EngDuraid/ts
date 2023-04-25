<template>
  <div>
    <TodoItem v-for="todo in todos" :key="todo.id" :todoItem="todo" />
  </div>
</template>
<script lang="ts">
import { Todo } from "@/models/Todo";
import { defineComponent, PropType } from "vue";
import TodoItem from "./TodoItem.vue";
export default defineComponent({
  name: "TodoList",
  components: {
    TodoItem,
  },
  props: {
    todos: {
      type: Object as PropType<Todo[]>,
      required: true,
    },
  },
});
</script>
<style scoped></style>
