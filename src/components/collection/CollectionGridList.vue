<template>
    <div class="row my-3 ">
        <div class="col-md-4" v-for="item in collections" :key="item">
            <!-- <a href="#" @click="changeRoute('/collection/'+item.title)" > -->
            <router-link :to="'/collection/' + item.title">

                <figure class="position-relative">
                    <img :src="item.url" class="card-img-top rounded" alt="" />
                    <div class="bg-light w-50 rounded m-2 p-2 position-absolute bottom-0  start-25 profile-icon">
                        <img :src="item.profile_icon" alt="" class="rounded" width="50" height="50" />

                        <span class="text-end float-end rounded p-1 mt-3 text-blue jade-blue text-white" :class="item.type ? 'jade-blue' : 'bg-danger' "> {{ item.title }} </span>
                    </div>
                </figure>
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    name : 'CollectionGridList',
    props : {
        collections : {
            type : Array
        }
    }
}
</script>
<style scoped>
    .profile-icon {
        bottom: -25% !important;
    }
</style>