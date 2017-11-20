<template>
  <div style="height:800px;">
    <div v-for='(elm, i) in allItems' :key="elm.title">
      <div v-for='(item, j) in elm.items' :key="item.createdAt">
        <div 
          v-draggable 
          class="item" 
          v-bind:style="{ background: colorize(elm.title),top: (j+1) * 50 + 'px', left: i * 150 + 'px' }"
        >
          {{item.title}}
        </div>
      </div>
    </div>

  <!-- <div id="app" style="position: relative;">
    <div v-draggable style="background: cadetblue; width: 200px; height: 200px;">div1</div>
    <div v-draggable style="background: pink; left: 220px; width: 200px; height: 200px;">div2</div>
  </div> -->

  </div>
</template>

<script>
export default {
  name: 'TaskCanvas',
  data () {
    return {
    }
  },
  props: ['allItems'],
  methods: {
    colorize (title) {
      if (title === 'KEEP') {
        return 'yellow'
      }

      if (title === 'PROBLEM') {
        return 'orange'
      }

      if (title === 'TRY') {
        return 'green'
      }
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
    /* background: cadetblue; */
    width: 100px;
    height: 50px;
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
