<template>
  <el-tabs type="card">
    <el-tab-pane label="Canvas">
      <taskCanvas :allItems="allItems"></taskCanvas>
    </el-tab-pane>
    <el-tab-pane label="Top">
      <top :allItems="allItems"></top>
    </el-tab-pane>
    <el-tab-pane label="Write">
      <write></write>
    </el-tab-pane>
    <el-tab-pane label="Member">
      <member :allMembers="allMembers"></member>
    </el-tab-pane>
    <el-tab-pane label="Markdown">
      <markdown></markdown>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import { mapGetters } from 'vuex'
import TaskCanvas from './TaskCanvas.vue'
import Top from './Top.vue'
import Write from './Write.vue'
import Member from './Member.vue'
import Markdown from './Markdown.vue'
export default {
  name: 'Dashboard',
  components: {
    TaskCanvas,
    Top,
    Write,
    Member,
    Markdown
  },
  computed: mapGetters({
    allItems: 'getDashboard',
    allMembers: 'getAllPeople'
  })
}
</script>

<style>
</style>
