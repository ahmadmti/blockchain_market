<template>
    <div class="container">
        <div class="row my-3">
            <div class="col-md-4 my-3" v-for="item in list" :key="item">
                <!-- <a :href="item.link" class="text-decoration-none">  -->
                <router-link :to="'/category/'+ item.link" class="text-decoration-none">
                    <div class="card">
                        <img :src="item.url" :alt="item.title">
                        <div class="card-body">
                            <h5 class="card-title text-secondary text-center">{{ item.title }}</h5>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
import {  ref } from 'vue';
export default {
    setup() {
        const list = ref([ 
            {
                link : 'art',
                url : 'https://lh3.googleusercontent.com/kVVevhk9BBE5BSuIoQfkH5_5FVsPTJCR34wpVBf1ACURh9dfNaybChPgiicte10yb6SYVp5iMQNXaQrOnHXmRiiOtVxUzYJR3M1I=s2500',
                title : 'Art'
            },
            {
                link : 'collectible',
                url : 'https://lh3.googleusercontent.com/l8oHCZk1C7EsY4Up-84SzLRwBGrRCDh7Z5k8WDnWIU1749AFyGY-ULYvZ952vKUhOydLrbdZHwjr50ARrqE2kYPEMqwHhg72d1JthQ=s2500',
                title : 'Collectibles'
            },
            {
                link : 'domain-name',
                url : 'https://lh3.googleusercontent.com/eSyL2ho1uDpSXApV-VHWTCR9xaV4wckPvBIh4rhz3gaBDzEVX1ElT5JWySJRPJKIxiZSnKdcCMlgk6PCfeh9D7a3TQmKeZ3o-1cF=s2500',
                title : 'Domain Names'
            },
                        {
                link : 'sport',
                url : 'https://lh3.googleusercontent.com/g6IAEmQm0J8J2ZoG0wLS04HEkVC7OvxNON5TvBZ4UR0Jm6LfIH4QwJNLWSnJsnabTnvarLUhpfRw_l-lMSBu6R0ymspZXNnT11YtXw=s2500',
                title : 'Sports'
            },
            {
                link : 'photography',
                url : 'https://lh3.googleusercontent.com/F97uNjhmvg4r91VD4zQ7TZrDwtwjqfbgygv64zrDqKsuITEX9wROYgHSsihHaqCOjhOmNf-IR91v2IJKqQFGEB_1GsSxOi6V0XDl2g=s2500',
                title : 'Photography Category'
            },
            {
                link : 'music',
                url : 'https://lh3.googleusercontent.com/kVVevhk9BBE5BSuIoQfkH5_5FVsPTJCR34wpVBf1ACURh9dfNaybChPgiicte10yb6SYVp5iMQNXaQrOnHXmRiiOtVxUzYJR3M1I=s2500',
                title : 'Music'
            },
                        {
                link : 'trading-card',
                url : 'https://lh3.googleusercontent.com/F97uNjhmvg4r91VD4zQ7TZrDwtwjqfbgygv64zrDqKsuITEX9wROYgHSsihHaqCOjhOmNf-IR91v2IJKqQFGEB_1GsSxOi6V0XDl2g=s2500',
                title : 'Trading Card'
            },
            {
                link : 'exlore-utility',
                url : 'https://lh3.googleusercontent.com/Vw6MpADIga_ZwmXOmclK87L8ax6pI_DylBcn-69kcr1Uhgw5Ij2RvXJD2MFJ0VarfIGeoFZw7NvpGLePX3e2VMztvg7XCQDNo12dLQ=s2500',
                title : 'Explore Utility'
            },

        ]);

        return { list } ;
    }
}
</script>