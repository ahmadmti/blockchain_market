<template>
    <div class="row my-2">
        <div class="col-md-4 mb-3" v-for="item in lists" :key="item.title">
            <a href="#" @click="changeRoute('/chain/eth-id/id')" class="text-decoration-none">
                <div class="card">
                    <img :src="item.url" class="card-img-top" alt="apes">
                    <div class="card-body">
                        <p class="card-text text-center text-secondary">{{ item.title }}</p>
                    </div>
                        <span class="text-secondary ps-2 fw-bold"> <img src="https://openseauserdata.com/files/6f8e2979d428180222796ff4a33ab929.svg" height="20" width="10" alt=""> Price : 3.05</span>
                        <br />
                        <a href="#" class="btn btn-primary">Buy Now </a>
                </div>
            </a>
        </div>
    </div>
</template>
<script>
import RouteMixin from '@/mixin/RouteMixin';
export default {
    name : 'NFTGridList',
    props : {
        lists : {
            type : Array
        }
    },
    mixins : [ RouteMixin ]
}
</script>