<template>
  <div id="app">
    <div id="nav"> 
      <users></users>
    </div>
  </div>
</template>


<script>
import Test from './components/Test'
import Users from './components/Users'
export default {
  name: 'app',
  components: {
    Test,Users
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
