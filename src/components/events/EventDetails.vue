<template>
  <div v-if="event">{{ event.name }}</div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { Event } from "../../models/Event";
import { getEvent } from "@/services/events/getEvent";
export default defineComponent({
  name: "EventDetails",
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  setup() {
    const event = ref<Event | null>(null);

    onMounted(async () => {
      //   event.value = await getEvent(this.id);
    });
    return { event };
  },
});
</script>
<style scoped></style>
