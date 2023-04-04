<template>
  <nav>
    <v-btn size="small">
      <router-link to="/">Товары</router-link>
    </v-btn> 
  |
    <v-btn size="small">
      <router-link to="/about">О компании</router-link>
    </v-btn>
  </nav>
</template>

<script>
export default {

}
</script>

<style scoped>  
nav {
  padding: 10px;
  background-color: #bebebe;
}
nav a.router-link-exact-active {
  color: #67a1db;
}
</style>