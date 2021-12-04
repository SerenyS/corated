<template>
  <div id="app">
 
      <navComponent />
      <router-view></router-view>
  

  </div>
</template>

<script>
import navComponent from '@/components/navComponent.vue'
export default {
  name: 'App',
   components: {
    navComponent,   
  }, 
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, sans-serif;
}


</style>
