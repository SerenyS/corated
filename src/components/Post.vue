<template>
<div class="container-fluid">
<div class="post-container" id="projectDetails">
<h2>Project Details </h2>
<hr/>
<h3>{{postData.title}} </h3>
<section>
<img :src='postData.cover' style="width: 400px;   height: 600px; object-fit: scale-down"/>

    <h5>{{postData.content}}</h5>

</section>
<button  class="btn btn-outline-secondary" v-on:click="toggleEditMode"> Edit </button>
<div v-if="editMode">


<b-form id="singlePost" v-on:submit="updatePost">
    <br>
<b-form-group label="Projec Title">
    <b-form-input type="text" v-model="editPost.title" id="title"></b-form-input>
</b-form-group>

<b-form-group label="Projec Description">
    <b-form-input type="text" v-model="editPost.content" id="content"></b-form-input>
</b-form-group>

<!-- <b-form-group label="Project Image">
    <input class="btn btn-outline-secondary" type="file" id="cover" v-on:change="handleFile" >
</b-form-group> -->

<input type="hidden" id="fileref" v-model="editPost.fileref" />

<input type="submit" class="btn btn-outline-secondary" value="Update Post" >

</b-form>
<br>
<button class="btn btn-danger" v-on:click="deletePost">Delete Project</button>
</div>
</div>
</div>
</template>
<script>
import firebase from "../firebase/index"
export default {
name: "Post",
data(){
    return{
    postData: {},
    postId: this.$route.params.id,
    editMode: false,
    editPost: {
        title: "",
        content: "",
        fileref:"",
        cover:"",
        }
    }
},
created(){
firebase.getCurrentPost(this.postId)
.then(post => {
    this.postData = post.data();
    this.editPost.title = post.data().title;
    this.editPost.content = post.data().content;
    this.editPost.fileref = post.data().fileref;
            })
            .catch (err=> console.log(err));
        },
methods:{
    toggleEditMode(){
        this.editMode =!this.editMode;
         },
         handleFile(e){
        this.newPost.cover = e.target.files[0];
       
        },
    
    async updatePost(e){
        e.preventDefault();
        if (this.editPost.cover != ""){
            let url = await firebase.handleFileUpload(this.editPost.cover);
            let fileRef= await firebase.storage.refFromURL(url);

            let _updateData ={
                title: this.editPost.title,
                content: this.editPost.content,
                cover: url,
                fileref: fileRef.location.path
            }

            firebase.updatePost(this.postId,_updateData)
            .then (async()=>{
                let storageRef = firebase.storage.ref();
                await storageRef.child(this.editPost.fileref).delete()
                .catch(err=> console.log(err));
                this.$router.go();
            });
        } else {
            let _updateData={
                title: this.editPost.title,
                content:this.editPost.content
            }

            firebase.updatePost(this.postId,_updateData)
            .then(()=>{
                console.log("data has been updated");
                this.$router.go();
            }
            )
        }
    },
  
    deletePost(){
        firebase.deletePost(this.postId, this.postData.fileref)
        .then(()=>{
            this.$router.push({name:"projects"});
        })
        .catch((err)=> console.log(err));
    }
}
}
</script>   
<style>
#projectDetails{
    padding: 15px;
    
}

</style>
