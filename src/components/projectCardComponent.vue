<template>
  <div>
    <div class="col-md-4">
      <div class="card mb-4 shadow-sm">
        <img
          class="card-img-top"
          alt="Thumbnail [100%x225]"
          style="height: 225px; width: 100%; display: block"
          :src="project.image"
          data-holder-rendered="true"
        />
        <div class="card-body">
          <div class="description">{{project.description}}</div>
          <br />
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button type="button" class="btn btn-sm btn-outline-secondary">
                View
              </button>
              <button type="button" class="btn btn-sm btn-outline-secondary">
                Edit
              </button>
              <button type="button" class="btn btn-sm btn-outline-secondary">
                <i class="fas fa-trash" @click="remove"></i> Delete
              </button>
            </div>

            <button type="button" class="btn btn-sm btn-outline-secondary">
              <i class="fas fa-thumbs-up" @click="like"></i> Like It
            </button>
            <span>{{project.likes}}</span>
            <button type="button" class="btn btn-sm btn-outline-secondary">
              <i class="far fa-thumbs-down" @click="dislike"></i> Boo It
            </button>
            <span>{{project.dislikes}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {db} from "../firebase/index";
import {storage} from "../firebase/index";

export default {
  name: "ProjectComponent",
  props:{
    project:{type:Object, required:true},
  },
    data: function(){
      return{
        showDetails:false,
      }
    },
  methods:{
    like(){
     this.project.like +1;
    },
    dislike(){
    this.project.dislike +1;
    },
    
     remove(){
            storage.child('projects').child(this.project.id)
                .delete()
                .catch(error => {
                    console.error('Error deleting image: ', error)
                })

            db.collection('projects').doc(this.project.id)
                .delete()
                .catch(error => {
                    console.error('Error deleting project: ', error)
                })
        },
  },
  
};
</script>

<style></style>
