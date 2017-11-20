<template>
  <div>
  </div>
</template>

<script>
export default {
  name: 'Canvas',
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
