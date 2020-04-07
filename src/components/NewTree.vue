<template>
  <el-tree :data="treeData" default-expand-all :props="props"></el-tree>
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
      default: () => {
        return {
          children: 'children',
          label: 'label'
        }
      }
    }
  },
  computed: {
    treeData () {
      return getTrees(this.data, 0, this.parentKey)
    }
  }
}
</script>

<style lang="less" scoped>

</style>
