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

// import { getEvents } from "../../services/events/getEvents";
import EventServices from "@/services/events/EventServices";

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
      try{
        const res = await EventServices.getAllEvents();
        events.value = res.data;
      }
      catch(err){
        console.log(err);
      }
      // events.value = await getEvents();
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
  background: #f4f5f6;
  color: #333;
}
</style>
