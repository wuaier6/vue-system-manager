<template>
    <div class="header">
        <div class="logo">后台管理系统</div>
        <div class="user-info">
            <el-dropdown trigger="click" @command="handleCommand">
                <span class="el-dropdown-link">
                    <!--<img class="user-logo" src="../../../static/img/img.jpg">-->
                    {{username}}
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdowncitem command="loginout" @click.prevent="logout" > <fa icon="sign-out-alt" fixed-width/>退出</el-dropdowncitem>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                name: 'linxin'
            }
        },
        computed:{
            username(){
                let username = localStorage.getItem('ms_username');
                return username ? username : this.name;
            }
        },
        methods: {
            async logout () {
                // Log out the user.
                await this.$store.dispatch('auth/logout')

                // Redirect to login.
                this.$router.push({name: 'login'})
            }
        }
    }
</script>
<style scoped>
    .header {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 70px;
        font-size: 22px;
        line-height: 70px;
    }
    .header .logo{
        float: left;
        width:250px;
        text-align: center;
    }
    .user-info {
        float: right;
        padding-right: 50px;
        font-size: 16px;
    }
    .user-info .el-dropdown-link{
        position: relative;
        display: inline-block;
        padding-left: 50px;
        cursor: pointer;
        vertical-align: middle;
    }
    .user-info .user-logo{
        position: absolute;
        left:0;
        top:15px;
        width:40px;
        height:40px;
        border-radius: 50%;
    }
    .el-dropdown-menu__item{
        text-align: center;
    }
</style>
