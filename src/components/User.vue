<template>
  <div>
    <div class='wrapper' v-for='(elm, index) in items'>
      <el-card class="box-card" style="width: 40%; display: inline-block;">
        <el-form v-if="index < items.length - 1" :model="elm" label-width="60px">
          <el-form-item label="Type">
            <el-select v-model="elm.type" placeholder="Select">
              <el-option label="KEEP" value="KEEP"></el-option>
              <el-option label="PROBLEM" value="PROBLEM"></el-option>
              <el-option label="TRY" value="TRY"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="Idea">
            <el-input v-model="elm.title"></el-input>
          </el-form-item>

          <el-button class="delete" type="primary" icon="delete" size="mini" @click="deleteItem(index)"></el-button>
        </el-form>

        <div v-if="index === items.length - 1">
          <div @click="addForm" style="width: 40%; height:140px; display:inline-block;">
            + 
          </div>
        </div>
      </el-card>
    </div>
    <div>
      <el-button @click="onSubmit">Primary Button</el-button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'User',
  data () {
    return {
      items: [
        {type: '', title: ''},
        {type: '', title: ''}
      ]
    }
  },
  methods: {
    onSubmit () {
      // this.$nextTick(() => {
      this.$store.dispatch('add', {
        items: this.items
      })
      this.items = [{type: '', title: ''}, {type: '', title: ''}]
      // })
    },
    addForm () {
      this.items.push({type: '', title: ''}, {type: '', title: ''})
    },
    deleteItem (num) {
      this.items.splice(num, 1)
    }
  }
}
</script>
<style scoped>
.wrapper {
  width: 50%; 
  display: inline;
}
</style>
