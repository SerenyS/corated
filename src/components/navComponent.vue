<template>
<div >
  <b-navbar toggleable="lg" type="dark" id="navigation">
    <b-navbar-brand href="\"> CoRated</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="\projects">My Projects</b-nav-item>
       <b-nav-item href="\teams">My Teams</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <b-nav-item-dropdown right>
      
          <template #button-content>
            <em > <b-icon icon="person-circle"></b-icon></em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="\login">Login</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {

}
</script>

<style >
#navigation {
  background-color: #579180;
}
</style>
