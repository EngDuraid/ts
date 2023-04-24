<template>
  <div class="events">
    <div class="event" v-for="ev in events" :key="ev.id">
      <EventListItem :event="ev" />
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable */

import { defineComponent } from "vue";
import { ref, onMounted } from "vue";
import EventListItem from "./EventListItem.vue";
import { Event } from "../../models/Event";

import { getEvents } from "../../services/events/getEvents";
export default defineComponent({
  name: "EventList",
  props: {
    msg: String,
  },
  components: {
    EventListItem,
  },
  setup() {
    const events = ref<Event[]>([]);

    onMounted(async () => {
      events.value = await getEvents();
    });

    return { events };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.events {
  margin: 20px auto;
  padding: 10px;
  width: 300px;
  background: #ebe7e7;
  color: #333;
}
</style>
