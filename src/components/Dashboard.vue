<template>
  <el-tabs type="card">
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
</template>

<script>
import Top from './Top.vue'
import User from './User.vue'
import Markdown from './Markdown.vue'
export default {
  name: 'Dashboard',
  components: {
    Top,
    User,
    Markdown
  }
}
</script>

<style>
</style>
