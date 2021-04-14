export let myLogin = {
    computed: {
        isLogin() {
            return window.localStorage.getItem('user_name') ? window.localStorage.getItem('user_name') : '登录/注册'
        }
    },
    methods: {
        isUser(){
            if(window.localStorage.getItem('token')){
                this.$router.push('/profile')
            }else {
                this.$router.push('/login')
            }
        }
    },
}