<template>
  <div v-if="event" class="event-details">
    <div class="name">
      {{ event.name }}
    </div>
    <div class="description">
      {{ event.description }}
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { Event } from "@/models/Event";
import { getEvent } from "@/services/events/getEvent";
import EventServices from "@/services/events/EventServices";
export default defineComponent({
  name: "EventDetails",
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const event = ref<Event | null>(null);
    onMounted(async () => {
      const intId = parseInt(props.id);
      //using EventService to get event by intId
      console.log(await EventServices.getEventById(intId));
      const res = await EventServices.getEventById(intId);
      event.value = res.data as Event;
    });
    return { event };
  },
});
</script>
<style scoped>
/* make a card view of event-details */
.event-details {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
  padding: 10px;
  border: 1px solid #333;
  border-radius: 5px;
  margin: 10px auto;
  background: white;
  width: 560px;
}
.event-details .name {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  position: relative;
}
.event-details .name::after {
  content: "";
  position: absolute;
  bottom: 0px;
  top: 0px;
  right: -5px;
  width: 2px;
  height: 100%;
  background: #333;
}
.event-details .description {
  font-size: 16px;
  margin-bottom: 10px;
}
</style>
