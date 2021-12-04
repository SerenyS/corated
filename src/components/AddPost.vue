<template>

<form v-on:submit= "createPost">
    <p>Fill in the form below to add a new post</p>

<div class="form-control">
<label for="title"> Post Title</label>
<input type="text" v-model= "newPost.title" id="title" placeholder="your post title" >
</div>

<div class="form-control">
<label for="content"> Post Content</label>
<textarea v-model="newPost.content" id="content" placeholder="your post content"/>
</div>

<div class="form-controL">
<label for="cover"> Post Cover</label>
<input type="file" id="cover" v-on:change="handleFile" >
</div>

<input type="submit" value="Create Post"/>

</form>

</template>

<script>

import firebase from "../firebase/index"

export default {
    name: "AddPost",

        data(){
            return {
                newPost:{
                title: "",
                content: "",
                cover: ""
                 }
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
            cover: url,
            fileref: fileRef.location.path
        }

        firebase.createPost(_newPost)
        .then(() => {
            this.$router.push({name: "Main"});
            }).catch( err => console.log(err));
        },
        handleFile(e){
        this.newPost.cover = e.target.files[0];
       
        }
    }
}


</script>