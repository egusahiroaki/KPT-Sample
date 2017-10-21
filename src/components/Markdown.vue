<template>
  <div>
    {{generateMembers()}}
    <br>
    {{generateMarkdown()}}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Markdown',
  data () {
    return {
    }
  },
  computed: mapGetters({
    allPeople: 'getAllPeople',
    allItems: 'getDashboard'
  }),
  methods: {
    generateMarkdown () {
      return this.allItems
    },
    generateMembers () {
      return this.allPeople
    }
  }
}
</script>
<style scoped>
</style>
