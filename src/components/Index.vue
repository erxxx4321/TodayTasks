<template>
  <div class="container p-2">
    <h1 class="text-center m-4" style="font-weight: 600;">今日任務</h1>
    <input-section class="mb-5"></input-section>
    <task-section></task-section>
  </div>
</template>

<script>
import InputSection from "./common/InputSection.vue";
import TaskSection from "./common/TaskSection.vue";

export default {
  name: "Index",
  components: {
    InputSection,
    TaskSection
  }
};
</script>

<style scoped></style>
