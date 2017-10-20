<template>
  <div>
    <ul>
      <li v-for='item in allItems'>
        {{item.id}}: {{item.title}}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Top',
  data () {
    return {
    }
  },
  computed: mapGetters({
    allItems: 'getAll'
  }),
  method: {
  }
}
</script>
<style scoped>
</style>
