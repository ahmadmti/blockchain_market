<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-3" v-for="item in list" :key="item"> 
                    <div class="card border-0 section-bg-color">
                        <figure>
                            <img :src="item.icon" :alt="item.title" class="rounded mx-auto d-block" />
                        </figure>
                        <h5 class="card-title text-center">{{  item.title }}</h5>
                        <div class="card-body text-center" v-html="item.text">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { ref } from 'vue'

    export default {
        setup() {
            const list = ref([
                {
                    icon : 'https://opensea.io/static/images/icons/wallet.svg',
                    title : 'Set up your wallet',
                    text : 'Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner. Learn about the <a href="www.google.com" class="text-blue"> wallets we support.</a>'
                },
                {
                    icon : 'https://opensea.io/static/images/icons/collection.svg',
                    title : 'Create your collection',
                    text : 'Click My Collections and set up your collection. Add social links, a description, profile & banner images, and set a secondary sales fee.'
                },
                {
                    icon : 'https://opensea.io/static/images/icons/nft.svg',
                    title : 'Set up your wallet',
                    text : 'Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner. Learn about the wallets we support.'
                },
                {
                    icon : 'https://opensea.io/static/images/icons/sale.svg',
                    title : 'List them for sale',
                    text : 'Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs, and we help you sell them!'
                },
            ]);

            return { list } ;

        }
    }
</script>