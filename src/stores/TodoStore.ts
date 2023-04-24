import { defineStore } from "pinia";
import { Todo } from "@/models/Todo";

export const TodoStore = defineStore({
  id: "todo",
  state: () => ({
    todos: [] as Todo[],
  }),
  actions: {
    addTodo(newTodo: string) {
      const newId = this.todos.length + 1;
      const todo: Todo = {
        id: newId,
        label: newTodo,
        completed: false,
      };
      this.todos.push(todo);
    },
    toggleCompleted(id: number) {
      const todo = this.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    getTodos() {
      return this.todos;
    },
  },
});
