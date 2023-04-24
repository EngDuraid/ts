<template>
  <div>{{ event.name }}</div>
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
<style scoped></style>
