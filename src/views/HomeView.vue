<template>
  <div><EventList /></div>
</template>
<script lang="ts">
import EventList from "@/components/events/EventList.vue";

export default {
  name: "HomeView",
  components: {
    EventList,
  },
  setup() {
    return {};
  },
};
</script>
<style scoped></style>
