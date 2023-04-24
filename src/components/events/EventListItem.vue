<template>
  <div class="event-item">
    <router-link :to="'/events/' + event.id">
      {{ event.name }}
    </router-link>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { Event } from "../../models/Event";
export default defineComponent({
  name: "EventListItem",
  props: {
    event: {
      type: Object as () => Event,
      required: true,
    },
  },
  setup() {
    return {};
  },
});
</script>
<style scoped>
/* create event card */
.event-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
  padding: 10px;
  border: 1px solid #333;
  border-radius: 5px;
  margin-bottom: 10px;
  background: white;
}
</style>
