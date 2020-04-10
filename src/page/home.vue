<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <el-row class="tac">
          <!-- <span>logo</span> -->
          <el-col :span="24">
            <el-menu router="" :default-active="defaultActive" default-active="add1" unique-opened="" class="el-menu-vertical-demo"
              @open="handleOpen" @close="handleClose">
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>立项管理</span>
                </template>
                <el-menu-item index="add1">立项新增（个人）</el-menu-item>
                <el-menu-item index="add2">立项新增（企业）</el-menu-item>
                <el-menu-item index="scan">立项查看</el-menu-item>
                <el-menu-item index="gps">GPS管理</el-menu-item>
              </el-submenu>
              <el-submenu index="2">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>库融管理</span>
                </template>
                <el-menu-item index="2-1">车辆信息</el-menu-item>
                <el-menu-item index="2-2">库融进件</el-menu-item>
                <el-menu-item index="2-3">库融收款管理</el-menu-item>
              </el-submenu>
              <el-submenu index="3">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>财务管理</span>
                </template>
                <el-menu-item index="3-1">结清计算器</el-menu-item>
                <el-menu-item index="3-2">立项动拨</el-menu-item>
                <el-menu-item index="3-3">收款单管理</el-menu-item>
                <el-menu-item index="3-4">请款单管理</el-menu-item>
              </el-submenu>
              <el-submenu index="4">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>报表管理</span>
                </template>
                <el-menu-item index="4-1">选项1</el-menu-item>
                <el-menu-item index="4-2">选项2</el-menu-item>
                <el-menu-item index="4-3">选项3</el-menu-item>
              </el-submenu>
              <el-submenu index="5">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>租后管理</span>
                </template>
                <el-menu-item index="5-1">选项1</el-menu-item>
                <el-menu-item index="5-2">选项2</el-menu-item>
                <el-menu-item index="5-3">选项3</el-menu-item>
              </el-submenu>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main style="height: 100%;">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  export default {
    computed: {
      defaultActive: function() {
        // console.log(123);
        return this.$route.path.replace('/', '');
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style>
  .el-header,
  .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: left;
    /* line-height: 200px; */
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body>.el-container {
    margin-bottom: 40px;
  }
</style>
