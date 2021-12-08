<template>
  <div class="home">
   <video autoplay muted loop id="myVideo"> <source src="..\assets\team.mp4" type="video/mp4"></video>
      <div class="col-md-5" id="mainText" >
        <h1 class="display-4 font-weight-normal">CoRated</h1>
        <p class="lead font-weight-normal">Visualize, Vote, Create</p>

        <a class="btn btn-outline-secondary" id="createNewProjectButton" href="/newproject">Create a new project</a>
      </div>
  </div>
</template>

<script>


export default {
  name: 'Home',
  components: {
 
  }, 

}
</script>
<style>



#myVideo {
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;

}
#mainText{
  position: fixed; 
  top: 30%;
  left: 30%;
}

#createNewProjectButton{
  background-color: #dfbcb2;
  color:white;
  border-radius:15px;
  
}
</style>

