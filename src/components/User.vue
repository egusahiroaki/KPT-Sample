<template>
  <div>
    <el-row :gutter="20" class='wrapper'>
      <div v-for='(elm, index) in items'>

        <el-col :span="12">
          <el-card class="box-card">
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

              <el-button class="delete" type="primary" icon="circle-cross" size="mini" @click="deleteItem(index)"></el-button>
            </el-form>

            <div hogehoge v-if="index === items.length - 1" @click="addForm">
              <div style="width: 40%; height:140px; display:inline-block; color: #e2e2e2; font-size:100px;">
                + 
              </div>
            </div>
          </el-card>
        </el-col>
      </div>

    </el-row>
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
      this.items.push({type: '', title: ''})
    },
    deleteItem (num) {
      this.items.splice(num, 1)
    }
  }
}
</script>
<style scoped>
.wrapper {
  width: 40%;
  display: inline;
}

.el-col-12 {
  margin-bottom: 20px;
}

</style>
