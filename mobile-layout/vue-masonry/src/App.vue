<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Masonry from "./components/Masonry.vue";
</script>

<template>
  <Masonry :columns="3" :gutter="'10'">
    <img src="https://picsum.photos/100/460?radom=1" alt />
    <img src="https://picsum.photos/500/860?radom=1" alt />
    <img src="https://picsum.photos/300/120?radom=1" alt />
    <img src="https://picsum.photos/320/360?radom=1" alt />
    <img src="https://picsum.photos/340/160?radom=1" alt />
    <img src="https://picsum.photos/940/280?radom=1" alt />
    <img src="https://picsum.photos/120/330?radom=1" alt />
    <img src="https://picsum.photos/440/790?radom=1" alt />
    <img src="https://picsum.photos/550/120?radom=1" alt />
    <img src="https://picsum.photos/670/1800?radom=1" alt />
    <img src="https://picsum.photos/720/440?radom=1" alt />
    <img src="https://picsum.photos/330/800?radom=1" alt />
    <img src="https://picsum.photos/260/970?radom=1" alt />
    <img src="https://picsum.photos/560/220?radom=1" alt />
    <img src="https://picsum.photos/860/291?radom=1" alt />
  </Masonry>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  border: 0;
}
</style>
