import Vue from "vue";
import VueRouter from 'vue-router'

import Home from '../views/homeView.vue'
import SignIn from '../views/loginView.vue'
import Projects from '../views/projectsView.vue'
import Teams from '../views/teamView.vue'
import newProject from '../views/newProjectView.vue'
import newTeam from '../views/newTeamView.vue'
import Post from '../components/Post.vue'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/login',
        name: 'Login',
        component: SignIn
      },
      {
        path: '/projects',
        name: 'Projects',
        component: Projects
      },
      {
        path: '/teams',
        name: 'Teams',
        component: Teams
      },
    
       {
        path: '/newProject',
        name: 'newProject',
        component: newProject
      },
      {
        path: '/newTeam',
        name: 'newTeam',
        component: newTeam
      },
     {path:
      "/post/:id",
      name: "Post",
      component: Post} 
]


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })

export default router;