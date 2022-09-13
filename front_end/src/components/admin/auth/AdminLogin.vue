<template>
    <div>
        <div class="container">
            <form class="w-50 mx-auto pt-5">
                <h3 class="mb-3 text-muted text-center my-5 border p-4 rounded">Admin Login </h3>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1">
                </div>
                <button type="submit" @click="changeRoute('admin/blogs')" class="btn btn-primary">Login</button>
            </form>
        </div>
    </div>
</template>
<script>
import RouteMixin from '@/mixin/RouteMixin';
export default {
    name : "AdminLogin",
    mixins : [
        RouteMixin
    ]
}
</script>