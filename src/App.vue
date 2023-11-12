<script setup>
import Sidebar from './components/SideBar.vue'
</script>
<template lang="pug">
.container-fluid.p-0
  Sidebar
  .container
    router-view
</template>
<style scoped>
.container {
  padding-left: 210px ;
}
@media (max-width: 768px) {
  .container {
    padding-top: 80px;
    padding-left: 0px ;
  }
}
</style>
