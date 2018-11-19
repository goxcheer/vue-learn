<style scoped>
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }
  .layout-header-bar{
    background: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
  }
  .layout-logo-left{
    width: 90%;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    margin: 15px auto;
  }
  .menu-icon{
    transition: all .3s;
  }
  .rotate-icon{
    transform: rotate(-90deg);
  }
  .menu-item span{
    display: inline-block;
    overflow: hidden;
    width: 69px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    transition: width .2s ease .2s;
  }
  .menu-item i{
    transform: translateX(0px);
    transition: font-size .2s ease, transform .2s ease;
    vertical-align: middle;
    font-size: 16px;
  }
  .collapsed-menu span{
    width: 0px;
    transition: width .2s ease;
  }
  .collapsed-menu i{
    transform: translateX(5px);
    transition: font-size .2s ease .2s, transform .2s ease .2s;
    vertical-align: middle;
    font-size: 22px;
  }
</style>
<template>
  <div class="layout">
    <layout>
      <header >
        <Menu mode="horizontal" theme="dark" active-name="1" >
          <div class="layout-logo"></div>
          <div class="layout-nav">
            <Dropdown style="float:right" placement="bottom-end">
              <Button type="dashed" ghost>{{currentUser.username}}</Button>
              <Icon type="ios-arrow-down"></Icon>
              <DropdownMenu slot="list">
                <DropdownItem>修改密码</DropdownItem>
                <DropdownItem>安全退出</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </Menu>
      </header>
      <layout>
        <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed" >
          <Menu theme="dark" active-name="1-1" width="auto" :class="menuitemClasses" @on-select="selectMenu">
            <Submenu name="1">
              <template slot="title">
                <Icon type="ios-paper" />
                内容管理
              </template>
              <MenuItem name="article">文章管理</MenuItem>
              <MenuItem name="category">分类管理</MenuItem>
              <MenuItem name="comment">评论管理</MenuItem>
            </Submenu>
            <Submenu name="2">
              <template slot="title">
                <Icon type="ios-people" />
                用户管理
              </template>
              <MenuItem name="2-1">新增用户</MenuItem>
              <MenuItem name="2-2">活跃用户</MenuItem>
            </Submenu>
            <Submenu name="3">
              <template slot="title">
                <Icon type="ios-stats" />
                统计分析
              </template>
              <MenuGroup title="使用">
                <MenuItem name="3-1">新增和启动</MenuItem>
                <MenuItem name="3-2">活跃分析</MenuItem>
                <MenuItem name="3-3">时段分析</MenuItem>
              </MenuGroup>
              <MenuGroup title="留存">
                <MenuItem name="3-4">用户留存</MenuItem>
                <MenuItem name="3-5">流失用户</MenuItem>
              </MenuGroup>
            </Submenu>
          </Menu>
        </Sider>
        <Layout>
          <Header :style="{padding: 0}" class="layout-header-bar">
         <!--   <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '0 20px'}" type="md-menu" size="24">
            </Icon>-->
            <Breadcrumb style="padding-left: 50px;">
              <BreadcrumbItem to="/">Home</BreadcrumbItem>
              <BreadcrumbItem to="/components/breadcrumb">Components</BreadcrumbItem>
              <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
            </Breadcrumb>
          </Header>
          <Content :style="{margin: '20px', background: '#fff', minHeight: '1000px'}">
                  <router-view></router-view>
          </Content>
        </Layout>
      </layout>
      <Footer class="layout-footer-center" style="text-align: center">2011-2016 &copy; TalkingData</Footer>
    </layout>
  </div>
</template>
<script>

  import Article from './article/Article'

  export default {
    data () {
      return {
        isCollapsed: false,
        currentUser:{

        },
        tabs:{

        }
      }
    },
    computed: {
      rotateIcon () {
        return [
          'menu-icon',
          this.isCollapsed ? 'rotate-icon' : ''
        ];
      },
      menuitemClasses () {
        return [
          'menu-item',
          this.isCollapsed ? 'collapsed-menu' : ''
        ]
      }
    },
    methods: {
      collapsedSider () {
        this.$refs.side1.toggleCollapse();
      },
      selectMenu(v){
        this.$router.push({path:'/home/'+v});

      }
    },
    mounted(){
        this.currentUser = JSON.parse(sessionStorage.getItem('user'));
    }
  }
</script>
