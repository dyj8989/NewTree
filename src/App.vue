<template>
  <div id="app">
    <new-tree :parentKey="parentId" :data="menuItems" v-if="menuItems.length>0" class="menuItems"></new-tree>
    <br />
    <new-tree
      :parentKey="parentId"
      :data="employeesList"
      :props="defaultProps"
      class="employees"
      v-if="employeesList.length>0"
    ></new-tree>

    <!-- 修改后的树形结构 -->
    <infinite-tree parentKey="parentId"></infinite-tree>
  </div>
</template>

<script>
import { getTreeList } from './api/request'
export default {
  data () {
    return {
      parentId: '',
      menuItems: [],
      employeesList: [],
      defaultProps: {
        children: 'children',
        label: 'name'
      }
    }
  },
  created () {
    this.getList()
    this.getEmployeesList()
  },
  methods: {
    async getList () {
      const { data } = await getTreeList('/departments')
      // console.log(data)

      this.menuItems = data
      this.parentId = 'parentId'
      // console.log(this.menuItems)
    },
    async getEmployeesList () {
      const { data } = await getTreeList('/employees')
      // console.log(data)
      this.employeesList = data
      this.parentId = 'pid'
    }
  }
}
</script>

<style lang="less">
#app {
  .el-tree {
    width: 50%;
    .el-icon-caret-right:before {
      content: "\e791";
      color: black;
      font-size: 16px;
    }
  }
  .menuItems {
    background-color: pink;
  }
  .employees {
    background-color: skyblue;
  }
}
</style>
