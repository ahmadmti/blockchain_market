<template>
    <div>
        <div class="container">
            <div class="row py-5">
                <div class="col-md-6">
                    <h2>
                        Welcome to the world’s <br /> largest NFT marketplace.
                    </h2>
                    <p>
                        At OpenSea, we're excited about a brand new type of digital good often referred to as a non-fungible token, or NFT. NFTs have exciting new properties: they’re unique, provably scarce, liquid, and usable across multiple applications.
                    </p>
                    <p>
                        We’re proud to be the first and largest marketplace for user-owned digital goods, with everything you need to buy and sell them in one place. <a href="#" class="text-decoration-none">Learn more about us</a>
                    </p>
                </div>
                <div class="col-md-6">
                    <figure>
                        <img src="https://static.opensea.io/careers/partnerships/marketplace-illustration.svg" class="img-fluid" alt="marketplace-illustration">
                    </figure>
                </div>
            </div>
        </div>

        <div class="container">
            <h2 class="text-center">
                Why partner with OpenSea
            </h2>
            <p class="text-center">
                While we take pride in being the first and largest marketplace and in our robust feature <br />  set, we also help our partners succeed with the following...
            </p>

            <div class="row">
                <div class="col-md-4 text-center ">
                    <img src="https://static.opensea.io/about/icon-money.svg" class="my-2" height="30" width="30" alt="">
                    <h3>
                        Generate Revenue
                    </h3>
                    <p>
                        With millions in transactions since 2017, we’ll help you generate revenue on our platform ⁠— from direct sales to secondary sales
                    </p>
                </div>
                <div class="col-md-4 text-center ">
                    <img src="https://static.opensea.io/about/icon-money.svg" class="my-2" height="30" width="30" alt="">
                    <h3>
                        Reach Millions
                    </h3>
                    <p>
                        With over thousands of users and followers, we can help you reach a large audience of collectors
                    </p>
                </div>
                <div class="col-md-4 text-center ">
                    <img src="https://static.opensea.io/about/icon-money.svg" class="my-2" height="30" width="30" alt="">
                    <h3>
                        Spend Less
                    </h3>
                    <p>
                    Compared with other NFT marketplaces, we have lowest fees in the space allowing you to spend less with your created collection
                    </p>
                </div>
                <div class="col-md-4 text-center">
                    <img src="https://static.opensea.io/about/icon-money.svg" class="my-2" height="30" width="30" alt="">
                    <h3>
                        Reach Millions
                    </h3>
                    <p>
                        With over thousands of users and followers, we can help you reach a large audience of collectors
                    </p>
                </div>
                <div class="col-md-4 text-center ">
                    <img src="https://static.opensea.io/about/icon-money.svg" class="my-2" height="30" width="30" alt="">
                    <h3>
                        Spend Less
                    </h3>
                    <p>
                    Compared with other NFT marketplaces, we have lowest fees in the space allowing you to spend less with your created collection
                    </p>
                </div>
            </div>
        </div>
        <div class="container py-5">
            <h2 class="text-center">
                Who has partnered with us
            </h2>
            <p class="text-center">
                We've collaborated with high-profile organizations and celebrities and generated <br />  millions of dollars in revenue in the process.
            </p>            
            <CollectionGridList />
        </div>

        <div class="container">
            <Faqs :faqs="faqs" />         
        </div>

        <div class="container">
            <div class="row py-5">
                <div class="col-md-8 pt-5">
                    <p class="fs-1 text-secondary">
                        <i class="fa fa-quote-left" aria-hidden="true"></i>
                    </p>
                    <p class="w-50 fw-bold">
                        OpenSea is one of the most exciting, important companies in the world right now because it's the portal to the new digital economy. If you're interested in shaping a new business model for creators, this is the team to join.
                    </p>
                    <h4>
                        Katie Haun
                    </h4>
                    <p class="text-muted">
                        CEO and Founder, Haun Ventures
                    </p>
                </div>
                <div class="col-md-4">
                    <img src="https://static.opensea.io/careers/katie-haun.png" alt="" class="rounded img-fluid">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import CollectionGridList from '@/components/collection/CollectionGridList.vue';
import Faqs from '@/components/faq/Faqs.vue';


export default {
    name : "Partners",
    data() {
        return {
            faqs : [
                {
                    target : 'How can I contact OpenSea(s)23232',
                    title : 'How can I contact OpenSea?',
                    content : `You can buy ETH, the digital currency that fuels transactions on the Ethereum blockchain, from a digital currency exchange like Coinbase. You'll need ETH to "mint" an NFT, purchase an NFT, and for gas fees to complete transactions. Gas fees are a bit of a tricky concept, but we simplify the basics in our What are gas fees? help guide.
                    Now that you have ETH, let's get a crypto wallet.`
                },
                {
                    target : 'How can I contact Open',
                    title : 'How can I contact OpenSea?',
                    content : `You can buy ETH, the digital currency that fuels transactions on the Ethereum blockchain, from a digital currency exchange like Coinbase. You'll need ETH to "mint" an NFT, purchase an NFT, and for gas fees to complete transactions. Gas fees are a bit of a tricky concept, but we simplify the basics in our What are gas fees? help guide.
                    Now that you have ETH, let's get a crypto wallet.`
                },
                {
                    target : 'How can I contact OpenSea?',
                    title : 'How can I contact OpenSea?',
                    content : `You can buy ETH, the digital currency that fuels transactions on the Ethereum blockchain, from a digital currency exchange like Coinbase. You'll need ETH to "mint" an NFT, purchase an NFT, and for gas fees to complete transactions. Gas fees are a bit of a tricky concept, but we simplify the basics in our What are gas fees? help guide.
                    Now that you have ETH, let's get a crypto wallet.`
                }
            ],
        }
    },
    
    components : { CollectionGridList, Faqs }

}
</script>
<style scoped>
    .m-15 
    {
        margin-left: 15% ;
    }
</style>