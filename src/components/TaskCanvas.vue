<template>

<!-- v-bind:style="{ background: colorize(elm.title), top: setStickerPositionX (j+1) + 'px', left: i * 150 + 'px' }" -->
  <div style="height: 600px; position:relative;">
    <div class="k-bk" >KEEP</div>
    <div class="t-bk" >TRY</div>
    <div class="p-bk" >PROBLEM</div>
    <div v-for='(elm, i) in allItems' :key="elm.title">
      <div v-for='(item, j) in elm.items' :key="item.createdAt">
        <div 
          v-draggable 
          class="item" 
          v-bind:style="setStickerPosition(elm.title,i,j)"
          @mousedown="drag()"
          @mousemove="move($event)"
          @mouseup="finish()"
        >
          {{item.title}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>

const CENTER_X = window.innerWidth / 2
const HEIGHT = 600
const CENTER_Y = HEIGHT / 2

export default {
  name: 'TaskCanvas',
  data () {
    return {
      height: HEIGHT,
      isDragging: false
    }
  },
  props: ['allItems'],
  methods: {
    drag () {
      this.isDragging = true
    },
    setStickerPosition (title, i, j) { // iは大項目, jはそこに所属する小項目
      const color = this.colorize(title)
      if (title === 'KEEP') {
        return { background: color, top: (j + 1) * 50 + 'px', left: i * 150 + 'px' }
      }

      if (title === 'PROBLEM') {
        return { background: color, top: CENTER_Y + (j + 1) * 50 + 'px', left: i + 'px' }
      }

      if (title === 'TRY') {
        return { background: color, top: (j + 1) * 50 + 'px', left: CENTER_X + i + 'px' }
      }
    },
    finish () {
      this.isDragging = false
    },
    move (e) {
      if (this.isDragging) {
        // console.log(e)
        // pageYの境界は 140（title + tabのheight） + 600 / 2である
        console.log('e.layerX: ' + e.pageX + ', e.layerY: ' + e.pageY)
        console.log(140 + CENTER_Y)
        // 取り出して削除する。
        if (e.pageX < CENTER_X && e.pageY < 140 + CENTER_Y) {
          console.log('KEEP')
        }

        if (e.pageX < CENTER_X && e.pageY >= 140 + CENTER_Y) {
          console.log('PROBLEM')
        }

        if (e.pageX >= CENTER_X) {
          console.log('TRY')
        }
      }
    },
    colorize (title) { // 背景色
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
  .k-bk {
    background:#dae497;
    width: 50%;
    height: 50%;
    float: left;
    color:white;
    font-weight: bold;
    font-size: 30px;
    /* display: flex;
    align-items: center;
    justify-content: center; */
  }
  .p-bk {
    background:#e4c397;
    width: 50%;
    height: 50%;
    float: left;
    color:white;
    font-weight: bold;
    font-size: 30px;
  }
  .t-bk {
    background:#e497b9;
    width: 50%;
    height: 100%;
    float: right;
    color:white;
    font-weight: bold;
    font-size: 30px;
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
