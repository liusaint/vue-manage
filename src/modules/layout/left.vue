<template>



	<el-menu
	default-active="2"
	class="left-menu"
	@open=""
	@close="">
	<el-submenu index="45" >
		<template slot="title">
			<i class="iconfont icon-account"></i><span slot="title" class="title">个人中心</span>
		</template>
		<el-menu-item index="1" :key="1" >
			<router-link to="/ucenter/user-info">个人信息</router-link>
		</el-menu-item>
		<el-menu-item index="2" :key="2" >
			<router-link to="/ucenter/message">消息中心</router-link>
		</el-menu-item>
		<el-menu-item index="3" :key="3" >
			<router-link to="/ucenter/todo">待办事项</router-link>
		</el-menu-item>
		<el-menu-item index="4" :key="4" >
			<router-link to="/ucenter/notice">公告通知</router-link>
		</el-menu-item>

	</el-submenu>

</el-menu>


</template>
<script>
console.log('left.vue');
export default {
	name: 'left',
}
</script>
<style lang="less">
/* 侧边栏 begin */
@blue:#138fff;
@black:#666;
@borderColor:#ddd;
@item-bg: #EFF4F9;
@item-bg-hover: #E5E8ED;
@text-color: #333;
@open-item-bg: #30353F;
@subItem-active: #E5E8ED;
.left-menu {
  [class^='icon'] {
    font-size: 22px;
  }
  >li {
    border-left: 2px solid transparent;
    &:nth-child(8n+1) {
      .iconfont {
        color: @blue;
      }
      &.is-active, &.is-opened {
        border-left-color: @blue;
      }
    }
    &:nth-child(8n+2) {
      .iconfont {
        color: #FCB200;
      }
      &.is-active, &.is-opened {
        border-left-color: #FCB200;
      }
    }
    &:nth-child(8n+3) {
      .iconfont {
        color: #FF6C00;
      }
      &.is-active, &.is-opened {
        border-left-color: #FF6C00;
      }
    }
    &:nth-child(8n+4) {
      .iconfont {
        color: #09C2AA;
      }
      &.is-active, &.is-opened {
        border-left-color: #09C2AA;
      }
    }
    &:nth-child(8n+5) {
      .iconfont {
        color: #1CBE4E;
      }
      &.is-active, &.is-opened {
        border-left-color: #1CBE4E;
      }
    }
    &:nth-child(8n+6) {
      .iconfont {
        color: @blue;
      }
      &.is-active, &.is-opened {
        border-left-color: @blue;
      }
    }
    &:nth-child(8n+7) {
      .iconfont {
        color: #09C2AA;
      }
      &.is-active, &.is-opened {
        border-left-color: #09C2AA;
      }
    }
    &:nth-child(8n+8) {
      .iconfont {
        color: #FF6C00;
      }
      &.is-active, &.is-opened {
        border-left-color: #FF6C00;
      }
    }

  }
  &.el-menu {
    outline: none;
    //background-image: url("../../images/left-menu-bg.jpg");
    background-color: @item-bg;
    box-sizing: border-box;
    border-right: 0px;
  }
  .el-submenu {
    .el-menu {
      background-color: #eff4f9;
    }
    .el-menu-item, .el-submenu__title {
      box-sizing: border-box;
      font-size: 16px;
      text-align:left;
      &:hover {
        background: #e9edf2;
      }
    }
  }

  .el-menu-item, .el-submenu__title {
    font-size: 16px;
    outline: none;
    color: @text-color;
    i {
      color: #999;
    }
    .iconfont {
      position: relative;
      top: -2px;
    }
    /*.el-icon-arrow-down {
      -ms-transform: none!important;
      transform: none!important;
      &:before {
        content: "\E602";
      }
    }*/
    &:hover {
      background: @item-bg-hover
    }
  }

  /*.is-opened {
    .el-icon-arrow-down {
      &:before {
        content: "\E600";
      }
    }
  }*/

  .title{
    color: @black;
    margin-left: 10px;
  }
}

.left-menu:not(.el-menu--collapse) {
  width: 240px;
  >.el-menu-item {
    padding: 0px!important;
    height: auto;
    line-height: normal;
    position: relative;
    .iconfont {
      position: absolute;
      left: 20px;
      top: 14px;
    }
    a {
      margin-left: 0px;
      padding: 0 20px 0 52px;
      height: 56px;
      line-height: 56px;
      display: block;

    }
  }
  .el-submenu .el-menu .el-menu-item {
    padding: 0!important;
    height: auto;
    line-height: normal;
    a {
      display: block;
      padding-left: 52px;
      line-height: 50px;
      height: 50px;
      color: @black;
      text-align: left;
    }
  }
  .el-menu-item, .el-submenu__title {
    &.is-active {
      background: @subItem-active!important;
      outline: none;
      a {
        color: @blue!important;
      }
    }
  }
}

.el-tooltip__popper.is-dark {
  .title {
    color: #fff;
  }
}

.left-menu.el-menu--collapse {
  width: 64px;
  .el-submenu {
    outline: none;
    .el-menu {
      background-color: #fff;
      border: 1px solid @borderColor;
      box-shadow: 0px 4px 9px rgba(0,0,0,.1);
      .el-menu-item {
        height: auto;
        line-height: normal;
        padding: 0!important;
        min-width: 60px;
        a {
          color: @black;
          display: block;
          height: 40px;
          line-height: 40px;
          padding: 0 30px!important;
        }
        &:hover {
          background-color: #f3f9ff;
        }
        &.is-active {
          background-color: #f3f9ff;
          a {
            color: @blue;
          }
        }
      }
    }
    &.is-active .el-submenu__title {
      background: #e9edf2;
    }
  }
}
/* 侧边栏 end */
</style>
