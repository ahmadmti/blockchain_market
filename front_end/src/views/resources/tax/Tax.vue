<template>
    <div>
        <div class="banner-section-page">
            <div class="container-fluid">
                <div class="text-center pt-5">
                    <img src="https://opensea.io/static/images/cointracker/logos.webp" alt="" class="coins">
                </div>
                <h2 class="text-center">
                    NFT taxes, simplified.
                </h2>
                <br />
                <div class="text-center fs-6">
                    <p>
                        We've partnered with CoinTracker, a leading crypto tax offering, <br /> to help you navigate your NFT taxes.
                    </p>
                    <p>
                        Get started below to get free tax reports for up to 50 transactions <br /> in your first year and 10% off for everything else.
                    </p>

                    <button class="btn btn-primary jade-blue mb-5">
                        Get Started
                    </button>

                </div>
            </div>
        </div>
        <div class="py-5">
            <h2 class="text-center fw-bold">
                What OpenSea users get
            </h2>
            <div class="container">
                <div class="row">
                    
                    <div class="col-md-6 text-center" v-for="item in opensea_get" :key="item">
                        <p class="fw-bold py-3">
                            <span class="fs-4 p-4 section-bg-color text-blue rounded">
                                <i :class="item.icon" aria-hidden="true"></i>
                            </span>    
                        </p>
                        <p class="fw-bold">
                            {{ item.title }}
                        </p>
                        <p class="px-5">
                            {{ item.text }}
                        </p>
                    </div>
                </div>
            </div>
            <div class="container">
                <Faqs />         
            </div>
        </div>
    </div>
</template>
<script>
import Faqs from '@/components/faq/Faqs.vue';

export default {
    name : 'Tax',
    data() {
        return {
            opensea_get : [
                {
                    icon : 'fa fa-shopping-cart',
                    title : 'Free for up to 50 transactions',
                    text : 'Join CoinTracker to get free tax reports for up to 50 transactions your first year.'
                },
                {
                    icon : 'fa fa-thumbs-o-up',
                    title : 'Discounted for power users',
                    text : 'Get 10% off all CoinTracker premium services.'
                },
                {
                    icon : 'fa fa-credit-card-alt',
                    title : 'Simple and seamless filing',
                    text : 'With flexible filing options, CoinTracker makes managing your NFT taxes easy.'
                },
                {
                    icon : 'fa fa-lock',
                    title : 'Trusted and secure platform',
                    text : 'CoinTracker has over 500,000 users and tracks over $20 billion in crypto assets.'
                },
            ]
        }
    },
    components : { Faqs }
}
</script>
<style scoped>
    .coins {
        width: 30%;
    }
    .banner-section-page {
        background-image: url('https://opensea.io/static/images/cointracker/background.png');
        background-size:cover;
    }
</style>