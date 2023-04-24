<template>
  <div class="event-item">
    <router-link :to="'/events/' + event.id">
      {{ eventName }}
    </router-link>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
import { Event } from "../../models/Event";
export default defineComponent({
  name: "EventListItem",
  props: {
    event: {
      // type: Object as () => Event, //old version to define type
      type: Object as PropType<Event>,
      required: true,
    },
  },
  setup(props) {
    const eventName = computed(() => {
      return props.event.name.toUpperCase();
    });
    return { eventName };
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
