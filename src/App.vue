<template>
  <div id="app">
    <img src="./assets/logo.png">
    
    <Test/>
    <h1>Hola mundo</h1>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
import Test from './components/Test.vue'
export default {
  name: 'App',
  components: {
    Test
    // HelloWorld
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
  margin-top: 60px;
}
</style>
