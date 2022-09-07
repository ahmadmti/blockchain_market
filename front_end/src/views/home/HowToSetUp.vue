<template>
    <div class="row">
        <div class="col-md-4" v-for="item in list" :key="item">
            <a :href="item.link" class="setup">
                <div class="card border-0">
                    <div class="card-body">
                        <img :src="item.url" class="rounded mx-auto d-block img-fluid" :alt="item.title">
                        <p class="py-2 text-secondary"> <b>  {{ item.title }} </b> </p>
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>
<script>
import { ref }  from  'vue'
export default {
    setup() {
        const list = ref([
            {
                link : 'https://opensea.io/blog/learn/how-to-easily-setup-a-metamask-wallet/',
                url : 'https://blogmigration.kinsta.cloud/wp-content/uploads/2022/02/image-13.png',
                title : 'How to Easily Setup a MetaMask Wallet'
            },
            {
                link : 'https://opensea.io/blog/learn/how-to-fund-metamask-with-eth/',
                url : 'https://blogmigration.kinsta.cloud/wp-content/uploads/2022/02/76edde93ea6402d5818fbc03767aeda0.jpg',
                title : 'How to Fund MetaMask with ETH'
            },
            {
                link : 'https://opensea.io/blog/learn/how-to-find-an-nft-you-love/',
                url : 'https://blogmigration.kinsta.cloud/wp-content/uploads/2022/01/image-10.png',
                title : 'How to Find an NFT You Love'
            }
        ]);      
        
        return  { list } ;
    }
}
</script>
<style scoped>
    .setup {
        text-decoration: none ;
    }
</style>