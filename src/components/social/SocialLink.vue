<template>
        <div class="btn-group float-end" role="group" aria-label="Basic example">
            <a v-for="social in social_links" :key="social" href="#" @click="social.link" class="btn btn-light">
                <i :class="social.icon" aria-hidden="true"></i>
            </a>
        </div>
</template>
<script>
import RouteMixin from '@/mixin/RouteMixin';
export default {
    name : 'SocialLink',
    props : {
        social_links : {
            type : Array
        }
    },
    mixins : [
        RouteMixin
    ]
}
</script>