
<template>
  <div class="teams">
  
  <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
      <div class="col-md-5 p-lg-5 mx-auto my-5">
        <h1 class="display-4 font-weight-normal">Multiple brains work better than one!</h1>
       
        <a class="btn btn-outline-secondary" id="createNewProjectButton" href="/newTeam"> Create New Team</a>
      </div>
    </div>
 <team-component/>
  </div>
</template>

<script>

import teamComponent from '@/components/teamComponent.vue'



export default {
  name: 'teamView',
  components: {
 
    teamComponent  
  
  }
}
</script>
   

<style>

</style>