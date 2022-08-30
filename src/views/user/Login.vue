<template>
    <div class="p-5">
        <h4 class="ps-5 fw-bold">
            Connect your wallet.
        </h4>
        <h4 class="ps-5" v-html="`If you don't have a <a href='#' class='text-decoration-none'> wallet </a> yet, you can select a provider and create one now.`">
        </h4>

        <ul class="p-5 list-group">
            <li class="list-group-item">
                <img src="https://opensea.io/static/images/logos/metamask-fox.svg" height="40" width="40" alt="">
                <a class="btn btn-primary" @click="changeRoute('/user/account')">
                    Login with Metamask 
                </a>
                <a class="btn btn-primary float-end">
                    Popular
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
import RouteMixin from '@/mixin/RouteMixin';
export default {
    name : 'Login',
    mixins : [ RouteMixin ]
}
</script>