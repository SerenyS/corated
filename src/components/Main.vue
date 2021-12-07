<template>
  <div class ="container-fluid">

    <div  class="row py-5" id="projectContainer">
      
      <div class="card mb-4 shadow-sm" v-for="post in allposts" :key="post.id">
        <img
          class="card-img-top"
        
          style="height: 225px; width: 100%; display: block ;background-size: cover; "
          v-bind:style='{ backgroundImage: "url(" + post.data.cover + ")" }'
        >

        <div class="card-body">
        <h2 class="title">{{ post.data.title }}</h2>
          <div class="description">{{post.data.content}}</div>
          <br />
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button type="button" class="btn btn-sm btn-outline-secondary" >
               <router-link :to="'/post/'+ post.id"> View </router-link>
              </button>
            </div>

            <button type="button" class="btn btn-sm btn-outline-secondary">
             <b-icon icon="suit-heart-fill"></b-icon> Like It
            </button>
            <span></span>
            <button type="button" class="btn btn-sm btn-outline-secondary">
              <b-icon icon="hand-thumbs-up-fill" ></b-icon> Boo It
            </button>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import firebase from "../firebase/index";

export default {
name: "Main",
components:{
    
},
data(){
    return {
    allposts: []
     }
    },
created(){
    firebase.getAllPosts()
    .then(posts => {
    posts.forEach(_post => {
            console.log(_post.data())
        let post = {
        id: _post.id,
        data: _post.data()
        }
        this.allposts.push(post);   
            })
        }).catch(err=> {
            console.log(err);
        })
    }
}
//   methods:{
//     like(){
//      this.project.like +1;
//     },
//     dislike(){
//     this.project.dislike +1;
//     },
    
</script>
<style >

</style>