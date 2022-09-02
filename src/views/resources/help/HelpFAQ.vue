<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12 p-5">
                <Faqs :faqs="faqs" />
            </div>
            <div class="py-5 float-end">
                <SocialLink :social_links="social_links" />
            </div>
        </div>  
    </div>
</template>
<script>
import SocialLink from '@/components/social/SocialLink.vue';
import Faqs from  '@/components/faq/Faqs.vue';

export default {
    name  : 'HelpFAQ',
    data() {
        return {
            faqs : [
                {
                    target : 'How can I contact OpenSea(s)23232',
                    title : '1How can I contact OpenSea?',
                    content : `You can buy ETH, the digital currency that fuels transactions on the Ethereum blockchain, from a digital currency exchange like Coinbase. You'll need ETH to "mint" an NFT, purchase an NFT, and for gas fees to complete transactions. Gas fees are a bit of a tricky concept, but we simplify the basics in our What are gas fees? help guide.
                    Now that you have ETH, let's get a crypto wallet.`
                },
                {
                    target : 'How can I contact Open',
                    title : '2How can I contact OpenSea?',
                    content : `You can buy ETH, the digital currency that fuels transactions on the Ethereum blockchain, from a digital currency exchange like Coinbase. You'll need ETH to "mint" an NFT, purchase an NFT, and for gas fees to complete transactions. Gas fees are a bit of a tricky concept, but we simplify the basics in our What are gas fees? help guide.
                    Now that you have ETH, let's get a crypto wallet.`
                },
                                {
                    target : 'How can I contact OpenSea?',
                    title : 'How can I contact OpenSea?',
                    content : `You can buy ETH, the digital currency that fuels transactions on the Ethereum blockchain, from a digital currency exchange like Coinbase. You'll need ETH to "mint" an NFT, purchase an NFT, and for gas fees to complete transactions. Gas fees are a bit of a tricky concept, but we simplify the basics in our What are gas fees? help guide.
                    Now that you have ETH, let's get a crypto wallet.`
                },
                                {
                    target : 'How can I contact nSea3232',
                    title : 'How can I contact OpenSea?',
                    content : `You can buy ETH, the digital currency that fuels transactions on the Ethereum blockchain, from a digital currency exchange like Coinbase. You'll need ETH to "mint" an NFT, purchase an NFT, and for gas fees to complete transactions. Gas fees are a bit of a tricky concept, but we simplify the basics in our What are gas fees? help guide.
                    Now that you have ETH, let's get a crypto wallet.`
                },
                                {
                    target : 'How can I contact OpenSea#',
                    title : 'How can I contact OpenSea?',
                    content : `You can buy ETH, the digital currency that fuels transactions on the Ethereum blockchain, from a digital currency exchange like Coinbase. You'll need ETH to "mint" an NFT, purchase an NFT, and for gas fees to complete transactions. Gas fees are a bit of a tricky concept, but we simplify the basics in our What are gas fees? help guide.
                    Now that you have ETH, let's get a crypto wallet.`
                },

            ],
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
    components : { SocialLink, Faqs }

}
</script>