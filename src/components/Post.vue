<template>
<div>
<p>Post Works !!</p>
<div class="post-container">
<h2>Post Details </h2>
<hr/>
<section>
<img :src='postData.cover' />

    <h3>{{postData.title}} </h3>
    <h5>{{postData.content}}</h5>

</section>
<button class="edit" v-on:click="toggleEditMode">Open/Close Edit Panel </button>
<div v-if="editMode">
<p>Update the current post values using the form below </p>
<form v-on:submit="updatePost">
<div class="form-controL">
<label for="title"> Post Title</label>
<input type="text" v-model="editPost.title" id="title" placeholder="your post title" >
</div>
<div class="form-control">
<label for="content"> Post Content</label>
<textarea v-model="editPost.content" id="content" placeholder="your post content"/>
</div>
<div class="form-control">
<label for="cover"> Post Cover</label>
<input type="file" id="cover" v-on:change="handleFile" >
</div>
<input type="hidden" id="fileref" v-model="editPost.fileref" />
<input type="submit" value="Update Post" >
</form>

<button v-on:click="deletePost">Delete Post button</button>
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
        if (this.editPost.cover !==""){
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
            })
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
