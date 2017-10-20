<template>
  <div>
    <ul v-for='elm in allItems'>
      <h2>{{elm.title}}</h2>
      <li v-for='item in elm.items'>
        {{item.title}}
        {{item.name}}
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
    allItems: 'getDashboard'
  }),
  method: {
  }
}
</script>
<style scoped>
</style>
