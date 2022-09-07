<template>
    <div>
        <div class="container">
           <div class="row">
                <div class="col-md-12">
                    <h2 class="text-center py-5"> {{ articles.title }}</h2>
                    <p v-html="articles.content" class="p-5 pt-0"></p>
                    <div class="py-5 float-end">
                        <SocialLink :social_links="social_links" />
                    </div>
                </div>
           </div>
        </div>
    </div>
</template>
<script>
import SocialLink from '@/components/social/SocialLink.vue';
export default {
    name : "Article",
    data() {
        return {
            articles : 
            {
                title : 'How can I contact OpenSea?',
                content : `You can buy ETH, the digital currency that fuels transactions on the Ethereum blockchain, from a digital currency exchange like Coinbase. You'll need ETH to "mint" an NFT, purchase an NFT, and for gas fees to complete transactions. Gas fees are a bit of a tricky concept, but we simplify the basics in our What are gas fees? help guide.
                Now that you have ETH, let's get a crypto wallet.`
            },
            social_links: [
                {
                    link: "google.com",
                    icon: "fa fa-twitter"
                },
                {
                    link: "google.com",
                    icon: "fa fa-facebook"
                },
                {
                    link: "google.com",
                    icon: "fa fa-instagram"
                }
            ],
            
        }
    },
    components : { SocialLink }
}
</script>