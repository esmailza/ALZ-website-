<template>
    <section class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-lg-4">
                <div class="login-panel bg-white text-left">
                    <div class="alert alert-primary" role="alert" :style="{opacity: isAlertShow ? 1 : 0}">
                       The username or password is incorrect. 
       
                    </div>
                    <h1 class="display-3 font-weight-bold">Login</h1>
                    <p class="font-weight-bold">Welcome to ACTION</p>
                    <br>
                    <form action="">
                        <div class="form-group">
                            <lable class="input-label">Username</lable>
                            <input type="email" v-model="input.username" class="form-control" placeholder="Email">
                        </div>
                        <div class="form-group">
                            <lable class="input-label">Password</lable>
                            <input type="password" v-model="input.password" class="form-control" placeholder="Password">
                        </div>
                        <br>
                        <div class="form-group d-flex justify-content-center">
                            <button class="btn btn-primary w-25" id="login" @click.prevent="login" v-if="!isLoggingIn">Login</button>
                            <button class="btn btn-primary w-25" disabled @click.prevent="login" v-if="isLoggingIn"><loader-component width="30"></loader-component></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

export default {
    components: {  },
    data() {
        return {
            isLoggingIn: false,
            isAlertShow: false,
             input: {
                    username: "",
                    password: ""
                }
        }
    },
    methods: {
        // login() {
        //     this.isLoggingIn = true
        //     setTimeout(() => {
        //         this.isLoggingIn = false
        //         this.isAlertShow = true
        //         setTimeout(() => this.redirect(), 1000)
        //     }, 1000)
        // },
        // redirect() {
        //     this.$router.push({name: 'home'})
        // }
            login() {
        if(this.input.username == "demo" && this.input.password == "demo12345") {
            this.$store.commit("setAuthentication", true);
             
            this.$router.replace({ name: "Home" });
           
        } else {
            this.isAlertShow = true;
            console.log("The username and / or password is incorrect");
        }
    }
}
    
}
</script>

<style lang="scss">
.widget {
    margin: 0;
    height: unset;
}
.login-panel {
    position: relative;
    padding: 200px 0;
    .alert {
        opacity: 0;
        position: absolute;
        width: 100%;
        top: 100px;
        transition: all .5s;
        &.alert-primary {
            background-color: #007BFF;
            color: #fff;
            font-size: 18px;
            border: none;
        }
        .widget {
            position: absolute;
            right: 5px;
            top: 0;
            margin: 10px;
        }
    }
}
</style>