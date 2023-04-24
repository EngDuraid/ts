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
import { defineComponent, onMounted, ref, watch } from "vue";
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
    let filterType = ref<TodoFilter>("all");

    watch(store.getTodos(), () => {
      if (filterType.value === "all") getTodos();
      if (filterType.value === "completed") getCompleted();
      if (filterType.value === "uncompleted") getUncompleted();
    });

    onMounted(() => {
      getTodos();
    });
    function getTodos() {
      filterType.value = "all";
      todos.value = store.getTodos();
    }

    function getCompleted() {
      filterType.value = "completed";
      todos.value = store.getTodos().filter((todo) => todo.completed);
    }
    function getUncompleted() {
      filterType.value = "uncompleted";
      todos.value = store.getTodos().filter((todo) => !todo.completed);
    }
    return { todos, getTodos, getCompleted, getUncompleted };
  },
});
</script>

<style>
.todo-list-view {
  width: 400px;
  margin: 20px auto;
}
</style>
