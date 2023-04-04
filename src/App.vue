<template>
  <nav-item></nav-item>
    <router-view/>
  <footer-item></footer-item>
</template>

<script>
import FooterItem from '@/components/FooterItem.vue'
import NavItem from '@/components/NavItem.vue'
export default {
  components: {
    FooterItem,
    NavItem
  },
  
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

a {
  text-decoration: none;
  color: #2c3e50;
}

</style>
