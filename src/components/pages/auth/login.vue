<template>
  <div class="login-wrap">
        <div class="ms-title">{{ $t('login') }}</div>
        <div class="ms-login">
            <el-form :model="form"   label-width="0px" class="demo-ruleForm">
                <el-form-item prop="email">
                    <el-input v-model="form.email" placeholder="email"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" placeholder="password" v-model="form.password" @keyup.enter.native="login()"></el-input>
                </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" @click="login()">{{ $t('login') }}</el-button>
                </div>
                <p style="font-size:12px;line-height:30px;color:#999;">Tips : 用户名和密码随便填。</p>
            </el-form>
        </div>
    </div>
</template>

<script>

import Form from 'vform'
 export default {
        data: () => ({
          form: new Form({
            email: '',
            password: ''
          }),
          remember: false
        }),
        methods: {
        
            async login () {
              // Redirect home.
              this.$router.push({ name: 'home' })
    
              // Submit the form.
              const { data } = await this.form.post('http://laravel-vue-spa.test/api/login')

              // Save the token.
              this.$store.dispatch('auth/saveToken', {
                token: data.token,
                remember: this.remember
              })

              // Fetch the user.
              await this.$store.dispatch('auth/fetchUser')

        
            }

        }
    }

</script>


<style scoped>
    .login-wrap{
        position: relative;
        width:100%;
        height:100%;
    }
    .ms-title{
        position: absolute;
        top:50%;
        width:100%;
        margin-top: -230px;
        text-align: center;
        font-size:30px;
        color: #fff;

    }
    .ms-login{
        position: absolute;
        left:50%;
        top:50%;
        width:300px;
        height:160px;
        margin:-150px 0 0 -190px;
        padding:40px;
        border-radius: 5px;
        background: #fff;
    }
    .login-btn{
        text-align: center;
    }
    .login-btn button{
        width:100%;
        height:36px;
    }
</style>
