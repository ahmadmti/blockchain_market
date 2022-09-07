<template>
    <div>
        <div class="row">
            <div class="col-md-4 my-2" v-for="collection in collections" :key="collection"> 
                <router-link to="/chain/eth-id/id" class="text-decoration-none">
                    <div class="card bg-dark text-white border-0">
                        <img 
                        :src="collection.image"
                        class="card-img" :alt="collection.title">
                        <div class="card-img-overlay">
                            <h5 class="card-title text-end">Live</h5>
                            <h4 class="card-text set-text-padding">{{ collection.title }}</h4>
                            <p class="card-text">{{ collection.text }}</p>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
import RouteMixin from '@/mixin/RouteMixin';
export default {
    name : 'HomeNFTList',
    data() {
        return {
            collections : [
                {
                    title : '8liean NFT',
                    text  : 'Moon Owls is artistic pieces that expresses an idea, an emotion or, more generally, a world view.' , 
                    image :  'https://img.seadn.io/files/dd40f0dd2e65867f4b988688fd59b088.png?fit=max&w=600'
                },
                {
                    title : 'Afrikan NFT',
                    text  : 'The Afrikans NFT is an exclusive collection of 1111 unique art pieces, each representing the rich culture' , 
                    image :  'https://openseauserdata.com/files/13f44ee25a338c257e921a2a2ce9cd05.jpg'
                },
                {
                    title : 'Moon Owl NFT',
                    text  : 'Moon Owls is artistic pieces that expresses an idea, an emotion or, more generally, a world view.' , 
                    image :  'https://openseauserdata.com/files/68fafbfe988b0fa750b9eb472cb97e75.png'
                }
            ]
        }
    },
    mixins : [ RouteMixin ]
}
</script>
<style scoped>
    .set-text-padding {
        padding-top: 59% ;
    }
</style>