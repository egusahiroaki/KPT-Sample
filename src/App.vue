<template>
  <div id="app">
    <h1>KPT Sample</h1>
    <dashboard></dashboard>
    Copyright (c) 2017 Hiroaki Egusa
    Released under the MIT license
  </div>

</template>

<script>
import Dashboard from './components/Dashboard.vue'

export default {
  name: 'app',
  components: {
    Dashboard
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
  margin-top: 0px;
}
</style>
