<template>
  <div v-if="todoItem" class="todo-item">
    <span class="text" :class="{ complete: todoItem.completed }">{{
      todoItem.label
    }}</span>
    <span>
      <input
        :id="todoItem.id.toString()"
        type="checkbox"
        @change="toggleCompleted(todoItem.id)"
        v-model="completed"
      />
      <label :for="todoItem.id.toString()">Completed</label>
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, onUpdated, PropType, ref } from "vue";
import { Todo } from "@/models/Todo";
import { TodoStore } from "@/stores/TodoStore";
export default defineComponent({
  name: "TodoItem",
  props: {
    todoItem: {
      type: Object as PropType<Todo>,
      required: true,
    },
  },
  setup(props) {
    const store = TodoStore();
    const completed = ref(props.todoItem.completed);
    function toggleCompleted(id: number) {
      store.toggleCompleted(id);
    }
    onUpdated(() => {
      //console.log("updated");
    });
    return { toggleCompleted, completed };
  },
});
</script>

<style scoped>
.todo-item {
  margin: 0.5rem 0;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.todo-item .text {
  max-width: 280px;
  word-wrap: break-word;
}
.todo-item .complete {
  text-decoration: line-through;
}
</style>
