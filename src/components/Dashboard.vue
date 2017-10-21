<template>
  <el-tabs type="card">
    <el-tab-pane label="Top">
      <top></top>
    </el-tab-pane>
    <el-tab-pane label="Write">
      <write></write>
    </el-tab-pane>
    <el-tab-pane label="Member">
      <member></member>
    </el-tab-pane>
    <el-tab-pane label="Markdown">
      <markdown></markdown>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import Top from './Top.vue'
import Write from './Write.vue'
import Member from './Member.vue'
import Markdown from './Markdown.vue'
export default {
  name: 'Dashboard',
  components: {
    Top,
    Write,
    Member,
    Markdown
  }
}
</script>

<style>
</style>
