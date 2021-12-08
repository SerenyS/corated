<template>
<div class= "col-md-6" id="newProjectContainer">
<b-form v-on:submit= "createPost">
<p>Lets create this project</p>

<b-form-group label="Projec Title">
    <b-form-input type="text" v-model= "newPost.title" id="title" placeholder="Name your project" ></b-form-input>
</b-form-group>

<b-form-group label="Project Description">
    <b-form-input type="text"  v-model="newPost.content" id="content" placeholder="Describe your project"></b-form-input>
</b-form-group>

<b-form-group label="Project Image"></b-form-group>

<div class="form-controL">
<input type="file" id="cover" class="btn btn-outline-secondary" v-on:change="handleFile" >
</div>
<br>

 <b-button type="submit" value="Create Post"> Create New Project</b-button>

</b-form>

</div>
</template>

<script>

import firebase from "../firebase/index"
// import {nanoid} from "nanoid";

export default {
    name: "AddPost",

        data(){
            return {
                newPost:{
                title: "",
                content: "",
                cover: "",
                like: 0,
                dislike:0,                 }
                 }
             },

    methods: {
        async createPost(e){
        e.preventDefault();
        let url = await firebase.handleFileUpload(this.newPost.cover);
        let fileRef = await firebase.storage.refFromURL(url);

        let _newPost = {
            title: this.newPost.title,
            content: this.newPost.content,
            cover: url ,
            like:0,
            dislike:0,
            fileref: fileRef.location.path
        }

        firebase.createPost(_newPost)
        .then(() => {
            this.$router.push({name: "Projects"});
            }).catch( err => console.log(err));
        },
        handleFile(e){
        this.newPost.cover = e.target.files[0];
       
        }
    }
}


</script>
<style>
#newProjectContainer{
   padding-top: 5%;
    display: block;
    margin-left: auto;
    margin-right: auto
}
</style>