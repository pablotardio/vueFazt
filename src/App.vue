<template>
  <div id="app">
    <img src="./assets/logo.png">
    
    <Test msg="Hola desde componente padre!"/>
    <h1>Hola mundo</h1>
    <User/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
import Test from './components/Test.vue'
import User from './components/User.vue'
export default {
  name: 'App',
  components: {
    Test,
    User
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
