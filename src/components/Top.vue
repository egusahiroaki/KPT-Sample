<template>
  <div>
    <el-card class="box-card" v-for='elm in allItems' :key="elm.title">
      <div slot="header" class="clearfix">
        <h2 style="line-height: 16px;">{{elm.title}}</h2>
      </div>
      <div v-for='item in elm.items' class="text row" :key="item.createdAt">
        <div class="content" @mouseover='mouseOver($event)' @mouseleave='mouseLeave($event)'>
          <div class="item">
            <el-tag type="gray">{{item.user.name}}</el-tag>
            {{item.title}}
          </div>
          <el-button class="delete" type="primary" icon="close" size="mini" @click="deleteItem(elm, item)"></el-button>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'Top',
  data () {
    return {
    }
  },
  props: ['allItems'],
  methods: {
    mouseOver (event) {
      const deleteObj = event.currentTarget.lastElementChild
      if (deleteObj.style !== null) {
        deleteObj.style.display = 'inline-block'
      }
    },
    mouseLeave (event) {
      const deleteObj = event.currentTarget.lastElementChild
      if (deleteObj.style !== null) {
        deleteObj.style.display = 'none'
      }
    },
    deleteItem (label, item) {
      this.$store.dispatch('deleteItem', { label, item })
    }
  }
}
</script>
<style scoped>
  .text {
    font-size: 14px;
  }
  .row {
    margin: 18px 0;
    cursor: pointer;
    text-align: left;
  }
  .content {
    width: 100%;
  }
  .item {
    display: inline-block;
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
    float: right;
  }
</style>
