<template>
  <div>
    <el-row :gutter="20" class='wrapper'>
      <div v-for='(elm, index) in items' :key="elm.userId">

        <el-col :span="12">
          <el-card class="box-card">
            <el-form v-if="index < items.length - 1" :model="elm" label-width="60px">
              <el-form-item label="Member">
                <el-select v-model="elm.userId" placeholder="Select">
                  <el-option v-for="member in people" :key="member.id" :label="member.name" :value="member.id"></el-option>
                </el-select>
              </el-form-item>

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

            <div v-if="index === items.length - 1">
              <div style="width: 40%; height:200px; display:inline-block; color: #e2e2e2;">
                <el-button class="delete" icon="plus" @click="addForm"></el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </div>

    </el-row>
    <div>
      <el-button @click="onSubmit">Submit</el-button>
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Write',
  data () {
    return {
      items: [
        {userId: '', type: '', title: ''},
        {userId: '', type: '', title: ''}
      ]
    }
  },
  computed: mapGetters({
    people: 'getAllPeople'
  }),
  methods: {
    onSubmit () {
      console.log(this.items)
      // this.$nextTick(() => {
      this.$store.dispatch('addItems', {
        items: this.items
      })
      this.items = [{userId: '', type: '', title: ''}, {userId: '', type: '', title: ''}]
      // })
    },
    addForm () {
      this.items.push({user: '', type: '', title: ''})

      if (this.items.length === 1) {
        this.items = [{userId: '', type: '', title: ''}, {userId: '', type: '', title: ''}]
      }
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
