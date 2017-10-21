<template>
  <div>
    {{allItems}}
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
    allItems: 'getDashboard'
  })
}
</script>
<style scoped>
</style>
