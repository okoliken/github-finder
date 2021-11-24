<template>
  <div id="nav">
    <Navbar />
  </div>
  <router-view />
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  name: "Home",
  components: {
    Navbar,
  },
};
</script>


<style>
body {
  background-color: #fafafa !important;
  height: 100vh;
  width: 100%;
  color: #fff;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  
}  

#nav .navbar-nav a {
  font-weight: bold;
  color: #6c757d;
}

#nav a.router-link-exact-active {
  color: #fff;
}
</style>
