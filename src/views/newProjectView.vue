<template>
   <b-container fluid>
        
        <add-post></add-post>
    </b-container>
    
</template>

<script>

import addPost from "../components/AddPost.vue"
export default {
  name: "NewProjectView",
  components: {addPost },
  props: {
   
  },
} 
</script>

<style>

</style>