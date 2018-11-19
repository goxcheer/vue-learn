<template>
  <div id="form">
  <Form  ref="user" :model="user" :rules="loginRules" >
    <Form-item class="formLogin-title">
      <h3 class="title-font">系统登录</h3>
    </Form-item>
    <Form-item prop="username">
      <Input type="text" v-model="user.username" placeholder="Username">
        <Icon type="ios-person-outline" slot="prepend"></Icon>
      </Input>
    </Form-item>
    <Form-item prop="password">
      <Input type="password" v-model="user.password" placeholder="Password">
        <Icon type="ios-lock-outline"  slot="prepend"/>
      </Input>
    </Form-item>
    <Form-item>
      <Button type="primary" @click="handleSubmit('user')" long>登录</Button>
    </Form-item>
    <Form-item>
      <Button type="primary" @click="handleReset('user')" long>重置</Button>
    </Form-item>
  </Form>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        user: {
          username: '',
          password: ''
        },
        loginRules: {
          username: [
            { required: true, message: '请填写用户名', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请填写密码', trigger: 'blur' },
            { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      handleSubmit(user) {
        this.$refs[user].validate((valid) => {
          if (valid) {
            console.log(this.user.username  ,this.user.password);
            if (this.user.username == 'goxcheer' && this.user.password == '123456') {
              sessionStorage.setItem('user',JSON.stringify(this.user));
              this.$router.push('/home');
            } else {
              this.$Message.success('账号密码有误!');
            }
          } else {
            this.$Message.error('表单验证失败!');
          }
        })
      },
      handleReset (user) {
        this.$refs[user].resetFields();
      }
    }
  }
</script>

<style type="text/css">
  #form{
    width: 300px;
    margin: 180px auto;
    background-color: #F9FAFC;
    padding: 20px;
  }
  .formLogin-title{
    text-align: center;
  }
  .title-font{
    margin-top: 20px;
    font-family: Hiragino Sans GB;
    font-size: 30px;
  }
</style>
