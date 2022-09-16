<template>
    <div>
        <div class="container">
            <form class="w-50 mx-auto pt-5" @submit="login">
                <h3 class="mb-3 text-muted text-center my-5 border p-4 rounded">Admin Login </h3>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" v-model="formData.email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" v-model="formData.password" class="form-control" id="exampleInputPassword1">
                </div>
                <button class="btn btn-primary">Login</button>
            </form>
        </div>
        <ErrorsToaster :message="errors" />
    </div>
</template>
<script>
import RouteMixin from '@/mixin/RouteMixin';
import ErrorsToaster from '@/components/toaster/ErrorsToaster.vue';
import axios from 'axios';
export default {
    name : "AdminLogin",
    data() {
        return {
            formData: {
                email : null,
                password : null
            },
            errors : ''
        }
    },
    methods: {
        login(e){
            e.preventDefault();
            if (this.formData.email != null && this.formData.password != null) {
                axios.post(process.env.VUE_APP_API_URL+'login' , {
                    email : this.formData.email,
                    password : this.formData.password
                })
                .then(response => {
                    localStorage.setItem('token' , response.data.data.token)
                    this.changeRoute('/admin/faqs');
                    this.errors =  { success : [  'Login Success'] }    

                })
                .catch(error => {
                    this.errors = error.response.data.errors
                })    
            } else {
                this.errors =  { error : [  'Fields Required'] }    
            }        
        }
    },
    mixins : [
        RouteMixin
    ],
    components : { ErrorsToaster}
}
</script>