<template>
  <el-tree :data="allData" default-expand-all :props="props
  "></el-tree>
</template>

<script>
import { getTrees } from '../utils/formateTree'
export default {
  name: 'NewTree',
  props: {
    data: {
      type: Array,
      default: () => []
    },
    parentKey: String,
    props: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      allData: []
    }
  },
  created () {
    this.transformData()
  },

  methods: {
    transformData () {
      console.log(this.data)
      console.log(this.props)
      const AllData = JSON.parse(JSON.stringify(this.data))
      // console.log(AllData)
      // console.log(this.parentKey)
      this.allData = getTrees(AllData, 0, this.parentKey)
    }
  }
}
</script>

<style lang="less" scoped>
// .el-tree {
//   background-color: skyblue;
// }
</style>
