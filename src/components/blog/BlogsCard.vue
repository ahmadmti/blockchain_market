<template>
    <div class="row">
        <div class="col-md-4" v-for="blog in blogs" :key="blog">  
            <!-- <a href="#" @click="changeRoute('/blog/detail/'+ spaceReplace)" class="text-decoration-none"> -->
            <router-link :to="'detail/'+ spaceReplace" class="text-decoration-none">

                <div class="card">
                    <div>
                        <img class="card-img-top" :src="blog.url" alt="">
                    </div>  
                    <div class="card-body">
                        <p>
                            <button type="button" class="btn btn-primary fw-bold">
                                {{ blog.type }}
                            </button>
                        </p>
                        <h4 class="fw-bold text-dark">
                            {{ blog.title }}
                        </h4>
                        <p class="text-muted">
                            {{ blog.date }}
                        </p>
                        <p class="text-dark">
                            {{ blog.text }}
                        </p>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>
<script>
import RouteMixin from '@/mixin/RouteMixin';
export default {
    name : 'BlogsCard',
     computed: {
        // a computed getter
        spaceReplace: function () {
        // `this` points to the vm instance
            return this.blogs[0].title.replace(/[^A-Z0-9]/ig, "-");
        }
    },
    props :{
        blogs : {
            type : Array
        }
    },
    mixins : [ RouteMixin ]
}
</script>