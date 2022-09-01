<template>
    <div class="row">
        <div class="col-md-4" v-for="blog in blogs" :key="blog">  
           <router-link :to="'/blog/detail/'+ blog.title.replace(/[^A-Z0-9]/ig, '-')" class="text-decoration-none">
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
export default {
    name : 'BlogsCard',
    props :{
        blogs : {
            type : Array
        }
    }
}
</script>