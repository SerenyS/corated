<template>
  <div class="home">
   <div class= "col-md-6">
    <b-form @submit="onSubmit" @reset="onReset" >

      <b-form-group id="input-group-1" label="Image:" label-for="input-1" >
        <form>
          <div class="custom-file">
          <input type="file" class="custom-file-input" id="customFile">
          <label class="custom-file-label" for="customFile">Choose file</label>
           </div>
        </form>
      </b-form-group>



      <b-form-group id="input-group-2" label="Project Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          placeholder="Enter project name"
          required
        ></b-form-input>
      </b-form-group>


      <b-form-group id="input-group-3" label="Description:" label-for="input-3">
         <b-form-input
          id="input-3"
          v-model="form.description"
          placeholder="Enter project description"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4" label="Team:" label-for="input-4">
         <b-form-input
          id="input-4"
          v-model="form.description"
          placeholder="Enter team name"
          required
        ></b-form-input>
      </b-form-group>


      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
  <project-card/>
  </div>
</template>

<script>

import projectCard from '@/components/projectCardComponent.vue'




export default {
  name: 'NewProjectView',
  components: {
   
    projectCard,
 
   
  },

   data() {
      return {
        form: {
        name: '',
        image: null,
        description: '',
        team:'',

      
      }
    }
   }
}

</script>

<style>

</style>