<template>
  <div id="app">
    <index></index>
  </div>
</template>

<script>
import Index from "./components/Index.vue";

export default {
  name: "App",
  components: {
    Index
  }
};
</script>

<style>
* {
  font-family: "Noto Serif TC", serif;
}
a {
  text-decoration: none;
}
img {
  width: 100%;
  height: auto;
}
</style>
