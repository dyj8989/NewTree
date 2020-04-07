<template>
  <el-tree :data="treeData" default-expand-all class="infinite-tree" :props="defaultProps"></el-tree>
</template>

<script>
import { getTreeList } from '../api/request'
import { getTrees } from '../utils/formateTree'
export default {
  name: 'InfiniteTree',
  props: {
    parentKey: String
  },
  created () {
    this.getList()
  },
  data () {
    return {
      allData: [],
      defaultProps: {
        childrenL: 'children',
        label: 'name'
      }
    }
  },
  methods: {
    async getList () {
      const { data } = await getTreeList('/employees')
      this.allData = data
      console.log(this.allData)
    }
  },
  computed: {
    treeData: {
      get () {
        return getTrees(this.allData, 0, this.parentKey)
      },
      set (value) {
        console.log(value)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.infinite-tree{
  background-color: rgb(0, 255, 213);
  margin-top: 20px;
}
</style>
