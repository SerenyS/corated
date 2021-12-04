<template>
<div>
<p>Main Works !! </p>

<section class="posts-container">

<div class="post" v-for="post in allposts" :key="post.id">
<p class="title">{{ post.data.title }}</p>
<router-link :to="'/post/'+ post.id">Check Post</router-link>
<div  style="height: 225px; width: 100%; display: block" v-bind:style='{ backgroundImage: "url(" + post.data.cover + ")" }' class="cover" ></div>
</div>

</section>

</div>

</template>
<script>
import firebase from "../firebase/index";
export default {
name: "Main",
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
</script>
<style >

</style>