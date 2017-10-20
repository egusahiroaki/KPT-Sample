<template>
  <div>
    <el-card class="box-card" v-for='elm in allItems'>
      <div slot="header" class="clearfix">
        <h2 style="line-height: 16px;">{{elm.title}}</h2>
      </div>
      <div v-for='item in elm.items' class="text item">
        <div class="content" @mouseover='mouseOver($event)' @mouseleave='mouseLeave($event)'>
          {{item.title}}{{item.name}}
          <el-button class="delete" type="primary" icon="delete" size="mini" @click="deleteItem(elm, item)"></el-button>
        </div>
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
  }),
  methods: {
    mouseOver (event) {
      const deleteObj = event.currentTarget.lastElementChild
      if (deleteObj.style !== null) {
        deleteObj.style.display = 'inline'
      }
    },
    mouseLeave (event) {
      const deleteObj = event.currentTarget.lastElementChild
      if (deleteObj.style !== null) {
        deleteObj.style.display = 'none'
      }
    },
    deleteItem (label, item) {
      this.$store.dispatch('delete', { label, item })
    }
  }
}
</script>
<style scoped>
  .text {
    font-size: 14px;
  }
  .item {

    padding: 18px 0;
    cursor: pointer;
  }
  .content {
    width: 100%;
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
  .delete {
    display: none;
  }
</style>
