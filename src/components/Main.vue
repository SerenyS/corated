<template>
  <div class ="container-fluid">

    <div  class="row " >
      
      <div class="card mb-4 shadow-sm"  id="projectContainer" v-for="post in allposts" :key="post.id">
       <a class = "column col-xs-6" id = "zoomIn">
        <img
          class="card-img-top"

          style="height: 225px; display: block ;background-size: cover; "
          v-bind:style='{ backgroundImage: "url(" + post.data.cover + ")" }'
        ></a>

        <div class="card-body" style="padding:0,10px ">
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
             <b-icon icon="suit-heart-fill" @click="like"></b-icon> Like It
            </button>
            <span>   {{post.data.like}}   </span>
            <button type="button" class="btn btn-sm btn-outline-secondary">
              <b-icon icon="emoji-frown-fill"  @click="dislike" ></b-icon> Boo It
            </button>
            <span>{{post.data.dislike}}   </span>
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
    },

    methods:{
    like(e){
    e.preventDefault();
     let newLike =  this.post.like +1;
     firebase.updatePost(this.postId,newLike)  

    },
    dislike(e){
    e.preventDefault();
     let newDislike =  this.post.dislike +1;
     firebase.updatePost(this.postId,newDislike)  
    },}

}

    
</script>
<style >
.column#zoomIn img {
	-webkit-transform: scale(1);
	transform: scale(1);
	-webkit-transition: .3s ease-in-out;
	transition: .3s ease-in-out;
}
.column#zoomIn:hover img {
	-webkit-transform: scale(1.15);
	transform: scale(1.15);
}
#projectContainer{
  padding: 50px;
}

</style>