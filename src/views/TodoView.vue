<template>
  <div class="todo-list-view">
    <h1>Todo List View</h1>
    <TodoForm />
    <div>
      <TodoList :todos="todos" />
    </div>
    <div class="actions">
      <button @click="getTodos">Get All</button>
      <button @click="getCompleted">Get Completed Todos</button>
      <button @click="getUncompleted">Get Uncompleted Todos</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Todo } from "@/models/Todo";
import { computed, defineComponent, onMounted, ref, watch } from "vue";
import TodoForm from "../components/todos/TodoForm.vue";
import TodoList from "../components/todos/TodoList.vue";
import { TodoStore } from "@/stores/TodoStore";
export default defineComponent({
  name: "TodoView",
  components: {
    TodoForm,
    TodoList,
  },
  setup() {
    let todos = ref<Todo[]>([]);
    const store = TodoStore();
    type TodoFilter = "all" | "completed" | "uncompleted";
    let filterType = "all";
    watch(store.getTodos(), () => {
      if (filterType === "all") getTodos();
      if (filterType === "completed") getCompleted();
      if (filterType === "uncompleted") getUncompleted();
    });

    onMounted(() => {
      getTodos();
    });
    function getTodos() {
      filterType = "all";
      todos.value = store.getTodos();
    }

    function getCompleted() {
      filterType = "completed";
      todos.value = store.getTodos().filter((todo) => todo.completed);
    }
    function getUncompleted() {
      filterType = "uncompleted";
      todos.value = store.getTodos().filter((todo) => !todo.completed);
    }
    return { todos, getTodos, getCompleted, getUncompleted };
  },
});
</script>

<style></style>
