<template>
  <div id="app">
    <el-tabs type="card" @tab-click="">
      <el-tab-pane label="Top">
        <top></top>
      </el-tab-pane>
      <el-tab-pane label="User">
        <user></user>
      </el-tab-pane>
      <el-tab-pane label="Markdown">
      <markdown></markdown>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Top from './components/Top.vue'
import User from './components/User.vue'
import Markdown from './components/Markdown.vue'
export default {
  name: 'app',
  components: {
    Top,
    User,
    Markdown
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
