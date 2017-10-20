<template>
  <div>
    <el-card class="box-card" v-for='elm in allItems'>
      <div slot="header" class="clearfix">
        <h2 style="line-height: 16px;">{{elm.title}}</h2>
      </div>
      <div v-for='item in elm.items' class="text item">
        {{item.title}}
        {{item.name}}
      </div>
    </el-card>
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
  })
}
</script>
<style scoped>
  .text {
    font-size: 14px;
  }
  .item {
    padding: 18px 0;
  }
  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  .clearfix:after {
      clear: both
  }

  .box-card {
    margin: 20px auto;
    width: 60%;
  }
</style>
